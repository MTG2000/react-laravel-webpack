import React from "react";
import "./styles/contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    document.title = "Contact Us";
    return (
        <div className={`w-100 contact`}>
            <div
                className={"contactImage"}
                style={{
                    backgroundImage:
                        'url("https://drive.google.com/uc?id=1MxufDwE0jSj0Lk0_SZhRXMbIHhilHtOO")'
                }}
            >
                <h1
                    className="text-center mt-6 mb-5 text-white"
                    data-aos="zoom-in"
                >
                    Contact Us Now
                </h1>
            </div>
            <div className="container mx-auto mb-6">
                <h3
                    className="text-center mt-6 mb-6 text-dark"
                    data-aos="zoom-out"
                >
                    If you have any question or inquiry Contact us and we will
                    respond as soon as possible
                </h3>
                <div className="row justify-content-around">
                    <div
                        className="col-lg-3 row justify-content-around"
                        data-aos="fade-right"
                    >
                        <FontAwesomeIcon
                            icon="phone-volume"
                            className="text-primary mx-auto mt-4"
                            size="3x"
                        />
                        <div className="text-dark d-flex justify-content-center2 flex-column col-9">
                            <p className="text-primary text-left">Phone</p>
                            <h5>+967-968453720</h5>
                            <h5>+967-968753937</h5>
                        </div>
                    </div>
                    <div
                        className="col-lg-3 row justify-content-around"
                        data-aos="fade-up"
                    >
                        <FontAwesomeIcon
                            icon="at"
                            className="text-primary  mx-auto mt-4 "
                            size="3x"
                        />
                        <div className="text-dark d-flex justify-content-center2 flex-column col-9">
                            <p className="text-primary text-left">Email</p>
                            <h5>info@petroasiachem.com</h5>
                            <h5>ardi@gmail.com</h5>
                        </div>
                    </div>
                    <div
                        className="col-lg-3 row justify-content-around"
                        data-aos="fade-left"
                    >
                        <FontAwesomeIcon
                            icon="fax"
                            className="text-primary  mx-auto mt-4"
                            size="3x"
                        />
                        <div className="text-dark d-flex justify-content-center2 flex-column col-9">
                            <p className="text-primary text-left">Fax</p>
                            <h5 className="text-nowrap">+98 23 8846 9688</h5>
                        </div>
                    </div>
                </div>
                <form className="row mt-5">
                    <h2
                        className="text-primary col-lg-12 mt-5"
                        data-aos="fade-right"
                    >
                        {" "}
                        Or Send a message
                    </h2>
                    <div className="form-group col-lg-6" data-aos="fade-right">
                        <label htmlFor="nameForm">Your Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nameForm"
                            placeholder="eg.Ahmad Adnan"
                            required
                        />
                    </div>
                    <div className="form-group col-lg-6" data-aos="fade-left">
                        <label htmlFor="exampleInputEmail1">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="eg.morad@gmail.com"
                            required
                        />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div className="form-group col-lg-12" data-aos="fade-left">
                        <label htmlFor="nameForm">Your Message</label>
                        <textarea
                            type="text"
                            className="form-control"
                            id="nameForm"
                            rows="6"
                            placeholder="Hello, How are you ...."
                            required
                            style={{ resize: "none" }}
                        />
                    </div>
                    <div className="d-flex justify-content-center mt-4 col-12">
                        <button
                            type="submit"
                            className="btn btn-lg btn-primary"
                            data-aos="flip-right"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
