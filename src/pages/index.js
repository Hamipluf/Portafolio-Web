import { motion, useScroll, useTransform } from "framer-motion";

import { Cursor, useTypewriter } from "react-simple-typewriter";

import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar_responsive from "../components/Navbar-responsive";

export default function Index(props) {
  const { index } = props;
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [1, 0.2], [0, 1]);
  const [text, count] = useTypewriter({
    words: [
      "Welcome",
      "Bienvenido",
      "欢迎",
      "Welkom",
      "Bienvenue",
      "Benvenuto",
      "ようこそ",
    ],
    loop: true,
    defaultSpeed: 2000,
    deleteSpeed: 150,
  });

  return (
    <>
      <div className="">
        <Navbar_responsive />

        <section className="z-0 background-home">
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            style={{ scale }}
            transition={{ duration: 1.2 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
          >
            <div className="ml-10 text-white lg:ml-20 pt-60 lg:pt-72">
              <h2 className="text-4xl italic font-bold lg:text-6xl z-1 franklin">
                <span>{text}</span>
                <Cursor cursorColor="#57F27E" cursorStyle="/>" />
              </h2>

              <h2 className="pb-20 text-3xl font-bold lg:text-6xl franklin">
                {index.title1}
                <span className="text-infor"> {index.title}</span>
              </h2>

              <h2 className="pb-72 lg:text-xl text-md inconsolota">
                {index.subtitle} <span className="text-infor">{index.subtitle1}</span> {index.subtitle2}
              </h2>
            </div>
          </motion.div>

          <motion.h2
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            viewport={{ once: true }}
            className="pl-20 text-3xl font-black text-white franklin"
          >
            <span className="text-infor">{index.findme}</span> {index.findme2}
          </motion.h2>

          <Carousel lenguajes={index}/>
        </section>
        <Footer />
      </div>
    </>
  );
}
export async function getStaticProps({ locale }) {
  const response = await import(`../lang/${locale}.json`);
  // console.log(response)
  return {
    props: {
      index: response.default.index,
    },
  };
}
