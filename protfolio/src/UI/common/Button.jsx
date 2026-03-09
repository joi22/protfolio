
import { motion } from 'motion/react'

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const variants = {
        primary: 'bg-accent text-white hover:bg-hover shadow-lg shadow-accent/20',
        outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white',
        ghost: 'hover:bg-accent/10 text-accent transition'
    }

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    )
}

export default Button
