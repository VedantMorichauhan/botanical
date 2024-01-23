import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'bootstrap'
import '../css/Home.scss'
import img01 from "../img/img01.jpg"
import { FaArrowRight } from "react-icons/fa";



function Home() {
  return (
    <>
        {/* WELLCOME TO BOTANICAL */}

      <section className='bg'>
      <div className="bg-1">
       <div className="row">

       <div className="w-50 ww-50 text-center">

          <h3 className=' fs-4 text-center pb-4'>WELLCOME TO BOTANICAL</h3>
          <h1 className='display-3 fw-bolder pb-5'>Plants for healthy</h1>
          <p class="mb-xl-15 mb-lg-10 pb-4">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button className='px-5 fw-semibold'>Shop now  <FaArrowRight /></button>
        </div>

        <div className="bg11 mt-5 w-50">

        </div> 

       </div>
      </div>
      </section>

      {/* Why choose us */}

      <section className='choose'>
        <div className="container">
          <div className="row">
            <div className="mt-5 pt-5  w-50">
              <img src={img01} alt="" />
            </div>

            <div className="why mt-5 pt-5 w-50">
                <h2 className='fw-bolder'>Why choose us ?</h2>
                <div className="box-1"></div>
                <p className='pt-4 h6'>Lorem ipsum is simply dummy text of the printing and typesetting industry, lorem ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley ... <samp>Learn More</samp></p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Home