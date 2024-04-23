import React from 'react'

export default function WhyUs() {
    return (
        <section id="why-us" className="why-us section-bg">
            <div className="container-fluid" data-aos="fade-up">

                <div className="row">

                    <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

                        <div className="content">
                            <h3>Why Choose Us</h3>
                            <p>
                                We understand that selecting the right software solutions provider is crucial for the success of your business. Here are some compelling reasons to choose us:
                            </p>
                        </div>

                        <div className="accordion-list">
                            <ul>
                                <li>
                                    <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span> Expertise and Innovation <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                    <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                                        <p>
                                            With years of experience and a passion for innovation, we excel in delivering cutting-edge solutions that meet your unique requirements. Our team of experts stays updated with the latest technologies and trends to ensure that you receive the most advanced and effective solutions for your business.
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> Customized Solutions <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                    <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                                        <p>
                                            We understand that every business is different. That's why we offer tailor-made solutions that are specifically designed to address your business challenges and goals. Whether you need custom software development, IT infrastructure solutions, or consultancy services, we've got you covered.
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> Exceptional Customer Service <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                    <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                                        <p>
                                            Your satisfaction is our top priority. We pride ourselves on providing exceptional customer service and support throughout the project lifecycle and beyond. Our dedicated team is always available to address your concerns, answer your questions, and ensure that your experience with us is nothing short of excellent.
                                        </p>
                                    </div>
                                </li>

                            </ul>
                        </div>

                    </div>

                    <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{ backgroundImage: 'url("assets/img/why-us.png")' }} data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
                </div>

            </div>
        </section>
    )
}
