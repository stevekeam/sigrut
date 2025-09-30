import AppLayout from '../layouts/app-layout';
import { useState, useEffect } from 'react';

const MoringaFarmPage = () => {
    // Moringa products data
    const moringaProducts = [
        {
            id: 1,
            name: 'Moringa Leaf Powder',
            type: 'Premium Quality',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/09/Moringa_powder.jpg',
            description: '100% pure moringa leaf powder, shade-dried to preserve nutrients and enzymes',
            benefits: ['Rich in Antioxidants', 'High in Iron & Calcium', 'Boosts Energy'],
            usage: 'Smoothies, teas, soups (1-2 tsp daily)'
        },
        {
            id: 2,
            name: 'Fresh Moringa Leaves',
            type: 'Organic & Fresh',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/09/moringa-leaves.jpg',
            description: 'Freshly harvested moringa leaves packed with vitamins and minerals',
            benefits: ['Vitamin C Rich', 'Fresh Consumption', 'Culinary Uses'],
            usage: 'Salads, cooking, herbal tea'
        },
        {
            id: 3,
            name: 'Moringa Seeds',
            type: 'Pure Seeds',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/09/moringa-seeds.jpg',
            description: 'High-quality moringa seeds for planting and consumption',
            benefits: ['Water Purification', 'Planting', 'Nutritional Value'],
            usage: 'Planting, herbal remedies'
        },
        {
            id: 4,
            name: 'Moringa Oil',
            type: 'Cold-Pressed',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/09/MOIL-ROLL-ON.jpg',
            description: 'Pure cold-pressed moringa oil for culinary and cosmetic use',
            benefits: ['Skin Care', 'Cooking Oil', 'Hair Treatment'],
            usage: 'Cooking, skincare, haircare'
        }
    ];

    // Moringa cultivation process steps
    const cultivationProcess = [
        {
            step: 1,
            title: 'Organic Cultivation',
            description: 'We grow moringa using sustainable organic farming methods',
            image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            icon: '🌱'
        },
        {
            step: 2,
            title: 'Careful Harvesting',
            description: 'Leaves are hand-picked at peak nutritional value',
            image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            icon: '👐'
        },
        {
            step: 3,
            title: 'Gentle Processing',
            description: 'Shade-dried at low temperatures to preserve nutrients',
            image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            icon: '🌿'
        },
        {
            step: 4,
            title: 'Quality Packaging',
            description: 'Carefully packaged to maintain freshness and potency',
            image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            icon: '📦'
        }
    ];

    // Moringa benefits
    const moringaBenefits = [
        { icon: '💪', title: 'Energy Boost', description: 'Rich in nutrients that provide natural sustained energy' },
        { icon: '🛡️', title: 'Immune Support', description: 'Packed with vitamins and antioxidants to strengthen immunity' },
        { icon: '🩺', title: 'Anti-inflammatory', description: 'Natural compounds help reduce inflammation in the body' },
        { icon: '🧠', title: 'Brain Health', description: 'Supports cognitive function and brain health' }
    ];

    // Tour packages
    const tourPackages = [
        {
            name: 'Moringa Farm Tour',
            includes: ['Farm walkthrough', 'Harvesting demo', 'Product tasting', 'Moringa tea session']
        },
        {
            name: 'Moringa Workshop',
            includes: ['Cultivation training', 'Processing demo', 'Recipe preparation', 'Take-home materials']
        },
        {
            name: 'Full Experience',
            includes: ['Farm tour', 'Hands-on harvesting', 'Cooking class', 'Product package']
        }
    ];

    const [activeSection, setActiveSection] = useState('hero');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Scroll spy effect
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'products', 'process', 'benefits', 'visit', 'contact'];
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

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleImageClick = (imageUrl: string) => {
        setSelectedImage(imageUrl);
        setIsModalOpen(true);
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
        // Restore body scroll
        document.body.style.overflow = 'auto';
    };

    // Close modal when clicking outside the image
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    // Close modal with Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isModalOpen]);

    return (
        <AppLayout title="Moringa Miracle Tree - Sigrut Farms Organic Moringa">
            {/* Hero Section */}
            <section id="hero" className="relative bg-gradient-to-r from-green-700 to-green-900 text-white py-54 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-80"
                     style={{backgroundImage: 'url(https://Sigrutfarmsinternational.com/wp-content/uploads/2025/09/moring.webp)'}}>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">The Moringa Miracle</h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        Discover nature's superfood - packed with nutrients, grown sustainably, 
                        and harvested with care at Sigrut Farms.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={() => scrollToSection('products')}
                            className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors"
                        >
                            View Our Products
                        </button>
                        <button 
                            onClick={() => scrollToSection('visit')}
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors"
                        >
                            Visit Our Farm
                        </button>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Moringa Products</h2>
                        <p className="text-lg text-gray-600">Pure, organic moringa products with incredible health benefits</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {moringaProducts.map(product => (
                            <div key={product.id} className="bg-green-50 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                                <div 
                                    className="w-full h-48 overflow-hidden cursor-pointer"
                                    onClick={() => handleImageClick(product.image)}
                                >
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mb-2">
                                        {product.type}
                                    </span>
                                    <h3 className="text-xl font-bold text-green-800 mb-2">{product.name}</h3>
                                    <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                                    
                                    <div className="mt-4">
                                        <h4 className="font-semibold text-green-700 mb-2">Benefits:</h4>
                                        <ul className="text-sm text-gray-700 space-y-1">
                                            {product.benefits.map((benefit, index) => (
                                                <li key={index}>• {benefit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className="mt-4">
                                        <h4 className="font-semibold text-green-700 mb-1">Usage:</h4>
                                        <p className="text-sm text-gray-600">{product.usage}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cultivation Process Section */}
            <section id="process" className="py-20 bg-green-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Cultivation Process</h2>
                        <p className="text-lg text-gray-600">Sustainable practices that ensure premium quality moringa</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {cultivationProcess.map(step => (
                            <div key={step.step} className="text-center">
                                <div 
                                    className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300"
                                    onClick={() => handleImageClick(step.image)}
                                >
                                    <span className="text-3xl">{step.icon}</span>
                                </div>
                                <div className="bg-green-800 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-bold text-green-800 mb-2">{step.title}</h3>
                                <p className="text-gray-700">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Health Benefits Section */}
            <section id="benefits" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Health Benefits of Moringa</h2>
                        <p className="text-lg text-gray-600">Nature's powerhouse with incredible nutritional value</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {moringaBenefits.map((benefit, index) => (
                            <div key={index} className="text-center p-6 bg-green-50 rounded-xl">
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-bold text-green-800 mb-2">{benefit.title}</h3>
                                <p className="text-gray-700">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Modal */}
            {isModalOpen && selectedImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
                    onClick={handleBackdropClick}
                >
                    <div className="relative max-w-4xl max-h-full">
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
                        >
                            ×
                        </button>
                        
                        {/* Image */}
                        <img 
                            src={selectedImage} 
                            alt="Enlarged view" 
                            className="max-w-full max-h-[80vh] object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </AppLayout>
    );
};

export default MoringaFarmPage;