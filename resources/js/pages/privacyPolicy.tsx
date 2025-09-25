import AppLayout from '../layouts/app-layout';
import { Head, Link } from '@inertiajs/react';

type PageProps = {
    auth?: any;
};

export default function PrivacyPolicy({ auth }: PageProps) {
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const sections = [
        {
            id: "introduction",
            title: "I. Introduction",
            content: (
                <p className="text-gray-600 leading-relaxed">
                    Welcome to our Privacy Policy. We are committed to protecting the privacy of those with 
                    whom we interact, and we recognise the need to respect and protect information that is 
                    collected or disclosed to us. Personal data means any information relating to an identified 
                    or identifiable natural person. This policy outlines how we collect personal data when you 
                    visit our website and informs you about your privacy rights.
                </p>
            )
        },
        {
            id: "rights",
            title: "II. Rights of Data Subject",
            content: (
                <>
                    <p className="text-gray-600 mb-4">
                        Please contact us at {import.meta.env.VITE_APP_EMAIL || 'info@sigrut.com'} if you wish to 
                        exercise any of the rights below or if you have any queries related to your personal data. 
                        Subject to applicable laws/lawful purpose, you have the right to:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                        <li>Be informed of the use to which your personal data is to be put;</li>
                        <li>Access your personal data which is in our custody;</li>
                        <li>Receive any of your personal data in a structured, commonly used and easily accessible format;</li>
                        <li>Request for any personal data in our possession to be corrected or updated;</li>
                        <li>Request deletion of your personal data, where permitted by law;</li>
                        <li>Request suspension of processing of your personal data;</li>
                        <li>Object to processing of all or part of your personal data.</li>
                    </ul>
                    <p className="text-gray-600 mt-4">
                        We may need to request specific information from you to confirm your identity before processing such requests.
                    </p>
                </>
            )
        },
        {
            id: "collection",
            title: "III. How We Collect and Use Personal Data",
            content: (
                <>
                    <p className="text-gray-600 mb-4">
                        We may collect, use, store or process the following personal data:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                        <li><strong>Contact information:</strong> address, email, telephone, and preferences.</li>
                        <li><strong>Identity information:</strong> first name, last name, title, username, etc.</li>
                        <li><strong>Technical data:</strong> IP address, browser type, and related info.</li>
                        <li><strong>Usage data:</strong> information about how you use our website, products, and services.</li>
                    </ul>
                    <p className="text-gray-600 mt-4">
                        This data may be collected through forms, direct communications, or your interaction with our site.
                    </p>
                </>
            )
        },
        {
            id: "use",
            title: "IV. How We Use Your Personal Data",
            content: (
                <>
                    <p className="text-gray-600 mb-4">Our use of your personal data is guided by the following principles:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                        <li>Respect for the right to privacy;</li>
                        <li>Lawful, fair, and transparent processing;</li>
                        <li>Use only for the purpose collected;</li>
                        <li>No transfer outside jurisdiction without consent or safeguards.</li>
                    </ul>
                    <p className="text-gray-600 mt-4">
                        We will only use your personal data as permitted by law and for the purposes it was collected.
                    </p>
                </>
            )
        },
        {
            id: "disclosures",
            title: "V. Disclosures of Your Personal Data",
            content: (
                <>
                    <p className="text-gray-600 mb-4">
                        We use your personal data only for internal business purposes and do not sell it. 
                        We may disclose it to:
                    </p>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Service Providers:</h3>
                    <p className="text-gray-600 mb-4">
                        Third parties who perform services on our behalf (e.g., IT support). Data is shared only 
                        for the services they provide.
                    </p>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Other Third Parties:</h3>
                    <p className="text-gray-600">
                        Legal or regulatory bodies, or when required to protect rights, safety, or property.
                    </p>
                </>
            )
        },
        {
            id: "security",
            title: "VI. How We Keep Your Personal Data Secure",
            content: (
                <p className="text-gray-600">
                    We apply technical and organisational measures to prevent loss, misuse, or unauthorised access 
                    to personal data.
                </p>
            )
        },
        {
            id: "changes",
            title: "VII. Changes to the Privacy Policy",
            content: (
                <p className="text-gray-600">
                    We reserve the right to amend this policy at any time. Updates will be effective upon posting.
                </p>
            )
        }
    ];

    return (
        <AppLayout auth={auth}>
            <Head title="Privacy Policy" />

            <div className="min-h-screen bg-gray-50 py-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
                        <p className="mt-2 text-lg text-gray-600">Last updated: {currentDate}</p>
                    </div>

                    {/* Table of Contents */}
                    <div className="bg-white shadow-md rounded-lg p-6 mb-10">
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">Table of Contents</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {sections.map((s) => (
                                <li key={s.id}>
                                    <a href={`#${s.id}`} className="hover:text-blue-600 transition-colors">
                                        {s.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Content */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 sm:p-8 space-y-10">
                            {sections.map((s) => (
                                <section key={s.id} id={s.id}>
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{s.title}</h2>
                                    {s.content}
                                </section>
                            ))}

                            {/* Contact Info */}
                            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Us</h3>
                                <p className="text-gray-600">
                                    If you have any questions about this Privacy Policy, please contact us at:<br />
                                    <strong>Email:</strong> {import.meta.env.VITE_APP_EMAIL || 'info@sigrut.com'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Back Button */}
                    <div className="mt-6 text-center">
                        <Link 
                            href="/" 
                            className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 transition"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
