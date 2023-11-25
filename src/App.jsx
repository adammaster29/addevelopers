
import './App.css'
import { easeIn, motion } from "framer-motion"
function App() {


  return (
    <div className='App'>
      <nav className='menu'><i className='bx bx-menu-alt-left'></i> <p>ADD</p></nav>

      <div>
      <motion.div   className='home'
        transition={{ duration: 2 }} animate={{
          scale: [1, 3, 2, 1, 2.5],
          // rotate: [0, 0, 270, 270, 0],
          borderRadius: ["50%", "50%", "50%", "50%", "80%"],

        }}>
        <div className="headers">
          <div className="circle-photo">
            <motion.img initial={{x:-100}} transition={{duration:3,scale:[1,2,1,5]}} animate={{x:50,}} whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} className=' img-small' src="/img/adam-animated.png" alt="img" />
            <motion.img src='/img/desarrollo-software.png' alt='img'  initial={{z:50}} transition={{duration:4,scale:[1,12,1,15]}} animate={{x:-45}}
             className="circle img-back"/>
            <motion.img initial={{x:100}} transition={{duration:4,scale:[1,2,1,5]}} animate={{x:45}} className='circle img-large' src="/img/desarrollo-de-sotware.png" alt="img" />
            {/* <motion.button initial={{x:-100}} transition={{duration:4,scale:[1,2,1,5]}}  animate={{x:100,y:50}}>whatsapp</motion.button> */}
            <motion.span initial={{x:-100}} transition={{duration:4,scale:[1,2,1,5]}}  animate={{x:100,y:30}} className='text'> <p>Adalberto Agudelo - Ingeniero De Software</p> </motion.span> 
          </div>
         

        </div>
      </motion.div>
      </div>
        <div className="card">
          <motion.div initial={{y:100}} animate={{y:23}} transition={{duration:2,}} className="card-info contacto">
            <h3>CONTACTO</h3>
            <span className='contenedor-contacto'>
            <i className="bx bx-mail-send"></i>
              <i className="bx bxl-whatsapp"></i>
              <i className="bx bx-phone-call"></i>
            </span>
          </motion.div>
          <motion.div initial={{y:100}} animate={{y:23}} transition={{duration:2}} className="card-info que-hacemos">
            <h3>SERVICIOS</h3>
            <span className='contenedor-contacto'><i class='bx bxs-plus-circle'></i></span>
            </motion.div>
          <motion.div initial={{y:100}} animate={{y:23}} transition={{duration:2}} className="card-info ubicacion">
            <h3>UBICACION</h3>
          <span className='contenedor-contacto'>
            <p className='text-ubi'> Pastrana cll 19 #23-158</p>
            <p className='text-ubi'> Magangue-Bolivar</p>
            </span>
            
            </motion.div>
            
        </div>
        <div className="derechos-autor">
            <span>
              <p>mision</p>
              <p>vision</p>
            </span>
            <span>
              <p>Derechos De Autor:addevelopers</p>
        
            </span>
            </div>
    </div>
  )
}

export default App
