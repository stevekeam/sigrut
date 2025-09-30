import AppLayout from '../layouts/app-layout';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

type Amenity = {
    id: number;
    name: string;
    image: string;
    description: string;
    category: 'facility' | 'experience' | 'nature';
    features: string[];
};

export default function Amenities() {
    const [selectedAmenity, setSelectedAmenity] = useState<Amenity | null>(null);
    const [showDetailModal, setShowDetailModal] = useState(false);

    // Amenities array
    const amenities: Amenity[] = [
        {
            id: 1,
            name: 'Modern Conference Hall',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-20-at-14.33.54_27c096d6.jpg',
            description: 'Fully equipped air-conditioned conference facility perfect for corporate meetings, workshops, and events',
            category: 'facility',
            features: ['Capacity: 50-100 people', 'Projector & Sound System', 'Air Conditioning', 'High-speed WiFi']
        },
        {
            id: 2,
            name: 'Training Center',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2023/11/IMG-20231031-WA0103.jpg',
            description: 'Professional learning environment with practical demonstration areas',
            category: 'facility',
            features: ['Classroom Setup', 'Practical Demo Areas', 'Capacity: 30-60 people', 'Audio-Visual Equipment']
        },
        {
            id: 3,
            name: 'Outdoor Pavilion',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2023/11/IMG-20231031-WA0108-e1738327438365.jpg',
            description: 'Beautiful open-air venue surrounded by nature, perfect for large gatherings and events',
            category: 'facility',
            features: ['Capacity: 100-200 people', 'Natural Surroundings', 'Open-air Setting', 'Event Ready']
        },
        {
            id: 4,
            name: 'Avocado Orchard',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-20-at-14.32.34_a77dfc73.jpg',
            description: 'Expansive avocado farms showcasing sustainable agricultural practices',
            category: 'nature',
            features: ['Guided Tours', 'Harvesting Demonstrations', 'Export Process Viewing', 'Sustainable Farming']
        },
        {
            id: 5,
            name: 'Apiary',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/IMG-20250107-WA0050-e1737969730374.jpg',
            description: 'Active beekeeping operation with educational demonstrations and honey production',
            category: 'experience',
            features: ['Live Hive Demonstrations', 'Honey Extraction', 'Beekeeping Education', 'Honey Tasting']
        },
        {
            id: 6,
            name: 'Organic Gardens',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2023/11/Sl1.png',
            description: 'Vibrant vegetable and fruit gardens grown using organic farming methods',
            category: 'nature',
            features: ['Organic Farming', 'Seasonal Produce', 'Educational Tours', 'Fresh Produce Available']
        },
        {
            id: 7,
            name: 'Farm Animals',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/IMG-20250110-WA0008.jpg',
            description: 'Diverse farm animals in natural habitats for educational and recreational purposes',
            category: 'experience',
            features: ['Animal Interactions', 'Educational Sessions', 'Natural Habitats', 'Family Friendly']
        },
        {
            id: 8,
            name: 'Scenic Walking Trails',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-20-at-15.48.48_05cb5bfc-e1738737532316.jpg',
            description: 'Beautiful nature trails throughout the farm showcasing the natural landscape',
            category: 'nature',
            features: ['Guided Nature Walks', 'Photography Opportunities', 'Relaxing Environment', 'Educational Signs']
        },
    ];

    const handleViewDetails = (amenity: Amenity) => {
        setSelectedAmenity(amenity);
        setShowDetailModal(true);
    };

    // Consistent color theming using green and amber
    const getCategoryColors = (category: string) => {
        switch (category) {
            case 'facility':
                return {
                    bg: 'bg-green-100',
                    text: 'text-green-800',
                    border: 'border-green-200',
                    button: 'bg-green-600 hover:bg-green-700'
                };
            case 'experience':
                return {
                    bg: 'bg-amber-100',
                    text: 'text-amber-800',
                    border: 'border-amber-200',
                    button: 'bg-amber-500 hover:bg-amber-600'
                };
            case 'nature':
                return {
                    bg: 'bg-emerald-100',
                    text: 'text-emerald-800',
                    border: 'border-emerald-200',
                    button: 'bg-emerald-600 hover:bg-emerald-700'
                };
            default:
                return {
                    bg: 'bg-green-100',
                    text: 'text-green-800',
                    border: 'border-green-200',
                    button: 'bg-green-600 hover:bg-green-700'
                };
        }
    };

    return (
        <AppLayout title="Farm Amenities & Facilities - Sigrut Orchard & Hive Ltd">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-green-800 to-green-900 text-white py-54 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-90"
                     style={{backgroundImage: 'url(https://Sigrutfarmsinternational.com/wp-content/uploads/2023/11/Sl3.png)'}}>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Farm Amenities & Facilities</h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Discover our exceptional facilities, natural attractions, and unique experiences 
                        in our serene farm environment.
                    </p>
                    <Link 
                        href="/contact" 
                        className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors inline-block"
                    >
                        Plan Your Visit
                    </Link>
                </div>
            </section>

            {/* Amenities Grid */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-green-800 mb-4">Our Amenities</h2>
                        <p className="text-gray-600">Explore our modern facilities, natural attractions, and unique farm experiences</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {amenities.map(amenity => {
                            const colors = getCategoryColors(amenity.category);
                            return (
                                <div key={amenity.id} className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border ${colors.border}`}>
                                    <img 
                                        src={amenity.image} 
                                        alt={amenity.name} 
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <div className="mb-3">
                                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${colors.bg} ${colors.text}`}>
                                                {amenity.category.charAt(0).toUpperCase() + amenity.category.slice(1)}
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{amenity.name}</h3>
                                        <p className="text-gray-600 mb-4">{amenity.description}</p>
                                        
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                {amenity.features.slice(0, 3).map((feature, index) => (
                                                    <li key={index} className="flex items-center">
                                                        <span className={`w-2 h-2 rounded-full mr-2 ${colors.bg.replace('100', '500')}`}></span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <button 
                                            onClick={() => handleViewDetails(amenity)}
                                            className={`w-full py-2 rounded-lg font-semibold text-white ${colors.button} transition-colors`}
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 bg-green-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-green-800 mb-4">Amenity Categories</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg p-6 text-center shadow-md border border-green-200">
                            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🏢</span>
                            </div>
                            <h3 className="text-xl font-bold text-green-800 mb-3">Modern Facilities</h3>
                            <p className="text-gray-600 mb-4">
                                State-of-the-art conference halls, training centers, and event spaces equipped with modern amenities.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Conference & Meeting Rooms</li>
                                <li>• Training Centers</li>
                                <li>• Event Spaces</li>
                                <li>• Outdoor Pavilion</li>
                            </ul>
                        </div>
                        
                        <div className="bg-white rounded-lg p-6 text-center shadow-md border border-amber-200">
                            <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🌿</span>
                            </div>
                            <h3 className="text-xl font-bold text-amber-800 mb-3">Farm Experiences</h3>
                            <p className="text-gray-600 mb-4">
                                Interactive and educational experiences that bring you closer to nature and farm life.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Beekeeping Demonstrations</li>
                                <li>• Animal Interactions</li>
                                <li>• Hands-on Activities</li>
                                <li>• Educational Sessions</li>
                            </ul>
                        </div>
                        
                        <div className="bg-white rounded-lg p-6 text-center shadow-md border border-emerald-200">
                            <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🌳</span>
                            </div>
                            <h3 className="text-xl font-bold text-emerald-800 mb-3">Natural Attractions</h3>
                            <p className="text-gray-600 mb-4">
                                Beautiful natural landscapes, organic gardens, and scenic walking trails throughout the farm.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Avocado Orchards</li>
                                <li>• Organic Gardens</li>
                                <li>• Nature Trails</li>
                                <li>• Scenic Views</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-amber-500 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Experience Our Amenities</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        Whether for business, education, or leisure, our facilities provide the perfect setting for your needs.
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

            {/* Detail Modal */}
            {showDetailModal && selectedAmenity && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="relative">
                            <img 
                                src={selectedAmenity.image} 
                                alt={selectedAmenity.name} 
                                className="w-full h-64 object-cover rounded-t-lg"
                            />
                            <button 
                                onClick={() => {
                                    setShowDetailModal(false);
                                    setSelectedAmenity(null);
                                }}
                                className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2 hover:bg-opacity-100 transition-all"
                            >
                                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        <div className="p-6">
                            <div className="mb-4">
                                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColors(selectedAmenity.category).bg} ${getCategoryColors(selectedAmenity.category).text}`}>
                                    {selectedAmenity.category.charAt(0).toUpperCase() + selectedAmenity.category.slice(1)}
                                </span>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-green-800 mb-4">
                                {selectedAmenity.name}
                            </h3>
                            
                            <p className="text-gray-600 mb-6 text-lg">
                                {selectedAmenity.description}
                            </p>
                            
                            <div className="mb-6">
                                <h4 className="text-xl font-semibold text-gray-800 mb-3">Features & Amenities:</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {selectedAmenity.features.map((feature, index) => (
                                        <div key={index} className="flex items-center">
                                            <span className={`w-2 h-2 rounded-full mr-3 ${getCategoryColors(selectedAmenity.category).bg.replace('100', '500')}`}></span>
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="flex gap-3 pt-4 border-t border-gray-200">
                                <a 
                                    href="tel:+254743200200"
                                    className="flex-1 bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                                >
                                    Call to Inquire
                                </a>
                                <Link 
                                    href="/contact"
                                    className="flex-1 bg-amber-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
                                >
                                    Send Message
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AppLayout>
    );
}