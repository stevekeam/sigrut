import AppLayout from '../layouts/app-layout';
import { useState } from 'react';

type PoultryProduct = {
    id: number;
    name: string;
    type: 'chicken' | 'eggs' | 'value-added';
    image: string;
    description: string;
    features: string[];
    availability: string;
};

export default function Poultry() {
    const [selectedProduct, setSelectedProduct] = useState<PoultryProduct | null>(null);
    const [showDetailModal, setShowDetailModal] = useState(false);

    // Poultry products
    const poultryProducts: PoultryProduct[] = [
        {
            id: 1,
            name: 'Free-Range Broilers',
            type: 'chicken',
            image: 'https://images.unsplash.com/photo-1589923188659-1b6dee9c1e5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            description: 'Premium free-range chickens raised without antibiotics or hormones',
            features: [
                '4-6 weeks old',
                '2-3 kg live weight',
                'Natural diet',
                'Animal welfare certified',
                'Fresh processing'
            ],
            availability: 'Weekly batches'
        },
        {
            id: 2,
            name: 'Fresh Brown Eggs',
            type: 'eggs',
            image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            description: 'Nutrient-rich brown eggs from free-range hens',
            features: [
                'Rich in omega-3',
                'Large size (60-65g)',
                'Natural yolk color',
                'Daily collection',
                'Vacuum packed'
            ],
            availability: 'Daily supply'
        },
        {
            id: 3,
            name: 'Kienyeji (Indigenous) Chicken',
            type: 'chicken',
            image: 'https://images.unsplash.com/photo-1559454402-4cbfabc8ec15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            description: 'Traditional indigenous chickens with superior flavor and texture',
            features: [
                '6-8 months old',
                '1.5-2 kg live weight',
                'Dual-purpose breed',
                'Slow growth natural',
                'Disease resistant'
            ],
            availability: 'Monthly batches'
        },
        {
            id: 4,
            name: 'Day-Old Chicks',
            type: 'chicken',
            image: 'https://images.unsplash.com/photo-1559454402-4cbfabc8ec15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            description: 'Healthy day-old chicks for your poultry farming venture',
            features: [
                'Vaccinated',
                'Quality breeds',
                'Health certified',
                'Breeder selection',
                'Delivery available'
            ],
            availability: 'Weekly hatches'
        }
    ];

    // Farming practices
    const farmingPractices = [
        {
            icon: '🌱',
            title: 'Free-Range System',
            description: 'Chickens roam freely with access to outdoor areas for natural behavior'
        },
        {
            icon: '🏥',
            title: 'Animal Welfare',
            description: 'Highest standards of animal care with regular health monitoring'
        },
        {
            icon: '🚫',
            title: 'Antibiotic-Free',
            description: 'No antibiotics or growth hormones used in our production'
        },
        {
            icon: '🌾',
            title: 'Natural Feeding',
            description: 'Balanced diet with natural supplements and clean water'
        }
    ];

    // Health benefits
    const healthBenefits = [
        {
            benefit: 'Higher Protein Content',
            description: 'Free-range chickens have leaner meat with higher protein levels'
        },
        {
            benefit: 'Rich in Omega-3',
            description: 'Natural diet results in eggs and meat rich in essential fatty acids'
        },
        {
            benefit: 'No Chemical Residues',
            description: 'Antibiotic-free farming ensures clean, chemical-free products'
        },
        {
            benefit: 'Better Taste & Texture',
            description: 'Slow growth and natural diet enhance flavor and texture'
        }
    ];

    const handleViewDetails = (product: PoultryProduct) => {
        setSelectedProduct(product);
        setShowDetailModal(true);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AppLayout title="Poultry Farming - Premium Chicken & Eggs - Sigrut Farms">
          {/* Hero Section */}
<section className="relative bg-gradient-to-r from-green-700 to-green-900 text-white py-24 overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center opacity-100"
         style={{backgroundImage: 'url(https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/IMG-20250109-WA0043.jpg)'}}>
    </div>
    
    {/* Animated background overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-green-700/60"></div>
    
    <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Premium Poultry Products
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Healthy, free-range chickens and eggs from our sustainable poultry farm. 
            Raised with care for superior taste and nutrition.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <button 
                onClick={() => scrollToSection('products')}
                className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
                View Products
            </button>
            <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-all duration-300 transform hover:scale-105"
            >
                Contact Us
            </button>
        </div>
    </div>
    
    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
    </div>
</section>
            {/* Farming Practices */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Sustainable Practices</h2>
                        <p className="text-lg text-gray-600">Ethical farming methods that prioritize animal welfare and product quality</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {farmingPractices.map((practice, index) => (
                            <div key={index} className="text-center p-6">
                                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">{practice.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-green-800 mb-2">{practice.title}</h3>
                                <p className="text-gray-700">{practice.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="py-16 bg-green-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Poultry Products</h2>
                        <p className="text-lg text-gray-600">High-quality poultry products raised with care and sustainability</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {poultryProducts.map(product => (
                            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                                <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
                                <div className="p-6">
                                    <span className={`inline-block px-3 py-1 rounded-full text-sm mb-2 ${
                                        product.type === 'chicken' ? 'bg-amber-100 text-amber-800' :
                                        product.type === 'eggs' ? 'bg-green-100 text-green-800' :
                                        'bg-red-100 text-red-800'
                                    }`}>
                                        {product.type.charAt(0).toUpperCase() + product.type.slice(1)}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                                    <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                                    
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-green-700 mb-2">Key Features:</h4>
                                        <ul className="space-y-1">
                                            {product.features.map((feature, index) => (
                                                <li key={index} className="flex items-center text-sm text-gray-600">
                                                    <span className="mr-2">✓</span> {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="font-semibold text-green-700 mb-1">Availability:</h4>
                                        <p className="text-sm text-gray-600">{product.availability}</p>
                                    </div>

                                    <button 
                                        onClick={() => handleViewDetails(product)}
                                        className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Health Benefits */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Why Choose Our Poultry?</h2>
                        <p className="text-lg text-gray-600">Superior quality and health benefits from sustainable farming</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {healthBenefits.map((benefit, index) => (
                            <div key={index} className="bg-green-50 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-green-800 mb-2">{benefit.benefit}</h3>
                                <p className="text-gray-700">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 bg-green-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <div className="p-6">
                                <div className="bg-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📞</span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                                <p className="font-bold">+254 743 200 200</p>
                                <p className="text-sm opacity-90">Available 7:00 AM - 7:00 PM</p>
                            </div>
                            <div className="p-6">
                                <div className="bg-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">✉️</span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Email</h3>
                                <p className="font-bold">poultry@sigrutfarms.com</p>
                                <p className="text-sm opacity-90">We respond within 24 hours</p>
                            </div>
                            <div className="p-6">
                                <div className="bg-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📍</span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                                <p className="font-bold">Sigrut Farms</p>
                                <p className="text-sm opacity-90">Nairobi, Kenya</p>
                            </div>
                        </div>
                        
                        <div className="bg-green-700 rounded-lg p-8">
                            <h3 className="text-2xl font-bold mb-4">Send us a Message</h3>
                            <form className="space-y-4 max-w-md mx-auto">
                                <input type="text" placeholder="Your Name" className="w-full p-3 border border-green-600 rounded-lg bg-green-800 text-white placeholder-green-300" />
                                <input type="email" placeholder="Your Email" className="w-full p-3 border border-green-600 rounded-lg bg-green-800 text-white placeholder-green-300" />
                                <select className="w-full p-3 border border-green-600 rounded-lg bg-green-800 text-white">
                                    <option>I'm interested in poultry products</option>
                                    <option>I want to visit the farm</option>
                                    <option>Partnership inquiry</option>
                                    <option>Other questions</option>
                                </select>
                                <textarea placeholder="Your Message" rows={4} className="w-full p-3 border border-green-600 rounded-lg bg-green-800 text-white placeholder-green-300"></textarea>
                                <button type="submit" className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Detail Modal */}
            {showDetailModal && selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="relative">
                            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-64 object-cover"/>
                            <button 
                                onClick={() => setShowDetailModal(false)}
                                className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100"
                            >
                                ×
                            </button>
                        </div>
                        
                        <div className="p-6">
                            <span className={`inline-block px-3 py-1 rounded-full text-sm mb-2 ${
                                selectedProduct.type === 'chicken' ? 'bg-amber-100 text-amber-800' :
                                selectedProduct.type === 'eggs' ? 'bg-green-100 text-green-800' :
                                'bg-red-100 text-red-800'
                            }`}>
                                {selectedProduct.type.charAt(0).toUpperCase() + selectedProduct.type.slice(1)}
                            </span>
                            
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedProduct.name}</h3>
                            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                            
                            <div className="mb-6">
                                <h4 className="font-semibold text-green-700 mb-3 text-lg">Product Features:</h4>
                                <ul className="space-y-2">
                                    {selectedProduct.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-gray-700">
                                            <span className="mr-3 text-green-500">✓</span> 
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="mb-6">
                                <h4 className="font-semibold text-green-700 mb-2">Availability:</h4>
                                <p className="text-gray-700">{selectedProduct.availability}</p>
                            </div>
                            
                            <div className="flex gap-3">
                                <button 
                                    onClick={() => setShowDetailModal(false)}
                                    className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 transition-colors"
                                >
                                    Close
                                </button>
                                <button 
                                    onClick={() => {
                                        setShowDetailModal(false);
                                        scrollToSection('contact');
                                    }}
                                    className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                                >
                                    Contact About This Product
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AppLayout>
    );
}