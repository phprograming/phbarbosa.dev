import React from 'react';
import Head from 'next/head';

const PageHead = () => {
  return (
    <Head>
      <title>Henrique Barbosa - Fullstack Developer</title>
      <link rel='manifest' href='/manifest.json' />
      <meta name='msapplication-TileColor' content='#ffffff' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon.png' />
      <meta name='theme-color' content='#ffffff' />
    </Head>
  )
}
export default PageHead;
