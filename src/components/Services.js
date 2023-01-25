import React from 'react'

function Services() {
  return (
    <>
    <section className="services vh-100 d-flex align-items-center text-light bg-black">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-8 mx-auto text-center">
          <h5 className="text-primary">Services</h5>
          <h1>Our Services</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In delectus pariatur itaque sunt suscipit aperiam,
            explicabo magnam maiores cupiditate laborum nam commodi fugit doloribus iusto quibusdam numquam aliquam
            veritatis ad!</p>
        </div>
      </div>
      <div className="row g-4 bg-dark">
        <div className="col-lg-4 col-sm-6 mt-5">
          <div className="service card-effect">
            <div className="iconbox">
              <i className='bx bxs-comment-detail'></i>
            </div>
            <h5>Live Chat</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugit porro ducimus sequi ratione doloribus
              eaque saepe excepturi</p>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 mt-5">
          <div className="service card-effect">
            <div className="iconbox">
              <i className='bx bxs-rocket'></i>
            </div>
            <h5>Theme Design</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugit porro ducimus sequi ratione doloribus
              eaque saepe excepturi</p>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 mt-5">
          <div className="service card-effect">
            <div className="iconbox">
              <i className='bx bxs-doughnut-chart'></i>
            </div>
            <h5>Doughnut Chart</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugit porro ducimus sequi ratione doloribus
              eaque saepe excepturi</p>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 mb-5">
          <div className="service card-effect">
            <div className="iconbox">
              <i className='bx bxs-heart'></i>
            </div>
            <h5>Programing</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugit porro ducimus sequi ratione doloribus
              eaque saepe excepturi</p>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 mb-5">
          <div className="service card-effect">
            <div className="iconbox">
              <i className='bx bxs-cog'></i>
            </div>
            <h5>Logic</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugit porro ducimus sequi ratione doloribus
              eaque saepe excepturi</p>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 mb-5">
          <div className="service card-effect">
            <div className="iconbox">
              <i className='bx bxs-check-shield'></i>
            </div>
            <h5>Trust</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugit porro ducimus sequi ratione doloribus
              eaque saepe excepturi</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    
  </>
  )
}

export default Services;