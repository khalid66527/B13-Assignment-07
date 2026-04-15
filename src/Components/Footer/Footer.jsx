import React from 'react';
import { FaGithub, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';   // X (Twitter) icon from Font Awesome 6

const Footer = () => {
    return (
        <footer className="bg-[#0F3A2F] text-white mt-32 py-8">
            <div className="max-w-4xl mx-auto px-6">
                {/* Main Content */}
                <div className="text-center">
                    <h2 className="text-4xl font-bold tracking-wide">KeenKeeper</h2>
                    <p className="mt-2 text-sm opacity-90">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>

                    {/* Social Links */}
                    <div className="mt-8">
                        <p className="text-sm uppercase tracking-widest mb-3">Social Links</p>
                        <div className="flex justify-center gap-8">
                            <a 
                                href="#" 
                                className="text-4xl hover:text-[#00BFFF] transition-colors duration-300"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a 
                                href="#" 
                                className="text-4xl hover:text-[#00BFFF] transition-colors duration-300"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </a>
                            <a 
                                href="#" 
                                className="text-4xl hover:text-[#00BFFF] transition-colors duration-300"
                                aria-label="X (Twitter)"
                            >
                                <FaXTwitter />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-xs opacity-75">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;