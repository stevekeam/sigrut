import AppLayout from '../layouts/app-layout';

export default function HassAvocado() {
    // Avocado varieties data
    const avocadoVarieties = [
        {
            id: 1,
            name: 'Premium Hass',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2023/11/IMG-20231031-WA0086.jpg',
            description: 'Export-grade Hass avocados with perfect oil content and texture',
            specs: ['Size: 12-14 count', 'Oil Content: 18-22%', 'Shelf Life: 21 days'],
        },
        {
            id: 2,
            name: 'Organic Hass',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2023/11/IMG-20231031-WA0096.jpg',
            description: 'Certified organic Hass avocados grown without synthetic pesticides',
            specs: ['Organic Certified', 'Size: 14-16 count', 'Premium Quality'],
        },
        {
            id: 3,
            name: 'Jumbo Hass',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2023/11/IMB06qNFctujCXY2qqLUodsPTPkszZExAG47G1xK_RI_plaintext_638343485433066984.jpg',
            description: 'Large-sized Hass avocados perfect for retail and food service',
            specs: ['Size: 8-10 count', 'Perfect for slicing', 'High yield'],
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
        },
        {
            title: 'Export Quality Production',
            duration: '3 Days',
            topics: ['GAP certification', 'Pest management', 'Harvest timing'],
        },
        {
            title: 'Post-Harvest Management',
            duration: '2 Days',
            topics: ['Cold chain management', 'Packing standards', 'Quality control'],
        },
        {
            title: 'Market Access & Export',
            duration: '1 Day',
            topics: ['Export procedures', 'Market requirements', 'Documentation'],
        }
    ];

    return (
        <AppLayout title="Premium Hass Avocado - Sigrut Farms Export Quality">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-green-700 to-green-900 text-white py-54 overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://Sigrutfarmsinternational.com/wp-content/uploads/2023/10/avocados-4436393_1920.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black opacity-30"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-2xl mx-auto">
                        {/* Centered content */}
                        <div className="text-center mb-8">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Premium Hass Avocados
                            </h1>
                            <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
                                Export-quality Hass avocados from Kenya's leading sustainable farm
                            </p>
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
                            <div key={variety.id} className="bg-green-50 rounded-xl overflow-hidden shadow-lg">
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
                                src="https://Sigrutfarmsinternational.com/wp-content/uploads/2023/11/IMG-20231031-WA0167.jpg"
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
                                </div>
                                <ul className="space-y-2">
                                    {program.topics.map((topic, topicIndex) => (
                                        <li key={topicIndex} className="flex items-center text-sm text-gray-600">
                                            <span className="mr-2">•</span> {topic}
                                        </li>
                                    ))}
                                </ul>
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
                    <div className="text-lg">
                        <p>Contact us at: <strong>+254 743 200 200</strong></p>
                    </div>
                </div>
            </section>

            <style jsx>{`
                html {
                    scroll-behavior: smooth;
                }
            `}</style>
        </AppLayout>
    );
}