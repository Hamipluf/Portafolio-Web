import { motion } from "framer-motion";
import Link from "next/link";
import logo from '../pages/img/logo.png'
import Image from "next/image"


const Footer = () => {
    return (
        <>
            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-full p-10 pt-10 footer text-base-content bg-gradient-to-b from-obscure to-primary ">
                <div className="self-end sm:order-3">
                    <Image
                        src={logo}
                        width={40}
                        height={50}
                        alt="Logo Ramiro Gumma Frontend Developer" />
                    <p className="text-xs opacity-40">Copyright © 2022 - All right reserved by Ramiro Gumma <span className='text-primary'>|</span>Designed by Josefina Ritter</p>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className='links' href="/aboutme">
                        <a> About me </a>
                    </Link>
                    <Link className='links' href="/">
                        <a>Home</a>
                    </Link>
                    <Link className='links' href="/contactme">
                        <a>Contact Me</a>
                    </Link>
                    <Link className='links' href="/briefcase">
                        <a>Briefcase</a>
                    </Link>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <a href='https://www.linkedin.com/in/ramiro-gabriel-gumma-400993240/' target="BLANK" className="links">Linkedin</a>
                    <a href='https://github.com/Hamipluf' target="BLANK" className="links">Github</a>
                    <a href='https://www.workana.com/freelancer/b85e703950de6afa717ace9a8327c73a' target="BLANK" className="links">Workana</a>
                </div>
            </motion.footer>
        </>
    )
}

export default Footer