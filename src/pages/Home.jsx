import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'bootstrap'
import '../css/Home.scss'
import { FaArrowRight } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { LuEye } from "react-icons/lu";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { Col, Row } from 'react-bootstrap';
import img01 from "../img/img01.jpg"
import img02 from "../img/img02.jpg"
import hbdr from "../img/hbdr.png"



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
                <Row className='pt-5'>
                 <Col sm={2}>
                  <div >
                      
                  </div>
                 </Col>
                  <Col  sm={10}>
                    <h5 className='fw-bolder'>Hand Planted</h5>
                    <p >There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form.</p>
                  </Col>
              </Row>
              <Row className='pt-5'>
                 <Col sm={2}>
                  <div >
                      
                  </div>
                 </Col>
                  <Col  sm={10}>
                    <h5 className='fw-bolder'>Natural Sunlight</h5>
                    <p >It is a long established fact that a reader will be distracted by the reable content of a page.</p>
                  </Col>
              </Row>
              <Row className='pt-5'>
                 <Col sm={2}>
                  <div >
                      
                  </div>
                 </Col>
                  <Col  sm={10}>
                    <h5 className='fw-bolder'>Clean Air</h5>
                    <p >There are many variations of passages of lorem ipsum available, but the majority have suffered.</p>
                  </Col>
              </Row>

            </div>

          </div>
        </div>
      </section>

      {/* Featured Product */}

      <section className='featured'>
        <div className="container">
          <div className="row text-center">
            <h1 className=' fw-fw-bolder pb-2'>Featured Product</h1>
            <img  src={hbdr} className='hbdr pb-4' />
            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>

            <div class="col-12 col-md-3">
            <div class="special-grid py-4">
              <div class="gallery-single">
               <img className='all-product' src={img02} alt="" />
                <div class="content1 text-center ">
                <i className='icon-1 left-1  p-3 m-1'><FaRegHeart /></i>
                <i className='icon-1 p-3 m-1'><SlBasket /></i>
                <i className='icon-1 p-3 m-1'><LuEye /></i>
                <i className='icon-1 right-1 p-3 m-1'><FaArrowRightArrowLeft /></i>
                </div>
                  <div class="card-title title-1 text-center">
                     <h4 class="fs-5 mt-3 fw-bold">Sit voluptatem</h4>
                     <h4>68.00 $</h4>
                  </div>
              </div>
             </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="special-grid py-4">
              <div class="gallery-single">
               <img className='all-product' src={img02} alt="" />
                <div class="content1 text-center ">
                <i className='icon-1 left-1  p-3 m-1'><FaRegHeart /></i>
                <i className='icon-1 p-3 m-1'><SlBasket /></i>
                <i className='icon-1 p-3 m-1'><LuEye /></i>
                <i className='icon-1 right-1 p-3 m-1'><FaArrowRightArrowLeft /></i>
                </div>
                  <div class="card-title title-1 text-center">
                     <h4 class="fs-5 mt-3 fw-bold">Sit voluptatem</h4>
                     <h4>68.00 $</h4>
                  </div>
              </div>
             </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="special-grid py-4">
              <div class="gallery-single">
               <img className='all-product' src={img02} alt="" />
                <div class="content1 text-center ">
                <i className='icon-1 left-1  p-3 m-1'><FaRegHeart /></i>
                <i className='icon-1 p-3 m-1'><SlBasket /></i>
                <i className='icon-1 p-3 m-1'><LuEye /></i>
                <i className='icon-1 right-1 p-3 m-1'><FaArrowRightArrowLeft /></i>
                </div>
                  <div class="card-title title-1 text-center">
                     <h4 class="fs-5 mt-3 fw-bold">Sit voluptatem</h4>
                     <h4>68.00 $</h4>
                  </div>
              </div>
             </div>
            </div>
            
            <div class="col-12 col-md-3">
            <div class="special-grid py-4">
              <div class="gallery-single">
               <img className='all-product' src={img02} alt="" />
                <div class="content1 text-center ">
                <i className='icon-1 left-1  p-3 m-1'><FaRegHeart /></i>
                <i className='icon-1 p-3 m-1'><SlBasket /></i>
                <i className='icon-1 p-3 m-1'><LuEye /></i>
                <i className='icon-1 right-1 p-3 m-1'><FaArrowRightArrowLeft /></i>
                </div>
                  <div class="card-title title-1 text-center">
                     <h4 class="fs-5 mt-3 fw-bold">Sit voluptatem</h4>
                     <h4>68.00 $</h4>
                  </div>
              </div>
             </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="special-grid py-2">
              <div class="gallery-single">
               <img className='all-product' src={img02} alt="" />
                <div class="content1 text-center ">
                <i className='icon-1 left-1  p-3 m-1'><FaRegHeart /></i>
                <i className='icon-1 p-3 m-1'><SlBasket /></i>
                <i className='icon-1 p-3 m-1'><LuEye /></i>
                <i className='icon-1 right-1 p-3 m-1'><FaArrowRightArrowLeft /></i>
                </div>
                  <div class="card-title title-1 text-center">
                     <h4 class="fs-5 mt-3 fw-bold">Sit voluptatem</h4>
                     <h4>68.00 $</h4>
                  </div>
              </div>
             </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="special-grid py-2">
              <div class="gallery-single">
               <img className='all-product' src={img02} alt="" />
                <div class="content1 text-center ">
                <i className='icon-1 left-1  p-3 m-1'><FaRegHeart /></i>
                <i className='icon-1 p-3 m-1'><SlBasket /></i>
                <i className='icon-1 p-3 m-1'><LuEye /></i>
                <i className='icon-1 right-1 p-3 m-1'><FaArrowRightArrowLeft /></i>
                </div>
                  <div class="card-title title-1 text-center">
                     <h4 class="fs-5 mt-3 fw-bold">Sit voluptatem</h4>
                     <h4>68.00 $</h4>
                  </div>
              </div>
             </div>
            </div>

            <div class="col-12 col-md-3">
            <div class="special-grid py-2">
              <div class="gallery-single">
               <img className='all-product' src={img02} alt="" />
                <div class="content1 text-center ">
                <i className='icon-1 left-1  p-3 m-1'><FaRegHeart /></i>
                <i className='icon-1 p-3 m-1'><SlBasket /></i>
                <i className='icon-1 p-3 m-1'><LuEye /></i>
                <i className='icon-1 right-1 p-3 m-1'><FaArrowRightArrowLeft /></i>
                </div>
                  <div class="card-title title-1 text-center">
                     <h4 class="fs-5 mt-3 fw-bold">Sit voluptatem</h4>
                     <h4>68.00 $</h4>
                  </div>
              </div>
             </div>
            </div>
            
            <div class="col-12 col-md-3">
            <div class="special-grid py-2">
              <div class="gallery-single">
               <img className='all-product' src={img02} alt="" />
                <div class="content1 text-center ">
                <i className='icon-1 left-1  p-3 m-1'><FaRegHeart /></i>
                <i className='icon-1 p-3 m-1'><SlBasket /></i>
                <i className='icon-1 p-3 m-1'><LuEye /></i>
                <i className='icon-1 right-1 p-3 m-1'><FaArrowRightArrowLeft /></i>
                </div>
                  <div class="card-title title-1 text-center">
                     <h4 class="fs-5 mt-3 fw-bold">Sit voluptatem</h4>
                     <h4>68.00 $</h4>
                  </div>
              </div>
             </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Home