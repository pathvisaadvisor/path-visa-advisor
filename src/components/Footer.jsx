import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-glass-border pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <img
                                src="/assets/path_visa_logo_1767778682196.png"
                                alt="Path Visa Advisor"
                                className="h-10 w-auto"
                            />
                            <span className="text-xl font-bold font-heading">
                                <span className="text-white">PATH</span>
                                <span className="text-accent ml-1">VISA</span>
                            </span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Providing world-class visa and immigration consultancy services with integrity and excellence.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-glass flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'Services', 'Countries', 'Clients', 'Contact Us'].map((link) => (
                                <li key={link}>
                                    <Link
                                        to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                                        className="text-gray-400 hover:text-accent transition-colors"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
                        <ul className="space-y-4">
                            {['Student Visa', 'Work Visa', 'Tourist Visa', 'Business Visa', 'Passport Services', 'Tour packages visa'].map((service) => (
                                <li key={service}>
                                    <Link to="/services" className="text-gray-400 hover:text-accent transition-colors">
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-gray-400">
                                <MapPin className="text-accent shrink-0" size={20} />
                                <span>Shayona Shikhar, Gota, Ahmedabad- 382481, Gujarat, India</span>
                            </li>
                            <li className="flex gap-3 text-gray-400">
                                <Phone className="text-accent shrink-0" size={20} />
                                <span>+1 (555) 000-1234</span>
                            </li>
                            <li className="flex gap-3 text-gray-400">
                                <Mail className="text-accent shrink-0" size={20} />
                                <span>info@pathvisasolutions.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-glass-border pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Path Visa Advisor. All Rights Reserved.</p>
                </div>
            </div>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/15550001234"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
            >
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.821 4.754a8.962 8.962 0 01-4.415-1.161l-.317-.188-3.272.859.874-3.19-.205-.326a8.948 8.948 0 01-1.373-4.729c0-4.948 4.026-8.974 8.976-8.974 2.407 0 4.67.94 6.37 2.64s2.64 3.963 2.64 6.37c0 4.948-4.026 8.974-8.974 8.974m8.406-12.078c-1.716-1.714-3.998-2.659-6.425-2.659-5.003 0-9.074 4.071-9.074 9.075 0 1.6.416 3.161 1.206 4.54l-1.28 4.675 4.782-1.254a9.043 9.043 0 004.364 1.132h.004c5.003 0 9.073-4.072 9.073-9.075 0-2.427-.945-4.71-2.66-6.426"></path>
                </svg>
            </a>
        </footer>
    );
};

export default Footer;
