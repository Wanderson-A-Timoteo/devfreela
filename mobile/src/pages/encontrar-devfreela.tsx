import React, { useState } from 'react';
import { Text, View } from 'react-native';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import TextInput from 'ui/components/inputs/TextInput/TextInput';
import { TextInputMask } from 'react-native-masked-text';
import Button from 'ui/components/inputs/Button/Button';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';

const EncontrarDevfreela: React.FC = () => {
  const [cep, setCep] = useState(' ');
  return (
    <View>
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />
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
      <Button mode={'contained'} style={{ margin: 32}}>
        Buscar
      </Button>

      <UserInformation 
        name={'Wanderson A. Timóteo'}
        rating={4}
        picture={'https://github.com/Wanderson-A-Timoteo.png'}
        description={'Cuiabá'}
      />
    </View>
  );
};

export default EncontrarDevfreela;