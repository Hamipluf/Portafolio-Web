import css from './img/css-3.png'
import js from './img/js.png'
import html from './img/html5.png'
import react from './img/react.png'
import github from './img/github.png'
import git from './img/git.png'
import tailwind from './img/Tailwind.png'
import npm from './img/npm.png'
import framer from './img/framer.png'
import portafolio from './img/portafolio.png'
import devops from './img/DevOps News 1.png'
import appproduct from './img/appproduct.png'
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
            <section className='bg-gradient-to-b from-dark to-obscure'>
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
                                        alt="logo diseñado por josefina ritter de css" />
                                </div>
                                <div className="duration-75 active:scale-125 lg:hover:scale-125">
                                    <Image
                                        width={90}
                                        height={90}
                                        priority
                                        src={js}
                                        alt="logo diseñado por josefina ritter de javascript" />
                                </div>
                                <div className="duration-75 active:scale-125 lg:hover:scale-125">
                                    <Image
                                        width={90}
                                        height={90}
                                        priority
                                        src={html}
                                        alt="logo diseñado por josefina ritter de html" />
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
                                        alt="logo diseñado por josefina ritter de github" />
                                </div>
                                <div
                                    className="duration-75 active:scale-125 lg:hover:scale-125">
                                    <Image
                                        width={90}
                                        height={90}
                                        priority
                                        src={git}
                                        alt="logo diseñado por josefina ritter de git" />
                                </div>
                                <div
                                    className="duration-75 active:scale-125 lg:hover:scale-125">
                                    <Image
                                        width={90}
                                        height={90}
                                        priority
                                        src={tailwind}
                                        alt="logo diseñado por josefina ritter de tailwind" />
                                </div>
                                <div
                                    className="duration-75 mt-7 active:scale-125 lg:hover:scale-125">
                                    <Image
                                        width={90}
                                        height={50}
                                        priority
                                        src={npm}
                                        alt="logo diseñado por josefina ritter de npm" />
                                </div>
                                <div className="duration-75 active:scale-125 lg:hover:scale-125">
                                    <Image
                                        width={90}
                                        height={90}
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
                            </div>

                        </div>
                    </section>
                </motion.div>
            </section>
            {/* PROYECTOS */}
            <section className='bg-obscure franklin'>
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: .5, }}
                    viewport={{ once: true }}>
                    <h2 className="pt-10 pl-10 text-xl text-white lg:text-3xl franklin">PROYECTOS <span className="text-xl text-infor">:</span></h2>
                </motion.div>
                <div className='grid w-full grid-cols-2 gap-2 p-2 pt-20 lg:gap-5 bg-obscure justify-araund justify-items-center'>
                    <div className='border-2 border-solid over border-infor '>
                        {/* OPEN MODAL */}
                        <label htmlFor="my-modal" className="btn modal-button">
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
                        <label htmlFor="my-modal-2" className="btn modal-button">
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
                        <label htmlFor="my-modal-3" className="btn modal-button">
                            <Image
                                width={370}
                                height={200}
                                src={portafolio}
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
                                    <label htmlFor="my-modal" className="btn bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor">GO!</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}

            <Footer />
        </>
    )
}

export default Briefcase;