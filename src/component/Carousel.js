import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import arc from "../pages/img/arc.png";
import workana from "../pages/img/workana.png";
import githubb from "../pages/img/githubb.png";
import likedinn from "../pages/img/linkedinn.png";

function Carousel() {
  return (
    <motion.div
      layout
      initial={{
        opacity: .5,

      }}
      whileInView={{
        opacity: 1,

      }}
      transition={{ duration: .8 }}
      viewport={{ once: true }}
      className=""
    >

      <div className="carousel w-full background-home franklin pb-20 ">

        <div id="slide1" className="py-10 p-5 carousel-item relative w-11/12 ">

          <div className="card image-full m-auto lg:card-side bg-gradient-to-b from-dark to-obscure shadow-xl">
            <figure><Image
              width={350}
              height={205}
              className=""
              src={arc}
              alt="Arc.dev" />
            </figure>
            <div className="card-body">
              <h2 className="card-title title text-white">ARC</h2>
              <p>Click en el boton para contactarme.</p>
              <div className="card-actions justify-end">
                <motion.button layout className="btn bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"><a target="BLANK" href="https://arc.dev/@ramirogumma?preview=1">Vamos</a></motion.button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-40 right-40 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide2" className="py-10 p-5 carousel-item relative w-11/12 ">
          <div className="card m-auto image-full lg:card-side bg-gradient-to-b from-dark to-obscure shadow-xl">
            <figure><Image
              width={350}
              height={205}
              className=""
              src={workana}
              alt="web wo
   rkana"/></figure>
            <div className="card-body">
              <h2 className="card-title title text-white">WORKANA</h2>
              <p>Click en el boton para contactarme.</p>
              <div className="card-actions justify-end">
                <button className="btn bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"><a target="BLANK" href="https://www.workana.com/freelancer/b85e703950de6afa717ace9a8327c73a">Vamos</a></button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-40 right-40 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide3" className="py-10 p-5 carousel-item relative w-11/12 ">
          <div className="card m-auto image-full lg:card-side bg-gradient-to-b from-dark to-obscure shadow-xl">
            <figure><Image
              width={350}
              height={205}
              className=""
              src={githubb}
              alt="Album"
            /></figure>
            <div className="card-body">
              <h2 className="card-title title text-white">GITHUB</h2>
              <p>Click en el boton para contactarme.</p>
              <div className="card-actions justify-end">
                <button className="btn bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"><a target="BLANK" href="https://github.com/Hamipluf">Vamos</a></button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-40 right-40 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="py-10 p-5 carousel-item relative w-11/12  ">
          <div className="card m-auto image-full lg:card-side bg-gradient-to-b from-dark to-obscure shadow-xl">
            <figure><Image
              width={350}
              height={205}
              className=""
              src={likedinn}
              alt="Album
   "/></figure>
            <div className="card-body">
              <h2 className="card-title title text-white">LINKEDIN</h2>
              <p>Click en el boton para contactarme.</p>
              <div className="card-actions justify-end">
                <button className="btn bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"><a target="BLANK" href="https://www.linkedin.com/in/ramiro-gabriel-gumma-400993240/">Vamos</a></button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-40 right-40 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

    </motion.div>


  )
}

export default Carousel