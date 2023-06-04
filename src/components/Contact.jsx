import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailMessage = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        'service_wdmb02p',
        'template_ug8hzzd',
        emailMessage,
        'RMLWiWkeKJZYCC_ZV'
      )
      .then(() => {
        setName('');
        setEmail('');
        setMessage('');
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Handle error case, show error message to the user, etc.
      });
  };return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form onSubmit={handleSubmit} method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - kartikjchourasiya001@gmail.com</p>
            </div>
            <input type="text"
              value={name}
              onChange={handleNameChange}
              required className='bg-[#ccd6f6] p-2'  placeholder='Name' name='name' />
            <input type="email"
              value={email}
              onChange={handleEmailChange}
              required className='my-4 p-2 bg-[#ccd6f6]' placeholder='Email' name='email' />
            <textarea value={message}
              onChange={handleMessageChange}
              required className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button type="submit" className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact