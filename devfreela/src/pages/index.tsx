import Head from 'next/head';
import Image from 'next/image';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
        title={'Conheça os freelancers'}
        subtitle={'Preencha seu endereço e veja todos os freelancers da sua localidade'}
      />
    </div>
  );
}
