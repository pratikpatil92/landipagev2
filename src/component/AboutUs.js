import React from 'react'

export default function AboutUs() {
    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>About Us</h2>
                </div>

                <div className="row content">
                    <div className="col-lg-6">
                        <p>
                            We are a leading software solutions company based in the bustling city of Mumbai, India. With a focus on innovation and excellence, we empower businesses of all sizes to thrive in the digital age.
                        </p>
                        <p>
                            Our team of experienced developers, designers, and strategists works tirelessly to deliver tailored software solutions that address our clients' unique challenges and drive tangible results.
                        </p>
                        <p>
                            At our core, we believe in leveraging technology to simplify complexities and enhance efficiency. Whether it's developing custom software applications, implementing robust IT infrastructure, or providing expert consultancy services, we are committed to exceeding our clients' expectations every step of the way.
                        </p>
                        <ul>
                            <li><i className="ri-check-double-line"></i> Custom software development</li>
                            <li><i className="ri-check-double-line"></i> IT infrastructure solutions</li>
                            <li><i className="ri-check-double-line"></i> Consultancy and project management</li>
                            <li><i className="ri-check-double-line"></i> Ongoing support and maintenance</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0">
                        <p>
                            We understand that every business is unique, which is why we approach each project with a fresh perspective and a commitment to delivering tailor-made solutions that align with our clients' goals and objectives.
                        </p>
                        <p>
                            Our dedication to quality, integrity, and customer satisfaction sets us apart in the competitive landscape. By fostering long-term partnerships built on trust and transparency, we ensure mutual success and growth for our clients and ourselves.
                        </p>
                        <p>
                            Whether you're a startup looking to establish a digital presence, a small business aiming to streamline operations, or a large enterprise seeking scalable software solutions, we have the expertise and the passion to turn your vision into reality.
                        </p>
                        <a href="#services" className="btn-learn-more">Learn More</a>
                    </div>
                </div>

            </div>
        </section>
    )
}
