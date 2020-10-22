import React from 'react'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'

const ContactMe = () => {
  return (
    <div className='mx-8 px-8 relative border-orange border rounded md:mx-0 md:px-16 pb-4 pt-10 mt-6'>
      <h3 className='absolute bg-orange text-white py-2 px-6 top-0 -mt-5 text-2xl font-bold uppercase'>Contact me</h3>
      <p className='text-center md:text-left'>
        <a target="_blank" href='https://www.linkedin.com/in/paulo-henrique-barbosa/' title='LinkedIn Profile'>
          <FaLinkedin className='text-5xl md:text-6xl inline-block md:mr-6' />
        </a>
        <a target="_blank" href='https://github.com/phprograming' title='GitHub Profile'>
          <FaGithub className='text-5xl md:text-6xl inline-block md:mr-6' />
        </a>
        <a target="_blank" href='http://waapp.me/5575988914101' title='WhatsApp Profile'>
          <FaWhatsapp className='text-5xl md:text-6xl inline-block md:mr-6' />
        </a>
        <a target="_blank" href='https://app.rocketseat.com.br/me/phbarbosa' title='Rocketseat Profile'>
          <img src="../../public/logoRocketseat.png" className='text-5xl md:text-6xl inline-block md:mr-6' />
        </a>
      </p>
    </div>
  )
}
export default ContactMe
