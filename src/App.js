import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'  

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <div id="overlayer"></div>
        <div class="loader">
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>

        <div class="site-wrap" id="home-section">

          <div class="site-mobile-menu site-navbar-target">
            <div class="site-mobile-menu-header">
              <div class="site-mobile-menu-close mt-3">
                <span class="icon-close2 js-menu-toggle"></span>
              </div>
            </div>
            <div class="site-mobile-menu-body"></div>
          </div>


          <header class="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">

            <div class="container">
              <div class="row align-items-center">

                <div class="col-6 col-md-3 col-xl-4  d-block">
                  <h1 class="mb-0 site-logo"><a href="index.html" class="text-black h2 mb-0">Reports<span class="text-primary">.</span> </a></h1>
                  <input id="searchBox" type="text" placeholder="Search.." />
                </div>

                <div class="col-12 col-md-9 col-xl-8 main-menu">
                  <nav class="site-navigation position-relative text-right" role="navigation">
                    <ul class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block ml-0 pl-0">
                      <li><a href="#home-section" class="nav-link">Home</a></li>
                      <li><NavLink to="/Reports" class="nav-link">Research Report</NavLink></li>
                      <li class="has-children">
                        <a href="#about-section" class="nav-link">Categories</a>
                        <ul class="dropdown arrow-top">
                          <li><a href="#our-team-section" class="nav-link">Agriculture</a></li>
                          <li><a href="#our-team-section" class="nav-link">Biotechnology</a></li>
                          <li><a href="#our-team-section" class="nav-link">Chemicals & Materials</a></li>
                          <li><a href="#our-team-section" class="nav-link">Defense & Aerospace</a></li>
                          <li><a href="#our-team-section" class="nav-link">Business & Finance</a></li>
                          <li><a href="#our-team-section" class="nav-link">Food & Beverages</a></li>
                          <li><a href="#our-team-section" class="nav-link">Internet & Communication</a></li>
                          <li><a href="#our-team-section" class="nav-link">Others</a></li>
                        </ul>
                      </li>
                      <li><a href="#about-section" class="nav-link">About Us</a></li>
                      <li><a href="#contact-section" class="nav-link">Contact Us</a></li>
                    </ul>
                  </nav>
                </div>


                <div class="col-6 col-md-9 d-inline-block d-lg-none ml-md-0" ><a href="#" class="site-menu-toggle js-menu-toggle text-black float-right"><span class="icon-menu h3"></span></a></div>

              </div>
            </div>

          </header>


          <div class="site-blocks-cover" style={{ overflow: 'hidden' }}>
            <div class="container">
              <div class="row align-items-center justify-content-center">

                <div class="col-md-12" style={{ position: "relative" }}>

                  <img src="images/undraw_investing_7u74.svg" alt="Image" class="img-fluid img-absolute" />

                  <div class="row mb-4" data-aos="fade-up" data-aos-delay="200">
                    <div class="col-lg-6 mr-auto">
                      <h1>Make Your Business More Profitable</h1>
                      <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                      <div>
                        <a href="#" class="btn btn-primary mr-2 mb-2">Get Started</a>
                      </div>
                    </div>


                  </div>

                </div>
              </div>
            </div>
          </div>


          <div class="site-section" id="features-section">
            <div class="container">
              <div class="row mb-5 justify-content-center text-center" data-aos="fade-up">
                <div class="col-7 text-center  mb-5">
                  <h2 class="section-title">Our Reports</h2>
                  <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos quaerat sapiente nam, id vero.</p>
                </div>
              </div>
              <div class="row">
                <div class="col 6">
                  <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">Latest Reports</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Mark</td>
                      </tr>
                      <tr>
                        <td>Jacob</td>
                      </tr>
                      <tr>
                        <td>Larry</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="col 6">
                  <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">Premium Reports</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Mark</td>
                      </tr>
                      <tr>
                        <td>Jacob</td>
                      </tr>
                      <tr>
                        <td>Larry</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="feature-big">
            <div class="container">

              <div class="mt-5 row mb-5 site-section ">
                <div class="col-lg-7 order-1 order-lg-2" data-aos="fade-left">
                  <img src="images/undraw_metrics_gtu7.svg" alt="Image" class="img-fluid" />
                </div>
                <div class="col-lg-5 pr-lg-5 mr-auto mt-5 order-2 order-lg-1">
                  <h2 class="text-black">Communicate and gather feedback</h2>
                  <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam</p>



                  <div class="author-box" data-aos="fade-right">
                    <div class="d-flex mb-4">
                      <div class="mr-3">
                        <img src="images/person_1.jpg" alt="Image" class="img-fluid rounded-circle" />
                      </div>
                      <div class="mr-auto text-black">
                        <strong class="font-weight-bold mb-0">Kimberly Gush</strong> <br />
                        Co-Founder, XYZ Inc.
                </div>
                    </div>
                    <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?&rdquo;</blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="site-section bg-light" id="about-section">
            <div class="container">
              <div class="row mb-5">
                <div class="col-12 text-center">
                  <h2 class="section-title mb-3">About Us</h2>
                </div>
              </div>
              <div class="row mb-5">
                <div class="col-lg-6" data-aos="fade-right">
                  <img src="images/undraw_bookmarks_r6up.svg" alt="Image" class="img-fluid" />
                </div>
                <div class="col-lg-5 ml-auto pl-lg-5">
                  <h2 class="text-black mb-4 h3 font-weight-bold">Our Mission</h2>
                  <p class="mb-4">Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque.</p>
                  <ul class="ul-check mb-5 list-unstyled success">
                    <li>Laborum enim quasi at modi</li>
                    <li>Ad at tempore</li>
                    <li>Labore quaerat esse</li>
                  </ul>
                  <p><a href="#" class="btn btn-primary">Learn More</a></p>
                </div>
              </div>


            </div>
          </div>


          <div class="site-section testimonial-wrap bg-light" id="testimonials-section">
            <div class="container">
              <div class="row mb-5">
                <div class="col-12 text-center">
                  <h2 class="section-title mb-3">Our Clients</h2>
                </div>
              </div>
            </div>
            <div class="slide-one-item home-slider owl-carousel">
              <div>
                <div class="testimonial">
                  <figure class="mb-4 d-block align-items-center justify-content-center">
                    <div><img src="images/person_3.jpg" alt="Image" class="w-100 img-fluid mb-3 shadow" /></div>
                  </figure>
                  <blockquote class="mb-3">
                    <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                  </blockquote>
                  <p class="text-black"><strong>John Smith</strong></p>


                </div>
              </div>
              <div>
                <div class="testimonial">

                  <figure class="mb-4 d-block align-items-center justify-content-center">
                    <div><img src="images/person_2.jpg" alt="Image" class="w-100 img-fluid mb-3 shadow" /></div>
                  </figure>

                  <blockquote class="mb-3">
                    <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                  </blockquote>

                  <p class="text-black"><strong>Robert Aguilar</strong></p>


                </div>
              </div>

              <div>
                <div class="testimonial">
                  <figure class="mb-4 d-block align-items-center justify-content-center">
                    <div><img src="images/person_4.jpg" alt="Image" class="w-100 img-fluid mb-3 shadow" /></div>
                  </figure>
                  <blockquote class="mb-3">
                    <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                  </blockquote>
                  <p class="text-black"><strong>Roger Spears</strong></p>


                </div>

              </div>

              <div>
                <div class="testimonial">
                  <figure class="mb-4 d-block align-items-center justify-content-center">
                    <div><img src="images/person_1.jpg" alt="Image" class="w-100 img-fluid mb-3 shadow" /></div>
                  </figure>
                  <blockquote class="mb-3">
                    <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                  </blockquote>
                  <p class="text-black"><strong>Kyle McDonald</strong></p>


                </div>

              </div>

            </div>
          </div>

          <div class="site-section bg-image2 overlay" id="contact-section" style={{ backgroundImage: "url('images/hero_1.jpg')" }}>
            <div class="container">
              <div class="row mb-5">
                <div class="col-12 text-center">
                  <h2 class="section-title mb-3 text-white">Contact Us</h2>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-7 mb-5">



                  <form action="#" class="p-5 bg-white">

                    <h2 class="h4 text-black mb-5">Contact Form</h2>

                    <div class="row form-group">
                      <div class="col-md-6 mb-3 mb-md-0">
                        <label class="text-black" for="fname">First Name</label>
                        <input type="text" id="fname" class="form-control rounded-0" />
                      </div>
                      <div class="col-md-6">
                        <label class="text-black" for="lname">Last Name</label>
                        <input type="text" id="lname" class="form-control rounded-0" />
                      </div>
                    </div>

                    <div class="row form-group">

                      <div class="col-md-12">
                        <label class="text-black" for="email">Email</label>
                        <input type="email" id="email" class="form-control rounded-0" />
                      </div>
                    </div>

                    <div class="row form-group">

                      <div class="col-md-12">
                        <label class="text-black" for="subject">Subject</label>
                        <input type="subject" id="subject" class="form-control rounded-0" />
                      </div>
                    </div>

                    <div class="row form-group">
                      <div class="col-md-12">
                        <label class="text-black" for="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="7" class="form-control rounded-0" placeholder="Leave your message here..."></textarea>
                      </div>
                    </div>

                    <div class="row form-group">
                      <div class="col-md-12">
                        <input type="submit" value="Send Message" class="btn btn-primary mr-2 mb-2" />
                      </div>
                    </div>


                  </form>
                </div>

              </div>

            </div>
          </div>

          <div class="footer py-5 text-center">
            <div class="container">
              <div class="row mb-5">
                <div class="col-12">
                  <p class="mb-0">
                    <a href="#" class="p-3"><span class="icon-facebook"></span></a>
                    <a href="#" class="p-3"><span class="icon-twitter"></span></a>
                    <a href="#" class="p-3"><span class="icon-instagram"></span></a>
                    <a href="#" class="p-3"><span class="icon-linkedin"></span></a>
                    <a href="#" class="p-3"><span class="icon-pinterest"></span></a>
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <p class="mb-0">
                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  
}



export default App;
