import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Plane, UserCheck, Search, Users, BookOpen, Map } from 'lucide-react';

const Services = () => {
    const serviceList = [
        {
            title: 'Student Visa',
            icon: <GraduationCap size={40} />,
            desc: 'Expert guidance for university admissions and visa processing in top destinations like UK, USA, and Canada.'
        },
        {
            title: 'Work Visa',
            icon: <Briefcase size={40} />,
            desc: 'Secure your professional future abroad. We handle skilled worker visas, employer-sponsored paths, and more.'
        },
        {
            title: 'Tourist Visa',
            icon: <Plane size={40} />,
            desc: 'Explore the world without the stress of paperwork. Fast and reliable tourist visa services for all major countries.'
        },
        {
            title: 'Business Visa',
            icon: <UserCheck size={40} />,
            desc: 'Expand your business horizons. We assist with investor visas, entrepreneur paths, and business travel permits.'
        },
        {
            title: 'Passport Services',
            icon: <BookOpen size={40} />,
            desc: 'Seamless assistance for new passport applications, renewals, and corrections. We ensure a hassle-free experience with expert guidance.'
        },
        {
            title: 'Tour packages visa',
            icon: <Map size={40} />,
            desc: 'Expertly curated tour packages with seamless visa processing for a worry-free travel experience.'
        },
        {
            title: 'Visa Consultation',
            icon: <Search size={40} />,
            desc: 'Not sure where to start? Our experts provide deep-dive assessments to find your best visa options.'
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-24"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Our <span className="text-accent">Services</span></h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Comprehensive immigration and visa solutions tailored to your unique needs. We handle the complexity so you can focus on your journey.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceList.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="p-10 glass-card bg-gradient-to-br from-white/5 to-transparent hover:border-accent/30 flex flex-col items-center text-center group"
                        >
                            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Services;
