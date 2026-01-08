import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, CheckCircle } from 'lucide-react';

const Stats = () => {
    const stats = [
        { label: 'Years Experience', value: '10+', icon: <Award className="text-accent" size={40} /> },
        { label: 'Visas Approved', value: '5000+', icon: <CheckCircle className="text-accent" size={40} /> },
        { label: 'Countries Served', value: '20+', icon: <Globe className="text-accent" size={40} /> },
        { label: 'Happy Clients', value: '100%', icon: <Users className="text-accent" size={40} /> },
    ];

    return (
        <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-center p-6 glass-card hover:bg-white/10 transition-colors"
                        >
                            <div className="mb-4 flex justify-center">{stat.icon}</div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</h3>
                            <p className="text-gray-400 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
