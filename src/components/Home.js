import React from 'react'

function Home() {
  return (
    <div className="hero vh-100 d-flex align-items-center bg-black" id="home">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 mx-auto text-center">
          <h1 className="display-2 text-white">Build Robust Landing Pages Now</h1>
          <p className="text-white my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptates odio
            animi, nam est impedit enim ea nihil et dolorem unde mollitia at velit delectus veritatis doloribus
            voluptatibus saepe hic.</p>
          <span href="#" className="btn btn-primary me-2">Get Started</span>
          <span href="#" className="btn btn-outline-light">My Portfolio</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home