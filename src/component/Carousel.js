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

      <div className="w-full pb-20 carousel background-home franklin ">

        <div id="slide1" className="relative w-11/12 p-5 py-10 carousel-item ">

          <div className="m-auto shadow-xl card image-full lg:card-side bg-gradient-to-b from-dark to-obscure">
            <figure><Image
              width={350}
              height={205}
              className=""
              src={arc}
              alt="Arc.dev" />
            </figure>
            <div className="card-body">
              <h2 className="text-white card-title title">ARC</h2>
              <p>Click en el boton para contactarme.</p>
              <div className="justify-end card-actions">
                <motion.button layout className="btn bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"><a target="BLANK" href="https://arc.dev/@ramirogumma?preview=1">Vamos</a></motion.button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-1 -right-4 lg:left-40 lg:right-40 top-1/2">
            <a href="#slide4" className="lg:btn btn-sm btn-circle">❮</a>
            <a href="#slide2" className="lg:btn btn-sm btn-circle">❯</a>
          </div>
        </div>

        <div id="slide2" className="relative w-11/12 p-5 py-10 carousel-item ">
          <div className="m-auto shadow-xl card image-full lg:card-side bg-gradient-to-b from-dark to-obscure">
            <figure><Image
              width={350}
              height={205}
              className=""
              src={workana}
              alt="web wo
   rkana"/></figure>
            <div className="card-body">
              <h2 className="text-white card-title title">WORKANA</h2>
              <p>Click en el boton para contactarme.</p>
              <div className="justify-end card-actions">
                <button className="btn bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"><a target="BLANK" href="https://www.workana.com/freelancer/b85e703950de6afa717ace9a8327c73a">Vamos</a></button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-1 -right-4 lg:left-40 lg:right-40 top-1/2">
            <a href="#slide1" className="lg:btn btn-sm btn-circle">❮</a>
            <a href="#slide3" className="lg:btn btn-sm btn-circle">❯</a>
          </div>
        </div>

        <div id="slide3" className="relative w-11/12 p-5 py-10 carousel-item ">
          <div className="m-auto shadow-xl card image-full lg:card-side bg-gradient-to-b from-dark to-obscure">
            <figure><Image
              width={350}
              height={205}
              className=""
              src={githubb}
              alt="Album"
            /></figure>
            <div className="card-body">
              <h2 className="text-white card-title title">GITHUB</h2>
              <p>Click en el boton para contactarme.</p>
              <div className="justify-end card-actions">
                <button className="btn bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"><a target="BLANK" href="https://github.com/Hamipluf">Vamos</a></button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-1 -right-4 lg:left-40 lg:right-40 top-1/2">
            <a href="#slide2" className="lg:btn btn-sm btn-circle">❮</a>
            <a href="#slide4" className="lg:btn btn-sm btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="relative w-11/12 p-5 py-10 carousel-item ">
          <div className="m-auto shadow-xl card image-full lg:card-side bg-gradient-to-b from-dark to-obscure">
            <figure><Image
              width={350}
              height={205}
              className=""
              src={likedinn}
              alt="Album
   "/></figure>
            <div className="card-body">
              <h2 className="text-white card-title title">LINKEDIN</h2>
              <p>Click en el boton para contactarme.</p>
              <div className="justify-end card-actions">
                <button className="btn bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"><a target="BLANK" href="https://www.linkedin.com/in/ramiro-gabriel-gumma-400993240/">Vamos</a></button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-1 -right-4 lg:left-40 lg:right-40 top-1/2">
            <a href="#slide3" className="lg:btn btn-sm btn-circle">❮</a>
            <a href="#slide1" className="lg:btn btn-sm btn-circle">❯</a>
          </div>
        </div>
      </div>

    </motion.div>


  )
}

export default Carousel