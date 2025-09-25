import AppLayout from '../layouts/app-layout';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

type ServicePackage = {
    id: number;
    name: string;
    image: string;
    description: string;
    category: 'tour' | 'training' | 'conference';
};

export default function Tours() {
    const [selectedPackage, setSelectedPackage] = useState<ServicePackage | null>(null);
    const [showBookingModal, setShowBookingModal] = useState(false);

    // All services in one simple array
    const services: ServicePackage[] = [
        {
            id: 1,
            name: 'Basic Farm Tour',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/IMG-20250110-WA0008.jpg',
            description: 'Guided farm walk, meet animals, vegetable garden tour, and honey tasting',
            category: 'tour'
        },
        {
            id: 2,
            name: 'Beekeeping Experience',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/IMG-20250107-WA0048.jpg',
            description: 'Live hive demonstration, honey extraction, and hands-on beekeeping',
            category: 'tour'
        },
        {
            id: 3,
            name: 'Avocado Farm Tour',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-20-at-14.32.34_a77dfc73.jpg',
            description: 'Avocado orchard walk, harvesting demo, and export process viewing',
            category: 'tour'
        },
        {
            id: 4,
            name: 'Full Day Farm Experience',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-20-at-15.48.48_05cb5bfc-e1738737532316.jpg',
            description: 'Complete farm activities with farm-to-table lunch and certificate',
            category: 'tour'
        },
        {
            id: 5,
            name: 'Beekeeping Training',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/IMG-20250107-WA0050-e1737969730374.jpg',
            description: 'Comprehensive beekeeping theory and practical hive management',
            category: 'training'
        },
        {
            id: 6,
            name: 'Organic Farming Certification',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2023/11/Sl1.png',
            description: 'Organic farming principles, soil management, and certification process',
            category: 'training'
        },
        {
            id: 7,
            name: 'Executive Conference Hall',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-20-at-14.33.54_27c096d6.jpg',
            description: 'Air-conditioned space for 50-100 people with modern equipment',
            category: 'conference'
        },
        {
            id: 8,
            name: 'Training Center',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2023/11/IMG-20231031-WA0103.jpg',
            description: 'Classroom-style setup for 30-60 people with practical areas',
            category: 'conference'
        },
        {
            id: 9,
            name: 'Outdoor Pavilion',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2023/11/IMG-20231031-WA0108-e1738327438365.jpg',
            description: 'Open-air setting for 100-200 people in natural surroundings',
            category: 'conference'
        }
    ];

    const handleBookService = (service: ServicePackage) => {
        setSelectedPackage(service);
        setShowBookingModal(true);
    };

    // Color mapping based on category
    const getCategoryColors = (category: string) => {
        switch (category) {
            case 'tour':
                return {
                    bg: 'bg-green-100',
                    text: 'text-green-800',
                    button: 'bg-green-600 hover:bg-green-700'
                };
            case 'training':
                return {
                    bg: 'bg-amber-100',
                    text: 'text-amber-800',
                    button: 'bg-amber-500 hover:bg-amber-600'
                };
            case 'conference':
                return {
                    bg: 'bg-green-100',
                    text: 'text-green-800',
                    button: 'bg-green-600 hover:bg-green-700'
                };
            default:
                return {
                    bg: 'bg-green-100',
                    text: 'text-green-800',
                    button: 'bg-green-600 hover:bg-green-700'
                };
        }
    };

    return (
        <AppLayout title="Farm Tours, Training & Conference Facilities - Sigrut Farms">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-green-800 to-green-900 text-white py-20">
                <div className="absolute inset-0 bg-cover bg-center opacity-20"
                     style={{backgroundImage: 'url(https://Sigrutfarmsinternational.com/wp-content/uploads/2023/11/Sl3.png)'}}>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Farm Experiences & Facilities</h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Discover sustainable agriculture, professional training, and excellent conference facilities 
                        in our serene farm environment.
                    </p>
                    <Link 
                        href="/contact" 
                        className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors inline-block"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-green-800 mb-4">Our Services</h2>
                        <p className="text-gray-600">Explore our farm tours, training programs, and conference facilities</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map(service => {
                            const colors = getCategoryColors(service.category);
                            return (
                                <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <img 
                                        src={service.image} 
                                        alt={service.name} 
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <div className="mb-3">
                                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${colors.bg} ${colors.text}`}>
                                                {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                                        <p className="text-gray-600 mb-4">{service.description}</p>
                                        
                                        <button 
                                            onClick={() => handleBookService(service)}
                                            className={`w-full py-2 rounded-lg font-semibold text-white ${colors.button} transition-colors`}
                                        >
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Simple Group Packages */}
            <section className="py-16 bg-green-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-green-800 mb-4">Special Group Offers</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-6">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🏫</span>
                            </div>
                            <h3 className="text-lg font-bold text-green-800 mb-2">School Groups</h3>
                            <p className="text-gray-600">Educational tours with special rates for students</p>
                        </div>
                        
                        <div className="text-center p-6">
                            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">💼</span>
                            </div>
                            <h3 className="text-lg font-bold text-amber-800 mb-2">Corporate Teams</h3>
                            <p className="text-gray-600">Team building and custom packages</p>
                        </div>
                        
                        <div className="text-center p-6">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">👥</span>
                            </div>
                            <h3 className="text-lg font-bold text-green-800 mb-2">Tour Groups</h3>
                            <p className="text-gray-600">Group discounts and multilingual guides</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple CTA */}
            <section className="py-16 bg-amber-500 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Visit Sigrut Farms Today</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        Experience the best of sustainable farming and modern facilities in one place.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+254743200200" className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
                            Call: +254 743 200 200
                        </a>
                        <Link href="/contact" className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Get More Information
                        </Link>
                    </div>
                </div>
            </section>

            {/* Simple Booking Modal */}
            {showBookingModal && selectedPackage && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-md w-full p-6">
                        <h3 className="text-xl font-bold text-green-800 mb-4">
                            Inquire about {selectedPackage.name}
                        </h3>
                        
                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" />
                            <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" />
                            <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-lg" />
                            
                            <textarea placeholder="What would you like to know?" rows={3} className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
                            
                            <div className="flex gap-3">
                                <button 
                                    type="button"
                                    onClick={() => {
                                        setShowBookingModal(false);
                                        setSelectedPackage(null);
                                    }}
                                    className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit"
                                    className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                                >
                                    Send Inquiry
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AppLayout>
    );
}