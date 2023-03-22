import { useRef } from "react";

import Image from "next/image";

import { motion, useScroll } from "framer-motion";

import css from "../../public/css-3.png";
import js from "../../public/js.png";
import html from "../../public/html5.png";
import react from "../../public/react.png";
import github from "../../public/github.png";
import git from "../../public/git.png";
import tailwind from "../../public/Tailwind.png";
import npm from "../../public/npm.png";
import framer from "../../public/framer.png";
import next from "../../public/next.png";
import bootstrap from "../../public/bootstrap.png";
import vercel from "../../public/vercel.png";
import portafolio from "../../public/portafolio.png";
import node from "../../public/node.png";
import ApiFree from "../../public/Captura.JPG";

export default function Carrouselbrief(props) {
  const { lenguajes } = props;
  // console.log(lenguajes.carrouselM1);
  const carouselRef = useRef(null);
  const { scrollX } = useScroll({
    container: carouselRef,
  });
  return (
    // agregando animacion al carrousel, no terminado
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      ref={carouselRef}
    >
      <div className="w-full p-4 py-10 m-5 space-x-7 carousel carousel-center rounded-box">
        {/* MODAL-1 */}
        <div className="carousel-item">
          <div className="mx-5">
            <label htmlFor="my-modal" className="cursor-pointer modal-button">
              <div className="hover:shadow-xl rounded-box hover:shadow-infor hover:translate-x-6 hover:transition-all hover:origin-top-left hover:translate-y-6 ">
                <Image
                  width={370}
                  height={200}
                  src={ApiFree}
                  alt="Imagen de appProduct creada por Ramiro Gumma"
                  className="rounded-box"
                />
              </div>
            </label>
            {/* BODY MODAL */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="text-white modal">
              <div className=" modal-box bg-gradient-to-b from-dark to-obscure">
                <label
                  htmlFor="my-modal"
                  className="absolute btn btn-sm btn-circle right-2 top-2 bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold text-infor ">
                  Api FreeWaves {`/>`}
                </h3>
                <p className="py-4">
                  Creation of Api and webSocket for real time feedback and page
                  views counter depending on the country.
                  <br />
                  <br />
                  <span>
                    <span className="text-xl text-infor">|</span>{" "}
                    {lenguajes.carrouselSubtitle}
                  </span>
                  <br />
                  <br />
                  {lenguajes.development}:
                </p>
                <hr />
                <div className="grid grid-cols-3 gap-5 py-5 justify-items-center">
                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={node}
                      alt="logo diseñado por josefina ritter de html"
                    />
                  </div>

                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={js}
                      alt="logo diseñado por josefina ritter de javascript"
                    />
                  </div>
                </div>

                <div className="border-2 rounded-md border-infor">
                  <Image
                    src={ApiFree}
                    alt="Imagen de appProduct creada por Ramiro Gumma"
                  />
                </div>
                <div className="modal-action">
                  <label
                    htmlFor="my-modal"
                    className="btn bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"
                  >
                    <a
                      href="https://github.com/Hamipluf/Socket-FreeWaves"
                      target="blank"
                    >
                      {lenguajes.go}
                    </a>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
