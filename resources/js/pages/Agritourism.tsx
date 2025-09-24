import AppLayout from '../layouts/app-layout';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

type TourPackage = {
    id: number;
    name: string;
    duration: string;
    image: string;
    highlights: string[];
    includes: string[];
    bestFor: string;
    type: 'tour' | 'training' | 'conference';
};

type ConferencePackage = {
    id: number;
    name: string;
    capacity: string;
    image: string;
    features: string[];
    equipment: string[];
    bestFor: string;
    duration: string;
};

export default function Tours() {
    const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
    const [selectedConference, setSelectedConference] = useState<ConferencePackage | null>(null);
    const [showBookingModal, setShowBookingModal] = useState(false);
    const [activeTab, setActiveTab] = useState<'tours' | 'training' | 'conference'>('tours');

    // Tour packages
    const tourPackages: TourPackage[] = [
        {
            id: 1,
            name: 'Basic Farm Tour',
            duration: '1.5 Hours',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/IMG-20250110-WA0008.jpg',
            highlights: [
                'Guided farm walk',
                'Meet farm animals',
                'Vegetable garden tour',
                'Honey tasting',
                'Photo opportunities'
            ],
            includes: ['Tour guide', 'Safety equipment', 'Honey samples'],
            bestFor: 'Families, School groups, First-time visitors',
            type: 'tour'
        },
        {
            id: 2,
            name: 'Beekeeping Experience',
            duration: '3 Hours',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/IMG-20250107-WA0048.jpg',
            highlights: [
                'Beekeeping suit provided',
                'Live hive demonstration',
                'Honey extraction process',
                'Propolis collection',
                'Take-home honey jar'
            ],
            includes: ['Full protective gear', 'Hands-on experience', '250g honey jar'],
            bestFor: 'Nature enthusiasts, Students, Beekeeping learners',
            type: 'tour'
        },
        {
            id: 3,
            name: 'Avocado Farm Tour',
            duration: '2 Hours',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-20-at-14.32.34_a77dfc73.jpg',
            highlights: [
                'Avocado orchard walk',
                'Harvesting demonstration',
                'Cold storage facility',
                'Packing process',
                'Avocado tasting'
            ],
            includes: ['Expert guide', 'Seasonal avocado samples', 'Export process demo'],
            bestFor: 'Farmers, Agriculture students, Export businesses',
            type: 'tour'
        },
        {
            id: 4,
            name: 'Full Day Farm Experience',
            duration: '6 Hours',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-20-at-15.48.48_05cb5bfc-e1738737532316.jpg',
            highlights: [
                'All farm activities',
                'Farm-to-table lunch',
                'Hands-on farming',
                'Animal feeding',
                'Certificate of participation'
            ],
            includes: ['All activities', 'Lunch included', 'Certificate', 'Souvenirs'],
            bestFor: 'Tourists, Corporate teams, Agricultural enthusiasts',
            type: 'tour'
        },
        // Training packages
        {
            id: 5,
            name: 'Beekeeping Training Workshop',
            duration: '2 Days',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/IMG-20250107-WA0050-e1737969730374.jpg',
            highlights: [
                'Comprehensive beekeeping theory',
                'Practical hive management',
                'Honey extraction techniques',
                'Disease prevention',
                'Business aspects of beekeeping'
            ],
            includes: ['Training materials', 'Certificate', 'Lunch', 'Practical sessions'],
            bestFor: 'Aspiring beekeepers, Farmers, Agriculture students',
            type: 'training'
        },
        {
            id: 6,
            name: 'Organic Farming Certification',
            duration: '3 Days',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2023/11/Sl1.png',
            highlights: [
                'Organic farming principles',
                'Soil management techniques',
                'Natural pest control',
                'Certification process',
                'Market access strategies'
            ],
            includes: ['Course materials', 'Organic certification', 'Field visits', 'Meals'],
            bestFor: 'Farmers, Agricultural officers, Sustainability enthusiasts',
            type: 'training'
        }
    ];

    // Conference facilities
    const conferencePackages: ConferencePackage[] = [
        {
            id: 1,
            name: 'Executive Conference Hall',
            capacity: '50-100 People',
            duration: 'Full Day',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-20-at-14.33.54_27c096d6.jpg',
            features: [
                'Air-conditioned space',
                'Natural lighting',
                'Farm view',
                'Private breakout areas',
                'Catering kitchen access'
            ],
            equipment: [
                'Projector & screen',
                'Sound system',
                'Wireless microphones',
                'Whiteboards',
                'High-speed WiFi'
            ],
            bestFor: 'Corporate meetings, Training sessions, Workshops'
        },
        {
            id: 2,
            name: 'Training Center',
            capacity: '30-60 People',
            duration: 'Full Day',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2023/11/IMG-20231031-WA0103.jpg',
            features: [
                'Classroom-style setup',
                'Practical demonstration area',
                'Outdoor learning space',
                'Resource library',
                'Coffee station'
            ],
            equipment: [
                'Flip charts',
                'Training materials',
                'Audio-visual equipment',
                'Practical tools',
                'Internet access'
            ],
            bestFor: 'Educational programs, Hands-on training, Team building'
        },
        {
            id: 3,
            name: 'Outdoor Pavilion',
            capacity: '100-200 People',
            duration: 'Full Day',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2023/11/IMG-20231031-WA0108-e1738327438365.jpg',
            features: [
                'Open-air setting',
                'Natural surroundings',
                'Farm atmosphere',
                'Flexible seating',
                'BBQ area access'
            ],
            equipment: [
                'Portable sound system',
                'Outdoor screens',
                'Lighting setup',
                'Weather protection',
                'Mobile power sources'
            ],
            bestFor: 'Large events, Product launches, Corporate retreats'
        }
    ];

    // Special group packages
    const groupPackages = [
        {
            type: 'School Groups',
            discount: 'Special Rates',
            minSize: 20,
            features: ['Educational materials', 'Teacher free', 'Activity sheets']
        },
        {
            type: 'Corporate Teams',
            discount: 'Custom Packages',
            minSize: 10,
            features: ['Team building', 'Custom activities', 'Meeting space']
        },
        {
            type: 'Tourist Groups',
            discount: 'Group Discounts',
            minSize: 15,
            features: ['Multilingual guides', 'Transport arranged', 'Souvenir shop']
        }
    ];

    // Training programs
    const trainingPrograms = [
        {
            title: 'Sustainable Agriculture',
            duration: '2 Days',
            topics: ['Organic farming', 'Water conservation', 'Crop rotation'],
        },
        {
            title: 'Agribusiness Management',
            duration: '3 Days',
            topics: ['Market analysis', 'Financial planning', 'Export procedures'],
        },
        {
            title: 'Farm Technology',
            duration: '1 Day',
            topics: ['Modern equipment', 'Digital tools', 'Efficiency systems'],
        }
    ];

    const handleBookTour = (tour: TourPackage) => {
        setSelectedTour(tour);
        setShowBookingModal(true);
    };

    const handleBookConference = (conference: ConferencePackage) => {
        setSelectedConference(conference);
        setShowBookingModal(true);
    };

    // Daily tour schedule
    const dailySchedule = [
        { time: '8:00 AM', activity: 'Conference sessions begin' },
        { time: '10:00 AM', activity: 'Morning farm tours' },
        { time: '11:00 AM', activity: 'Beekeeping demonstrations' },
        { time: '1:00 PM', activity: 'Lunch break' },
        { time: '2:00 PM', activity: 'Training workshops' },
        { time: '4:00 PM', activity: 'Practical sessions' },
        { time: '5:00 PM', activity: 'Networking sessions' }
    ];

    return (
        <AppLayout title="Farm Tours, Training & Conference Facilities - Sigrut Farms">
         {/* Hero Section */}
<section className="relative bg-gradient-to-r from-green-800/90 to-green-900/90 text-white py-24">
    <div className="absolute inset-0 bg-cover bg-center opacity-40"
         style={{backgroundImage: 'url(https://Sigrutfarmsinternational.com/wp-content/uploads/2023/11/Sl3.png)'}}>
    </div>
    <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Farm Experiences & Training Center</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover sustainable agriculture, enhance your skills with professional training, 
            and host memorable events in our serene conference facilities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
                onClick={() => {
                    const el = document.getElementById('services');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
            >
                Explore Services
            </button>
            <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors"
            >
                Contact for Pricing
            </Link>
        </div>
    </div>
</section>

            {/* Services Tabs */}
            <section id="services" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Services</h2>
                        <p className="text-lg text-gray-600">Choose from farm tours, professional training, or conference facilities</p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex flex-wrap justify-center mb-8 border-b">
                        <button
                            onClick={() => setActiveTab('tours')}
                            className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                                activeTab === 'tours' 
                                    ? 'border-amber-500 text-amber-600' 
                                    : 'border-transparent text-gray-600 hover:text-green-700'
                            }`}
                        >
                            Farm Tours
                        </button>
                        <button
                            onClick={() => setActiveTab('training')}
                            className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                                activeTab === 'training' 
                                    ? 'border-amber-500 text-amber-600' 
                                    : 'border-transparent text-gray-600 hover:text-green-700'
                            }`}
                        >
                            Training Programs
                        </button>
                        <button
                            onClick={() => setActiveTab('conference')}
                            className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                                activeTab === 'conference' 
                                    ? 'border-amber-500 text-amber-600' 
                                    : 'border-transparent text-gray-600 hover:text-green-700'
                            }`}
                        >
                            Conference Facilities
                        </button>
                    </div>

                    {/* Tours Tab */}
                    {activeTab === 'tours' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {tourPackages.filter(pkg => pkg.type === 'tour').map(tour => (
                                <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-100">
                                    <img src={tour.image} alt={tour.name} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-green-800">{tour.name}</h3>
                                                <p className="text-green-600 font-semibold">{tour.duration}</p>
                                            </div>
                                            <span className="text-lg font-semibold text-amber-600">Contact for Pricing</span>
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
                    )}

                    {/* Training Tab */}
                    {activeTab === 'training' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {tourPackages.filter(pkg => pkg.type === 'training').map(training => (
                                <div key={training.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-100">
                                    <img src={training.image} alt={training.name} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-amber-800">{training.name}</h3>
                                                <p className="text-amber-600 font-semibold">{training.duration}</p>
                                            </div>
                                            <span className="text-lg font-semibold text-green-600">Contact for Pricing</span>
                                        </div>
                                        
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-amber-700 mb-2">Course Content:</h4>
                                            <ul className="space-y-1">
                                                {training.highlights.map((highlight, index) => (
                                                    <li key={index} className="flex items-center text-sm text-gray-600">
                                                        <span className="mr-2">✓</span> {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <button 
                                            onClick={() => handleBookTour(training)}
                                            className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
                                        >
                                            Enroll Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Conference Tab */}
                    {activeTab === 'conference' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {conferencePackages.map(conference => (
                                <div key={conference.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
                                    <img src={conference.image} alt={conference.name} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-blue-800">{conference.name}</h3>
                                                <p className="text-blue-600 font-semibold">{conference.capacity}</p>
                                            </div>
                                            <span className="text-lg font-semibold text-green-600">Contact for Pricing</span>
                                        </div>
                                        
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-blue-700 mb-2">Features:</h4>
                                            <ul className="space-y-1">
                                                {conference.features.slice(0, 3).map((feature, index) => (
                                                    <li key={index} className="flex items-center text-sm text-gray-600">
                                                        <span className="mr-2">✓</span> {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <button 
                                            onClick={() => handleBookConference(conference)}
                                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                        >
                                            Book Facility
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Training Programs Overview */}
            <section className="py-16 bg-green-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Professional Training Programs</h2>
                        <p className="text-lg text-gray-600">Enhance your agricultural skills with our certified training programs</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {trainingPrograms.map((program, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                                <h3 className="text-xl font-bold text-green-800 mb-3">{program.title}</h3>
                                <div className="flex justify-center items-center mb-4">
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                        {program.duration}
                                    </span>
                                </div>
                                <ul className="space-y-2 mb-4">
                                    {program.topics.map((topic, topicIndex) => (
                                        <li key={topicIndex} className="text-sm text-gray-600">• {topic}</li>
                                    ))}
                                </ul>
                                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                                    Contact for Details
                                </button>
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
                        <p className="text-lg text-gray-600">Custom experiences and special rates for groups</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {groupPackages.map((pkg, index) => (
                            <div key={index} className="bg-amber-50 rounded-xl p-6 text-center">
                                <h3 className="text-xl font-bold text-amber-800 mb-2">{pkg.type}</h3>
                                <div className="text-xl font-bold text-green-700 mb-4">{pkg.discount}</div>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">Daily Schedule</h2>
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            {dailySchedule.map((slot, index) => (
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Sigrut Farms?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Book your tour, training, or conference today and create unforgettable experiences on our sustainable farm.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+254743200200" className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
                            Call: +254 743 200 200
                        </a>
                        <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors">
                            Get Custom Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* Booking Modal */}
            {showBookingModal && (selectedTour || selectedConference) && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl max-w-md w-full p-6">
                        <h3 className="text-2xl font-bold text-green-800 mb-4">
                            Book {selectedTour?.name || selectedConference?.name}
                        </h3>
                        
                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" />
                            <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" />
                            <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-lg" />
                            
                            <div className="grid grid-cols-2 gap-4">
                                <input type="date" placeholder="Date" className="p-3 border border-gray-300 rounded-lg" />
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
                                    onClick={() => {
                                        setShowBookingModal(false);
                                        setSelectedTour(null);
                                        setSelectedConference(null);
                                    }}
                                    className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit"
                                    className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                                >
                                    Request Quote
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AppLayout>
    );
}