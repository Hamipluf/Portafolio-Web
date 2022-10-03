import Footer from "../component/Footer"
import react from "react"
import { useState } from 'react'
import axios from "axios"
import Head from "next/head"
import Navbar_responsive from "../component/Navbar-responsive"
import { motion } from "framer-motion"



const Contactme = () => {

  
  const [status, setStatus] = useState('iddle');

  const Userdata = async ev => {
    ev.preventDefault()
    setStatus('sending')


    let userdata = {
      asunto: ev.target.asunto.value,
      name: ev.target.name.value,
      mail: ev.target.email.value,
      message: ev.target.message.value
    }


    axios.post('/api/email', {
      body: userdata
    }).then((onfulfilled) => {
      console.log('Response succeeded!')
      console.log(onfulfilled);
      setStatus('sent')
    },
      (onrejected) => {
        console.log('Response failed with err -> : ');
        console.log(onrejected);
        setStatus('error')
      }
    ).catch((onerror) => {
      console.log('Response failed with err -> : ');
      console.log(onerror);
      setStatus('error')
    });
  }

  return (
    <>
      <Head>
        <title>
          Portafolio Web - Contact Me
        </title>
      </Head>

      <Navbar_responsive />



      <motion.div
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{ once: true }}
        className="min-h-screen pt-20 bg-gradient-to-b from-obscure to-dark hero">

        {/* CARD HERO */}
        <div className="flex-col pb-20 hero-content lg:flex-row-reverse">


          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1,
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01]

              },
              scale: {
                type: "spring",
              }
            }} className="text-left">

            <h1 className="text-4xl font-bold lg:text-6xl"><span className="text-infor"> Contact me</span> to work together!</h1>
            <p className="py-6 lg:text-xl inconsolata text-md inconsolota">I´ll be glad to answer your questions.</p>
          </motion.div>



          {/* FORM */}
          <form onSubmit={(ev) => Userdata(ev)} className="flex-shrink-0 w-full max-w-sm shadow-2xl lg:max-w-2xl lg:bg-obscure card sm:bg-gradient-to-b from-dark to-obscure">
            <div className=" card-body">
              <div className="form-control">
                <label htmlFor="name" className="label">
                  <span className="label-text text-ligth franklin">What is your name?</span>
                </label>
                <input type="text" name="name" id="name" placeholder="Ramiro" required className="max-w-sm lg:max-w-5xl lg:border lg:border-infor lg:focus:border-obscure input input-bordered input-lg focus:border-infor" />
              </div>
              <div className="form-control">
                <label htmlFor="email" className="label">
                  <span className="label-text text-ligth franklin">What is your Email?</span></label>
                <input type="text" name="email" id="email" placeholder="example@hotmail.com" required className="max-w-sm lg:max-w-5xl lg:border lg:border-infor lg:focus:border-obscure input input-bordered focus:border-infor input-lg" />
              </div>
              <div className="form-control">
                <label htmlFor="subjet" className="label">
                  <span className="label-text text-ligth franklin">Wath is your Subjet?</span></label>
                <input id="asunto" name="asunto" type="text" placeholder="Subjet" className="max-w-sm lg:max-w-5xl lg:border lg:border-infor lg:focus:border-obscure input input-bordered input-lg focus:border-infor" />
              </div>
              <div className="form-control">
                <label htmlFor="message" className="label">
                  <span className="label-text text-ligth franklin">Wath is your mesagge?</span></label>
                <textarea name="message" id="message" className="max-w-sm mt-5 lg:max-w-5xl border-secondary textarea textarea-ghost focus:border-infor" placeholder="Message"></textarea>
              </div>
              <div className="mt-6 form-control">
                <button type="submit" disabled={status === 'sending'} id="send" className="btn bg-infor text-dark hover:bg-dark hover:text-infor">Send</button>
              </div>
              {/* MENSAJE ENVIADO CORRECTAMENTE */}
              {status === 'sent' && (
                <div className="shadow-lg opacity-80 alert bg-infor text-dark">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Thank you for contacting me!</span>
                  </div>
                </div>)}
              {/* ERROR MENSAJE */}
              {status === 'error' && (
                <div className="shadow-lg alert alert-error">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Error! Sending message, please try again.</span>
                  </div>
                </div>)}
            </div>


          </form>
        </div>
      </motion.div>

      <Footer />

    </>
  )
}
export default Contactme