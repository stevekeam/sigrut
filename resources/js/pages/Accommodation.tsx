import AppLayout from '../layouts/app-layout';
import { useState } from 'react';

export default function Accommodation() {
    const [selectedRoom, setSelectedRoom] = useState<AccommodationOption | null>(null);
    const [showBookingModal, setShowBookingModal] = useState(false);
    const [bookingDates, setBookingDates] = useState({
        checkIn: '',
        checkOut: '',
        guests: 1
    });

    type AccommodationOption = {
        id: number;
        name: string;
        type: string;
        image: string;
        description: string;
        price: number;
        capacity: number;
        features: string[];
        amenities: string[];
    };

    // Accommodation options
    const accommodationOptions = [
        {
            id: 1,
            name: 'Executive Farmhouse',
            type: 'Luxury Villa',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-28-at-12.33.42_b6445847.jpg',
            description: 'Spacious 3-bedroom villa with private garden and farm views',
            price: 1200,
            capacity: 6,
            features: ['Private Garden', 'Kitchenette', 'Farm Views', 'Free WiFi', 'Parking'],
            amenities: ['Swimming Pool Access', 'Breakfast Included', 'Farm Tour', 'Evening Bonfire']
        },
        {
            id: 2,
            name: 'Cozy Cottage',
            type: 'Standard Room',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-01-29-at-17.06.13_215e49a8.jpg',
            description: 'Charming cottage perfect for couples and small families',
            price: 800,
            capacity: 4,
            features: ['Queen Bed', 'Private Bathroom', 'Porch', 'Farm Views', 'Coffee Maker'],
            amenities: ['Breakfast Included', 'Garden Access', 'Guided Walk', 'Fresh Milk Daily']
        },
        {
            id: 3,
            name: 'Family Bungalow',
            type: 'Family Suite',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-29-at-17.06.15_63c627b0.jpg',
            description: 'Perfect for families with connecting rooms and play area',
            price: 1500,
            capacity: 8,
            features: ['2 Bedrooms', 'Living Room', 'Kitchen', 'Play Area', 'Private Veranda'],
            amenities: ['All Meals Included', 'Kids Activities', 'Baby Sitting', 'Farm Experience']
        },
        {
            id: 4,
            name: 'Rustic Cabin',
            type: 'Eco Retreat',
            image: 'https://Sigrutfarmsinternational.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-22-at-10.06.49_4f05df38-1-e1737970577520.jpg',
            description: 'Eco-friendly cabin for nature lovers seeking tranquility',
            price: 1000,
            capacity: 2,
            features: ['Solar Powered', 'Compost Toilet', 'Outdoor Shower', 'Fireplace', 'Nature Views'],
            amenities: ['Organic Meals', 'Yoga Deck', 'Meditation Space', 'Nature Walks']
        }
    ];

    // Sigrut Farm experiences
    const farmExperiences = [
        {
            icon: '🐄',
            title: 'Dairy Experience',
            description: 'Morning milking sessions and learn about dairy farming'
        },
        {
            icon: '🐝',
            title: 'Beekeeping Tour',
            description: 'Explore our apiaries and taste fresh honey'
        },
        {
            icon: '🌱',
            title: 'Organic Farming',
            description: 'Hands-on experience in our vegetable gardens'
        },
        {
            icon: '👨‍🍳',
            title: 'Farm Cooking',
            description: 'Cook using fresh ingredients from the farm'
        }
    ];

    // Testimonials
    const testimonials = [
        {
            name: 'The Johnson Family',
            stay: 'Executive Farmhouse',
            comment: 'Our children loved the farm animals and the fresh air. The accommodation was spotless and the staff incredibly friendly.',
            rating: 5
        },
        {
            name: 'Sarah & Mark',
            stay: 'Cozy Cottage',
            comment: 'A magical weekend getaway! The cottage was cozy and the farm breakfast was delicious. Highly recommend.',
            rating: 5
        },
        {
            name: 'Business Retreat Group',
            stay: 'Family Bungalow',
            comment: 'Ideal for our team building retreat. The conference facilities combined with farm activities created a perfect balance.',
            rating: 4
        }
    ];

    const handleBookNow = (room: AccommodationOption) => {
        setSelectedRoom(room);
        setShowBookingModal(true);
    };

    const handleBookingSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the booking data to your backend
        if (selectedRoom) {
            alert(`Booking request sent for ${selectedRoom.name}! We'll contact you shortly.`);
        } else {
            alert('Booking request sent! We\'ll contact you shortly.');
        }
        setShowBookingModal(false);
        setBookingDates({ checkIn: '', checkOut: '', guests: 1 });
    };

    return (
        <AppLayout title="Farmstay Accommodation - Sigrut Farms">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-green-700 to-green-900 text-white py-24">
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
                    }}
                ></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Farmstay Experiences
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        Escape to nature and experience authentic farm life. Wake up to birds singing, 
                        enjoy farm-fresh meals, and create unforgettable memories in the countryside.
                    </p>
                    <a 
                        href="#accommodation" 
                        className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors inline-block"
                    >
                        View Accommodation Options
                    </a>
                </div>
            </section>

            {/* Why Choose Our Farmstay */}
            <section className="py-16 bg-amber-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Why Stay at Sigrut Farms?</h2>
                        <p className="text-lg text-gray-600">Experience the perfect blend of comfort and authentic farm life</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                                <span className="text-3xl">🌄</span>
                            </div>
                            <h3 className="text-xl font-bold text-green-800 mb-2">Serene Environment</h3>
                            <p className="text-gray-700">Escape city noise and enjoy peaceful countryside surroundings</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                                <span className="text-3xl">🍃</span>
                            </div>
                            <h3 className="text-xl font-bold text-green-800 mb-2">Fresh Farm Food</h3>
                            <p className="text-gray-700">Meals prepared with organic ingredients from our farm</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                                <span className="text-3xl">🐓</span>
                            </div>
                            <h3 className="text-xl font-bold text-green-800 mb-2">Farm Activities</h3>
                            <p className="text-gray-700">Hands-on experiences with animals and farming activities</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accommodation Options */}
            <section id="accommodation" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Accommodation Options</h2>
                        <p className="text-lg text-gray-600">Choose from our range of comfortable farmstay options</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {accommodationOptions.map(room => (
                            <div key={room.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-100">
                                <div className="relative">
                                    <img 
                                        src={room.image} 
                                        alt={room.name}
                                        className="w-full h-64 object-cover"
                                    />
                                    <span className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm">
                                        {room.type}
                                    </span>
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-green-800 mb-2">{room.name}</h3>
                                    <p className="text-gray-600 mb-4">{room.description}</p>
                                    
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <h4 className="font-semibold text-green-700 mb-2">Features:</h4>
                                            <ul className="space-y-1">
                                                {room.features.slice(0, 3).map((feature, index) => (
                                                    <li key={index} className="flex items-center text-sm text-gray-600">
                                                        <span className="mr-2">✓</span> {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-green-700 mb-2">Amenities:</h4>
                                            <ul className="space-y-1">
                                                {room.amenities.slice(0, 3).map((amenity, index) => (
                                                    <li key={index} className="flex items-center text-sm text-gray-600">
                                                        <span className="mr-2">✓</span> {amenity}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center mb-4">
                                        <div>
                                            <span className="text-2xl font-bold text-amber-600">KSh {room.price.toLocaleString()}</span>
                                            <span className="text-gray-600 ml-2">/ night</span>
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            Capacity: {room.capacity} guests
                                        </div>
                                    </div>

                                    <button 
                                        onClick={() => handleBookNow(room)}
                                        className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Farm Experiences */}
            <section className="py-16 bg-green-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Farm Experiences</h2>
                        <p className="text-lg text-gray-600">Included activities during your farmstay</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {farmExperiences.map((experience, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="text-4xl mb-4">{experience.icon}</div>
                                <h3 className="text-xl font-bold text-green-800 mb-2">{experience.title}</h3>
                                <p className="text-gray-600">{experience.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">Daily Farm Schedule</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                            <div className="p-4 border-r border-green-100">
                                <h4 className="font-bold text-green-700">6:30 AM</h4>
                                <p className="text-sm text-gray-600">Morning Milking</p>
                            </div>
                            <div className="p-4 border-r border-green-100">
                                <h4 className="font-bold text-green-700">8:00 AM</h4>
                                <p className="text-sm text-gray-600">Farm Breakfast</p>
                            </div>
                            <div className="p-4 border-r border-green-100">
                                <h4 className="font-bold text-green-700">10:00 AM</h4>
                                <p className="text-sm text-gray-600">Guided Farm Tour</p>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-green-700">4:00 PM</h4>
                                <p className="text-sm text-gray-600">Evening Activities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">What Our Guests Say</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-green-50 p-6 rounded-xl">
                                <div className="flex text-amber-400 mb-4">
                                    {'★'.repeat(testimonial.rating)}
                                </div>
                                <p className="text-gray-700 italic mb-4">"{testimonial.comment}"</p>
                                <div>
                                    <p className="font-bold text-green-800">{testimonial.name}</p>
                                    <p className="text-sm text-gray-600">Stayed in {testimonial.stay}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking CTA */}
            <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Farm Getaway?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Book your farmstay experience today and create memories that will last a lifetime.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="#accommodation" 
                            className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
                        >
                            View Rooms & Rates
                        </a>
                        <a 
                            href="tel:+254743200200" 
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors"
                        >
                            Call to Book: +254 743 200 200
                        </a>
                    </div>
                </div>
            </section>

            {/* Booking Modal */}
            {showBookingModal && selectedRoom && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl max-w-md w-full p-6">
                        <h3 className="text-2xl font-bold text-green-800 mb-4">Book {selectedRoom.name}</h3>
                        
                        <form onSubmit={handleBookingSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                                    <input 
                                        type="date" 
                                        required
                                        className="w-full p-2 border border-gray-300 rounded-lg"
                                        value={bookingDates.checkIn}
                                        onChange={(e) => setBookingDates({...bookingDates, checkIn: e.target.value})}
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
                                    <input 
                                        type="date" 
                                        required
                                        className="w-full p-2 border border-gray-300 rounded-lg"
                                        value={bookingDates.checkOut}
                                        onChange={(e) => setBookingDates({...bookingDates, checkOut: e.target.value})}
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
                                    <select 
                                        className="w-full p-2 border border-gray-300 rounded-lg"
                                        value={bookingDates.guests}
                                        onChange={(e) => setBookingDates({...bookingDates, guests: parseInt(e.target.value)})}
                                    >
                                        {[...Array(selectedRoom.capacity)].map((_, i) => (
                                            <option key={i+1} value={i+1}>{i+1} Guest{i+1 > 1 ? 's' : ''}</option>
                                        ))}
                                    </select>
                                </div>
                                
                                <div className="bg-amber-50 p-4 rounded-lg">
                                    <p className="font-semibold">Price Summary</p>
                                    <p className="text-amber-600 font-bold">KSh {selectedRoom.price.toLocaleString()} per night</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-3 mt-6">
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
                                    Request Booking
                                </button>
                            </div>
                        </form>
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