import React from 'react'

export default function FAQ() {
    return (
        <section id="faq" className="faq section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Frequently Asked Questions</h2>
                    <p>Got questions? We've got answers. Check out our FAQs below to find the information you need.</p>
                </div>

                <div className="faq-list">
                    <ul>
                        <li data-aos="fade-up" data-aos-delay="100">
                            <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapsed" data-bs-target="#faq-list-1">What technologies do you use for application development? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-1" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                    We specialize in application development using the latest technologies such as React, Angular, Node.js, and MongoDB. These technologies allow us to build modern and scalable web applications that meet the needs of our clients.
                                </p>
                            </div>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="200">
                            <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapsed" data-bs-target="#faq-list-2">What AWS services do you offer? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                    We offer a range of AWS services to help businesses optimize their cloud infrastructure. Our services include but are not limited to AWS EC2, AWS S3, AWS Lambda, AWS RDS, and AWS CloudFormation.
                                </p>
                            </div>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="300">
                            <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapsed" data-bs-target="#faq-list-3">How do I get started with your services? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                    Getting started with our services is easy. Simply contact us through our website or give us a call, and one of our representatives will get in touch with you to discuss your requirements and provide a personalized solution tailored to your needs.
                                </p>
                            </div>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="400">
                            <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapsed" data-bs-target="#faq-list-4">Do you provide ongoing support for applications? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                    Yes, we provide ongoing support and maintenance services for applications developed by us. Our team of experts is available to address any issues or concerns you may have and ensure that your application operates smoothly and efficiently.
                                </p>
                            </div>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="500">
                            <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapsed" data-bs-target="#faq-list-5">What is your approach to project management? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                    Our approach to project management is collaborative and transparent. We work closely with our clients to understand their requirements and goals, and we provide regular updates and progress reports throughout the project lifecycle. Our goal is to ensure that projects are delivered on time, within budget, and to the highest quality standards.
                                </p>
                            </div>
                        </li>

                    </ul>
                </div>

            </div>
        </section>

    )
}
