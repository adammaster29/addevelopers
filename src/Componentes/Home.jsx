import React, { useEffect, useState } from 'react';

const Home = () => {
    const [amburguesa, setAmburguesa] = useState(false)
    const abrir__menu = () => {
        setAmburguesa(!amburguesa)
    }

    const menu__amburguesa = amburguesa ? 'menu show' : 'menu';
    return (
        <div className='padre__home'>
            <nav className='navbar'>
                <p>ADAMDERS</p>
                <ul className={menu__amburguesa} >
                    <li className='li__home'>Home</li>
                    <li className='li__servicios'>Servicios</li>
                    <li className='li__contactos'>Contactos</li>
                </ul>
                {/* ******menu***** */}
                <label class="burger" for="burger">
                    <input onClick={abrir__menu} type="checkbox" id="burger" />
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </nav>
            <header>
                <div className="contenedor__img">
                    <h1 className="title__developer animate__animated animate__backInDown" >ADAMDERS S.A.S</h1>
                    <img className='img__header animate__animated animate__bounceInLeft' src="/img/desarrollo-software.png" alt="" />
                    <img className='img__header animate__animated animate__bounceInRight' src="/img/desarrollo-de-sotware.png" alt="" />
                </div>
                <button className='animate__animated animate__bounceInDown btn__escribeme'>
                    <p>Habla con nosotros</p>
                    <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>
                </button>

                <div className="servicios">
                    <h1 className='service__title'>servicios</h1>
                    <div class="cards">
                        <div class="card red">
                            <p class="tip">Mantenimiento y Reparaciones</p>
                            <p class="second-text">de computadores</p>
                        </div>
                        <div class="card blue">
                            <p class="tip">Tecnologícos</p>
                            <p class="second-text">programacion y demas</p>
                        </div>
                        <div class="card green">
                            <p class="tip">Refuerzos En informaticas</p>
                            <p class="second-text">basicos y vanzados</p>
                        </div>
                    </div>
                </div>
                <div className="contenedor__cuadricula-img">
                    <div className="cuadriculas">
                        <img className='igm__title-cuadricula' src="/img/future.jpg" alt="" />
                        <img className='igm__title-cuadricula' src="/img/adam-animated.png" alt="" />
                        <img className='igm__title-cuadricula' src="/img/future-tegnology.jpg" alt="" />
                    </div>
                    <div className="title__img-cuadricula">
                        <h2>Enfocado Hacia El Futuro</h2>
                        <p>Somos Expertos En Solucionar Todos Tus Problemas</p>
                        <a className='whatsapp' href="https://wa.me/qr/XT5FGS3S5BBLM1">Whatsapp</a>
                    </div>
                </div>
                <h1 className='service__title title__proyect'>Algunos Proyectos Realizados</h1>
                <div className="proyectos__realizados padre__grid">
                    <a href='https://pokedex-group.netlify.app/' className="grid one"><p>Pokedex</p></a>
                    <a href='https://ricky-and-morty-adalberto.netlify.app/' className="grid two"><p>Rick And Morty</p></a>
                    <a href='https://wheather-app-adalberto.netlify.app/' className="grid three"><p>Weather App</p></a>
                    <a href='https://crud-dasboard-adam.netlify.app/#/' className="grid four"><p>Crud</p></a>
                    <a href='https://markeplace.netlify.app/' className="grid five"><p>Adam shop</p></a>

                </div>

            </header>
            <footer>
                <div className="pie__de-pagina">
                    <div className="producto pie-flex">
                        <h2>Productos</h2>
                        <a href="">¿Porque Adamders?</a>
                        <a href="">Correo electronico</a>
                        <a href="">Seguridad</a>
                    </div>
                    <div className="recursos pie-flex">
                        <h2>Recursos</h2>
                        <a href="">Consejos de programacion </a>
                        <a href="">Herramientas</a>
                        <a href="">glosario de programacion</a>
                    </div>
                    <div className="comunidad pie-flex">
                        <h2>Comunidad</h2>
                        <a href="">Desarrolladores</a>
                        <a href="">Eventos</a>
                    </div>
                    <div className="empresa pie-flex">
                        <h2>Empresa</h2>
                        <a href="">Historia</a>
                        <a href="">Accesibilidad</a>
                        <a href="">politica</a>
                    </div>
                    <div className="ayuda pie-flex">
                        <h2>Ayuda</h2>
                        <a href="">Contacto</a>
                        <a href="">Centro de ayuda</a>
                        <a href="">Problemas mas freceuntes</a>
                    </div>
                </div>
                <div className="icon__copyright">
                   <a href="https://www.linkedin.com/in/adalberto-agudelo-h-2abbb4109/" target='_blank'><i class='bx bxl-linkedin'></i></a> 
                    <a href="mailto:adammaster29@gmail.com & subject=hola"><i class='bx bx-mail-send'></i></a>
                    <a href="https://twitter.com/Adamagudelo24"><i className="bx bxl-twitter"></i></a>
                    <span className='copy-right'>   <i class='bx bx-copyright'></i><p>: Todos los derechos reservados</p></span>

                </div>
            </footer>


        </div>
    );
};

export default Home;