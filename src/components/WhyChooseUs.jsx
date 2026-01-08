import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, HelpCircle, Clock } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            title: 'Expert Guidance',
            desc: 'Our certified consultants have years of experience in immigration laws and procedures.',
            icon: <ShieldCheck size={32} />
        },
        {
            title: 'Fast Processing',
            desc: 'We prioritize your application to ensure the fastest possible processing times.',
            icon: <Zap size={32} />
        },
        {
            title: '24/7 Support',
            desc: 'Our team is always available to answer your queries and provide updates.',
            icon: <HelpCircle size={32} />
        },
        {
            title: 'Success Rate',
            desc: 'We maintain a 99% success rate across all types of visa applications.',
            icon: <Clock size={32} />
        }
    ];

    return (
        <section className="py-24 bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Why Choose <span className="text-accent">Path Visa Advisor</span>?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        We combine expertise with a personalized approach to make your international dreams a reality.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="p-8 glass-card border-none bg-gradient-to-br from-white/10 to-transparent"
                        >
                            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-400">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
