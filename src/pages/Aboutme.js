import Navbar_responsive from "../component/Navbar-responsive"
import Head from "next/head"
import Image from "next/image"
import foto1 from "./img/foto-rama-1.png"
import Footer from "../component/Footer"

import { motion } from "framer-motion"

function Aboutme() {
    return (
        <>
            <Head>
                <title>
                    Portafolio Web - About Me
                </title>
            </Head>
            < Navbar_responsive />
            <section className="bg-gradient-to-b from-obscure to-dark">
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
                    className="py-5 ">
                    <div className="grid w-full grid-cols-3 pt-20 lg:pt-5 justify-items-center ">
                        <div className="col-span-2 pt-20 lg:self-end "><h2 className="text-4xl font-extrabold text-center text-white lg:text-6xl franklin">Get to <span className="text-infor">know me better</span> </h2></div>
                        <div className="block w-24 m-5 lg:w-52 justify-self-center lg:pt-20 lg:row-span-2">
                            <Image
                                layout="responsive"
                                priority
                                src={foto1}
                            />
                        </div>


                        <div className="col-span-3 p-5 pt-10 text-sm font-normal tracking-wide text-justify text-white lg:col-span-2 lg:mb-10 lg:w-full lg:pt-20 franklin lg:text-lg ">
                            <div className="">
                                <p> <span className="text-infor"> ¡Hello! My name is Ramiro Gumma and I'm a Frontend Developer.</span><br />
                                    I live in Buenos Aires, Argentina and I'm a freelancer.
                                    I'm certified on Workana and Linkedin and my current activity is mainly focused on HTML, CSS and Javascript; I also use React, Tailwind and Bootstrap technologies. I adapt to agile management methodologies that provide a quick and effective solution to your company's problems. <br />
                                    <br />
                                    I have discovered my passion for this digital world, essential to advance in a super competitive market; and that is why I am in continuous training, developing my potential permanently.
                                </p>
                            </div>
                            <br />
                            <hr />
                            <div className="my-10 lg:pb-24 ">
                                <p><span className="text-infor">¡Hola! Mi nombre es Ramiro Gumma y soy Frontend Developer.</span><br />
                                    Vivo en Buenos Aires, Argentina y estudio de forma autónoma.
                                    Estoy certificado en Workana y Linkedin y mi actividad actual se enfoca principalmente en HTML, CSS y Javascript; también utilizo las tecnologías de React, Tailwind y Bootstrap. Me adapto a metodologías ágiles de gestión que brinden una rápida y eficaz solución a los problemas de tu empresa. <br />
                                    <br />
                                    He descubierto mi pasión por este mundo digital, imprescindible para avanzar en un mercado súper competitivo; y es por eso que estoy en contínua capacitación, desarrollando mi potencial de manera permanente
                                </p>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </section>
            <Footer />

        </>
    )
}

export default Aboutme