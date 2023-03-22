import Head from "next/head";
import Image from "next/image";

import foto1 from "../../public/foto-rama-1.png";

import { motion } from "framer-motion";

import Footer from "../components/Footer";
import Navbar_responsive from "../components/Navbar-responsive";

function Aboutme(props) {
  // console.log(props);
  const { aboutme } = props;
  return (
    <>
      <Head>
        <title>Portafolio Web - About Me</title>
      </Head>
      <Navbar_responsive />
      <section className="bg-gradient-to-b from-obscure to-dark">
        <motion.div
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="py-5 "
        >
          <div className="grid w-full grid-cols-3 pt-20 lg:pt-5 lg:p-10 justify-items-center ">
            <motion.div
              initial={{ opacity: 0.4, x: -800 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1,
                default: {
                  duration: 0.8,
                  ease: "easeInOut",
                  type: "spring",
                },
              }}
              className="col-span-2 pt-20 lg:mr-44 lg:self-start "
            >
              <h2 className="text-4xl font-extrabold text-white sm-m:text-center lg:text-6xl franklin">
                {aboutme.title}{" "}
                <span className="text-infor">{aboutme.title1}</span>
              </h2>
            </motion.div>
            <div className="block w-24 m-5 lg:w-52 justify-self-center lg:pt-20 lg:row-span-2">
              <Image
                layout="responsive"
                priority
                src={foto1}
                alt="Foto De Frente Ramiro Gumma"
              />
            </div>

            <div className="col-span-3 p-5 pt-10 text-sm font-normal tracking-wide text-justify text-white lg:col-span-2 lg:mb-10 lg:w-full lg:pt-20 franklin lg:text-lg ">
              <div>
                <p>
                  <span className="text-infor">{aboutme.subtitle}</span>
                  <br />
                  {aboutme.paragraph} <br />
                  <br />
                  {aboutme.paragraph2}
                </p>
              </div>
            </div>
          </div>
          {/* MIS estudios */}
          <div>
            <h2 className="text-2xl font-bold text-white sm-m:text-center lg:text-4xl franklin md:ml-4 my-3">
              {aboutme.subtitle2}
              <span className="text-infor"> {aboutme.subtitle3}</span>
            </h2>
            <div className="divider"></div>
            <div className="ml-4 my-3">
              <h3 className="text-xl font-semibold text-white ">
                <span className="text-infor font-bold">-</span>{" "}
                {aboutme.subtitle4}
              </h3>
              <p>{aboutme.paragraph3}</p>
            </div>
            <div className="divider"></div>
            <div className="ml-4 my-3">
              <h3 className="text-xl font-semibold text-white ">
                <span className="text-infor font-bold">-</span>{" "}
                {aboutme.subtitle5}
              </h3>
              <p>{aboutme.paragraph4}</p>
              <p>{aboutme.paragraph5}</p>
            </div>
          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}

export default Aboutme;

export async function getStaticProps({ locale }) {
  const response = await import(`../lang/${locale}.json`);
  return {
    props: {
      aboutme: response.default.aboutme,
    },
  };
}
