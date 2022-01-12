import Head from "next/head";
import NextLink from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#__next">
            <img className="img-logo" src="images/productionhub.png" />
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto my-2 my-lg-0">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <NextLink href="/signup">
                  <a className="nav-link js-scroll-trigger">Sign Up</a>
                </NextLink>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="http://www.productionhub.eu/cz/"
                >
                  CZ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <h1 className="text-uppercase text-white font-weight-bold">
                VIDEOMARKET PLACE
              </h1>
              <hr className="divider my-4" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 font-weight-light mb-5">
                Do you make videos? Or Would you like buy video?
                <br />
                You are on right place - PRODUCTIONHUB!
              </p>
              <a
                className="btn btn-primary btn-xl js-scroll-trigger"
                href="#about"
              >
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </header>
      <section className="page-section bg-primary" id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">We've got what you need!</h2>
              <hr className="divider light my-4" />
              <p className="text-white-50 mb-4">
                <h5 className="text-white">
                  THE BUYERS
                  <br />
                  <br />- can set up a project;
                  <br />- get professional videomakers;
                  <br />- get your video
                  <br />
                  <br />
                  THE VIDEOMAKERS
                  <br />
                  <br />- make profiles;
                  <br />- present their work;
                  <br />- list offers
                </h5>
              </p>
              <a
                className="btn btn-light btn-xl js-scroll-trigger"
                href="#services"
              >
                Get Started!
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section" id="services">
        <div className="container">
          <h2 className="text-center mt-0">At Your Service</h2>
          <hr className="divider my-4" />
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa-gem text-primary mb-4"></i>
                <h3 className="h4 mb-2">Set up a project</h3>
                <p className="text-muted mb-0">
                  Describe the video you've in mind. It takes just 5 minutes and
                  it's for free.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                <h3 className="h4 mb-2">List videomakers</h3>
                <p className="text-muted mb-0">
                  Professional videomakers bid on your project. Choose one,
                  there are many of them.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa-globe text-primary mb-4"></i>
                <h3 className="h4 mb-2">Make profile</h3>
                <p className="text-muted mb-0">
                  Present yourself and your work. Join to community!
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                <h3 className="h4 mb-2">List offers</h3>
                <p className="text-muted mb-0">
                  Make the best bids of your work to buyers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="portfolio">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="assets/img/bhp.png">
                <img className="img-fluid" src="images/bhp.png" alt="" />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                    Production
                  </div>
                  <div className="project-name">BLUE HILLS PICTURES</div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a
                className="portfolio-box"
                href="assets/img/studiozakominem.png"
              >
                <img
                  className="img-fluid"
                  src="images/studiozakominem.png"
                  alt=""
                />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                    Postproduction
                  </div>
                  <div className="project-name">STUDIO ZA KOMINEM</div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="assets/img/nyla.png">
                <img className="img-fluid" src="images/nyla.png" alt="" />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                    Creative agancy
                  </div>
                  <div className="project-name">NYLA</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="page-section" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0">Let's Get In Touch!</h2>
              <hr className="divider my-4" />
              <p className="text-muted mb-5">
                Ready to start your next project with us? Give us a call or send
                us an email and we will get back to you as soon as possible!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
              <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
              <div>+420 775 322 101</div>
            </div>
            <div className="col-lg-4 mr-auto text-center">
              <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
              <a className="d-block" href="mailto:info@productionhub.eu">
                info@productionhub.eu
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>
      <footer className="bg-light py-5">
        <div className="container">
          <div className="small text-center text-muted">
            Copyright © 2021 - ProductionHub
          </div>
        </div>
      </footer>
    </>
  );
}
