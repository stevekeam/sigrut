import { Link } from '@inertiajs/react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: 'Products',
            links: [
                { name: 'Hass Avocado', href: '/Avocado' },
                { name: 'Honey Products', href: '/HoneyProducts' },
                { name: 'Fresh Poultry', href: '/Poultry' },
                { name: 'Bee Products', href: '/HoneyProducts' },
                { name: 'Organic Vegetables', href: '/products' },
            ]
        },
        {
            title: 'Services',
            links: [
                { name: 'Farm Accommodation', href: '/Accommodation' },
                { name: 'Conference Facilities', href: '/Farm_Tours' },
                { name: 'Farm Tours', href: '/Farm_Tours' },
                { name: 'Beekeeping Training', href: '/HoneyProducts' },
                { name: 'Cold Storage', href: '/avocado#packhouse' },
            ]
        },
        {
            title: 'Company',
            links: [
                { name: 'About Us', href: '/About' },
                { name: 'Our Story', href: '/About' },
                { name: 'Sustainability', href: '/about#sustainability' },
                { name: 'Certifications', href: '/about#certifications' },
                { name: 'Careers', href: '/careers' },
            ]
        },
        {
            title: 'Support',
            links: [
                { name: 'Contact_Us', href: '/Contact_Us' },
                { name: 'FAQ', href: '/faq' },
                { name: 'Shipping Info', href: '/shipping' },
                { name: 'Returns', href: '/returns' },
                { name: 'Privacy Policy', href: '/privacy' },
            ]
        }
    ];

    const socialLinks = [
        { name: 'Facebook', icon: '📘', href: '#' },
        { name: 'Instagram', icon: '📷', href: '#' },
        { name: 'Twitter', icon: '🐦', href: '#' },
        { name: 'YouTube', icon: '📺', href: '#' },
        { name: 'WhatsApp', icon: '💬', href: 'https://wa.me/254743200200' }
    ];

    return (
        <footer className="bg-green-900 text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    {/* Brand Info */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center">
                            {/* Add your brand logo or name here */}
                            <span className="text-2xl font-bold">Sigrut Orchard & Hive Ltd</span>
                        </Link>
                        <p className="mt-4 text-gray-300">
                            Premium farm products and services from Sigrut Orchard & Hive Ltd.
                        </p>
                    </div>
                    {/* Footer Sections */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-semibold mb-4">{section.title}</h3>
                            <ul>
                                {section.links.map((link) => (
                                    <li key={link.name} className="mb-2">
                                        <Link href={link.href} className="hover:underline">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                {/* Social Links */}
                <div className="flex justify-center mt-8 space-x-6">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover:text-green-400"
                        >
                            <span role="img" aria-label={social.name}>{social.icon}</span>
                        </a>
                    ))}
                </div>
                {/* Copyright */}
                <div className="mt-8 text-center text-gray-400">
                    &copy; {currentYear} Sigrut Orchard & Hive Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    )}
