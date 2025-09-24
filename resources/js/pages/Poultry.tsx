import AppLayout from '../layouts/app-layout';
import { useState } from 'react';

type PoultryProduct = {
    id: number;
    name: string;
    type: 'chicken' | 'eggs' | 'value-added';
    image: string;
    description: string;
    price: string;
    features: string[];
    availability: string;
};

export default function Poultry() {
    const [selectedProduct, setSelectedProduct] = useState<PoultryProduct | null>(null);
    const [showInquiryModal, setShowInquiryModal] = useState(false);

    // Poultry products
    const poultryProducts: PoultryProduct[] = [
        {
            id: 1,
            name: 'Free-Range Broilers',
            type: 'chicken',
            image: 'https://images.unsplash.com/photo-1589923188659-1b6dee9c1e5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            description: 'Premium free-range chickens raised without antibiotics or hormones',
            price: 'KSh 800-1,200 per bird',
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
            price: 'KSh 350-450 per tray',
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
            price: 'KSh 1,200-1,800 per bird',
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
            price: 'KSh 150-250 per chick',
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

    const handleInquiry = (product: PoultryProduct) => {
        setSelectedProduct(product);
        setShowInquiryModal(true);
    };

    return (
        <AppLayout title="Poultry Farming - Premium Chicken & Eggs - Sigrut Farms">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-green-700 to-green-900 text-white py-24">
                <div className="absolute inset-0 bg-cover bg-center opacity-20"
                     style={{backgroundImage: 'url(https://images.unsplash.com/photo-1589923188659-1b6dee9c1e5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'}}>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Premium Poultry Products</h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        Healthy, free-range chickens and eggs from our sustainable poultry farm. 
                        Raised with care for superior taste and nutrition.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={() => {
                                const el = document.getElementById('products');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
                        >
                            View Products
                        </button>
                        <a 
                            href="tel:+254743200200"
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors"
                        >
                            Order Now
                        </a>
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
                        <p className="text-lg text-gray-600">Fresh, high-quality poultry products available for delivery</p>
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
                                        <h4 className="font-semibold text-green-700 mb-2">Features:</h4>
                                        <ul className="space-y-1">
                                            {product.features.slice(0, 3).map((feature, index) => (
                                                <li key={index} className="flex items-center text-sm text-gray-600">
                                                    <span className="mr-2">✓</span> {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-lg font-bold text-amber-600">{product.price}</span>
                                        <span className="text-sm text-gray-600">{product.availability}</span>
                                    </div>

                                    <button 
                                        onClick={() => handleInquiry(product)}
                                        className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                                    >
                                        Order Now
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
                        <p className="text-lg text-gray-600">Superior quality and health benefits</p>
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

            {/* Ordering Information */}
            <section className="py-16 bg-green-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-green-800 mb-8">How to Order</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-6">
                                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📞</span>
                                </div>
                                <h3 className="text-lg font-semibold text-green-800 mb-2">Call to Order</h3>
                                <p className="text-gray-700 font-bold">+254 743 200 200</p>
                                <p className="text-sm text-gray-600">Available 7:00 AM - 7:00 PM</p>
                            </div>
                            <div className="p-6">
                                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🏪</span>
                                </div>
                                <h3 className="text-lg font-semibold text-green-800 mb-2">Farm Pickup</h3>
                                <p className="text-gray-700">Visit our farm</p>
                                <p className="text-sm text-gray-600">Mon-Sat: 8:00 AM - 5:00 PM</p>
                            </div>
                            <div className="p-6">
                                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🚚</span>
                                </div>
                                <h3 className="text-lg font-semibold text-green-800 mb-2">Delivery</h3>
                                <p className="text-gray-700">Nairobi & surrounding areas</p>
                                <p className="text-sm text-gray-600">Free delivery for orders above KSh 3,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Taste the Difference?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Experience the superior quality of our free-range poultry products. Fresh, healthy, and delivered to you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+254743200200" className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
                            Call to Order: +254 743 200 200
                        </a>
                        <button 
                            onClick={() => {
                                const el = document.getElementById('products');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors"
                        >
                            View Products
                        </button>
                    </div>
                </div>
            </section>

            {/* Inquiry Modal */}
            {showInquiryModal && selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl max-w-md w-full p-6">
                        <h3 className="text-2xl font-bold text-green-800 mb-4">
                            Order {selectedProduct.name}
                        </h3>
                        
                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" />
                            <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" />
                            <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-lg" />
                            
                            <div className="grid grid-cols-2 gap-4">
                                <select className="p-3 border border-gray-300 rounded-lg">
                                    <option>Quantity</option>
                                    <option>1-5 units</option>
                                    <option>6-10 units</option>
                                    <option>11-20 units</option>
                                    <option>20+ units</option>
                                </select>
                                <select className="p-3 border border-gray-300 rounded-lg">
                                    <option>Delivery Method</option>
                                    <option>Farm Pickup</option>
                                    <option>Home Delivery</option>
                                </select>
                            </div>
                            
                            <textarea placeholder="Special instructions or questions" rows={3} className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
                            
                            <div className="flex gap-3">
                                <button 
                                    type="button"
                                    onClick={() => setShowInquiryModal(false)}
                                    className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit"
                                    className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                                >
                                    Place Order
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AppLayout>
    );
}