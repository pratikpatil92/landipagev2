import React from 'react'

export default function Services() {
    return (
        <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">

                <div class="section-title">
                    <h2>Services</h2>
                    <p>At our company, we offer a wide range of services to cater to your business needs. Our goal is to provide innovative solutions that help you achieve your objectives and stay ahead in the competitive market.</p>
                </div>

                <div className="row">
                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bxl-dribbble"></i></div>
                            <h4><a href="">Software Development</a></h4>
                            <p>We specialize in developing custom software applications tailored to your specific requirements. From initial concept to final deployment, we ensure that your software solution meets the highest standards of quality and performance.</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-file"></i></div>
                            <h4><a href="">IT Infrastructure Solutions</a></h4>
                            <p>Our IT infrastructure solutions are designed to optimize your organization's performance and efficiency. Whether you need network setup, server configuration, or cloud migration services, we've got you covered.</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-tachometer"></i></div>
                            <h4><a href="">Ongoing Support and Maintenance</a></h4>
                            <p>Our commitment to customer satisfaction doesn't end with project delivery. We provide ongoing support and maintenance services to ensure that your software solution operates smoothly and remains up-to-date with the latest technologies.</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-layer"></i></div>
                            <h4><a href="">Project Management</a></h4>
                            <p>Our team of experts provides consultancy services to help you make informed decisions and maximize your return on investment. We also offer project management solutions to ensure seamless execution and timely delivery of projects.</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
