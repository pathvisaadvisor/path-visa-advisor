import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Clients = () => {
    const testimonials = [
        {
            name: 'Sarah Jenkins',
            location: 'Toronto, Canada',
            text: "Path Visa Advisor made my dream of studying in Canada a reality. Their team was professional, transparent, and guided me through every step of the process. I couldn't have done it without them!",
            rating: 5,
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
        },
        {
            name: 'Rajesh Kumar',
            location: 'Melbourne, Australia',
            text: "The skilled worker visa process was daunting until I found Path Visa Advisor. Their expertise in Australian immigration law is unmatched. They handled the paperwork, and I focused on my new career.",
            rating: 5,
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
        },
        {
            name: 'Emma Thompson',
            location: 'London, UK',
            text: "Fast, reliable, and friendly service. I applied for a tourist visa and received it much sooner than expected. Highly recommend them for anyone looking for hassle-free travel consultancy.",
            rating: 5,
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
        },
        {
            name: 'Michael Schmidt',
            location: 'Berlin, Germany',
            text: "As an entrepreneur, setting up in Germany was complex. Path Visa Advisor provided crucial business visa support that ensured my startup's smooth relocation. A truly professional team.",
            rating: 4,
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150'
        },
        {
            name: 'Anita Desai',
            location: 'Auckland, NZ',
            text: "I was struggling with my initial student visa rejection. Path Visa Advisor analyzed my case, found the errors, and helped me reapply successfully. They turned a stressful situation into a success.",
            rating: 5,
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150'
        },
        {
            name: 'David Wilson',
            location: 'New York, USA',
            text: "The diversity visa lottery assistance was top-notch. They make sure everything is perfect. I'm now happily settled in the US, all thanks to Path Visa Advisor.",
            rating: 5,
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
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
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Client <span className="text-accent">Success Stories</span></h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Don't just take our word for it. Hear from the thousands of individuals and families we've helped find their path overseas.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-8 glass-card flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={18}
                                            className={i < t.rating ? "text-accent" : "text-gray-600"}
                                            fill={i < t.rating ? "currentColor" : "none"}
                                        />
                                    ))}
                                </div>
                                <div className="relative mb-8">
                                    <Quote className="absolute -top-4 -left-4 text-accent/20" size={40} />
                                    <p className="text-gray-300 italic relative z-10">{t.text}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 border-t border-glass-border pt-6">
                                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-accent" />
                                <div>
                                    <h4 className="font-bold text-white">{t.name}</h4>
                                    <p className="text-sm text-gray-500">{t.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Success Metrics Banner */}
                <div className="mt-24 p-12 glass-card bg-accent/5 border-accent/20 text-center">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div>
                            <h2 className="text-5xl font-bold text-accent mb-2">99%</h2>
                            <p className="text-white font-medium">Visa Success Rate</p>
                        </div>
                        <div>
                            <h2 className="text-5xl font-bold text-accent mb-2">5k+</h2>
                            <p className="text-white font-medium">Approved Visas</p>
                        </div>
                        <div>
                            <h2 className="text-5xl font-bold text-accent mb-2">12k+</h2>
                            <p className="text-white font-medium">Happy Consultations</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Clients;
