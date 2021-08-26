import Head from 'next/head';
import Image from 'next/image';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
    </div>
  );
}
