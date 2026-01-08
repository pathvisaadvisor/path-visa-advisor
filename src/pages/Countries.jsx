import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle2 } from 'lucide-react';

const Countries = () => {
    const countries = [
        {
            name: 'Canada',
            image: '/assets/canada_visa_card_1767778723657.png',
            visas: ['Study Visa', 'Work Permit', 'Express Entry', 'Visitor Visa']
        },
        {
            name: 'USA',
            image: '/assets/usa_visa_card_1767778760440.png',
            visas: ['F-1 Student', 'H1-B Work', 'B1/B2 Visitor', 'L-1 Transfer']
        },
        {
            name: 'UK',
            image: '/assets/uk_visa_card_1767778778283.png',
            visas: ['Student Visa', 'Skilled Worker', 'Graduate Route', 'Standard Visitor']
        },
        {
            name: 'Australia',
            image: '/assets/australia_visa_card_1767778810519.png',
            visas: ['Student (500)', 'Subclass 189/190', 'Working Holiday', 'Visitor']
        },
        {
            name: 'New Zealand',
            image: '/assets/new_zealand_visa_card_1767778828194.png',
            visas: ['Fee Paying Student', 'Accredited Employer', 'Skilled Migrant', 'Visitor']
        },
        {
            name: 'Germany',
            image: '/assets/germany_visa_card_1767778875867.png',
            visas: ['Student Applicant', 'Job Seeker', 'EU Blue Card', 'Schengen']
        },
        {
            name: 'Europe (Schengen)',
            image: '/assets/europe_visa_card_1767778960355.png',
            visas: ['Tourist Visa', 'Business Visa', 'Short-term Study', 'Family Visit']
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
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Choose Your <span className="text-accent">Destination</span></h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We provide specialized immigration services for the world's most popular destinations. Select a country to see the visa types we support.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {countries.map((country, index) => (
                        <motion.div
                            key={country.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="glass-card overflow-hidden group hover:border-accent/40 transition-all duration-300"
                        >
                            <div className="h-60 relative overflow-hidden">
                                <img
                                    src={country.image}
                                    alt={country.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                                <div className="absolute bottom-6 left-8 flex items-center gap-2">
                                    <MapPin className="text-accent" size={24} />
                                    <h3 className="text-2xl font-bold text-white">{country.name}</h3>
                                </div>
                            </div>
                            <div className="p-8">
                                <h4 className="text-accent font-semibold uppercase tracking-wider text-sm mb-4">Supported Visa Types</h4>
                                <ul className="space-y-3">
                                    {country.visas.map((visa) => (
                                        <li key={visa} className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle2 className="text-accent/60" size={18} />
                                            {visa}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Countries;
