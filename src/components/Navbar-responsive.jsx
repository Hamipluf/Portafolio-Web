import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import logo from "../../public/logo.png";

import LenguageSelector from "../components/LenguageSelector";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Navbar_responsive = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAV MOBILE */}
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="fixed z-10 w-full md:hidden "
      >
        <div className="navbar">
          <div className="grid w-full grid-cols-3 navbar-start gap-x-16 justify-cente">
            <motion.div
              variants={{
                open: { opacity: 1 },
                closed: { opacity: 1 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
              className="dropdown w-full justify-self-start"
            >
              <motion.label
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
                tabIndex={0}
                className="border btn btn-circle bg-dark focus:bg-infor md:hidden"
              >
                {/* <!-- Menu icon --> */}
                <svg
                  className="fill-current swap-off"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
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
                      staggerChildren: 0.05,
                    },
                  },
                  closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3,
                    },
                  },
                }}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
                tabIndex={0}
                className="mt-3 text-white bg-black rounded-md shadow menu w-72 dropdown-content"
              >
                <motion.li variants={itemVariants} className="p-3 text-xs">
                  <Link className="pr-60" href="/">
                    Home
                  </Link>
                </motion.li>

                <motion.li variants={itemVariants} className="p-3 text-xs">
                  <Link className="pr-60" href="/aboutme">
                    About Me
                  </Link>
                </motion.li>

                <motion.li variants={itemVariants} className="p-3 text-xs">
                  <Link className="pr-60" href="/contactme">
                    Contact Me
                  </Link>
                </motion.li>

                <motion.li variants={itemVariants} className="p-3 text-xs">
                  <Link className="pr-60" href="/briefcase">
                    Briefcase
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>
            <LenguageSelector />

            <motion.div
              initial={{
                y: -400,
                opacity: 0,
                scale: 0.1,
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                type: "spring",
                duration: 1,
              }}
              className="justify-self-end"
            >
              <Link href="/">
                <Image
                  width={32}
                  height={48}
                  className="w-8 h-12"
                  src={logo}
                  alt="Logo Ramiro Gumma frontend developer"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Nav Desktop */}

      <div className="fixed top-0 left-0 z-10 w-full pr-5 font-bold text-white franklin right-20 md-m:hidden">
        <motion.div
          initial={{
            x: -100,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            type: "spring",
            duration: 0.8,
          }}
          className="w-10 h-8 pt-3 lg:ml-10 lg:"
        >
          <Link href="/">
            <a>
              <Image
                width={30}
                height={40}
                src={logo}
                alt="Logo Ramiro Gumma frontend developer"
              />
            </a>
          </Link>
        </motion.div>

        <motion.ul
          layout
          initial={{
            scale: 0.1,
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
          className="flex flex-row justify-end gap-20"
        >
          <LenguageSelector />

          <motion.li className="links">
            <Link className="text-xs" href="/">
              Home
            </Link>
          </motion.li>
          <motion.li className="links">
            <Link className="text-xs" href="/aboutme">
              About Me
            </Link>
          </motion.li>
          <motion.li className="links">
            <Link className="text-xs" href="/contactme">
              Contact Me
            </Link>
          </motion.li>
          <motion.li className="links">
            <Link className="text-xs" href="/briefcase">
              Briefcase
            </Link>
          </motion.li>
        </motion.ul>
      </div>
    </>
  );
};
export default Navbar_responsive;



