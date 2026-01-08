import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import WhyChooseUs from '../components/WhyChooseUs';
import { ChevronRight, Globe, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const featuredCountries = [
        { name: 'Canada', image: '/assets/canada_visa_card_1767778723657.png' },
        { name: 'USA', image: '/assets/usa_visa_card_1767778760440.png' },
        { name: 'UK', image: '/assets/uk_visa_card_1767778778283.png' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Hero />
            <Stats />

            {/* Featured Countries Preview */}
            <section className="py-24 bg-slate-900 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Popular <span className="text-accent">Destinations</span></h2>
                            <p className="text-gray-400">Explore our most requested visa pathways.</p>
                        </div>
                        <Link to="/countries" className="hidden md:flex items-center gap-2 text-accent font-semibold hover:gap-4 transition-all">
                            View All Countries <ChevronRight size={20} />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {featuredCountries.map((country, idx) => (
                            <motion.div
                                key={country.name}
                                whileHover={{ scale: 1.03 }}
                                className="relative h-80 rounded-2xl overflow-hidden group shadow-2xl"
                            >
                                <img src={country.image} alt={country.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent flex flex-col justify-end p-8">
                                    <h3 className="text-2xl font-bold text-white mb-2">{country.name}</h3>
                                    <Link to="/countries" className="text-accent font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        Explore Options <ChevronRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <WhyChooseUs />

            {/* Testimonials Snippet */}
            <section className="py-24 bg-slate-950">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-16">Trusted by Thousands of <span className="text-accent">Success Stories</span></h2>
                    <div className="max-w-4xl mx-auto glass-card p-12 relative">
                        <Star className="text-accent absolute -top-6 left-1/2 -translate-x-1/2" size={48} fill="currentColor" />
                        <p className="text-xl md:text-2xl italic text-gray-300 mb-8">
                            "Path Visa Advisor made my dream of studying in Canada a reality. Their team was professional, transparent, and guided me through every step of the process. I couldn't have done it without them!"
                        </p>
                        <div>
                            <h4 className="text-lg font-bold text-white">Sarah Jenkins</h4>
                            <p className="text-accent">Toronto, Canada</p>
                        </div>
                    </div>
                    <div className="mt-12">
                        <Link to="/clients">
                            <button className="btn-secondary">Read More Success Stories</button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-gradient-to-r from-primary to-slate-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Start Your Global Journey?</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Get a free assessment of your profile and find the best immigration pathway today.</p>
                    <Link to="/contact">
                        <button className="btn-primary py-4 px-10 text-lg">Apply for Consultation Now</button>
                    </Link>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
