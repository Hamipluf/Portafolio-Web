import css from './img/css-3.png'
import js from './img/js.png'
import html from './img/html5.png'
import react from './img/react.png'
import github from './img/github.png'
import git from './img/git.png'
import tailwind from './img/Tailwind.png'
// import devops from './img/DevOps News 1.png'
// import appproduct from './img/appproduct.png'
import Navbar_responsive from '../component/Navbar-responsive'
import Footer from '../component/Footer'
import Head from 'next/head'
import { motion } from "framer-motion"
import Image from "next/image"



function Briefcase() {

    return (
        <>
            <Head>
                <title>
                    Portafolio Web - Briefcase
                </title>
            </Head>
            <Navbar_responsive />
            <section className='bg-gradient-to-b from-obscure to-dark'>
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
                    viewport={{ once: true }}>


                    <section className="lg:grid lg:gap-5 lg:grid-cols-2 lg:w-full">
                        {/*SLILLS*/}
                        <div>
                            <div className="pt-32 pl-10">
                                <h2 className='text-4xl font-extrabold lg:text-5xl franklin text-infor'> <span className='text-2xl text text-ligth'>{`//`}</span> Skills</h2>
                            </div>

                            <div className='w-11/12 pt-16 m-auto text-justify'>
                                <p className='text-xs font-medium leading-relaxed text-white lg:text-xl franklin'>Lenguajes de front-end con los que trabajo.</p>
                            </div>

                            <div className="grid grid-cols-2 gap-5 pt-10 gap-y-10 justify-items-center">
                                <div className="duration-75 active:scale-125 lg:hover:scale-125">
                                    <Image
                                        width={90}
                                        height={90}
                                        priority
                                        src={css}
                                        alt="" />
                                </div>
                                <div className="duration-75 active:scale-125 lg:hover:scale-125">
                                    <Image
                                        width={90}
                                        height={90}
                                        priority
                                        src={js}
                                        alt="" />
                                </div>
                                <div className="duration-75 active:scale-125 lg:hover:scale-125">
                                    <Image
                                        width={90}
                                        height={90}
                                        priority
                                        src={html
                                        } alt="" />
                                </div>
                                <div className="duration-75 active:scale-125 lg:hover:scale-125">
                                    <Image
                                        width={90}
                                        height={90}
                                        priority
                                        src={react}
                                        alt="" />
                                </div>
                            </div>
                        </div>
                        {/*TOOLS*/}
                        <div>
                            <div className="pl-10 font-extrabold lg:pt-32 pt-44">
                                <h2 className='text-4xl lg:text-5xl franklin text-infor'><span className='text-2xl text text-ligth'>{`//`}</span>Tools</h2>
                            </div>

                            <div className='w-11/12 pt-16 m-auto text-justify'>
                                <div><p className='text-xs font-medium text-white lg:text-xl franklin'>Tecnologias de desarrollo </p></div>
                            </div>

                            <div className="grid grid-cols-3 gap-5 p-5 pt-10 lg:pb-20 justify-items-center">
                                <div
                                    className="duration-75 active:scale-125 lg:hover:scale-125">
                                    <Image
                                        width={90}
                                        height={90}
                                        priority
                                        src={github}
                                        alt="" />
                                </div>
                                <div
                                    className="duration-75 active:scale-125 lg:hover:scale-125">
                                    <Image
                                        width={90}
                                        height={90}
                                        priority
                                        src={git}
                                        alt="" />
                                </div>
                                <div
                                    className="duration-75 active:scale-125 lg:hover:scale-125">
                                    <Image
                                        width={90}
                                        height={90}
                                        priority
                                        src={tailwind}
                                        alt="" />
                                </div>
                            </div>

                        </div>
                    </section>
                </motion.div>
            </section>

            {/* FOOTER */}

            <Footer />
        </>
    )
}

export default Briefcase;