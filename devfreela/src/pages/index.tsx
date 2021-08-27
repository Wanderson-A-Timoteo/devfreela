import Head from 'next/head';
import Image from 'next/image';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
        title={'Conheça os freelancers'}
        subtitle={'Preencha seu endereço e veja todos os freelancers da sua localidade'}
      />

      <UserInformation 
        name={'Wanderson Timóteo'}
        picture={'https://github.com/Wanderson-A-Timoteo.png'}
        rating={4}
        description={'Cuiabá-MT'}
      />
    </div>
  );
}
