import AppLayout from '../layouts/app-layout';
export default function About() {
    return (
        <AppLayout title="About Sigrut Farms - Sustainable Agriculture & Pure Natural Products">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-green-700 to-green-900 text-white">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
                        <p className="text-xl md:text-2xl opacity-90">
                            From humble beginnings to becoming a leading sustainable farm in Kenya
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-green-800 mb-6">Welcome to Sigrut Farms</h2>
                            <p className="text-lg text-gray-700 mb-4">
                                Founded in 2010, Sigrut Farms began as a small family operation with a vision for sustainable agriculture. 
                                What started with a few beehives and avocado trees has grown into a thriving agricultural enterprise 
                                that provides premium products and unforgettable farm experiences.
                            </p>
                            <p className="text-lg text-gray-700">
                                Today, we manage over 500 beehives, extensive avocado orchards, poultry operations, and offer 
                                farm accommodation and tours. We remain committed to sustainable practices that prioritize 
                                environmental health and community development.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <img 
                                src="https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                                alt="Sigrut Farms landscape" 
                                className="rounded-lg shadow-lg w-full h-80 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-16 bg-green-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Our Mission & Values</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🌿</span>
                            </div>
                            <h3 className="text-xl font-semibold text-green-800 mb-4">Sustainability</h3>
                            <p className="text-gray-700">
                                We practice sustainable agriculture that protects our environment, promotes biodiversity, 
                                and ensures long-term ecological balance.
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🏆</span>
                            </div>
                            <h3 className="text-xl font-semibold text-green-800 mb-4">Quality Excellence</h3>
                            <p className="text-gray-700">
                                From Hass avocados to pure honey, we never compromise on quality. Our products meet 
                                international standards while maintaining their natural goodness.
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🤝</span>
                            </div>
                            <h3 className="text-xl font-semibold text-green-800 mb-4">Community Impact</h3>
                            <p className="text-gray-700">
                                We support local communities through employment, training programs, and sustainable 
                                agricultural practices that benefit everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Operations */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Our Operations</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6">
                            <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🍯</span>
                            </div>
                            <h3 className="text-xl font-semibold text-green-800 mb-2">Beekeeping</h3>
                            <p className="text-gray-700">
                                500+ hives producing pure natural honey with sustainable practices
                            </p>
                        </div>
                        
                        <div className="text-center p-6">
                            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🥑</span>
                            </div>
                            <h3 className="text-xl font-semibold text-green-800 mb-2">Avocado Farming</h3>
                            <p className="text-gray-700">
                                Premium Hass avocados grown for export with modern cold storage facilities
                            </p>
                        </div>
                        
                        <div className="text-center p-6">
                            <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🐓</span>
                            </div>
                            <h3 className="text-xl font-semibold text-green-800 mb-2">Poultry</h3>
                            <p className="text-gray-700">
                                Free-range chickens and eggs from healthy, well-cared-for flocks
                            </p>
                        </div>
                        
                        <div className="text-center p-6">
                            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🏡</span>
                            </div>
                            <h3 className="text-xl font-semibold text-green-800 mb-2">Farm Experiences</h3>
                            <p className="text-gray-700">
                                Accommodation, tours, and conference facilities for unforgettable visits
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 bg-green-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Our Sustainable Approach</h2>
                    
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">
                        <div className="md:w-1/2 order-2 md:order-1">
                            <h3 className="text-2xl font-semibold text-green-800 mb-4">1. Eco-Friendly Farming</h3>
                            <p className="text-gray-700">
                                We implement organic farming methods, water conservation techniques, and natural pest control 
                                to minimize our environmental impact while maximizing productivity.
                            </p>
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2">
                            <img 
                                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                                alt="Sustainable farming" 
                                className="rounded-lg shadow-lg w-full h-64 object-cover"
                            />
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">
                        <div className="md:w-1/2">
                            <img 
                                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                                alt="Quality control" 
                                className="rounded-lg shadow-lg w-full h-64 object-cover"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-semibold text-green-800 mb-4">2. Quality Assurance</h3>
                            <p className="text-gray-700">
                                From harvest to packaging, we maintain strict quality control measures. Our cold room facilities 
                                and modern processing ensure our products reach you in perfect condition.
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="md:w-1/2 order-2 md:order-1">
                            <h3 className="text-2xl font-semibold text-green-800 mb-4">3. Community Partnership</h3>
                            <p className="text-gray-700">
                                We work closely with local farmers, providing training and market access. Our initiatives 
                                create sustainable livelihoods while promoting best agricultural practices.
                            </p>
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2">
                            <img 
                                src="https://images.unsplash.com/photo-1598974357779-16d2db7fead4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                                alt="Community partnership" 
                                className="rounded-lg shadow-lg w-full h-64 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Meet Our Team</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
                            <img 
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                                alt="John Doe" 
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-green-800">John Doe</h3>
                                <p className="text-green-600 mb-2">Founder & CEO</p>
                                <p className="text-gray-700">
                                    With over 20 years of agricultural experience, John leads our vision for sustainable farming.
                                </p>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
                            <img 
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                                alt="Jane Smith" 
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-green-800">Jane Smith</h3>
                                <p className="text-green-600 mb-2">Operations Manager</p>
                                <p className="text-gray-700">
                                    Jane ensures all our farming operations meet the highest quality and sustainability standards.
                                </p>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
                            <img 
                                src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                                alt="Mike Johnson" 
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-green-800">Mike Johnson</h3>
                                <p className="text-green-600 mb-2">Export & Marketing Director</p>
                                <p className="text-gray-700">
                                    Mike manages our international exports and develops markets for our premium products.
                                </p>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
                            <img 
                                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                                alt="Sarah Williams" 
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-green-800">Sarah Williams</h3>
                                <p className="text-green-600 mb-2">Hospitality Manager</p>
                                <p className="text-gray-700">
                                    Sarah oversees our farm accommodation, tours, and guest experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certification Section */}
            <section className="py-16 bg-green-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Our Certifications</h2>
                    
                    <div className="flex flex-wrap justify-center gap-10">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center w-56">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">✅</span>
                            </div>
                            <h3 className="text-lg font-semibold text-green-800 mb-2">Organic Certified</h3>
                            <p className="text-gray-700 text-sm">
                                Certified by Kenya Organic Agriculture Network
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md text-center w-56">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🌍</span>
                            </div>
                            <h3 className="text-lg font-semibold text-green-800 mb-2">GlobalGAP Certified</h3>
                            <p className="text-gray-700 text-sm">
                                Meeting international Good Agricultural Practices
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md text-center w-56">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🐝</span>
                            </div>
                            <h3 className="text-lg font-semibold text-green-800 mb-2">KEPHIS Approved</h3>
                            <p className="text-gray-700 text-sm">
                                Kenya Plant Health Inspectorate Service certified
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Experience the Sigrut Farms Difference</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Discover our premium agricultural products and unforgettable farm experiences that showcase the best of Kenyan sustainable farming.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="/products" 
                            className="inline-block bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
                        >
                            Explore Our Products
                        </a>
                        <a 
                            href="/tours" 
                            className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors"
                        >
                            Book a Farm Tour
                        </a>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}