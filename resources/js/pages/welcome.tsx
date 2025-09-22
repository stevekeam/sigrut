import { Head, Link, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';
import { dashboard, login, register } from '@/routes';

export default function Home() {
    const { auth } = usePage<SharedData>().props;

    // Featured products data
    const featuredProducts = [
        {
            id: 1,
            name: 'Hass Avocado',
            category: 'Fresh Produce',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2023/11/IMG-20231031-WA0079.jpg',
            description: 'Premium Hass avocados, rich in nutrients and perfect for export quality',
            price: 'From KSh 50 each'
        },
        {
            id: 2,
            name: 'Pure Honey',
            category: 'Bee Products',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-01-31-at-10.33.50_bc8b9276-e1738586951867.jpg',
            description: '100% natural raw honey, straight from our beehives',
            price: 'From KSh 500'
        },
        {
            id: 3,
            name: 'Fresh Poultry',
            category: 'Livestock',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2023/11/IMG-20231031-WA0085.jpg',
            description: 'Free-range chickens and eggs from our healthy flocks',
            price: 'From KSh 800'
        }
    ];

    // Services data
    const services = [
        {
            id: 1,
            name: 'Farm Accommodation',
            icon: '🏡',
            description: 'Experience rural life in our comfortable farmstay accommodations',
            features: ['Private cottages', 'Farm-to-table meals', 'Nature walks']
        },
        {
            id: 2,
            name: 'Conference Facilities',
            icon: '💼',
            description: 'Host your events in our serene conference facilities',
            features: ['100+ capacity', 'Audio-visual equipment', 'Catering services']
        },
        {
            id: 3,
            name: 'Farm Tours',
            icon: '🚜',
            description: 'Educational tours showcasing sustainable farming practices',
            features: ['Guided tours', 'Hands-on activities', 'Group discounts']
        }
    ];

    return (
        <>
            <Head title="Sigrut Orchard & Hive Ltd - Premium Agricultural Products & Farm Experiences">
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
    <img 
        src="https://Sigrutfarmsinternational.com/wp-content/uploads/2023/09/Screenshot-2024-12-04-083308.png" 
        alt="Sigrut Orchard & Hive Ltd Logo" 
        className="w-40 h-40 mr-2 object-contain" 
    />
    Sigrut Orchard & Hive Ltd
</Link>



                            
                            <nav className="hidden md:flex space-x-8">
                                <a href="#products" className="hover:text-amber-300 transition-colors">Products</a>
                                <a href="#services" className="hover:text-amber-300 transition-colors">Services</a>
                                <a href="#about" className="hover:text-amber-300 transition-colors">About</a>
                                <a href="#contact" className="hover:text-amber-300 transition-colors">Contact</a>
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
                            backgroundImage: 'url(https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/IMG-20250107-WA0050-e1737969730374.jpg)'
                        }}
                    ></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                Premium Agricultural Products & Farm Experiences
                            </h1>
                            <p className="text-xl mb-8 opacity-90">
                                Discover the finest Hass avocados, pure honey, fresh poultry, and unforgettable farm experiences 
                                at Sigrut Farms - where quality meets sustainability.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a 
                                    href="#products" 
                                    className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold text-center hover:bg-amber-600 transition-colors"
                                >
                                    Explore Products
                                </a>
                                <a 
                                    href="#services" 
                                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-green-800 transition-colors"
                                >
                                    Our Services
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Products */}
                <section id="products" className="py-16 bg-amber-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Premium Products</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Quality agricultural products grown and produced with care on our sustainable farm
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {featuredProducts.map(product => (
                                <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                                    <img 
                                        src={product.image} 
                                        alt={product.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mb-2">
                                            {product.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                                        <p className="text-gray-600 mb-4">{product.description}</p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-amber-600 font-bold">{product.price}</span>
                                            <Link 
                                                href={`/products/${product.id}`}
                                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                                            >
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link 
                                href="/products"
                                className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
                            >
                                View All Products
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Farm Services & Experiences</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Beyond agriculture, we offer unique experiences and facilities for visitors and businesses
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {services.map(service => (
                                <div key={service.id} className="bg-green-50 rounded-xl p-6 border border-green-200">
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-bold text-green-800 mb-3">{service.name}</h3>
                                    <p className="text-gray-700 mb-4">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, index) => (
                                            <li key={index} className="flex items-center text-green-700">
                                                <span className="mr-2">✓</span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="mt-6 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors w-full">
                                        Learn More
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-16 bg-gradient-to-br from-green-800 to-green-900 text-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Sigrut Farms?</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🌿</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Sustainable Farming</h3>
                                <p className="text-green-100">Environmentally conscious practices that protect our ecosystem</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">⭐</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
                                <p className="text-green-100">Export-grade products meeting international standards</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🚚</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Nationwide Delivery</h3>
                                <p className="text-green-100">Fresh products delivered across Kenya</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🤝</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Community Focused</h3>
                                <p className="text-green-100">Supporting local communities through employment and training</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-16 bg-amber-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">What Our Customers Say</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <div className="flex text-amber-400 mb-4">
                                    {'★'.repeat(5)}
                                </div>
                                <p className="text-gray-700 italic mb-4">
                                    "The Hass avocados from Sigrut Farms are exceptional quality. Perfect for export and our international clients are always satisfied."
                                </p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-green-200 rounded-full mr-4"></div>
                                    <div>
                                        <p className="font-bold text-green-800">James K.</p>
                                        <p className="text-sm text-gray-600">Export Business Owner</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <div className="flex text-amber-400 mb-4">
                                    {'★'.repeat(5)}
                                </div>
                                <p className="text-gray-700 italic mb-4">
                                    "We hosted our company retreat at Sigrut Farms and the experience was unforgettable. The accommodation and conference facilities were perfect."
                                </p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-green-200 rounded-full mr-4"></div>
                                    <div>
                                        <p className="font-bold text-green-800">Sarah M.</p>
                                        <p className="text-sm text-gray-600">Corporate Client</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <div className="flex text-amber-400 mb-4">
                                    {'★'.repeat(5)}
                                </div>
                                <p className="text-gray-700 italic mb-4">
                                    "The farm tour was educational and fun for our students. They learned so much about sustainable agriculture in a hands-on way."
                                </p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-green-200 rounded-full mr-4"></div>
                                    <div>
                                        <p className="font-bold text-green-800">Dr. Wanjiku</p>
                                        <p className="text-sm text-gray-600">School Principal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-green-700 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Sigrut Farms?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Whether you're looking for premium agricultural products or a unique farm experience, we're here to serve you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="/contact" 
                                className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
                            >
                                Contact Us
                            </a>
                            <a 
                                href="tel:+254743200200" 
                                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors"
                            >
                                Call Now: +254 743 200 200
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
    <img 
        src="https://Sigrutfarmsinternational.com/wp-content/uploads/2023/09/Screenshot-2024-12-04-083308.png" 
        alt="Sigrut Farms Logo" 
        className="w-56 h-56 mr-4 object-contain" 
    />
    Sigrut Farms
</h3>

                                <p className="text-green-200">
                                    Premium agricultural products and unforgettable farm experiences in the heart of Kenya.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold mb-4">Quick Links</h4>
                                <ul className="space-y-2">
                                    <li><a href="#products" className="text-green-200 hover:text-white transition-colors">Products</a></li>
                                    <li><a href="#services" className="text-green-200 hover:text-white transition-colors">Services</a></li>
                                    <li><a href="/about" className="text-green-200 hover:text-white transition-colors">About Us</a></li>
                                    <li><a href="/contact" className="text-green-200 hover:text-white transition-colors">Contact</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold mb-4">Products</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-green-200 hover:text-white transition-colors">Hass Avocado</a></li>
                                    <li><a href="#" className="text-green-200 hover:text-white transition-colors">Honey Products</a></li>
                                    <li><a href="#" className="text-green-200 hover:text-white transition-colors">Poultry</a></li>
                                    <li><a href="#" className="text-green-200 hover:text-white transition-colors">All Products</a></li>
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
                                        <span className="mr-2">✉️</span> info@sigrutfarms.com
                                    </li>
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