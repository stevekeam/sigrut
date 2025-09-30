import AppLayout from '../layouts/app-layout';
import { useState, useEffect } from 'react';

const HoneyFarmPage = () => {
    // Honey products data
    const honeyProducts = [
        {
            id: 1,
            name: 'Raw Wild Honey',
            type: 'Pure & Unprocessed',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-01-31-at-10.33.50_bc8b9276-e1738586951867.jpg',
            description: '100% pure honey straight from the hive, packed with natural enzymes and antioxidants',
            benefits: ['Boosts Immunity', 'Rich in Antioxidants', 'Natural Energy'],
            usage: 'Daily consumption, tea sweetener'
        },
        {
            id: 2,
            name: 'Honeycomb',
            type: 'Fresh from Hive',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/472295245_17899293927097569_5952718528471721045_n-rotated-e1736329659603.jpg',
            description: 'Experience honey in its most natural form - straight from the honeycomb',
            benefits: ['Pure Wax', 'Chewy Texture', 'Rich Flavor'],
            usage: 'Direct consumption, cheese pairing'
        },
        {
            id: 3,
            name: 'Infused Honey',
            type: 'Herbal Blends',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/1716211130700-e1736497594623.jpg',
            description: 'Honey infused with natural herbs for enhanced health benefits',
            benefits: ['Herbal Benefits', 'Unique Flavors', 'Medicinal Properties'],
            usage: 'Therapeutic use, culinary experiments'
        },
        {
            id: 4,
            name: 'Bee Pollen',
            type: 'Superfood',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/16975209107069710d09150c846bca8c039bb6333b535-e1737969533896.webp',
            description: 'Nutrient-rich bee pollen collected from our hives',
            benefits: ['Protein Source', 'Vitamins & Minerals', 'Energy Boost'],
            usage: 'Smoothies, yogurt topping'
        }
    ];

    // Beekeeping process steps
    const beekeepingProcess = [
        {
            step: 1,
            title: 'Hive Setup',
            description: 'We place Langstroth hives in strategic locations with diverse flora',
            image: 'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            icon: '🏡'
        },
        {
            step: 2,
            title: 'Bee Colony Management',
            description: 'Healthy bee colonies are maintained using organic methods',
            image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            icon: '👨‍🌾'
        },
        {
            step: 3,
            title: 'Honey Harvesting',
            description: 'We harvest only surplus honey, ensuring bees have enough for themselves',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            icon: '🍯'
        },
        {
            step: 4,
            title: 'Cold Extraction',
            description: 'Honey is extracted without heating to preserve enzymes and nutrients',
            image: 'https://images.unsplash.com/photo-1598974357779-16d2db7fead4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            icon: '❄️'
        }
    ];

    // Honey benefits
    const honeyBenefits = [
        { icon: '🛡️', title: 'Immune Booster', description: 'Natural antibacterial properties help fight infections' },
        { icon: '💪', title: 'Energy Source', description: 'Sustained energy without blood sugar spikes' },
        { icon: '😴', title: 'Sleep Aid', description: 'Promotes restful sleep when taken before bedtime' },
        { icon: '🩹', title: 'Wound Healing', description: 'Accelerates healing of burns and wounds' }
    ];

    // Tour packages
    const tourPackages = [
        {
            name: 'Basic Apiary Tour',
            includes: ['Beekeeping suit', 'Hive observation', 'Honey tasting']
        },
        {
            name: 'Full Beekeeping Experience',
            includes: ['Full protective gear', 'Live hive handling', 'Honey extraction',]
        },
        {
            name: 'Beekeeping Workshop',
            includes: ['Theoretical training', 'Practical sessions', 'Certificate',]
        }
    ];

    const [activeSection, setActiveSection] = useState('hero');

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

    return (
        <AppLayout title="Pure Natural Honey - Sigrut Farms Beekeeping Experience">
         {/* Hero Section */}
<section id="hero" className="relative bg-gradient-to-r from-green-700 to-green-900 text-white py-54 overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center opacity-80"
         style={{backgroundImage: 'url(https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/IMG-20250107-WA0047.jpg)'}}>
    </div>
    <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Pure Natural Honey</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Experience the sweetness of nature with our sustainably harvested honey. 
            From hive to your table, we preserve every drop of goodness.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
                onClick={() => scrollToSection('products')}
                className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
            >
                View Our Products
            </button>
            <button 
                onClick={() => scrollToSection('visit')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-800 transition-colors"
            >
                Visit Our Apiary
            </button>
        </div>
    </div>
</section>
            {/* Products Section */}
            <section id="products" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Our Honey Products</h2>
                        <p className="text-lg text-gray-600">Pure, natural honey products with incredible health benefits</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {honeyProducts.map(product => (
                            <div key={product.id} className="bg-amber-50 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                                <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
                                <div className="p-6">
                                    <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm mb-2">
                                        {product.type}
                                    </span>
                                    <h3 className="text-xl font-bold text-amber-800 mb-2">{product.name}</h3>
                                    <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                                    
                                    <div className="mt-4">
                                        <h4 className="font-semibold text-amber-700 mb-2">Benefits:</h4>
                                        <ul className="text-sm text-gray-700 space-y-1">
                                            {product.benefits.map((benefit, index) => (
                                                <li key={index}>• {benefit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className="mt-4">
                                        <h4 className="font-semibold text-amber-700 mb-1">Usage:</h4>
                                        <p className="text-sm text-gray-600">{product.usage}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Beekeeping Process Section */}
            <section id="process" className="py-20 bg-amber-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Our Beekeeping Process</h2>
                        <p className="text-lg text-gray-600">Sustainable practices that respect nature and produce premium honey</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {beekeepingProcess.map(step => (
                            <div key={step.step} className="text-center">
                                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <span className="text-3xl">{step.icon}</span>
                                </div>
                                <div className="bg-amber-800 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-bold text-amber-800 mb-2">{step.title}</h3>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Health Benefits of Honey</h2>
                        <p className="text-lg text-gray-600">Nature's sweet medicine with incredible healing properties</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {honeyBenefits.map((benefit, index) => (
                            <div key={index} className="text-center p-6 bg-amber-50 rounded-xl">
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-bold text-amber-800 mb-2">{benefit.title}</h3>
                                <p className="text-gray-700">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Farm Visit Section */}
            <section id="visit" className="py-20 bg-amber-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Apiary</h2>
                        <p className="text-xl opacity-90">Experience beekeeping firsthand and learn about sustainable agriculture</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {tourPackages.map((pkg, index) => (
                            <div key={index} className="bg-amber-700 rounded-xl p-6 text-center">
                                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                                <ul className="space-y-2 mb-6">
                                    {pkg.includes.map((item, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <span className="mr-2">✓</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button 
                            onClick={() => scrollToSection('contact')}
                            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                        >
                            Book Your Farm Visit Today
                        </button>
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
};

export default HoneyFarmPage;