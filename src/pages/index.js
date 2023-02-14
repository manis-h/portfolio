import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'

// import styles from '@/styles/globals.css'
import {motion} from'framer-motion'
const inter = Inter({ subsets: ['latin'] })
import { useScroll,useTransform } from "framer-motion"
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

// https://github.com/shuding/cobe

export default function Home() {
  
  // 
  const canvasRef = useRef();
  const { scrollY } = useScroll()
console.log(scrollY)
  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        
        { location: [97.7595, -152.4367], size: 0.01 },
        { location: [67.7595, -122.4367], size: 0.01 },
        { location: [37.7595, -182.4367], size: 0.01 },
        { location: [37.7595, -122.4367], size: 0.01 },
        { location: [40.7128, -74.006], size: 0.1 }
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      }
    });

    return () => {
      globe.destroy();
    };
  }, []);

  const moveX = useTransform(scrollY, [0,50 ,100], [0,400, 600] );
  const moveY = useTransform(scrollY, [0,50 ,100], [0,200, 400] );
  const opacity = useTransform(scrollY, [0,50 ,100], [1,0.6,0.3] );
  
  const globe = {
    hidden: { scale: 0 },
    show: {
      scale:[1,1.2],
        transition: {
          duration:5,
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
}
  return (
    <>    
    <div className="container vh100">
    <div className='row'>
      <motion.div  style={{ x:moveX,y:moveY,opacity:opacity}} className='col' >
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      />
      </motion.div>
      <div className="col-lg-5 ">
        <h1 className="text-center display-3 fw-bold">
 TAKE YOUR BUISNESS GLOBAL WITH US
        </h1>
      </div>
      </div>
      
    </div>
    <div className="container vh-100">
    <div className="row">
      <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className="row">
        <h1 className='text-center'>AMAZING DESIGNS</h1>
        <div className="col">
  <img src="https://cdn.dribbble.com/users/1615584/screenshots/14795728/media/217c90aba448b05c6cab81a6891f071e.jpg?compress=1&resize=400x300" class="card-img-top" alt="..."/>
  </div>
  <div className="col">
  <img src="https://cdn.dribbble.com/users/1126935/screenshots/15469417/media/93ee3ff54dfda1606d0718ef8b585d1f.png?compress=1&resize=400x300" class="card-img-top" alt="..."/>
</div>
</div>
    </div>
    <div class="carousel-item">
      <div className="row">
        <h1 className="text-center">
          ROBUST CODE TO LOAD YOUR WEBSITE 2X FASTER
        </h1>
        <div className="col">
          <img src="https://cdn.dribbble.com/users/3613044/screenshots/19211886/media/07d929b61e4cbfd35f0b49cbab8aae0d.png?compress=1&resize=400x300" alt="" className="w-100" />
        </div>
        <div className="col">
          <img src="https://cdn.dribbble.com/users/695302/screenshots/5811321/dribbblee.png?compress=1&resize=400x300" alt="" className="w-100" />
        </div>
        
      </div>
    </div>
    <div class="carousel-item">
      <div className="row">
        <h1 className='text-center'>NEW AND IMPROVED FEATURES JUST FOR YOU!</h1>
        <div className="col">
<img src="https://www.techaheadcorp.com/wp-content/uploads/2019/05/dark-mode-banner-1024x536.jpg" className='w-100' alt="" />
        </div>
        <div className="col">
          <img src="https://www.techaheadcorp.com/wp-content/uploads/2019/05/dark-mode-banner-1024x536.jpg" alt="" className="w-100" />
        </div>
      </div>

    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

      </div>
    </div>

    {/* WORKS */}
    <div className="container">
      <h1 className="text-center">SAMPLE WORKS</h1>
    <div className="row justify-content-center gy-2">
      <div className="col-lg-6">
      <img src="imgs/csection.png" className='w-100' alt="" />
    
      </div>
      <div className="col-lg-6">
      <img src="imgs/work1.png" className='w-100' alt="" />
        
      </div>
      <div className="col-lg-6">
      <img src="imgs/work2.png" className='w-100' alt="" />
        
      </div>
      </div>
    </div>
    <div className="container">
      <h1 className="text-center">
        SKILLS
      </h1>
      <div className="container p-3">
        <div className="row justify-content-center gy-3">
          <div className="col-lg-2">
            
      <button class="button-85" role="button">HTML</button>
          </div>
          <div className="col-lg-2">
            
      <button class="button-85" role="button">CSS</button>
          </div>
          <div className="col-lg-2">
            
      <button class="button-85" role="button">JAVASCRIPT</button>
          </div>
          <div className="col-lg-2">
          <button class="button-85" role="button">WORDPRESS</button>
    
          </div>
          <div className="col-lg-2">
          <button class="button-85" role="button">REACTJS</button>
          </div>
          <div className="col-lg-2">
          <button class="button-85" role="button">NODE JS</button>
          </div>

          <div className="col-lg-2">
          <button class="button-85" role="button">MONGODB</button>

          </div>
          
          <div className="col-lg-2">
          <button class="button-85" role="button">MYSQl</button>

          </div>
          <div className="col-lg-2">
          <button class="button-85" role="button">NEXT JS</button>

          </div>
        </div>

      </div>
      
    </div>
    </>

  );
}
