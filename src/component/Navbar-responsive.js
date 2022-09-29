import Link from 'next/link';
import Image from "next/image"
import logo from '../pages/img/logo.png';
import { motion } from "framer-motion";
import { useState } from "react";


const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const Navbar_responsive = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAV MOBILE */}
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="fixed z-10 w-full md:hidden ">
        <div className="navbar">
          <div className="grid w-full grid-cols-2 navbar-start gap-x-16 justify-cente">


            <motion.div
              variants={{
                open: { opacity: 1 },
                closed: { opacity: 1 }
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
              className="dropdown justify-self-start">

              <motion.label
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
                tabIndex={0} className="border btn bg-dark md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white hover:text-obscure" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </motion.label>


              {/* MENU DROPDOWN */}
              <motion.ul
                variants={{
                  open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.05
                    }
                  },
                  closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3
                    }
                  }
                }}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
                tabIndex={0}
                className="mt-3 text-white bg-black rounded-md shadow menu menu-compact dropdown-content">

                <motion.li variants={itemVariants} className="p-3 text-xs" >
                  <Link href="/">
                    <a className="pr-60" >Home</a>
                  </Link>
                </motion.li>

                <motion.li variants={itemVariants} className="p-3 text-xs" >
                  <Link href="/Aboutme">
                    <a className="pr-60" >About Me</a>
                  </Link>
                </motion.li>

                <motion.li variants={itemVariants} className="p-3 text-xs" >
                  <Link href="/contactme">
                    <a className="pr-60" >Contact Me</a>
                  </Link>
                </motion.li>

                <motion.li variants={itemVariants} className="p-3 text-xs" >
                  <Link href="/briefcase">
                    <a className="pr-60" >Briefcase</a>
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>


            <motion.div
              initial={{
                y: -400,
                opacity: 0,
                scale: .1,

              }}

              animate={{
                y: 0,
                opacity: 1,
                scale: 1,

              }}
              transition={{
                type: "spring",
                duration: 1
              }}

              className="justify-self-end"><Link href="/">
                <a><Image
                  width={32}
                  height={48}
                  className="w-8 h-12"
                  src={logo}
                  alt="Logo Ramiro Gumma frontend developer" /></a>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.nav>



      {/* Nav Desktop */}

      <div className='fixed top-0 left-0 z-10 w-full pr-5 text-sm font-bold text-white franklin right-20 md-m:hidden'>
        <motion.div
          initial={{

            x: -100,
          }}
          animate={{

            x: 0,
          }}
          transition={{
            type: "spring",
            duration: .8,
          }}
          className="w-10 h-8 pt-3 lg:ml-10 lg:">
          <Link href="/">
            <a> <Image
              width={40}
              height={60}
              src={logo}
              alt="Logo Ramiro Gumma frontend developer" /> </a>
          </Link>


        </motion.div>

        <motion.ul layout
          initial={{
            scale: .1,
            x: -800,
          }}
          animate={{
            scale: 1,
            x: 0,
          }}
          transition={{
            type: "spring",
            duration: 1.5,
          }}

          className="flex flex-row justify-end gap-20">
          <motion.li className=" links" ><Link href="/">
            <a>Home</a>
          </Link>
          </motion.li>
          <motion.li className=" links" ><Link href="/aboutme">
            <a>About Me</a>
          </Link>
          </motion.li>
          <motion.li className=" links" ><Link href="/contactme">
            <a>Contact Me</a>
          </Link>
          </motion.li>
          <motion.li className=" links" ><Link href="/briefcase">
            <a>Briefcase</a>
          </Link>
          </motion.li>
        </motion.ul>


      </div>
    </>
  )
}
export default Navbar_responsive