import AppLayout from '../layouts/app-layout';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Contact information
    const contactInfo = [
        {
            icon: '📍',
            title: 'Visit Our Farm',
            details: ['Sigrut Farms', 'Nairobi, Kenya', 'Mon-Sat: 8:00 AM - 6:00 PM'],
            link: '#map'
        },
        {
            icon: '📞',
            title: 'Call Us',
            details: ['+254 743 200 200', '+254 700 000 000', '24/7 Customer Support'],
            link: 'tel:+254743200200'
        },
        {
            icon: '✉️',
            title: 'Email Us',
            details: ['info@sigrutfarms.com', 'orders@sigrutfarms.com', 'honey@sigrutfarms.com'],
            link: 'mailto:info@sigrutfarms.com'
        },
        {
            icon: '💬',
            title: 'WhatsApp',
            details: ['+254 743 200 200', 'Quick responses', 'Order inquiries'],
            link: 'https://wa.me/254743200200'
        }
    ];

    // Departments with specific contacts
    const departments = [
        {
            name: 'General Inquiries',
            email: 'info@sigrutfarms.com',
            phone: '+254 743 200 200',
            description: 'For general questions about our farm and services'
        },
        {
            name: 'Product Orders',
            email: 'orders@sigrutfarms.com',
            phone: '+254 700 000 001',
            description: 'For ordering honey, avocados, poultry, and other products'
        },
        {
            name: 'Farm Tours & Accommodation',
            email: 'tours@sigrutfarms.com',
            phone: '+254 700 000 002',
            description: 'Booking farm tours, accommodation, and conference facilities'
        },
        {
            name: 'Export & Wholesale',
            email: 'export@sigrutfarms.com',
            phone: '+254 700 000 003',
            description: 'For bulk orders and export inquiries'
        }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AppLayout title="Contact Us - Sigrut Farms">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-green-700 to-green-900 text-white py-20">
                <div className="absolute inset-0 bg-cover bg-center opacity-20"
                     style={{backgroundImage: 'url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'}}>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        We'd love to hear from you. Reach out to us for inquiries, orders, or visits to our beautiful farm.
                    </p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactInfo.map((item, index) => (
                            <a 
                                key={index}
                                href={item.link}
                                className="bg-green-50 rounded-xl p-6 text-center hover:bg-green-100 transition-colors group"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h3 className="text-xl font-bold text-green-800 mb-3">{item.title}</h3>
                                {item.details.map((detail, idx) => (
                                    <p key={idx} className="text-gray-700">{detail}</p>
                                ))}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map and Contact Form Section */}
            <section className="py-16 bg-green-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Map */}
                        <div>
                            <h2 className="text-3xl font-bold text-green-800 mb-6">Visit Our Farm</h2>
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div id="map" className="h-96 bg-gray-200">
                                    {/* Embedded Google Map */}
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.818675678936!2d36.82121431475387!3d-1.282435599063266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d664f5b7c9%3A0x1d5e5e5e5e5e5e5e!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1234567890123!5m2!1sen!2ske"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Sigrut Farms Location"
                                    ></iframe>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-green-800 mb-2">Sigrut Farms Location</h3>
                                    <p className="text-gray-700 mb-2">Nairobi, Kenya</p>
                                    <p className="text-sm text-gray-600">Open Monday to Saturday, 8:00 AM - 6:00 PM</p>
                                    <a 
                                        href="https://maps.google.com/?q=Sigrut+Farms+Nairobi+Kenya"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                                    >
                                        Get Directions
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-green-800 mb-6">Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
                                {submitStatus === 'success' && (
                                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                                        Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                                    </div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                                        Sorry, there was an error sending your message. Please try again or contact us directly.
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="+254 XXX XXX XXX"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="order">Product Order</option>
                                            <option value="tour">Farm Tour Booking</option>
                                            <option value="accommodation">Accommodation</option>
                                            <option value="wholesale">Wholesale/Export</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        placeholder="Tell us how we can help you..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Departments Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Contact the Right Department</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {departments.map((dept, index) => (
                            <div key={index} className="bg-green-50 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-green-800 mb-3">{dept.name}</h3>
                                <p className="text-gray-700 mb-4">{dept.description}</p>
                                <div className="space-y-2">
                                    <a 
                                        href={`mailto:${dept.email}`}
                                        className="flex items-center text-green-600 hover:text-green-800 transition-colors"
                                    >
                                        <span className="mr-2">✉️</span> {dept.email}
                                    </a>
                                    <a 
                                        href={`tel:${dept.phone.replace(/\s/g, '')}`}
                                        className="flex items-center text-green-600 hover:text-green-800 transition-colors"
                                    >
                                        <span className="mr-2">📞</span> {dept.phone}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-green-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div>
                            <h3 className="text-lg font-semibold text-green-800 mb-2">Do you offer farm tours on weekends?</h3>
                            <p className="text-gray-700 mb-4">Yes, we offer farm tours on Saturdays from 9:00 AM to 4:00 PM. Sunday tours are available by special arrangement.</p>
                            
                            <h3 className="text-lg font-semibold text-green-800 mb-2">What's your delivery area?</h3>
                            <p className="text-gray-700 mb-4">We deliver within Nairobi and surrounding areas. Free delivery for orders above KSh 3,000.</p>
                            
                            <h3 className="text-lg font-semibold text-green-800 mb-2">Can I visit without a booking?</h3>
                            <p className="text-gray-700">Walk-ins are welcome, but we recommend booking in advance to ensure availability and better service.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-green-800 mb-2">Do you offer wholesale prices?</h3>
                            <p className="text-gray-700 mb-4">Yes, we offer competitive wholesale prices for bulk orders. Contact our export department for pricing.</p>
                            
                            <h3 className="text-lg font-semibold text-green-800 mb-2">Are your products organic certified?</h3>
                            <p className="text-gray-700 mb-4">Yes, all our products are certified organic by Kenya Organic Agriculture Network.</p>
                            
                            <h3 className="text-lg font-semibold text-green-800 mb-2">What payment methods do you accept?</h3>
                            <p className="text-gray-700">We accept M-Pesa, bank transfers, cash, and credit/debit cards.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Contact */}
            <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
                    <p className="text-xl mb-6">For urgent matters outside business hours, call our emergency line</p>
                    <a 
                        href="tel:+254743200200"
                        className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors text-lg"
                    >
                        Emergency Line: +254 743 200 200
                    </a>
                </div>
            </section>
        </AppLayout>
    );
}