
import { motion } from 'motion/react'

const Section = ({ id, badge, title, subtitle, children, className = '', containerClass = '' }) => {
    return (
        <section id={id} className={`py-12 px-4 bg-background relative overflow-hidden ${className}`}>
            <div className={`container mx-auto max-w-7xl relative z-10 ${containerClass}`}>
                {(badge || title || subtitle) && (
                    <div className="text-center mb-24">
                        {badge && (
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-accent font-black tracking-[0.4em] mb-4 uppercase text-xs sm:text-sm inline-block shadow-glow shadow-accent/10"
                            >
                                {badge}
                            </motion.span>
                        )}
                        {title && (
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl lg:text-7xl font-black text-text mb-8 tracking-tighter leading-tight"
                            >
                                {title}
                            </motion.h2>
                        )}
                        {subtitle && (
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
                            >
                                {subtitle}
                            </motion.p>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    )
}

export default Section
