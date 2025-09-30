import AppLayout from '../layouts/app-layout';
import { useState } from 'react';

export default function Accommodation() {
    const [showContactModal, setShowContactModal] = useState(false);
    const [showLightbox, setShowLightbox] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Accommodation overview
    const accommodationOverview = {
        title: "Comfortable Farmstay Accommodation",
        description: "Experience the perfect blend of rustic charm and modern comfort at Sigrut Orchard & Hive Ltd. Our carefully designed accommodations offer a peaceful retreat amidst nature, where you can unwind and reconnect with the countryside.",
        highlights: [
            {
                icon: "🏡",
                title: "Variety of Options",
                description: "From cozy cottages to spacious family bungalows"
            },
            {
                icon: "🌄",
                title: "Scenic Views",
                description: "Panoramic farm views and peaceful surroundings"
            },
            {
                icon: "🍃",
                title: "Eco-Friendly",
                description: "Sustainable practices and natural materials"
            },
            {
                icon: "⭐",
                title: "Modern Comforts",
                description: "All essential amenities for a comfortable stay"
            }
        ],
        features: [
            "Comfortable bedding and linens",
            "Private bathrooms",
            "Farm-fresh breakfast included",
            "Free WiFi access",
            "Outdoor seating areas",
            "Scenic view of avocado farm",
            "Apiary tours",
            "Secure parking",
            "Daily housekeeping"
        ]
    };

    // Sample accommodation images
    const accommodationImages = [
        'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-28-at-12.33.42_b6445847.jpg',
        'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-01-29-at-17.06.13_215e49a8.jpg',
        'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-29-at-17.06.15_63c627b0.jpg',
        'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-22-at-10.06.49_4f05df38-1-e1737970577520.jpg',
        'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-22-at-10.06.49_4f05df38-1-e1737970577520.jpg'
    ];

    // Lightbox functions
    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setShowLightbox(true);
    };

    const closeLightbox = () => {
        setShowLightbox(false);
    };

    const goToPrevious = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? accommodationImages.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === accommodationImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') goToPrevious();
        if (e.key === 'ArrowRight') goToNext();
    };

    return (
        <AppLayout title="Farmstay Accommodation - Sigrut Orchard & Hive Ltd">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-green-700 to-green-900 text-white py-54 overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{
                        backgroundImage: 'url(https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-29-at-17.06.15_63c627b0.jpg)'
                    }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Farmstay Accommodation
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        Your peaceful retreat in the heart of nature. Experience comfortable lodging 
                        surrounded by the beauty of Sigrut Orchard & Hive Ltd.
                    </p>
                    <button 
                        onClick={() => setShowContactModal(true)}
                        className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors inline-block"
                    >
                        Inquire About Staying
                    </button>
                </div>
            </section>

            {/* Accommodation Overview */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                            {accommodationOverview.title}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            {accommodationOverview.description}
                        </p>
                    </div>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {accommodationOverview.highlights.map((highlight, index) => (
                            <div key={index} className="text-center p-6">
                                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">{highlight.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-green-800 mb-2">{highlight.title}</h3>
                                <p className="text-gray-700">{highlight.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Features and Images */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-green-800 mb-6">What to Expect</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {accommodationOverview.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <span className="text-green-500 text-lg">✓</span>
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-8 p-6 bg-amber-50 rounded-lg">
                                <h4 className="font-bold text-amber-800 mb-4">Customized Stays</h4>
                                <p className="text-amber-700 mb-4">
                                    We provide a variety of accommodation options tailored to your needs:
                                </p>
                                
                                <div className="space-y-4 text-amber-800">
                                    <div className="flex items-start gap-3">
                                        <span className="text-amber-600">💑</span>
                                        <div>
                                            <span className="font-semibold">Couples</span>
                                            <p className="text-amber-700 text-sm mt-1">Cozy, private rooms perfect for a romantic escape</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-3">
                                        <span className="text-amber-600">👨‍👩‍👧‍👦</span>
                                        <div>
                                            <span className="font-semibold">Families</span>
                                            <p className="text-amber-700 text-sm mt-1">Spacious, comfortable setups with family-friendly amenities</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-3">
                                        <span className="text-amber-600">👥</span>
                                        <div>
                                            <span className="font-semibold">Groups/Retreats</span>
                                            <p className="text-amber-700 text-sm mt-1">Flexible spaces ideal for friends, teams, or celebrations</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <p className="text-amber-700 mt-4 font-medium border-t border-amber-200 pt-4">
                                    Whatever your plan, we'll help you choose the best option for a comfortable and memorable stay.
                                </p>
                            </div>
                        </div>

                        {/* Image Gallery */}
                        <div className="grid grid-cols-2 gap-4">
                            {accommodationImages.map((image, index) => (
                                <div 
                                    key={index} 
                                    className={`${index === 0 ? 'col-span-2' : ''} cursor-pointer transform transition-transform hover:scale-105`}
                                    onClick={() => openLightbox(index)}
                                >
                                    <img 
                                        src={image} 
                                        alt={`Sigrut Farms accommodation ${index + 1}`}
                                        className="w-full h-64 object-cover rounded-lg shadow-md"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Stay With Us */}
            <section className="py-16 bg-green-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                            Sigrut Orchard & Hive Ltd Experience
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center p-6">
                            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                                <span className="text-2xl">🌅</span>
                            </div>
                            <h3 className="text-xl font-bold text-green-800 mb-2">Wake Up in Nature</h3>
                            <p className="text-gray-700">
                                Start your day with birds singing and fresh country air. 
                                Perfect for disconnecting from city life.
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                                <span className="text-2xl">🍽️</span>
                            </div>
                            <h3 className="text-xl font-bold text-green-800 mb-2">Farm-Fresh Meals</h3>
                            <p className="text-gray-700">
                                Enjoy meals prepared with organic ingredients harvested 
                                daily from our farm.
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                                <span className="text-2xl">🚜</span>
                            </div>
                            <h3 className="text-xl font-bold text-green-800 mb-2">Farm Activities</h3>
                            <p className="text-gray-700">
                                Participate in farm activities and experience authentic 
                                countryside living.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple CTA */}
            <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Farm Life?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Get in touch to learn more about our accommodation options, availability, and pricing.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={() => setShowContactModal(true)}
                            className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
                        >
                            Inquire About Staying
                        </button>
                        <a 
                            href="tel:+254743200200" 
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors"
                        >
                            Call: +254 743 200 200
                        </a>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {showLightbox && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
                    onClick={closeLightbox}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                >
                    <div 
                        className="relative max-w-4xl max-h-full w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button 
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 text-white text-3xl z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-colors"
                        >
                            &times;
                        </button>

                        {/* Navigation Buttons */}
                        <button 
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-colors"
                        >
                            ‹
                        </button>
                        
                        <button 
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-colors"
                        >
                            ›
                        </button>

                        {/* Image */}
                        <img 
                            src={accommodationImages[currentImageIndex]} 
                            alt={`Accommodation image ${currentImageIndex + 1}`}
                            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                        />

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm">
                            {currentImageIndex + 1} / {accommodationImages.length}
                        </div>
                    </div>
                </div>
            )}

            {/* Simple Contact Modal */}
            {showContactModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl max-w-md w-full p-6">
                        <h3 className="text-2xl font-bold text-green-800 mb-4">Accommodation Inquiry</h3>
                        <p className="text-gray-600 mb-6">
                            Contact us to learn more about our accommodation options, check availability, 
                            and get personalized pricing for your stay.
                        </p>
                        
                        <div className="space-y-4 mb-6">
                            <a 
                                href="tel:+254743200200"
                                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                            >
                                📞 Call +254 743 200 200
                            </a>
                            
                            <a 
                                href="mailto:info@sigrut.com"
                                className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
                            >
                                ✉️ Email Inquiry
                            </a>
                        </div>
                        
                        <button 
                            onClick={() => setShowContactModal(false)}
                            className="w-full bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <style>{`
                html {
                    scroll-behavior: smooth;
                }
            `}</style>
        </AppLayout>
    );
}