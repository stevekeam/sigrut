import { Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import { useState, useEffect } from 'react';

export default function Header() {
    const { auth } = usePage().props; // ✅ no <SharedData>
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    // Navigation items
    const navigation = [
        { name: 'Home', href: '/', current: true },
        { name: 'About', href: '/About', current: false },
        { name: 'HoneyProducts', href: '/HoneyProducts', current: false },
        { name: 'Avocado', href: '/Avocado', current: false },
        { name: 'Poultry', href: '/Poultry', current: false },
        { name: 'Accommodation', href: '/Accommodation', current: false },
        { name: 'Farm_Tours', href: '/Farm_Tours', current: false },
        { name: 'Contact_Us', href: '/Contact_Us', current: false },
    ];

    // Scroll spy
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'products', 'about', 'services', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="bg-green-800 text-white sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4">
                {/* Top Bar */}
                <div className="hidden md:flex justify-between items-center py-2 border-b border-green-700 text-sm">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <span className="mr-2">📞</span>
                            <span>+254 743 200 200</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">✉️</span>
                            <span>info@sigrut.com</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span>🌤️ Siaya, Kenya</span>
                        <span>🏆 Certified Organic</span>
                    </div>
                </div>

                {/* Main Navigation */}
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <Link href="/" className="flex items-center">
  <img
    src="https://Sigrutfarmsinternational.com/wp-content/uploads/2024/12/new-sigrut.png"
    alt="Sigrut Farms Logo"
    className="h-12 w-auto object-contain"
  />
</Link>

                        <div>
                            <h1 className="text-2xl font-bold">Sigrut Orchard & Hive Ltd</h1>
                            <p className="text-green-200 text-sm">Sustainable Agriculture</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="hover:text-amber-300 transition-colors font-medium py-2 border-b-2 border-transparent hover:border-amber-300"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Auth & Cart */}
                    <div className="flex items-center space-x-4">
                        {/* Cart Icon */}
                        <button className="relative p-2 hover:text-amber-300 transition-colors">
                            <span className="text-xl">🛒</span>
                            <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                0
                            </span>
                        </button>

                        {/* Auth Buttons */}
                        {auth && auth.user ? (
                            <Link
                                href={dashboard()}
                                className="bg-amber-500 px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors font-medium"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <div className="hidden md:flex items-center space-x-3">
                                <Link
                                    href={login()}
                                    className="hover:text-amber-300 transition-colors font-medium"
                                >
                                    Login
                                </Link>
                                <Link
                                    href={register()}
                                    className="bg-amber-500 px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors font-medium"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        )}

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 hover:text-amber-300 transition-colors"
                        >
                            <span className="text-2xl">{isMenuOpen ? '✕' : '☰'}</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-green-900 border-t border-green-700">
                        <nav className="py-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block py-3 px-4 hover:bg-green-700 transition-colors border-l-4 border-transparent hover:border-amber-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            
                            {/* Mobile Auth */}
                            {!(auth && auth.user) && (
                                <div className="border-t border-green-700 mt-4 pt-4 px-4 space-y-3">
                                    <Link
                                        href={login()}
                                        className="block text-center py-2 hover:text-amber-300 transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href={register()}
                                        className="block text-center bg-amber-500 py-2 rounded-lg hover:bg-amber-600 transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Sign Up
                                    </Link>
                                </div>
                            )}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
