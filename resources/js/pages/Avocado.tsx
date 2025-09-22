import { Head, Link, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';
import { dashboard, login, register } from '@/routes';

export default function HassAvocado() {
    const { auth } = usePage<SharedData>().props;

    // Avocado varieties data
    const avocadoVarieties = [
        {
            id: 1,
            name: 'Premium Hass',
            image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            description: 'Export-grade Hass avocados with perfect oil content and texture',
            specs: ['Size: 12-14 count', 'Oil Content: 18-22%', 'Shelf Life: 21 days'],
            price: 'KSh 50-80 each'
        },
        {
            id: 2,
            name: 'Organic Hass',
            image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            description: 'Certified organic Hass avocados grown without synthetic pesticides',
            specs: ['Organic Certified', 'Size: 14-16 count', 'Premium Quality'],
            price: 'KSh 70-100 each'
        },
        {
            id: 3,
            name: 'Jumbo Hass',
            image: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            description: 'Large-sized Hass avocados perfect for retail and food service',
            specs: ['Size: 8-10 count', 'Perfect for slicing', 'High yield'],
            price: 'KSh 90-120 each'
        }
    ];

    // Pack house features
    const packHouseFeatures = [
        {
            icon: '❄️',
            title: 'Cold Storage',
            description: 'State-of-the-art cold rooms maintaining optimal temperature (5-7°C)'
        },
        {
            icon: '📦',
            title: 'Modern Packing',
            description: 'EU-standard packing lines with quality control at every stage'
        },
        {
            icon: '⚖️',
            title: 'Quality Grading',
            description: 'Automated sorting by size, weight, and quality parameters'
        },
        {
            icon: '🚚',
            title: 'Export Ready',
            description: 'Direct loading facilities for seamless export logistics'
        }
    ];

    // Training programs
    const trainingPrograms = [
        {
            title: 'Avocado Farming Basics',
            duration: '2 Days',
            topics: ['Variety selection', 'Soil preparation', 'Planting techniques'],
            fee: 'KSh 5,000'
        },
        {
            title: 'Export Quality Production',
            duration: '3 Days',
            topics: ['GAP certification', 'Pest management', 'Harvest timing'],
            fee: 'KSh 8,000'
        },
        {
            title: 'Post-Harvest Management',
            duration: '2 Days',
            topics: ['Cold chain management', 'Packing standards', 'Quality control'],
            fee: 'KSh 6,000'
        },
        {
            title: 'Market Access & Export',
            duration: '1 Day',
            topics: ['Export procedures', 'Market requirements', 'Documentation'],
            fee: 'KSh 3,000'
        }
    ];

    return (
        <>
            <Head title="Premium Hass Avocado - Sigrut Farms Export Quality">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {/* Navigation */}
                <header className="bg-green-800 text-white sticky top-0 z-50 shadow-lg">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex justify-between items-center">
                            <Link href="/" className="text-2xl font-bold flex items-center">
                                <span className="mr-2">🌱</span>
                                Sigrut Farms
                            </Link>
                            
                            <nav className="hidden md:flex space-x-8">
                                <Link href="/" className="hover:text-amber-300 transition-colors">Home</Link>
                                <Link href="/honey" className="hover:text-amber-300 transition-colors">Honey</Link>
                                <Link href="/poultry" className="hover:text-amber-300 transition-colors">Poultry</Link>
                                <Link href="/services" className="hover:text-amber-300 transition-colors">Services</Link>
                                <Link href="/contact" className="hover:text-amber-300 transition-colors">Contact</Link>
                            </nav>

                            <div className="flex items-center space-x-4">
                                {auth.user ? (
                                    <Link
                                        href={dashboard()}
                                        className="bg-amber-500 px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={login()}
                                            className="hidden md:inline hover:text-amber-300 transition-colors"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            href={register()}
                                            className="bg-amber-500 px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors"
                                        >
                                            Sign Up
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="relative bg-gradient-to-r from-green-700 to-green-900 text-white py-20">
                    <div 
                        className="absolute inset-0 bg-cover bg-center opacity-20"
                        style={{
                            backgroundImage: 'url(https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
                        }}
                    ></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                Premium Hass Avocado
                            </h1>
                            <p className="text-xl mb-8 opacity-90">
                                Export-quality Hass avocados grown in Kenya's prime avocado regions. 
                                Our state-of-the-art cold room pack house ensures premium quality 
                                from farm to international markets.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a 
                                    href="#products" 
                                    className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold text-center hover:bg-amber-600 transition-colors"
                                >
                                    View Products
                                </a>
                                <a 
                                    href="#training" 
                                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-green-800 transition-colors"
                                >
                                    Farmer Training
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quality Standards */}
                <section className="py-16 bg-green-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Export Quality Standards</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Our Hass avocados meet and exceed international export standards with rigorous quality control at every stage
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <div className="text-center p-6">
                                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                                    <span className="text-3xl">🌍</span>
                                </div>
                                <h3 className="text-xl font-bold text-green-800 mb-2">Global Compliance</h3>
                                <p className="text-gray-700">Meets EU, Middle East, and Asian market requirements</p>
                            </div>

                            <div className="text-center p-6">
                                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                                    <span className="text-3xl">📊</span>
                                </div>
                                <h3 className="text-xl font-bold text-green-800 mb-2">Quality Metrics</h3>
                                <p className="text-gray-700">18-22% oil content, perfect dry matter levels</p>
                            </div>

                            <div className="text-center p-6">
                                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                                    <span className="text-3xl">✅</span>
                                </div>
                                <h3 className="text-xl font-bold text-green-800 mb-2">Certifications</h3>
                                <p className="text-gray-700">GlobalGAP, KEPHIS certified, Organic options available</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Avocado Products */}
                <section id="products" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Avocado Varieties</h2>
                            <p className="text-lg text-gray-600">Premium quality Hass avocados for different market needs</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {avocadoVarieties.map(variety => (
                                <div key={variety.id} className="bg-green-50 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
                                    <img 
                                        src={variety.image} 
                                        alt={variety.name}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold text-green-800 mb-2">{variety.name}</h3>
                                        <p className="text-gray-700 mb-4">{variety.description}</p>
                                        
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-green-700 mb-2">Specifications:</h4>
                                            <ul className="space-y-1">
                                                {variety.specs.map((spec, index) => (
                                                    <li key={index} className="flex items-center text-sm text-gray-600">
                                                        <span className="mr-2">•</span> {spec}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div className="flex justify-between items-center">
                                            <span className="text-amber-600 font-bold text-lg">{variety.price}</span>
                                            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                                                Inquire Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Cold Room Pack House */}
                <section className="py-16 bg-gradient-to-br from-green-800 to-green-900 text-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Modern Cold Room Pack House</h2>
                            <p className="text-xl opacity-90 max-w-3xl mx-auto">
                                State-of-the-art facilities ensuring your avocados maintain premium quality from harvest to delivery
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <img 
                                    src="https://images.unsplash.com/photo-1589923188657-1c7e1f0d7c38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Cold Room Pack House"
                                    className="rounded-lg shadow-2xl"
                                />
                            </div>
                            <div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {packHouseFeatures.map((feature, index) => (
                                        <div key={index} className="bg-green-700 p-6 rounded-lg">
                                            <div className="text-3xl mb-3">{feature.icon}</div>
                                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                            <p className="text-green-100">{feature.description}</p>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="mt-8 bg-green-700 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold mb-3">Pack House Services</h3>
                                    <ul className="space-y-2 text-green-100">
                                        <li className="flex items-center">
                                            <span className="mr-2">✓</span> Cold storage rental for farmers
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">✓</span> Professional packing and grading
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">✓</span> Export documentation assistance
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">✓</span> Quality control and certification
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Farmer Training Programs */}
                <section id="training" className="py-16 bg-amber-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Farmer Training Programs</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Empowering farmers with knowledge and skills for successful avocado farming and export business
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {trainingPrograms.map((program, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-green-200">
                                    <h3 className="text-xl font-bold text-green-800 mb-3">{program.title}</h3>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                            {program.duration}
                                        </span>
                                        <span className="text-amber-600 font-bold">{program.fee}</span>
                                    </div>
                                    <ul className="space-y-2 mb-4">
                                        {program.topics.map((topic, topicIndex) => (
                                            <li key={topicIndex} className="flex items-center text-sm text-gray-600">
                                                <span className="mr-2">•</span> {topic}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                                        Register Now
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-8 border border-green-300">
                            <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">Why Train With Us?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center p-4">
                                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-2xl">👨‍🌾</span>
                                    </div>
                                    <h4 className="font-bold text-green-800 mb-2">Expert Trainers</h4>
                                    <p className="text-sm text-gray-600">Learn from experienced avocado farming experts</p>
                                </div>
                                <div className="text-center p-4">
                                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-2xl">🏆</span>
                                    </div>
                                    <h4 className="font-bold text-green-800 mb-2">Practical Training</h4>
                                    <p className="text-sm text-gray-600">Hands-on experience in our demonstration farms</p>
                                </div>
                                <div className="text-center p-4">
                                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-2xl">🤝</span>
                                    </div>
                                    <h4 className="font-bold text-green-800 mb-2">Market Linkages</h4>
                                    <p className="text-sm text-gray-600">Connect with buyers and export markets</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Export Process */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Export Process</h2>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                                <div className="text-center mb-6 md:mb-0">
                                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-2xl">🌱</span>
                                    </div>
                                    <h3 className="font-bold text-green-800">1. Farm Selection</h3>
                                    <p className="text-sm text-gray-600">Partner with quality-conscious farmers</p>
                                </div>
                                <div className="hidden md:block text-green-300 text-2xl">→</div>
                                <div className="text-center mb-6 md:mb-0">
                                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-2xl">📋</span>
                                    </div>
                                    <h3 className="font-bold text-green-800">2. Quality Check</h3>
                                    <p className="text-sm text-gray-600">Rigorous quality assessment</p>
                                </div>
                                <div className="hidden md:block text-green-300 text-2xl">→</div>
                                <div className="text-center">
                                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-2xl">❄️</span>
                                    </div>
                                    <h3 className="font-bold text-green-800">3. Cold Storage</h3>
                                    <p className="text-sm text-gray-600">Optimal temperature maintenance</p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="text-center mb-6 md:mb-0">
                                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-2xl">📦</span>
                                    </div>
                                    <h3 className="font-bold text-green-800">4. Professional Packing</h3>
                                    <p className="text-sm text-gray-600">Export-standard packaging</p>
                                </div>
                                <div className="hidden md:block text-green-300 text-2xl">→</div>
                                <div className="text-center mb-6 md:mb-0">
                                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-2xl">📄</span>
                                    </div>
                                    <h3 className="font-bold text-green-800">5. Documentation</h3>
                                    <p className="text-sm text-gray-600">Complete export paperwork</p>
                                </div>
                                <div className="hidden md:block text-green-300 text-2xl">→</div>
                                <div className="text-center">
                                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-2xl">✈️</span>
                                    </div>
                                    <h3 className="font-bold text-green-800">6. Global Delivery</h3>
                                    <p className="text-sm text-gray-600">Timely international shipping</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-green-700 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Export Premium Hass Avocados?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Partner with us for quality Hass avocados, professional packing services, or comprehensive farmer training.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="/contact" 
                                className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
                            >
                                Contact for Export
                            </a>
                            <a 
                                href="tel:+254743200200" 
                                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors"
                            >
                                Call: +254 743 200 200
                            </a>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-green-900 text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4 flex items-center">
                                    <span className="mr-2">🌱</span>
                                    Sigrut Farms
                                </h3>
                                <p className="text-green-200">
                                    Leading exporters of premium Hass avocados from Kenya with modern cold room facilities.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold mb-4">Avocado Services</h4>
                                <ul className="space-y-2">
                                    <li><a href="#products" className="text-green-200 hover:text-white transition-colors">Avocado Varieties</a></li>
                                    <li><a href="#packhouse" className="text-green-200 hover:text-white transition-colors">Pack House Services</a></li>
                                    <li><a href="#training" className="text-green-200 hover:text-white transition-colors">Farmer Training</a></li>
                                    <li><a href="#export" className="text-green-200 hover:text-white transition-colors">Export Process</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold mb-4">Contact Info</h4>
                                <ul className="space-y-2 text-green-200">
                                    <li className="flex items-center">
                                        <span className="mr-2">📍</span> Nairobi, Kenya
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2">📞</span> +254 743 200 200
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2">✉️</span> avocados@sigrutfarms.com
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold mb-4">Business Hours</h4>
                                <ul className="space-y-2 text-green-200">
                                    <li>Monday-Friday: 7:00am-6:00pm</li>
                                    <li>Saturday: 8:00am-4:00pm</li>
                                    <li>Sunday: Closed</li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-300">
                            <p>&copy; {new Date().getFullYear()} Sigrut Farms International. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>

            <style>{`
                html {
                    scroll-behavior: smooth;
                }
            `}</style>
        </>
    );
}