import AppLayout from '../layouts/app-layout';
import { useState } from 'react';

type VegetableProduct = {
    id: number;
    name: string;
    type: 'leafy' | 'fruiting' | 'root' | 'herbs';
    image: string;
    description: string;
    features: string[];
    season: string;
    nutritionalBenefits: string[];
};

export default function Vegetables() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    // Vegetable products
    const vegetableProducts: VegetableProduct[] = [
        {
            id: 1,
            name: 'Sukuma Wiki (Kale)',
            type: 'leafy',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/02/sukuma-wiki.jpg',
            description: 'Fresh, organic kale grown using sustainable farming methods',
            features: [
                'Rich in vitamins A, C, K',
                'High in iron and calcium',
                'Pesticide-free',
                'Daily harvesting',
                'Crisp and fresh leaves'
            ],
            season: 'Year-round',
            nutritionalBenefits: ['Boosts immunity', 'Supports bone health', 'Improves digestion']
        },
        {
            id: 2,
            name: 'Tomatoes',
            type: 'fruiting',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/02/tomatoes.jpg',
            description: 'Vine-ripened tomatoes with rich flavor and vibrant color',
            features: [
                'Heirloom varieties',
                'Rich in lycopene',
                'Sun-ripened',
                'Multiple varieties',
                'Fresh daily picking'
            ],
            season: 'Year-round',
            nutritionalBenefits: ['Antioxidant rich', 'Heart health', 'Skin protection']
        },
        {
            id: 3,
            name: 'Carrots',
            type: 'root',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/02/carrots.jpg',
            description: 'Sweet, crunchy carrots packed with beta-carotene',
            features: [
                'Deep orange color',
                'Sweet flavor',
                'Rich in beta-carotene',
                'Crunchy texture',
                'Fresh from soil'
            ],
            season: 'Year-round',
            nutritionalBenefits: ['Eye health', 'Immune support', 'Skin health']
        },
        {
            id: 4,
            name: 'Spinach',
            type: 'leafy',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/02/spinach.jpg',
            description: 'Tender spinach leaves with high nutritional value',
            features: [
                'Tender leaves',
                'Iron-rich',
                'Quick growth cycle',
                'Organic compost',
                'Gentle washing'
            ],
            season: 'Year-round',
            nutritionalBenefits: ['Iron boost', 'Muscle strength', 'Blood health']
        },
        {
            id: 5,
            name: 'Onions',
            type: 'root',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/02/onions.jpg',
            description: 'Aromatic onions with strong flavor and health benefits',
            features: [
                'Multiple varieties',
                'Long shelf life',
                'Strong flavor',
                'Natural preservatives',
                'Cured properly'
            ],
            season: 'Year-round',
            nutritionalBenefits: ['Anti-inflammatory', 'Heart health', 'Immune booster']
        },
        {
            id: 6,
            name: 'Bell Peppers',
            type: 'fruiting',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/02/bell-peppers.jpg',
            description: 'Colorful bell peppers in red, yellow, and green varieties',
            features: [
                'Multiple colors',
                'Sweet flavor',
                'Thick flesh',
                'Vitamin C rich',
                'Fresh harvesting'
            ],
            season: 'Year-round',
            nutritionalBenefits: ['High in vitamin C', 'Antioxidants', 'Eye health']
        },
        {
            id: 7,
            name: 'Cabbage',
            type: 'leafy',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/02/cabbage.jpg',
            description: 'Fresh, crisp cabbage perfect for cooking and salads',
            features: [
                'Firm heads',
                'Sweet flavor',
                'Versatile use',
                'Long-lasting',
                'Organic growth'
            ],
            season: 'Year-round',
            nutritionalBenefits: ['Digestive health', 'Anti-inflammatory', 'Vitamin K source']
        },
        {
            id: 8,
            name: 'Coriander',
            type: 'herbs',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/02/coriander.jpg',
            description: 'Fragrant coriander leaves for flavor and nutrition',
            features: [
                'Strong aroma',
                'Fresh leaves',
                'Regular harvesting',
                'Pesticide-free',
                'Multiple uses'
            ],
            season: 'Year-round',
            nutritionalBenefits: ['Digestive aid', 'Antioxidant', 'Detoxification']
        }
    ];

    // Farming practices
    const farmingPractices = [
        {
            icon: '🌱',
            title: 'Organic Farming',
            description: 'No synthetic pesticides or fertilizers used in our vegetable production'
        },
        {
            icon: '💧',
            title: 'Efficient Irrigation',
            description: 'Water-saving drip irrigation systems for optimal growth'
        },
        {
            icon: '🔄',
            title: 'Crop Rotation',
            description: 'Regular crop rotation to maintain soil health and prevent diseases'
        },
        {
            icon: '🌞',
            title: 'Natural Sunlight',
            description: 'Open-field farming with maximum natural sunlight exposure'
        }
    ];

    // Health benefits
    const healthBenefits = [
        {
            icon: '💪',
            title: 'Rich in Nutrients',
            description: 'Packed with essential vitamins, minerals, and antioxidants'
        },
        {
            icon: '🛡️',
            title: 'Disease Prevention',
            description: 'Regular consumption helps prevent chronic diseases'
        },
        {
            icon: '⚖️',
            title: 'Weight Management',
            description: 'Low in calories and high in fiber for healthy weight'
        },
        {
            icon: '❤️',
            title: 'Heart Health',
            description: 'Supports cardiovascular health and reduces blood pressure'
        }
    ];

    // Seasonal availability
    const seasonalInfo = [
        {
            season: 'Year-Round',
            vegetables: ['Sukuma Wiki', 'Tomatoes', 'Spinach', 'Onions', 'Cabbage'],
            description: 'Consistent supply throughout the year'
        },
        {
            season: 'Rainy Season',
            vegetables: ['Kale', 'Spinach', 'Cabbage', 'Coriander'],
            description: 'Optimal growth during rainy periods'
        },
        {
            season: 'Dry Season',
            vegetables: ['Tomatoes', 'Carrots', 'Bell Peppers', 'Onions'],
            description: 'Irrigated crops thrive in dry conditions'
        }
    ];

    const filteredProducts = selectedCategory === 'all' 
        ? vegetableProducts 
        : vegetableProducts.filter(product => product.type === selectedCategory);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AppLayout title="Fresh Organic Vegetables - Sigrut Farms">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-54 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-90"
                     style={{backgroundImage: 'url(https://Sigrutfarmsinternational.com/wp-content/uploads/2025/02/vegetable-farm.jpg)'}}>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-green-800/70 to-green-600/70"></div>
                
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Fresh Organic Vegetables
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                        Farm-fresh vegetables grown with care, packed with flavor and nutrition. 
                        From our fields to your table, experience the difference of organic farming.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={() => scrollToSection('products')}
                            className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            View Vegetables
                        </button>
                        <button 
                            onClick={() => scrollToSection('practices')}
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-all duration-300 transform hover:scale-105"
                        >
                            Our Farming Methods
                        </button>
                    </div>
                </div>
            </section>

            {/* Farming Practices */}
            <section id="practices" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Organic Farming Practices</h2>
                        <p className="text-lg text-gray-600">Sustainable methods that ensure healthy, nutritious vegetables</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {farmingPractices.map((practice, index) => (
                            <div key={index} className="text-center p-6 bg-green-50 rounded-lg">
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
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Vegetable Selection</h2>
                        <p className="text-lg text-gray-600 mb-8">Fresh, organic vegetables available throughout the year</p>
                        
                        {/* Category Filter */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                                    selectedCategory === 'all' 
                                    ? 'bg-green-600 text-white' 
                                    : 'bg-white text-green-600 border border-green-600 hover:bg-green-50'
                                }`}
                            >
                                All Vegetables
                            </button>
                            <button
                                onClick={() => setSelectedCategory('leafy')}
                                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                                    selectedCategory === 'leafy' 
                                    ? 'bg-green-600 text-white' 
                                    : 'bg-white text-green-600 border border-green-600 hover:bg-green-50'
                                }`}
                            >
                                Leafy Greens
                            </button>
                            <button
                                onClick={() => setSelectedCategory('fruiting')}
                                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                                    selectedCategory === 'fruiting' 
                                    ? 'bg-green-600 text-white' 
                                    : 'bg-white text-green-600 border border-green-600 hover:bg-green-50'
                                }`}
                            >
                                Fruiting Vegetables
                            </button>
                            <button
                                onClick={() => setSelectedCategory('root')}
                                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                                    selectedCategory === 'root' 
                                    ? 'bg-green-600 text-white' 
                                    : 'bg-white text-green-600 border border-green-600 hover:bg-green-50'
                                }`}
                            >
                                Root Vegetables
                            </button>
                            <button
                                onClick={() => setSelectedCategory('herbs')}
                                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                                    selectedCategory === 'herbs' 
                                    ? 'bg-green-600 text-white' 
                                    : 'bg-white text-green-600 border border-green-600 hover:bg-green-50'
                                }`}
                            >
                                Herbs
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                                <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
                                <div className="p-6">
                                    <span className={`inline-block px-3 py-1 rounded-full text-sm mb-2 ${
                                        product.type === 'leafy' ? 'bg-green-100 text-green-800' :
                                        product.type === 'fruiting' ? 'bg-red-100 text-red-800' :
                                        product.type === 'root' ? 'bg-amber-100 text-amber-800' :
                                        'bg-purple-100 text-purple-800'
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

                                    <div className="mb-4">
                                        <h4 className="font-semibold text-green-700 mb-1">Season:</h4>
                                        <p className="text-sm text-gray-600">{product.season}</p>
                                    </div>

                                    <div className="mb-2">
                                        <h4 className="font-semibold text-green-700 mb-1">Health Benefits:</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {product.nutritionalBenefits.map((benefit, index) => (
                                                <span key={index} className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs">
                                                    {benefit}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Health Benefits of Fresh Vegetables</h2>
                        <p className="text-lg text-gray-600">Why incorporating fresh vegetables into your diet is essential</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {healthBenefits.map((benefit, index) => (
                            <div key={index} className="text-center p-6 bg-green-50 rounded-lg">
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-bold text-green-800 mb-2">{benefit.title}</h3>
                                <p className="text-gray-700">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Seasonal Availability */}
            <section className="py-16 bg-green-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Seasonal Availability</h2>
                        <p className="text-xl opacity-90">Fresh vegetables available throughout the year</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {seasonalInfo.map((season, index) => (
                            <div key={index} className="bg-green-700 rounded-xl p-6 text-center">
                                <h3 className="text-2xl font-bold mb-4">{season.season}</h3>
                                <div className="mb-4">
                                    <h4 className="font-semibold mb-2">Available Vegetables:</h4>
                                    <ul className="space-y-1">
                                        {season.vegetables.map((veg, idx) => (
                                            <li key={idx} className="flex items-center justify-center">
                                                <span className="mr-2">🌱</span> {veg}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <p className="text-green-100 italic">{season.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}