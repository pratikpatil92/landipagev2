"use client"
import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default function Contact() {
    let initialValue = {
        name: "",
        email: "",
        subject: "",
        message: "",
    }
    const [value, setValue] = useState(initialValue)
    const [success, setSuccess] = useState("")
    const [error, setError] = useState(true)
    const [loading, setLoading] = useState(false)


    const postContact = () => {
        if (!value.name &&
            !value.email &&
            !value.subject &&
            !value.message) {
            setError(true)
            return
        }
        setLoading(true)
        let body = {
            "firstName": value.name,
            "lastName": "",
            "email": value.email,
            "phone": "",
            "subject": value.Subject,
            "message": value.Message
        }
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}api/v1/contactus`, body).then((res) => {
            setLoading(false)
            toast.success("Mail sent successfully", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }).catch((err) => {
            setLoading(false)
            toast.error("Somthing went wrong", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })

        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        postContact()
        setValue(initialValue)
    }

    const handleChange = (e) => {
        setError(false)
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Contact</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row">

                    {/* <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>

                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>info@example.com</p>
                            </div>

                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+1 5589 55488 55s</p>
                            </div>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe>
                        </div>

                    </div> */}

                    {/* <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch"> */}
                    <form onSubmit={onSubmit} method="post" role="form" className="php-email-form1">
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="name">Your Name</label>
                                <input value={value.name} type="text" name="name" onChange={handleChange} className="form-control" id="name" required />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="name">Your Email</label>
                                <input type="email" value={value.email} className="form-control" onChange={handleChange} name="email" id="email" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Subject</label>
                            <input type="text" value={value.subject} className="form-control" onChange={handleChange} name="subject" id="subject" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Message</label>
                            <textarea value={value.message} className="form-control" name="message" onChange={handleChange} rows="10" required></textarea>
                        </div>
                        <div className="my-3">
                            {loading ? <div className="loading">Loading</div> : null}
                            {/* {error ? <div className="error-message">Please fill all fields</div> : null}
                            {success ? <div className="sent-message">Your message has been sent. Thank you!</div> : null} */}
                        </div>
                        <div className="text-center"><button type="submit">Send Message</button></div>
                    </form>
                </div>

                {/* </div> */}

            </div>
            <ToastContainer />
        </section>
    )
}
