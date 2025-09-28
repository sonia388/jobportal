import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#f8f6fa] text-[#141316] py-12">
            < div className = "container mx-auto px-4" >
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-xl font-bold">Job Hunt</h2>
                        <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
                    </div>

                    <div className="text-center md:text-right">
                        <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>
                        <div className="flex justify-center md:justify-end space-x-4">
                            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-white transition-colors duration-300">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-white transition-colors duration-300">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-white transition-colors duration-300">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div >
        </footer >
    );
}

export default Footer;
