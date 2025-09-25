import { Link } from '@inertiajs/react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-green-900 to-green-800 text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-6 py-12">
                {/* Top Section - Brand and Quick Links */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center space-x-4 mb-6">
                            <img 
                                src="https://Sigrutfarmsinternational.com/wp-content/uploads/2024/12/Screenshot-2024-12-04-083308.png" 
                                alt="Sigrut Farms International Logo" 
                                className="h-32 w-auto drop-shadow-lg"
                            />
                            <div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                                    Sigrut Orchard & Hive Ltd
                                </h3>
                                <p className="text-green-300 text-sm font-medium">Freshness Begins At Home</p>
                            </div>
                        </div>
                        <div className="space-y-2 text-green-200">
                            <p className="flex items-center space-x-2">
                                <span className="text-green-400">📧</span>
                                <span>info@sigrut.com</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <span className="text-green-400">📞</span>
                                <span>+254 743 200 200</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <span className="text-green-400">📍</span>
                                <span>Ukwala, Siaya County, Kenya</span>
                            </p>
                        </div>
                    </div>

                    {/* Quick Links Grid */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* COMPANY */}
                            <div className="group">
                                <div className="flex items-center space-x-3 mb-4 pb-2 border-b-2 border-green-600">
                                    <div className="w-2 h-6 bg-gradient-to-b from-green-400 to-green-300 rounded-full"></div>
                                    <h4 className="font-bold text-green-300 uppercase tracking-wider text-sm">Company</h4>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { name: 'About Us', href: '/About' },
                                        { name: 'Sustainability', href: '/about#sustainability' },
                                        { name: 'Certifications', href: '/about#certifications' },
                                        { name: 'Careers', href: '/careers' }
                                    ].map((link) => (
                                        <Link 
                                            key={link.name}
                                            href={link.href}
                                            className="block text-green-200 hover:text-white transition-all duration-300 transform hover:translate-x-2 text-sm font-medium"
                                        >
                                            • {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* PRODUCTS */}
                            <div className="group">
                                <div className="flex items-center space-x-3 mb-4 pb-2 border-b-2 border-green-600">
                                    <div className="w-2 h-6 bg-gradient-to-b from-amber-400 to-amber-300 rounded-full"></div>
                                    <h4 className="font-bold text-green-300 uppercase tracking-wider text-sm">Products</h4>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { name: 'Hass Avocado', href: '/Avocado' },
                                        { name: 'Apiary', href: '/HoneyProducts' },
                                        { name: 'Fresh Poultry', href: '/Poultry' },
                                        { name: 'Organic Vegetables', href: '/products' },
                                        { name: 'moringa', href: '/moringa' }
                                    ].map((link) => (
                                        <Link 
                                            key={link.name}
                                            href={link.href}
                                            className="block text-green-200 hover:text-white transition-all duration-300 transform hover:translate-x-2 text-sm font-medium"
                                        >
                                            • {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* SERVICES */}
                            <div className="group">
                                <div className="flex items-center space-x-3 mb-4 pb-2 border-b-2 border-green-600">
                                    <div className="w-2 h-6 bg-gradient-to-b from-blue-400 to-blue-300 rounded-full"></div>
                                    <h4 className="font-bold text-green-300 uppercase tracking-wider text-sm">Services</h4>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { name: 'Farm Accommodation', href: '/Accommodation' },
                                        { name: 'Agritourism', href: '/Agritourism' }
                                    ].map((link) => (
                                        <Link 
                                            key={link.name}
                                            href={link.href}
                                            className="block text-green-200 hover:text-white transition-all duration-300 transform hover:translate-x-2 text-sm font-medium"
                                        >
                                            • {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-green-700/50 mb-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
                    {/* Copyright */}
                    <div className="text-center lg:text-left">
                        <p className="text-green-300/80 text-sm">
                            &copy; {currentYear} Sigrut Orchard & Hive Ltd. All rights reserved.
                        </p>
                        <p className="text-green-400/60 text-xs mt-1">
                            Freshness Begins At Home • Ukwala, Siaya County, Kenya
                        </p>
                    </div>

                    {/* Legal Links */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { name: 'Privacy Policy', href: '/privacyPolicy' },
                            { name: 'Tearms And Conditions', href: '/TearmsAndConditions' },
                            { name: 'Contact Us', href: '/Contact_Us' },
                            { name: 'Sitemap', href: '/sitemap' }
                        ].map((link) => (
                            <Link 
                                key={link.name}
                                href={link.href}
                                className="text-green-300/80 hover:text-white transition-colors duration-200 text-sm font-medium px-3 py-1 rounded-lg hover:bg-green-800/30"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Social Proof */}
                    <div className="flex items-center space-x-4">
                        <div className="flex space-x-3">
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}