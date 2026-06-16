
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaHeart } from 'react-icons/fa'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-background pt-24 pb-12 px-4 border-t border-white/5 overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="inline-block mb-8">
                            <div className="w-16 h-16 rounded-[24px] border border-accent/30 flex items-center justify-center bg-accent/10 group hover:border-accent transition-all duration-500">
                                <span className="text-accent text-3xl font-black group-hover:scale-110 transition">8</span>
                            </div>
                        </Link>
                        <h2 className="text-4xl font-black text-text mb-6 tracking-tighter">MUHAMMAD UZAIR</h2>
                        <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                            Crafting premium digital experiences through cutting-edge MERN stack solutions and innovative design thinking.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-text font-black text-sm uppercase tracking-[0.2em] mb-8">Navigation</h3>
                        <ul className="space-y-4">
                            {['Home', 'Services', 'Projects', 'Reviews'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item === 'Projects' ? '/projects' : `/#${item.toLowerCase()}`}
                                        className="text-gray-500 hover:text-accent font-bold transition-all duration-300"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link to="/admin" className="text-gray-500 hover:text-accent font-bold transition-all duration-300">Admin</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Presence */}
                    <div>
                        <h3 className="text-text font-black text-sm uppercase tracking-[0.2em] mb-8">Social</h3>
                        <div className="flex flex-wrap gap-4">
                            {[FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white hover:border-accent transition-all duration-500"
                                >
                                    <Icon className="text-xl" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 font-bold text-sm tracking-widest uppercase">
                        © {currentYear} MUHAMMAD UZAIR. ALL RIGHTS RESERVED.
                    </p>
                    <p className="text-gray-500 font-bold text-sm tracking-widest uppercase flex items-center gap-2">
                        DESIGNED WITH <FaHeart className="text-accent animate-pulse" /> IN PAKISTAN
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
