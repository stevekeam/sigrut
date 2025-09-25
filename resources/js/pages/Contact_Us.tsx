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
            details: ['Sigrut Orchard And Hive Ltd', 'UKWALA, Siaya COUNTY, Kenya', 'Mon-Sat: 8:00 AM - 5:30 PM'],
            link: '#map'
        },
        {
            icon: '📞',
            title: 'Call Us',
            details: ['+254 743 200 200', '24/7 Customer Support'],
            link: 'tel:+254743200200'
        },
        {
            icon: '✉️',
            title: 'Email Us',
            details: ['info@sigrut.com'],
            link: 'mailto:info@sigrut.com'
        },
    ];

    // Departments with specific contacts
    const departments = [
        {
            name: 'General Inquiries',
            email: 'info@sigrut.com',
            phone: '+254 743 200 200',
            description: 'For general questions about our farm and services'
        },
        {
            name: 'Product Orders',
            email: 'orders@sigrut.com',
            phone: '+254 743 200 200',
            description: 'For ordering honey, avocados, poultry, and other products'
        },
        {
            name: 'Farm Tours & Accommodation',
            email: 'tours@sigrut.com',
            phone: '+254 743 200 200',
            description: 'Booking farm tours, accommodation, and conference facilities'
        },
        {
            name: 'Export & Wholesale',
            email: 'export@sigrut.com',
            phone: '+254 743 200 200',
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
        setSubmitStatus('idle');
        
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
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-80"
                    style={{backgroundImage: 'url(https://sigrutfarmsinternational.com/wp-content/uploads/2025/02/IMG-20250109-WA0075.jpg)'}}
                >
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        We&apos;d love to hear from you. Reach out to us for inquiries, orders, or visits to our beautiful farm.
                    </p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contactInfo.map((item, index) => (
                            <a 
                                key={index}
                                href={item.link}
                                className="bg-green-50 rounded-xl p-6 text-center hover:bg-green-100 transition-colors duration-300 group block"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                <h3 className="text-xl font-bold text-green-800 mb-3">{item.title}</h3>
                                {Array.isArray(item.details) ? (
                                    item.details.map((detail, idx) => (
                                        <p key={idx} className="text-gray-700">{detail}</p>
                                    ))
                                ) : (
                                    <p className="text-gray-700">{item.details}</p>
                                )}
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
                                    <p className="text-gray-700 mb-2">UKWALA, Siaya County, Kenya</p>
                                    <p className="text-sm text-gray-600">Open Monday to Saturday, 8:00 AM - 5:30 PM</p>
                                    <a 
                                        href="https://maps.google.com/?q=Sigrut+Farms+UKWALA+Siaya+Kenya"
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
                                        Thank you! Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
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
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                            placeholder="Your full name"
                                            disabled={isSubmitting}
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
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                            placeholder="your@email.com"
                                            disabled={isSubmitting}
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
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                            placeholder="+254 XXX XXX XXX"
                                            disabled={isSubmitting}
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
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                            disabled={isSubmitting}
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
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                        placeholder="Tell us how we can help you..."
                                        disabled={isSubmitting}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
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
                            <div key={index} className="bg-green-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-xl font-bold text-green-800 mb-3">{dept.name}</h3>
                                <p className="text-gray-700 mb-4">{dept.description}</p>
                                <div className="space-y-2">
                                    <a 
                                        href={`mailto:${dept.email}`}
                                        className="flex items-center text-green-600 hover:text-green-800 transition-colors duration-300"
                                    >
                                        <span className="mr-2">✉️</span> {dept.email}
                                    </a>
                                    <a 
                                        href={`tel:${dept.phone.replace(/\s/g, '')}`}
                                        className="flex items-center text-green-600 hover:text-green-800 transition-colors duration-300"
                                    >
                                        <span className="mr-2">📞</span> {dept.phone}
                                    </a>
                                </div>
                            </div>
                        ))}
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
                        className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors duration-300 text-lg"
                    >
                        Emergency Line: +254 743 200 200
                    </a>
                </div>
            </section>
        </AppLayout>
    );
}