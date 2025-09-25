import AppLayout from '../layouts/app-layout';

export default function Home() {
    // Avocado Process Steps
    const processSteps = [
        {
            step: 1,
            title: 'Orchard Management',
            icon: '🌳',
            description: 'Sustainable farming practices in our avocado orchards',
            details: ['Organic fertilization', 'Precision irrigation', 'Soil health monitoring', 'Integrated pest management']
        },
        {
            step: 2,
            title: 'Quality Harvesting',
            icon: '👨‍🌾',
            description: 'Hand-picked at perfect maturity for optimal quality',
            details: ['Selective harvesting', 'Proper handling techniques', 'Quality grading', 'Dry matter testing']
        },
        {
            step: 3,
            title: 'Cold Chain Processing',
            icon: '❄️',
            description: 'State-of-the-art cold storage facilities',
            details: ['Temperature control', 'Quick cooling', 'Quality preservation', 'Export readiness']
        },
        {
            step: 4,
            title: 'Export Preparation',
            icon: '📦',
            description: 'Meeting international standards and certifications',
            details: ['Phytosanitary compliance', 'Proper packaging', 'Documentation', 'Quality assurance']
        }
    ];

    // Quality Certifications
    const certifications = [
        {
            name: 'GlobalGAP Certified',
            description: 'Meeting international Good Agricultural Practices',
            icon: '🌍'
        },
        {
            name: 'KEPHIS Approved',
            description: 'Kenya Plant Health Inspectorate Service certification',
            icon: '✅'
        },
        {
            name: 'Organic Compliance',
            description: 'Adherence to organic farming standards',
            icon: '🌱'
        },
        {
            name: 'HACCP Certified',
            description: 'Hazard Analysis Critical Control Point system',
            icon: '⚡'
        }
    ];

    // Orchard Features
    const orchardFeatures = [
        {
            metric: '500+',
            label: 'Hectares of Orchards',
            description: 'Expansive avocado plantations across optimal growing regions'
        },
        {
            metric: '18-22%',
            label: 'Oil Content',
            description: 'Premium Hass avocados with perfect dry matter levels'
        },
        {
            metric: '100%',
            label: 'Traceability',
            description: 'Complete supply chain transparency from farm to market'
        },
        {
            metric: '24/7',
            label: 'Quality Monitoring',
            description: 'Continuous quality control throughout the process'
        }
    ];

    return (
        <AppLayout title="Sigrut Farms - Premium Hass Avocado Orchard - Kenya's Finest Export Quality">
            {/* Hero Section - Updated with Left-aligned Text */}
            <section className="relative bg-gradient-to-r from-green-800 to-green-900 text-white min-h-screen flex items-center">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://Sigrutfarmsinternational.com/wp-content/uploads/2023/10/avocados-3594376_1920.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black opacity-30"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-2xl">
                        {/* Left-aligned content */}
                        <div className="mb-8">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                               You Deserve Fresh Avos
                            </h1>
                            <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
                                Kenya's leading exporter of premium Hass avocados. Experience our commitment to quality, 
                                sustainability, and international excellence.
                            </p>
                        </div>
                        
                        {/* Primary Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <a 
                                href="#process" 
                                className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition-colors text-lg text-center"
                            >
                                Our Quality Process
                            </a>
                            <a 
                                href="#certifications" 
                                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors text-lg text-center"
                            >
                                View Certifications
                            </a>
                        </div>

                        {/* Explore More Buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <a 
                                href="/About" 
                                className="bg-green-600 bg-opacity-80 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center text-sm"
                            >
                                About Our Farm
                            </a>
                            <a 
                                href="/Products" 
                                className="bg-green-600 bg-opacity-80 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center text-sm"
                            >
                                Our Products
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alternative Hero Section Option - Text Overlay at Bottom */}
            {/* Uncomment this section if you prefer text at the bottom */}
            {/*
            <section className="relative bg-gradient-to-r from-green-800 to-green-900 text-white min-h-screen flex items-end">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://Sigrutfarmsinternational.com/wp-content/uploads/2023/11/IMG-20231031-WA0105.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                
                <div className="container mx-auto px-4 relative z-10 pb-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Premium Hass Avocado Orchard
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 opacity-90">
                            Kenya's leading exporter of premium Hass avocados
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="#process" 
                                className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
                            >
                                Explore Our Process
                            </a>
                            <a 
                                href="/gallery" 
                                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors"
                            >
                                View Gallery
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            */}

            {/* Rest of your existing sections remain unchanged */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Orchard Excellence</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Committed to producing the finest Hass avocados through sustainable practices and quality focus
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {orchardFeatures.map((feature, index) => (
                            <div key={index} className="text-center p-6">
                                <div className="text-4xl font-bold text-amber-600 mb-2">{feature.metric}</div>
                                <h3 className="text-xl font-semibold text-green-800 mb-2">{feature.label}</h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section id="process" className="py-16 bg-green-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Quality Process</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            From orchard to export, every step is meticulously managed to ensure premium quality 
                            that meets international standards
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step) => (
                            <div key={step.step} className="bg-white rounded-xl p-6 shadow-lg text-center">
                                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">{step.icon}</span>
                                </div>
                                <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-bold text-green-800 mb-3">{step.title}</h3>
                                <p className="text-gray-700 mb-4">{step.description}</p>
                                <ul className="space-y-2 text-left">
                                    {step.details.map((detail, index) => (
                                        <li key={index} className="flex items-center text-sm text-gray-600">
                                            <span className="mr-2">•</span> {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section id="certifications" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">International Certifications</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our commitment to quality is validated by internationally recognized certifications
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {certifications.map((cert, index) => (
                            <div key={index} className="text-center p-6 bg-green-50 rounded-lg">
                                <div className="text-4xl mb-4">{cert.icon}</div>
                                <h3 className="text-lg font-bold text-green-800 mb-2">{cert.name}</h3>
                                <p className="text-gray-700 text-sm">{cert.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Orchard Gallery */}
            <section className="py-16 bg-green-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Orchard in Pictures</h2>
                        <p className="text-lg text-gray-600">A visual journey through our sustainable avocado orchards</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img 
                                src="https://Sigrutfarmsinternational.com/wp-content/uploads/2023/11/IMG-20231031-WA0079.jpg" 
                                alt="Avocado Orchard" 
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img 
                                src="https://Sigrutfarmsinternational.com/wp-content/uploads/2023/11/IMG-20231031-WA0086.jpg" 
                                alt="Harvesting Process" 
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img 
                                src="https://Sigrutfarmsinternational.com/wp-content/uploads/2023/11/IMG-20231031-WA0167.jpg" 
                                alt="Quality Control" 
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sustainability Commitment */}
            <section className="py-16 bg-gradient-to-br from-green-800 to-green-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Sustainable Farming Commitment</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center p-6">
                            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">💧</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Water Conservation</h3>
                            <p className="text-green-100">Efficient irrigation systems and rainwater harvesting</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🌱</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Soil Health</h3>
                            <p className="text-green-100">Organic matter management and erosion control</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">👨‍🌾</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Community Support</h3>
                            <p className="text-green-100">Fair employment and local community development</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Building CTA */}
            <section className="py-16 bg-amber-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Building Trust Through Transparency</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700">
                        We believe in open communication and building long-term partnerships based on trust and quality. 
                        Contact us to learn more about our orchard operations and quality standards.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="/avocado" 
                            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                        >
                            Learn About Our Avocados
                        </a>
                        <a 
                            href="/contact" 
                            className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
                        >
                            Request Orchard Visit
                        </a>
                    </div>
                </div>
            </section>

            <style>{`
                html {
                    scroll-behavior: smooth;
                }
            `}</style>
        </AppLayout>
    );
}