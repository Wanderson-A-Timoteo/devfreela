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

const EncontrarDevfreela: React.FC = () => {
  const { colors } = useTheme();
  const [cep, setCep] = useState(' ');
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
        <ErrorText>CEP não encontrado!</ErrorText>

        <Button mode={'contained'} style={{ margin: 32}} color={colors.accent}>
          Buscar
        </Button>
      </FormContainer>
      
      <ResponseContainer>
        <UserInformation 
          name={'Wanderson A. Timóteo'}
          rating={4}
          picture={'https://github.com/Wanderson-A-Timoteo.png'}
          description={'Cuiabá'}
          darker
        />
        <TextContainer>
          ...e mais x profissionais atendem ao seu endereço.
        </TextContainer>

        <Button mode={'contained'} color={colors.accent}>
          Contratar um profissional
        </Button>

        <TextContainer>
          Ainda não temos nnhum freelancer disponível em sua região.
        </TextContainer>
      </ResponseContainer>
    </ScrollView>
  );
};

export default EncontrarDevfreela;