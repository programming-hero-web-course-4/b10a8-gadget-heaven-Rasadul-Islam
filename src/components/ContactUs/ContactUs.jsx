import React, { useState } from "react";
import { Helmet } from 'react-helmet-async';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="container mx-auto p-5 bg-purple-400">
            <Helmet>
                <title>Contact Us | GadgetHeaven</title>
            </Helmet>
            <h1 className="text-3xl font-bold mb-5 text-center">Contact Us</h1>
            {!submitted ? (
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="w-full p-2 border rounded"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-white text-purple-500 font-bold px-4 py-2 rounded hover:bg-purple-700"
                    >
                        Submit
                    </button>
                </form>
            ) : (
                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">
                        Thank you for contacting us!
                    </h2>
                    <p>We have received your message and will respond shortly.</p>
                </div>
            )}
        </div>
    );
};

export default ContactUs;
