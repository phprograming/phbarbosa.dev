import React from 'react';
import { SiHtml5, SiCss3, SiPhp, SiJson, SiJavascript, SiJquery, SiReact, SiNodeDotJs, SiNextDotJs, SiBootstrap, SiMysql, SiOracle, SiFirebase, SiGit, SiBitbucket, SiJira } from 'react-icons/si';

const Technology = () => {
  return (
    <div>
      <h3 className='text-4xl font-bold text-center uppercase mt-10 mb-5 text-blue-500'>Technology</h3>
      <div className='bg-white rounded-lg shadow-lg py-12 px-8 mx-8 md:mx-0 md:px-16'>
        <SiHtml5 title='Html5' className='text-5xl md:text-6xl inline-block md:mr-6' />
        <SiCss3 title='Css3' className='text-5xl md:text-6xl inline-block md:mr-6' />
        <SiPhp title='PHP' className='text-5xl md:text-6xl inline-block md:mr-6' />
        <SiJson title='Json' className='text-5xl md:text-6xl inline-block md:mr-6' />
        <SiJavascript title='JavaScript' className='text-5xl md:text-6xl inline-block md:mr-6' />
        <SiJquery title='Jquery' className='text-5xl md:text-6xl inline-block md:mr-6' />
        <SiReact title='ReactJS' className='text-5xl md:text-6xl inline-block md:mr-6' />
        <SiNodeDotJs title='NodeJS' className='text-5xl md:text-6xl inline-block md:mr-6' />
        <SiNextDotJs title='NextJS' className='text-5xl md:text-6xl inline-block md:mr-6' />
        <SiBootstrap title='Bootstrap' className='text-5xl md:text-6xl inline-block md:mr-6' />
        <SiMysql title='MySql' className='text-5xl md:text-6xl inline-block md:mr-6' />
        <SiOracle title='Oracle' className='text-5xl md:text-6xl inline-block md:mr-6' />
        <SiFirebase title='Firebase' className='text-5xl md:text-6xl inline-block md:mr-6' />
        <SiGit title='Git' className='text-5xl md:text-6xl inline-block md:mr-6' />
        <SiJira title='Jira' className='text-5xl md:text-6xl inline-block md:mr-6' />
        <SiBitbucket title='Bitbucket' className='text-5xl md:text-6xl inline-block md:mr-6' />
      </div>
    </div>
  )
}
export default Technology;