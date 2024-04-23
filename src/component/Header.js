import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <>
            <header id="header" className="fixed-top ">
                <div className="container d-flex align-items-center">

                    <h1 className="logo me-auto"><a href="#">Dramastra</a></h1>

                    {/* <Link href="index.html" className="logo me-auto"><Image src="assets/img/logo.png" width="100" height="100" alt="" className="img-fluid" /></Link> */}

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><Link className="nav-link scrollto active" href="#hero">Home</Link></li>
                            <li><Link className="nav-link scrollto" href="#about">About</Link></li>
                            <li><Link className="nav-link scrollto" href="#services">Services</Link></li>
                            <li><Link className="nav-link scrollto" href="#faq">FAQ</Link></li>
                            {/* <li><Link className="nav-link scrollto" href="#portfolio">Portfolio</Link></li> */}
                            {/* <li><Link className="nav-link scrollto" href="#team">Team</Link></li> */}
                            {/* <li className="dropdown"><Link href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></Link>
                                <ul>
                                    <li><Link href="#">Drop Down 1</Link></li>
                                    <li className="dropdown"><Link href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></Link>
                                        <ul>
                                            <li><Link href="#">Deep Drop Down 1</Link></li>
                                            <li><Link href="#">Deep Drop Down 2</Link></li>
                                            <li><Link href="#">Deep Drop Down 3</Link></li>
                                            <li><Link href="#">Deep Drop Down 4</Link></li>
                                            <li><Link href="#">Deep Drop Down 5</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href="#">Drop Down 2</Link></li>
                                    <li><Link href="#">Drop Down 3</Link></li>
                                    <li><Link href="#">Drop Down 4</Link></li>
                                </ul>
                            </li> */}
                            <li><Link className="nav-link scrollto" href="#contact">Contact</Link></li>
                            <li><Link className="getstarted scrollto" href="#contact">Get Started</Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>
            <section id="hero" className="d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <h1>Better Solutions For Your Business</h1>
                            <h2>We are team of talented designers making websites with Bootstrap</h2>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <a href="#contact" className="btn-get-started scrollto">Get Started</a>
                                {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video"><i className="bi bi-play-circle"></i><span>Watch Video</span></a> */}
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                            <Image src="/assets/img/hero-img.png" fill={true} className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
