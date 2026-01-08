import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        country: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch("https://formspree.io/f/xjgknpjo", {
                method: "POST",
                body: new FormData(e.target),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Redirect to thank you page
                window.location.href = "/thankyou.html";
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-24"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In <span className="text-accent">Touch</span></h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Have questions about your visa application? Our experts are here to help. Send us a message or visit our office.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Details */}
                    <div className="space-y-12">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold">Contact Details</h2>
                            <div className="flex gap-6 items-start">
                                <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent shrink-0">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-1">Phone Number</h4>
                                    <p className="text-gray-400">+91 85116 66923</p>
                                    <p className="text-sm text-gray-500">Mon-Fri: 9am - 6pm</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent shrink-0">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-1">Email Address</h4>
                                    <p className="text-gray-400">pathvisaadvisor@gmail.com</p>
                                    <p className="text-gray-400">support@pathvisaadvisor.com</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent shrink-0">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-1">Office Location</h4>
                                    <p className="text-gray-400">Shayona Shikhar, Gota, Ahmedabad- 382481, Gujarat, India</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="h-64 rounded-2xl overflow-hidden glass-card relative bg-slate-800 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="text-accent mx-auto mb-2" size={32} />
                                <p className="text-gray-400 font-medium italic">Interactive Map View</p>
                            </div>
                            {/* In a real app, embed Google Map iframe here */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528082187!2d-74.11976373946229!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                className="absolute inset-0 w-full h-full border-none grayscale opacity-30 invert pointer-events-none"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card p-10 relative">
                        <AnimatePresence>
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-slate-900/95 z-20 rounded-2xl"
                                >
                                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle size={48} />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                                    <p className="text-gray-400">Thank you for reaching out. Our consultant will contact you within 24 hours.</p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-8 text-accent underline font-semibold"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : null}
                        </AnimatePresence>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent"
                                        placeholder="+91 12345 67890"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Service Required</label>
                                    <select
                                        name="service"
                                        required
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent"
                                    >
                                        <option value="">Select Service</option>
                                        <option value="student">Student Visa</option>
                                        <option value="work">Work Visa</option>
                                        <option value="tourist">Tourist Visa</option>
                                        <option value="business">Business Visa</option>
                                        <option value="passport">Passport Services</option>
                                        <option value="tour">Tour packages visa</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Target Country</label>
                                    <select
                                        name="country"
                                        required
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent"
                                    >
                                        <option value="">Select Country</option>
                                        <option value="canada">Canada</option>
                                        <option value="usa">USA</option>
                                        <option value="uk">UK</option>
                                        <option value="australia">Australia</option>
                                        <option value="germany">Germany</option>
                                        <option value="europe">Europe</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent"
                                    placeholder="Tell us about your requirements..."
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full btn-primary py-4 mt-4 flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={20} />
                            </motion.button>
                            {status === 'error' && (
                                <p className="text-red-500 text-sm mt-2 text-center">
                                    Oops! There was a problem sending your message. Please try again.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
