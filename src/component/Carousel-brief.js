import css from '../pages/img/css-3.png'
import js from '../pages/img/js.png'
import html from '../pages/img/html5.png'
import react from '../pages/img/react.png'
import github from '../pages/img/github.png'
import git from '../pages/img/git.png'
import tailwind from '../pages/img/Tailwind.png'
import npm from '../pages/img/npm.png'
import framer from '../pages/img/framer.png'
import next from '../pages/img/next.png'
import bootstrap from '../pages/img/bootstrap.png'
import vercel from '../pages/img/vercel.png'
import portafolio from '../pages/img/portafolio.png'
import net from '../pages/img/net.png'
import watherapp from '../pages/img/screen.png'
import devops from '../pages/img/DevOps News 1.png'
import appproduct from '../pages/img/appproduct.png'
import Image from 'next/image'
import { motion, useScroll } from "framer-motion"
import { useRef } from "react";




function Carrouselbrief() {
    const carouselRef = useRef(null)
    const { scrollX } = useScroll({
        container: carouselRef
    })
    return (
        // agregando animacion al carrousel, no terminado
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            ref={carouselRef}
            className=''>
            <div className="w-full p-4 scrollbarz<ag py-10 space-x-10 carousel carousel-center rounded-box">
                {/* MODAL-1 */}
                <div className="carousel-item">
                    <div className=''>
                        <label htmlFor="my-modal" className="cursor-pointer modal-button">
                            <div className='hover:shadow-xl rounded-box hover:shadow-infor hover:translate-x-6 hover:transition-all hover:origin-top-left hover:translate-y-6 '>
                                <Image
                                    width={370}
                                    height={200}
                                    src={appproduct}
                                    alt="Imagen de appProduct creada por Ramiro Gumma"
                                    className='rounded-box'

                                />
                            </div>
                        </label>
                        {/* BODY MODAL */}
                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                        <div className="text-white modal">
                            <div className=" modal-box bg-gradient-to-b from-dark to-obscure">
                                <label htmlFor="my-modal" className="absolute btn btn-sm btn-circle right-2 top-2 bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor">✕</label>
                                <h3 className="text-lg font-bold text-infor ">App Product {`/>`}</h3>
                                <p className="py-4">Product listing application, you can place a product with price and date of production.
                                    It is a simple CRUD made with Bootstrap and object oriented programming (OOP).<br />
                                    <span> Click on the button to see the app</span>
                                    <br />
                                    <br />
                                    Development:</p>
                                <div className="divider"></div>
                                <div className='grid grid-cols-3 gap-5 pb-2 justify-items-center'>
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
                                            width={50}
                                            height={50}
                                            priority
                                            src={bootstrap}
                                            alt="logo diseñado por josefina ritter de bootstrap" />
                                    </div>
                                </div>

                                <div className='border-2 rounded-md border-infor'>
                                    <Image
                                        src={appproduct}
                                        alt="Imagen de appProduct creada por Ramiro Gumma"

                                    />
                                </div>
                                <div className="modal-action">
                                    <label htmlFor="my-modal" className="btn bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"><a href='https://app-product.vercel.app/' target="blank">Go!</a></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* MODAL-2 */}
                <div className="carousel-item">
                    <div>
                        {/* OPEN MODAL-2 */}
                        <label htmlFor="my-modal-2" className="cursor-pointer modal-button">
                            <div className='hover:shadow-xl rounded-box hover:shadow-infor hover:translate-x-6 hover:transition-all hover:origin-top-left hover:translate-y-6'>
                                <Image
                                    width={370}
                                    height={200}
                                    src={devops}
                                    alt="Imagen de pagina de noticias de desarrollo DevOps News creado por Ramiro Gumma"
                                    className='rounded-box'
                                /></div>
                        </label>
                        {/* BODY MODAL-2 */}
                        <input type="checkbox" id="my-modal-2" className="modal-toggle" />
                        <div className="text-white modal">
                            <div className="modal-box bg-gradient-to-b from-dark to-obscure ">
                                <label htmlFor="my-modal-2" className="absolute btn btn-sm btn-circle right-2 top-2 bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor">✕</label>
                                <h3 className="text-lg font-bold text-infor "> DevOp NEWS {`/>`}</h3>
                                <p className="py-4">Is a simple template of a development news page, which is made with native code without CDN or libraries.<br />
                                    <span> Click on the button to see the site</span>
                                    <br />
                                    <br />
                                    Development:</p>
                                <div className="divider"></div>
                                <div className='grid grid-cols-3 gap-5 pb-2 justify-items-center'>
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
                                            alt="logo diseñado por josefina ritter de javascript"
                                        />
                                    </div>
                                </div>
                                <div className='border-2 rounded-md border-infor'>
                                    <Image
                                        src={devops}
                                        alt="Imagen de pagina de noticias de desarrollo DevOps News creado por Ramiro Gumma"

                                    />
                                </div>
                                <div className="modal-action">
                                    <label htmlFor="my-modal" className="btn bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"><a href='https://dev-opnews.vercel.app/' target="blank" >Go!</a></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* MODAL-3 */}
                <div className="carousel-item">
                    <div className=''>
                        {/* OPEN MODAL-3 */}
                        <label htmlFor="my-modal-3" className="cursor-pointer modal-button">
                            <div className='hover:shadow-xl rounded-box hover:shadow-infor hover:translate-x-6 hover:transition-all hover:origin-top-left hover:translate-y-6'>
                                <Image
                                    width={370}
                                    height={200}
                                    src={portafolio}
                                    alt="Imagen de portafolio web creado Por Ramiro Gumma"
                                    className="rounded-box"
                                /></div>
                        </label>
                        {/* BODY MODAL-3 */}
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="text-white modal">
                            <div className="modal-box bg-gradient-to-b from-dark to-obscure ">
                                <label htmlFor="my-modal-3" className="absolute btn btn-sm btn-circle right-2 top-2 bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor">✕</label>
                                <h3 className="text-lg font-bold text-infor "> Portafolio Web {`/>`}</h3>
                                <p className="py-4">Personal website, an application that is developed mainly in Next.js, which is integrated with the sendinblue API, in it I use Framer-Motion for the animations and Tailwind for the layout.<br />
                                    <span> Click on the button to see the site</span>
                                    <br />
                                    <br />
                                    Development:</p>
                                <div className="divider"></div>
                                <div className='grid grid-cols-3 pb-2 justify-items-center gap-y-5'>
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
                                            alt="logo diseñado por josefina ritter de tailwind"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            width={50}
                                            height={50}
                                            priority
                                            src={next}
                                            alt="logo diseñado por josefina ritter de next"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            width={50}
                                            height={50}
                                            priority
                                            src={vercel}
                                            alt="logo diseñado por josefina ritter de verecel"
                                        />
                                    </div>
                                </div>
                                <div className='border-2 rounded-md border-infor'>
                                    <Image
                                        src={portafolio}
                                        alt="Imagen de portafolio web creado Por Ramiro Gumma"

                                    />
                                </div>
                                <div className="modal-action">
                                    <label htmlFor="my-modal" className="btn bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"><a href='https://portafolio-nextjs-hamipluf.vercel.app/'>GO!</a></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* MODAl-4 */}
                <div className="carousel-item">
                    <div className=''>
                        {/* OPEN MODAL-4 */}
                        <label htmlFor="my-modal-4" className="cursor-pointer modal-button">
                            <div className='hover:shadow-xl rounded-box hover:shadow-infor hover:translate-x-6 hover:transition-all hover:origin-top-left hover:translate-y-6'>
                                <Image
                                    width={370}
                                    height={200}
                                    src={watherapp}
                                    alt="Imagen de portafolio web creado Por Ramiro Gumma"
                                    className="rounded-box"
                                /></div>
                        </label>
                        {/* BODY MODAL-4 */}
                        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                        <div className="text-white modal">
                            <div className="modal-box bg-gradient-to-b from-dark to-obscure ">
                                <label htmlFor="my-modal-4" className="absolute btn btn-sm btn-circle right-2 top-2 bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor">✕</label>
                                <h3 className="text-lg font-bold text-infor "> Weather App {`/>`}</h3>
                                <p className="py-4">{`It's`} a simple weather application, which is built with React.js and consumes the OpenWeather api, which is mapped with Tailwind and DaisiUi.<br />
                                    <span> Click on the button to see the site</span>
                                    <br />
                                    <br />
                                    Development:</p>
                                <div className="divider"></div>
                                <div className='grid grid-cols-3 pb-2 justify-items-center gap-y-5'>
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
                                            src={react}
                                            alt="logo diseñado por josefina ritter de react" />
                                    </div>
                                    <div>
                                        <Image
                                            width={50}
                                            height={50}
                                            priority
                                            src={tailwind}
                                            alt="logo diseñado por josefina ritter de tailwind"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            width={50}
                                            height={50}
                                            priority
                                            src={vercel}
                                            alt="logo diseñado por josefina ritter de verecel"
                                        />
                                    </div>
                                </div>
                                <div className='border-2 rounded-md border-infor'>
                                    <Image
                                        responive
                                        src={watherapp}
                                        alt="Imagen de portafolio web creado Por Ramiro Gumma"
                                    />
                                </div>
                                <div className="modal-action">
                                    <label htmlFor="my-modal" className="btn bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"><a href='https://weatherapp-hamipluf.vercel.app/' target="BLANK">Go!</a></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* MODAl-5 */}
                <div className="carousel-item">
                    <div className=''>
                        {/* OPEN MODAL-5 */}
                        <label htmlFor="my-modal-5" className="cursor-pointer modal-button">
                            <div className='hover:shadow-xl rounded-box hover:shadow-infor hover:translate-x-6 hover:transition-all hover:origin-top-left hover:translate-y-6'>
                                <Image
                                    width={370}
                                    height={200}
                                    src={net}
                                    alt="Imagen de portafolio web creado Por Ramiro Gumma"
                                    className="rounded-box"
                                /></div>
                        </label>
                        {/* BODY MODAL-5 */}
                        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                        <div className="text-white modal">
                            <div className="modal-box bg-gradient-to-b from-dark to-obscure ">
                                <label htmlFor="my-modal-5" className="absolute btn btn-sm btn-circle right-2 top-2 bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor">✕</label>
                                <h3 className="text-lg font-bold text-infor "> Netflix Clone {`/>`}</h3>
                                <p className="py-4">Netflix clone, application created with React, Redux, Firestore and Google Auth. I use a TMDB api (The Movie Data Base) which consumes lists of movies to render, the API call is made with Axios. To display the different screens I use conditionals and authentications.<br />
                                    <span> Click on the button to see the site</span>
                                    <br />
                                    <br />
                                    Development:</p>
                                <div className="divider"></div>
                                <div className='grid grid-cols-3 pb-2 justify-items-center gap-y-5'>
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
                                            src={react}
                                            alt="logo diseñado por josefina ritter de react" />
                                    </div>

                                </div>
                                <div className='border-2 rounded-md border-infor'>
                                    <Image
                                        responive
                                        src={net}
                                        alt="Imagen de portafolio web creado Por Ramiro Gumma"
                                    />
                                </div>
                                <div className="modal-action">
                                    <label htmlFor="my-modal" className="btn bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"><a href='https://netflix-clone-rg.web.app/' target="BLANK">Go!</a></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}
export default Carrouselbrief