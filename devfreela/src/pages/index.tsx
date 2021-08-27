import Head from 'next/head';
import Image from 'next/image';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import { Button, Typography, Container } from '@material-ui/core';
import 
  { 
    FormElementsContainer, 
    ProfissionaisPaper, 
    ProfissionaisContainer 
  } from 'ui/styles/pages/index.style';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
        title={'Conheça os freelancers'}
        subtitle={'Preencha seu endereço e veja todos os freelancers da sua localidade'}
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask 
            mask={'99.999-999'}
            label={'Digite seu CEP: '} 
            fullWidth 
            variant={'outlined'}
          />
          <Typography color={'error'}>CEP inválido</Typography>
          <Button 
            variant={'contained'} 
            color={'secondary'} 
            sx={{ width: '220px'}}
          >
          Buscar
          </Button>
        </FormElementsContainer>
      
        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation 
              name={'Wanderson Timóteo'}
              picture={'https://github.com/Wanderson-A-Timoteo.png'}
              rating={4}
              description={'Cuiabá-MT'}
            />
            <UserInformation 
              name={'Wanderson Timóteo'}
              picture={'https://github.com/Wanderson-A-Timoteo.png'}
              rating={4}
              description={'Cuiabá-MT'}
            />
            <UserInformation 
              name={'Wanderson Timóteo'}
              picture={'https://github.com/Wanderson-A-Timoteo.png'}
              rating={4}
              description={'Cuiabá-MT'}
            />
            <UserInformation 
              name={'Wanderson Timóteo'}
              picture={'https://github.com/Wanderson-A-Timoteo.png'}
              rating={4}
              description={'Cuiabá-MT'}
            />
            <UserInformation 
              name={'Wanderson Timóteo'}
              picture={'https://github.com/Wanderson-A-Timoteo.png'}
              rating={4}
              description={'Cuiabá-MT'}
            />
            <UserInformation 
              name={'Wanderson Timóteo'}
              picture={'https://github.com/Wanderson-A-Timoteo.png'}
              rating={4}
              description={'Cuiabá-MT'}
            />
            <UserInformation 
              name={'Wanderson Timóteo'}
              picture={'https://github.com/Wanderson-A-Timoteo.png'}
              rating={4}
              description={'Cuiabá-MT'}
            />
            <UserInformation 
              name={'Wanderson Timóteo'}
              picture={'https://github.com/Wanderson-A-Timoteo.png'}
              rating={4}
              description={'Cuiabá-MT'}
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>      
    </div>
  );
}
