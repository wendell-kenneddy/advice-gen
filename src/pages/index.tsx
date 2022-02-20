import Head from 'next/head';

import { useQuery } from 'react-query';

import { fetchAdvice } from '../lib/fetchAdvice';

import { AdviceTitle } from '../components/AdviceTitle';
import { DiceButton } from '../components/DiceButton';
import { Quote } from '../components/Quote';
import { Separator } from '../components/Separator';

export default function Home() {
  const { data, isLoading, isFetching, refetch } = useQuery(
    'advice',
    fetchAdvice,
    {
      refetchOnWindowFocus: false
    }
  );

  return (
    <>
      <Head>
        <meta name="author" content="Wendell Kenneddy" />
        <meta name="description" content="An advice generator app." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Advice Gen" />
        <meta property="og:site_name" content="Advice Gen" />
        <meta property="og:description" content="An advice generator app." />
        {/* <meta property="og:url" content="" /> */}
        <meta property="og:locale" content="en" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="Advice Gen" />
        <meta
          property="twitter:description"
          content="An advice generator app."
        />
        {/* <meta property="twitter:url" content="" /> */}
        <title>Advice Gen</title>
        {/* <link rel="canonical" href="" /> */}
      </Head>

      <main
        className={`
      w-[90vw]
      max-w-[500px]
      bg-grayish-blue
      rounded-xl
      p-5
      pt-8
      pb-16
      relative
      flex
      flex-col
      items-center
      justify-center
      gap-6
      sm:px-14
    `}
      >
        <h1 className="sr-only">Advice generator</h1>

        <AdviceTitle id={isFetching || isLoading ? 0 : (data?.id as number)} />

        <Quote>
          {isFetching || isFetching
            ? 'Loading advice...'
            : (data?.advice as string)}
        </Quote>

        <Separator />

        <DiceButton
          onClick={() => refetch()}
          isLoading={isLoading || isFetching}
        />
      </main>
    </>
  );
}
