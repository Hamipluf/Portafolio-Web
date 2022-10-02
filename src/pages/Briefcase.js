import css from './img/css-3.png'
import js from './img/js.png'
import html from './img/html5.png'
import react from './img/react.png'
import github from './img/github.png'
import git from './img/git.png'
import tailwind from './img/Tailwind.png'
import npm from './img/npm.png'
import framer from './img/framer.png'
import next from './img/next.png'
import bootstrap from './img/bootstrap.png'
import vercel from './img/vercel.png'
import portafolio from './img/portafolio.png'
import devops from './img/DevOps News 1.png'
import appproduct from './img/appproduct.png'
import Navbar_responsive from '../component/Navbar-responsive'
import Footer from '../component/Footer'
import Head from 'next/head'
import { motion } from "framer-motion"
import Image from "next/image"



function briefcase() {

    return (
        <>
            <Head>
                <title>
                    Portafolio Web - Briefcase
                </title>
            </Head>
            <Navbar_responsive />
            <section className='bg-gradient-to-b w-full from-obscure to-dark'>
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
                    className="pb-20">


                    <section className="lg:grid lg:justify-items-center lg:p-20 lg:pb-10 lg:gap-5 lg:grid-cols-3 lg:w-full">
                        {/*SLILLS*/}
                        <motion.div
                            initial={{
                                x: -200,
                                opacity: 0
                            }}
                            transition={{
                                delay: 1,
                                default: {
                                    duration: 0.8,
                                    ease: 'easeInOut'

                                },
                            }}

                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                            viewport={{ once: true }}
                            className="sm-m:w-full"
                        >
                            <div className="pt-32 text-center">
                                <h2 className='text-4xl font-extrabold lg:text-5xl franklin text-infor'> <span className='text-2xl text lg:hidden text-ligth'>{`//`}</span> Skills</h2>
                            </div>

                            <div className='w-11/12 pt-16 m-auto text-center'>
                                <p className='text-md font-thin leading-relaxed text-white lg:text-lg franklin'>Development languages I work with.</p>
                            </div>

                            <div className="grid grid-cols-2 gap-5 pt-10 gap-y-10 justify-items-center">
                                <div className="duration-75 active:scale-125 lg:hover:scale-125">
                                    <Image
                                        width={65}
                                        height={70}
                                        priority
                                        src={css}
                                        alt="logo diseñado por josefina ritter de css" />
                                </div>
                                <div className="duration-75 active:scale-125 lg:hover:scale-125">
                                    <Image
                                        width={65}
                                        height={70}
                                        priority
                                        src={js}
                                        alt="logo diseñado por josefina ritter de javascript" />
                                </div>
                                <div className="duration-75 active:scale-125 lg:hover:scale-125">
                                    <Image
                                        width={65}
                                        height={70}
                                        priority
                                        src={html}
                                        alt="logo diseñado por josefina ritter de html" />
                                </div>

                            </div>
                        </motion.div>

                        <div className='mt-32 sm-m:hidden'> <span className='text-4xl font-medium text-dark'>{`//`}</span></div>

                        {/*TOOLS*/}
                        <motion.div
                            initial={{
                                x: 200,
                                opacity: 0
                            }}
                            transition={{
                                delay: 1,
                                default: {
                                    duration: 0.8,
                                    ease: 'easeInOut'

                                },
                            }}

                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                            viewport={{ once: true }}
                            className="sm-m:w-full">
                            <div className="lg:pt-32 pt-44">
                                <h2 className='text-4xl text-center inconsolata font-extrabold lg:text-5xl text-infor'><span className='text-2xl text lg:hidden text-ligth'>{`//`}</span> Tools</h2>
                            </div>

                            <div className='pt-16 m-auto text-center'>
                                <div><p className='font-thin text-white text-md franklin'>Development tools. </p></div>
                            </div>

                            <div className="grid grid-cols-3 gap-10 p-5 pt-10 lg:pb-20 justify-items-center">
                                <div
                                    className="duration-75 active:scale-125 lg:hover:scale-125">
                                    <Image
                                        width={120}
                                        height={120}
                                        priority
                                        src={github}
                                        alt="logo diseñado por josefina ritter de github" />
                                </div>
                                <div
                                    className="duration-75 active:scale-125 lg:hover:scale-125">
                                    <Image
                                        width={101}
                                        height={101}
                                        priority
                                        src={git}
                                        alt="logo diseñado por josefina ritter de git" />
                                </div>
                                <div
                                    className="duration-75 active:scale-125 lg:hover:scale-125">
                                    <Image
                                        width={103}
                                        height={103}
                                        priority
                                        src={tailwind}
                                        alt="logo diseñado por josefina ritter de tailwind" />
                                </div>
                                <div
                                    className="duration-75 mt-7 active:scale-125 lg:hover:scale-125">
                                    <Image
                                        width={126}
                                        height={49}
                                        priority
                                        src={npm}
                                        alt="logo diseñado por josefina ritter de npm" />
                                </div>
                                <div className="duration-75 active:scale-125 lg:hover:scale-125">
                                    <Image
                                        width={107}
                                        height={97.74}
                                        priority
                                        src={react}
                                        alt="logo diseñado por josefina ritter de react" />
                                </div>
                                <div className="duration-75 active:scale-125 lg:hover:scale-125">
                                    <Image
                                        width={60}
                                        height={90}
                                        priority
                                        src={framer}
                                        alt="logo diseñado por josefina ritter de framer" />
                                </div>
                                <div className="duration-75 active:scale-125 lg:hover:scale-125">
                                    <Image
                                        width={101}
                                        height={81}
                                        priority
                                        src={bootstrap}
                                        alt="logo diseñado por josefina ritter de bootstrap" />
                                </div>
                                <div className="duration-75 active:scale-125 lg:hover:scale-125">
                                    <Image
                                        width={91}
                                        height={71}
                                        priority
                                        src={vercel}
                                        alt="logo diseñado por josefina ritter de vercel" />
                                </div>
                                <div className="duration-75 active:scale-125 lg:hover:scale-125">
                                    <Image
                                        width={88}
                                        height={88}
                                        priority
                                        src={next}
                                        alt="logo diseñado por josefina ritter de next" />
                                </div>
                            </div>

                        </motion.div>
                    </section>
                </motion.div>
            </section>
            {/* PROYECTOS */}
            <section className='bg-dark font-black franklin'>
                <div>
                    <h2 className="lg:pl-16 text-3xl sm-m:text-center lg:text-5xl text-white franklin">Check out<span className="text-infor"> my proyects</span></h2>
                </div>
                <motion.div 
                initial={{
                    x: -100,
                    opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                viewport={{ once: true }}
                className=' bg-gradient-to-b from-dark to-obscure grid w-full grid-cols-2 gap-2 p-2 pt-20 lg:gap-5 pb-16 justify-items-center'>
                    <div className='border-2 border-infor'>
                        {/* OPEN MODAL */}
                        <label htmlFor="my-modal" className=" cursor-pointer modal-button">
                            <Image
                                width={370}
                                height={200}
                                src={appproduct}
                            />
                        </label>
                        {/* BODY MODAL */}
                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                        <div className="text-white modal">
                            <div className="modal-box bg-gradient-to-b from-dark to-obscure ">
                                <label htmlFor="my-modal" className="absolute btn btn-sm btn-circle right-2 top-2 bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor">✕</label>
                                <h3 className="text-lg font-bold text-infor ">App Product {`/>`}</h3>
                                <p className="py-4">Product listing application, you can place a product with price and date of production.
                                    It is a simple CRUD made with Bootstrap and object oriented programming (OOP).<br />
                                    <span> Click on the button to see the app</span>
                                    <hr className='my-3' />
                                    Development:</p>
                                <div className='grid grid-cols-3 pb-2'>
                                    <div>
                                        <Image
                                            width={50}
                                            height={50}
                                            priority
                                            src={html}
                                            alt="logo diseñado por josefina ritter de html" />
                                    </div>
                                    <div>
                                        <Image
                                            width={50}
                                            height={50}
                                            priority
                                            src={css}
                                            alt="logo diseñado por josefina ritter de css" />
                                    </div>
                                    <div>
                                        <Image
                                            width={50}
                                            height={50}
                                            priority
                                            src={js}
                                            alt="logo diseñado por josefina ritter de javascript" />
                                    </div>
                                </div>
                                <div className='border-2 rounded-md border-infor'>
                                    <Image
                                        src={appproduct}
                                        width={360}
                                        height={190}
                                    />
                                </div>
                                <div className="modal-action">
                                    <label htmlFor="my-modal" className="btn bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor">GO!</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* MODAL-2 */}
                    <div className='border-2 border-solid border-infor '>
                        {/* OPEN MODAL-2 */}
                        <label htmlFor="my-modal-2" className=" cursor-pointer modal-button">
                            <Image
                                width={370}
                                height={200}
                                src={devops}
                            />
                        </label>
                        {/* BODY MODAL-2 */}
                        <input type="checkbox" id="my-modal-2" className="modal-toggle" />
                        <div className="text-white modal">
                            <div className="modal-box bg-gradient-to-b from-dark to-obscure ">
                                <label htmlFor="my-modal-2" className="absolute btn btn-sm btn-circle right-2 top-2 bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor">✕</label>
                                <h3 className="text-lg font-bold text-infor "> DevOp NEWS {`/>`}</h3>
                                <p className="py-4">Is a simple template of a development news page, which is made with native code without CDN or libraries.<br />
                                    <span> Click on the button to see the site</span>
                                    <hr className='my-3' />
                                    Development:</p>
                                <div className='grid grid-cols-3 pb-2'>
                                    <div>
                                        <Image
                                            width={50}
                                            height={50}
                                            priority
                                            src={html}
                                            alt="logo diseñado por josefina ritter de html" />
                                    </div>
                                    <div>
                                        <Image
                                            width={50}
                                            height={50}
                                            priority
                                            src={css}
                                            alt="logo diseñado por josefina ritter de css" />
                                    </div>
                                    <div>
                                        <Image
                                            width={50}
                                            height={50}
                                            priority
                                            src={js}
                                            alt="logo diseñado por josefina ritter de javascript" />
                                    </div>
                                </div>
                                <div className='border-2 rounded-md border-infor'>
                                    <Image
                                        src={devops}
                                        width={360}
                                        height={190}
                                    />
                                </div>
                                <div className="modal-action">
                                    <label htmlFor="my-modal" className="btn bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor">GO!</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* MODAL-3 */}
                    <div className='col-span-2 border-2 border-solid border-infor '>
                        {/* OPEN MODAL-3 */}
                        <label htmlFor="my-modal-3" className="cursor-pointer modal-button">
                            <Image
                                width={370}
                                height={200}
                                src={portafolio}
                                className="btn"
                            />
                        </label>
                        {/* BODY MODAL-3 */}
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="text-white modal">
                            <div className="modal-box bg-gradient-to-b from-dark to-obscure ">
                                <label htmlFor="my-modal-3" className="absolute btn btn-sm btn-circle right-2 top-2 bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor">✕</label>
                                <h3 className="text-lg font-bold text-infor "> Portafolio Web {`/>`}</h3>
                                <p className="py-4">Personal website, an application that is developed mainly in Next.js, which is integrated with the sendinblue API, in it I use Framer-Motion for the animations and Tailwind for the layout.<br />
                                    <span> Click on the button to see the site</span>
                                    <hr className='my-3' />
                                    Development:</p>
                                <div className='grid grid-cols-3 pb-2 gap-y-5'>
                                    <div>
                                        <Image
                                            width={50}
                                            height={50}
                                            priority
                                            src={html}
                                            alt="logo diseñado por josefina ritter de html" />
                                    </div>
                                    <div>
                                        <Image
                                            width={50}
                                            height={50}
                                            priority
                                            src={css}
                                            alt="logo diseñado por josefina ritter de css" />
                                    </div>
                                    <div>
                                        <Image
                                            width={50}
                                            height={50}
                                            priority
                                            src={js}
                                            alt="logo diseñado por josefina ritter de javascript" />
                                    </div>
                                    <div>
                                        <Image
                                            width={40}
                                            height={50}
                                            priority
                                            src={framer}
                                            alt="logo diseñado por josefina ritter de framer" />
                                    </div>
                                    <div>
                                        <Image
                                            width={50}
                                            height={50}
                                            priority
                                            src={tailwind}
                                            alt="logo diseñado por josefina ritter de tailwind" />
                                    </div>
                                </div>
                                <div className='border-2 rounded-md border-infor'>
                                    <Image
                                        src={portafolio}
                                        width={360}
                                        height={190}
                                    />
                                </div>
                                <div className="modal-action">
                                    <label htmlFor="my-modal" className="btn bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"><a href='https://portafolio-nextjs-hamipluf.vercel.app/'>GO!</a></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* FOOTER */}

            <Footer />
        </>
    )
}

export default briefcase;