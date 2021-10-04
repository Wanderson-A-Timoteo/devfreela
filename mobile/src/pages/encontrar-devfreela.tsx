import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { Text, ScrollView } from 'react-native';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import TextInput from 'ui/components/inputs/TextInput/TextInput';
import { TextInputMask } from 'react-native-masked-text';
import Button from 'ui/components/inputs/Button/Button';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import {
  FormContainer,
  TextContainer,
  ErrorText,
  ResponseContainer,
} from '@styles/pages/encontrar-devfreela.styled';
import useIndex from 'data/hooks/pages/useIndex.page';

const EncontrarDevfreela: React.FC = () => {
  const { colors } = useTheme();
  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    devfreelas,
    buscaFeita,
    carregando,
    devfreelasRestantes,
  } = useIndex();
  return (
    <ScrollView>
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />

      <FormContainer>
        <TextInputMask
          value={cep}
          onChangeText={setCep}
          type={'custom'}
          options={{
            mask: '99.999-999',
          }}
          customTextInput={TextInput}
          customTextInputProps={{
            label: 'Digite seu CEP: ',
          }}
        />
        {erro ? <ErrorText>{erro}</ErrorText> : null}

        <Button 
          mode={'contained'} 
          style={{ margin: 32}} 
          color={colors.accent}
          disabled={!cepValido || carregando}
          onPress={() => buscarProfissionais(cep)}
          loading={carregando}
        >
          Buscar
        </Button>
      </FormContainer>
      
      {buscaFeita && (devfreelas.length > 0 ? (
        <ResponseContainer>
          {devfreelas.map((item, index) => (
            <UserInformation
              key={index}
              name={item.nome_completo}
              rating={item.reputacao}
              picture={item.foto_usuario || ' '}
              description={item.cidade}
              darker={index % 2 === 1}
            />
          ))}
          
          {devfreelasRestantes > 0 && (
            <TextContainer>
              ...e mais {devfreelasRestantes} {' '}
              {devfreelasRestantes > 1 
                ? 'profissionais atendem' 
                : 'profissional atende'} {' '}
              ao seu endereço.
            </TextContainer>
          )}

          <Button mode={'contained'} color={colors.accent}>
            Contratar um profissional
          </Button>
      </ResponseContainer>
      ) : 
      
      (<TextContainer>
          Ainda não temos nenhum freelancer disponível em sua região.
        </TextContainer>) )}
    </ScrollView>
  );
};

export default EncontrarDevfreela;