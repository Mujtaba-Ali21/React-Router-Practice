import React from 'react'

function Contact() {
  return (
    <section id="contact" class="vh-100 d-flex align-items-center text-light bg-black">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-8 mx-auto text-center">
            <h5 class="text-primary">Contact</h5>
            <h1>Get In Touch</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In delectus pariatur itaque sunt suscipit aperiam</p>
          </div>
        </div>

        <form action="#" class="row g-4 justify-content-center">
          <div class="col-md-5">
            <input type="text" class="form-control bg-dark border-0" placeholder="Full Name"/>
          </div>

          <div class="col-md-5">
            <input type="text" class="form-control bg-dark border-0" placeholder="Email"/>
          </div>

          <div class="col-md-10">
            <input type="text" class="form-control bg-dark border-0" placeholder="Enter Subject"/>
          </div>

          <div class="col-md-10">
            <textarea name="" id="" cols="30" rows="5" class="form-control bg-dark border-0" placeholder="Enter Your Suggestions"></textarea>
          </div>

          <div class="col-md-10 d-grid">
            <button type="button" class="btn btn-primary">Submit</button>
          </div>
        </form>

      </div>
      </section>
  )
}

export default Contact