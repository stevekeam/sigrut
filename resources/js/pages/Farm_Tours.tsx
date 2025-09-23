import AppLayout from '../layouts/app-layout';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

type TourPackage = {
    id: number;
    name: string;
    duration: string;
    price: number;
    image: string;
    highlights: string[];
    includes: string[];
    bestFor: string;
};

export default function Tours() {
    const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
    const [showBookingModal, setShowBookingModal] = useState(false);

    // Tour packages
    const tourPackages = [
        {
            id: 1,
            name: 'Basic Farm Tour',
            duration: '1.5 Hours',
            price: 1000,
            image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            highlights: [
                'Guided farm walk',
                'Meet farm animals',
                'Vegetable garden tour',
                'Honey tasting',
                'Photo opportunities'
            ],
            includes: ['Tour guide', 'Safety equipment', 'Honey samples'],
            bestFor: 'Families, School groups, First-time visitors'
        },
        {
            id: 2,
            name: 'Beekeeping Experience',
            duration: '3 Hours',
            price: 2500,
            image: 'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            highlights: [
                'Beekeeping suit provided',
                'Live hive demonstration',
                'Honey extraction process',
                'Propolis collection',
                'Take-home honey jar'
            ],
            includes: ['Full protective gear', 'Hands-on experience', '250g honey jar'],
            bestFor: 'Nature enthusiasts, Students, Beekeeping learners'
        },
        {
            id: 3,
            name: 'Avocado Farm Tour',
            duration: '2 Hours',
            price: 1500,
            image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            highlights: [
                'Avocado orchard walk',
                'Harvesting demonstration',
                'Cold storage facility',
                'Packing process',
                'Avocado tasting'
            ],
            includes: ['Expert guide', 'Seasonal avocado samples', 'Export process demo'],
            bestFor: 'Farmers, Agriculture students, Export businesses'
        },
        {
            id: 4,
            name: 'Full Day Farm Experience',
            duration: '6 Hours',
            price: 5000,
            image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            highlights: [
                'All farm activities',
                'Farm-to-table lunch',
                'Hands-on farming',
                'Animal feeding',
                'Certificate of participation'
            ],
            includes: ['All activities', 'Lunch included', 'Certificate', 'Souvenirs'],
            bestFor: 'Tourists, Corporate teams, Agricultural enthusiasts'
        }
    ];

    // Special group packages
    const groupPackages = [
        {
            type: 'School Groups',
            discount: '20% Off',
            minSize: 20,
            features: ['Educational materials', 'Teacher free', 'Activity sheets']
        },
        {
            type: 'Corporate Teams',
            discount: '15% Off',
            minSize: 10,
            features: ['Team building', 'Custom activities', 'Meeting space']
        },
        {
            type: 'Tourist Groups',
            discount: '10% Off',
            minSize: 15,
            features: ['Multilingual guides', 'Transport arranged', 'Souvenir shop']
        }
    ];

    const handleBookTour = (tour: TourPackage) => {
        setSelectedTour(tour);
        setShowBookingModal(true);
    };

    // Daily tour schedule
    const tourSchedule = [
        { time: '11:00 AM', activity: 'Beekeeping demonstrations' },
        { time: '1:00 PM', activity: 'Lunch break (for full-day tours)' },
        { time: '2:00 PM', activity: 'Afternoon tours & activities' },
        { time: '4:00 PM', activity: 'Animal feeding sessions' },
        { time: '5:00 PM', activity: 'Last tour of the day' }
    ];

    return (
        <AppLayout title="Farm Tours - Sigrut Farms Experience">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-green-700 to-green-900 text-white py-24">
                <div className="absolute inset-0 bg-cover bg-center opacity-20"
                     style={{backgroundImage: 'url(https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'}}>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Farm Tours & Experiences</h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        Discover sustainable agriculture firsthand. Educational and recreational tours 
                        that connect you with nature and farming practices.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={() => {
                                const el = document.getElementById('tours');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
                        >
                            View Tour Packages
                        </button>
                        <Link 
                            href="/accommodation" 
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors"
                        >
                            Stay With Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Tour Experience */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">What to Expect</h2>
                        <p className="text-lg text-gray-600">Immerse yourself in authentic farm life</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🐓</span>
                            </div>
                            <h3 className="text-xl font-bold text-green-800 mb-2">Animal Encounters</h3>
                            <p className="text-gray-700">Meet our free-range chickens, dairy cows, and other farm animals</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🌱</span>
                            </div>
                            <h3 className="text-xl font-bold text-green-800 mb-2">Organic Farming</h3>
                            <p className="text-gray-700">Learn about sustainable agriculture and organic practices</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🍯</span>
                            </div>
                            <h3 className="text-xl font-bold text-green-800 mb-2">Beekeeping</h3>
                            <p className="text-gray-700">Discover the fascinating world of bees and honey production</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tour Packages */}
            <section id="tours" className="py-16 bg-green-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Tour Packages</h2>
                        <p className="text-lg text-gray-600">Choose the experience that suits your interests</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {tourPackages.map(tour => (
                            <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <img src={tour.image} alt={tour.name} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-green-800">{tour.name}</h3>
                                            <p className="text-green-600 font-semibold">{tour.duration}</p>
                                        </div>
                                        <span className="text-2xl font-bold text-amber-600">KSh {tour.price.toLocaleString()}</span>
                                    </div>
                                    
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-green-700 mb-2">Tour Highlights:</h4>
                                        <ul className="space-y-1">
                                            {tour.highlights.map((highlight, index) => (
                                                <li key={index} className="flex items-center text-sm text-gray-600">
                                                    <span className="mr-2">✓</span> {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="font-semibold text-green-700 mb-2">Includes:</h4>
                                        <p className="text-sm text-gray-600">{tour.includes.join(', ')}</p>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="font-semibold text-green-700 mb-2">Best For:</h4>
                                        <p className="text-sm text-gray-600">{tour.bestFor}</p>
                                    </div>

                                    <button 
                                        onClick={() => handleBookTour(tour)}
                                        className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                                    >
                                        Book This Tour
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Group Packages */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Special Group Packages</h2>
                        <p className="text-lg text-gray-600">Discounts and custom experiences for groups</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {groupPackages.map((pkg, index) => (
                            <div key={index} className="bg-amber-50 rounded-xl p-6 text-center">
                                <h3 className="text-xl font-bold text-amber-800 mb-2">{pkg.type}</h3>
                                <div className="text-2xl font-bold text-green-700 mb-4">{pkg.discount}</div>
                                <p className="text-sm text-gray-600 mb-4">Minimum {pkg.minSize} people</p>
                                <ul className="space-y-2">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="text-sm text-amber-700">✓ {feature}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Daily Schedule */}
            <section className="py-16 bg-green-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">Daily Tour Schedule</h2>
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            {tourSchedule.map((slot, index) => (
                                <div key={index} className="flex items-center py-3 border-b border-gray-200 last:border-b-0">
                                    <div className="w-24 font-bold text-green-700">{slot.time}</div>
                                    <div className="flex-1 text-gray-700">{slot.activity}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Farm Adventure?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Book your tour today and create unforgettable memories on our sustainable farm.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+254743200200" className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
                            Call to Book: +254 743 200 200
                        </a>
                        <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors">
                            Online Booking
                        </Link>
                    </div>
                </div>
            </section>

            {/* Booking Modal */}
            {showBookingModal && selectedTour && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl max-w-md w-full p-6">
                        <h3 className="text-2xl font-bold text-green-800 mb-4">Book {selectedTour.name}</h3>
                        
                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" />
                            <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" />
                            <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-lg" />
                            
                            <div className="grid grid-cols-2 gap-4">
                                <input type="date" placeholder="Tour Date" className="p-3 border border-gray-300 rounded-lg" />
                                <select className="p-3 border border-gray-300 rounded-lg">
                                    <option>1 Person</option>
                                    <option>2 People</option>
                                    <option>3-5 People</option>
                                    <option>6+ People</option>
                                </select>
                            </div>
                            
                            <textarea placeholder="Special requests or questions" rows={3} className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
                            
                            <div className="flex gap-3">
                                <button 
                                    type="button"
                                    onClick={() => setShowBookingModal(false)}
                                    className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit"
                                    className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                                >
                                    Confirm Booking
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AppLayout>
    );
}