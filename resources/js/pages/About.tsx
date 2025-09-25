import AppLayout from '../layouts/app-layout';
import { SetStateAction, useState } from 'react';

export default function About() {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index: SetStateAction<null>) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const milestones = [
        { year: "2010", event: "Sigrut Farms founded with 10 beehives" },
        { year: "2013", event: "Expanded to Hass avocado farming" },
        { year: "2015", event: "Received organic certification" },
        { year: "2018", event: "Launched farm tours and accommodation" },
        { year: "2020", event: "Reached 500+ beehives" },
        { year: "2023", event: "Expanded export operations internationally" }
    ];

    const faqItems = [
        {
            question: "Are your products certified organic?",
            answer: "Yes, all our products are certified organic by the Kenya Organic Agriculture Network. We follow strict organic farming practices without synthetic pesticides or fertilizers."
        },
        {
            question: "Do you offer farm tours year-round?",
            answer: "We offer farm tours throughout the year, but we recommend booking in advance during peak seasons (June-August and December-January) to ensure availability."
        },
        {
            question: "Can I purchase your products online?",
            answer: "Currently, we sell our products through local markets and export channels. We're developing an online store for direct consumer purchases - coming soon!"
        },
        {
            question: "Do you offer accommodation on the farm?",
            answer: "Yes, we have comfortable farmstay accommodation available for visitors who want to experience rural Kenyan life and learn about sustainable agriculture firsthand."
        }
    ];

    return (
        <AppLayout title="About Sigrut Farms - Sustainable Agriculture & Pure Natural Products">
  <section className="relative bg-gradient-to-r from-green-800 to-green-900 text-white min-h-screen flex items-center">
    <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
            backgroundImage: 'url(https://Sigrutfarmsinternational.com/wp-content/uploads/2023/10/avocados-4436393_1920.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}
    ></div>
    {/* Dark overlay for better text readability */}
    <div className="absolute inset-0 bg-black opacity-30"></div>
    
    <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto"> {/* Added mx-auto for centering */}
            {/* Centered content */}
            <div className="text-center mb-8"> {/* Added text-center */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Our Story
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
                    From humble beginnings to becoming a leading sustainable farm in Kenya
                </p>
            </div>
        </div>
    </div>
</section>
            

            {/* Quick Stats Section */}
            <section className="py-12 bg-white border-b">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-4">
                            <div className="text-3xl font-bold text-green-800 mb-2">13+</div>
                            <div className="text-gray-600">Years Experience</div>
                        </div>
                        <div className="p-4">
                            <div className="text-3xl font-bold text-green-800 mb-2">500+</div>
                            <div className="text-gray-600">Beehives</div>
                        </div>
                        <div className="p-4">
                            <div className="text-3xl font-bold text-green-800 mb-2">100%</div>
                            <div className="text-gray-600">Organic Certified</div>
                        </div>
                        <div className="p-4">
                            <div className="text-3xl font-bold text-green-800 mb-2">50+</div>
                            <div className="text-gray-600">Local Employees</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 bg-green-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-green-800 mb-6">Our Mission</h2>
                            <p className="text-lg text-gray-700 mb-4">
                                At Sigrut Farms, our mission is to promote sustainable agriculture that benefits both people and the planet. 
                                We're committed to producing high-quality organic products while preserving Kenya's natural resources.
                            </p>
                            <p className="text-lg text-gray-700">
                                Through innovation and traditional farming wisdom, we aim to be a model for sustainable agribusiness in East Africa.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <img 
                                src="https://Sigrutfarmsinternational.com/wp-content/uploads/2023/11/IMG-20231031-WA0108-e1738327438365.jpg" 
                                alt="Sigrut Farms landscape" 
                                className="rounded-lg shadow-lg w-full h-80 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="md:w-1/2 order-2 md:order-1">
                            <img 
                                src="https://Sigrutfarmsinternational.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-21-at-3.57.31-PM-e1738737500334.jpeg" 
                                alt="Sustainable farming" 
                                className="rounded-lg shadow-lg w-full h-80 object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2">
                            <h2 className="text-3xl font-bold text-green-800 mb-6">Our Story</h2>
                            <p className="text-lg text-gray-700 mb-4">
                                Founded in 2010, Sigrut Orchard & Hive Ltd began as a small family operation with a vision for sustainable agriculture. 
                                What started with a few beehives and avocado trees has grown into a thriving agricultural enterprise.
                            </p>
                            <p className="text-lg text-gray-700">
                                Today, we manage over 500 beehives, extensive avocado orchards, poultry operations, and offer 
                                farm accommodation and tours while remaining committed to sustainable practices that prioritize 
                                environmental health and community development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-16 bg-green-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-green-800 mb-6">Our Impact</h2>
                            <p className="text-lg text-gray-700 mb-4">
                                Our farm creates sustainable livelihoods for 50+ local community members and supports numerous smallholder farmers 
                                through training and market access programs.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                We've planted over 5,000 trees on our property and maintain 50 acres of conserved natural habitat to promote biodiversity.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-green-800">5,000+</div>
                                    <div className="text-gray-600 text-sm">Trees Planted</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-green-800">50+</div>
                                    <div className="text-gray-600 text-sm">Acres Conserved</div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <img 
                                src="https://Sigrutfarmsinternational.com/wp-content/uploads/2023/11/IMG-20231031-WA0155.jpg" 
                                alt="Community partnership" 
                                className="rounded-lg shadow-lg w-full h-80 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Our Journey</h2>
                    
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-300 hidden md:block"></div>
                        
                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <div key={index} className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                                    <div className="md:w-1/2 mb-4 md:mb-0 md:px-8">
                                        <div className={`bg-white p-6 rounded-lg shadow-md border border-green-100 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                            <div className="text-2xl font-bold text-green-800 mb-2">{milestone.year}</div>
                                            <p className="text-gray-700">{milestone.event}</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex md:w-1/12 justify-center">
                                        <div className="w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow"></div>
                                    </div>
                                    <div className="md:w-5/12"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Operations Section */}
            <section id="operations" className="py-16 bg-green-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Our Operations</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow border border-green-100">
                            <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🍯</span>
                            </div>
                            <h3 className="text-xl font-semibold text-green-800 mb-2">Beekeeping</h3>
                            <p className="text-gray-700 text-sm mb-4">
                                500+ hives producing pure natural honey with sustainable practices
                            </p>
                            <a href="/HoneyProducts" className="text-green-600 hover:text-green-800 font-medium text-sm">
                                Learn More →
                            </a>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow border border-green-100">
                            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🥑</span>
                            </div>
                            <h3 className="text-xl font-semibold text-green-800 mb-2">Avocado Farming</h3>
                            <p className="text-gray-700 text-sm mb-4">
                                Premium Hass avocados grown for export with modern cold storage facilities
                            </p>
                            <a href="/Avocado" className="text-green-600 hover:text-green-800 font-medium text-sm">
                                Learn More →
                            </a>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow border border-green-100">
                            <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🐓</span>
                            </div>
                            <h3 className="text-xl font-semibold text-green-800 mb-2">Poultry</h3>
                            <p className="text-gray-700 text-sm mb-4">
                                Free-range chickens and eggs from healthy, well-cared-for flocks
                            </p>
                            <a href="/Poultry" className="text-green-600 hover:text-green-800 font-medium text-sm">
                                Learn More →
                            </a>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow border border-green-100">
                            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🏡</span>
                            </div>
                            <h3 className="text-xl font-semibold text-green-800 mb-2">Farm Experiences</h3>
                            <p className="text-gray-700 text-sm mb-4">
                                Accommodation, tours, and conference facilities for unforgettable visits
                            </p>
                            <a href="/Farm_Tours" className="text-green-600 hover:text-green-800 font-medium text-sm">
                                Learn More →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Frequently Asked Questions</h2>
                    
                    <div className="max-w-3xl mx-auto">
                        {faqItems.map((item, index) => (
                            <div key={index} className="mb-6 bg-white rounded-lg shadow-sm border border-green-100">
                                <div className="p-6">
                                    <h3 className="font-semibold text-lg text-green-800 mb-3 flex items-center">
                                        <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">Q</span>
                                        {item.question}
                                    </h3>
                                    <div className="pl-9">
                                        <p className="text-gray-700 flex items-start">
                                            <span className="bg-amber-100 text-amber-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm flex-shrink-0">A</span>
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certification Section */}
            <section id="certifications" className="py-16 bg-green-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Our Certifications</h2>
                    
                    <div className="flex flex-wrap justify-center gap-10">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center w-56 hover:shadow-lg transition-shadow border border-green-100">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">✅</span>
                            </div>
                            <h3 className="text-lg font-semibold text-green-800 mb-2">Organic Certified</h3>
                            <p className="text-gray-700 text-sm">
                                Certified by Kenya Organic Agriculture Network
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md text-center w-56 hover:shadow-lg transition-shadow border border-green-100">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🌍</span>
                            </div>
                            <h3 className="text-lg font-semibold text-green-800 mb-2">GlobalGAP Certified</h3>
                            <p className="text-gray-700 text-sm">
                                Meeting international Good Agricultural Practices
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md text-center w-56 hover:shadow-lg transition-shadow border border-green-100">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🐝</span>
                            </div>
                            <h3 className="text-lg font-semibold text-green-800 mb-2">KEPHIS Approved</h3>
                            <p className="text-gray-700 text-sm">
                                Kenya Plant Health Inspectorate Service certified
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Experience the Sigrut Orchard & Hive Ltd Difference</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Discover our premium agricultural products and unforgettable farm experiences that showcase the best of Kenyan sustainable farming.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="/products" 
                            className="inline-block bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
                        >
                            Explore Our Products
                        </a>
                        <a 
                            href="/Farm_Tours" 
                            className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors"
                        >
                            Book a Farm Tour
                        </a>
                        <a 
                            href="/Contact_Us" 
                            className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}