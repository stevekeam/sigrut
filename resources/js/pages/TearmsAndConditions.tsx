import AppLayout from '../layouts/app-layout';
import { Head, Link } from '@inertiajs/react';

export default function TermsAndConditions({ auth }: { auth: any }) {
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Define sections as an array for easy updates
    const sections = [
        {
            id: "general",
            title: "General Terms and Conditions",
            content: (
                <p className="text-gray-600 leading-relaxed">
                    This website is owned and operated by {import.meta.env.VITE_APP_NAME || 'Our Company'}. 
                    By using this website, you are deemed to have accepted these conditions.
                </p>
            )
        },
        {
            id: "ownership",
            title: "Ownership of Rights",
            content: (
                <>
                    <p className="text-gray-600 mb-4">
                        All rights, including copyright, in this website are owned by or licensed to us. 
                        Any use of this website or its contents, including copying or storing it or them 
                        in whole or part, other than for your own lawful, personal, non-commercial use is 
                        prohibited without our written consent.
                    </p>
                    <p className="text-gray-600">
                        If you wish to make use of any content other than is permitted by these terms and 
                        conditions please contact us at {import.meta.env.VITE_APP_EMAIL || 'info@sigrut.com'}.
                    </p>
                </>
            )
        },
        {
            id: "accuracy",
            title: "Accuracy of Content",
            content: (
                <p className="text-gray-600">
                    We have taken every care in the preparation of the content of this website. 
                    To the extent permitted by applicable law, we disclaim all warranties, express 
                    or implied, as to the accuracy of the information contained in any of the materials 
                    on this website. We shall not be liable to any person for any loss or damage which 
                    may arise from the use of any of the information contained in any of the materials 
                    on this website.
                </p>
            )
        },
        {
            id: "viruses",
            title: "Damage to Your Computer and Viruses",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-600">
                        We cannot guarantee that your use of this website or any websites accessible 
                        through it won't cause damage to your computer. We shall not be liable to any 
                        person for any loss or damage which may arise to computer equipment as a result 
                        of using this website. You should use your own virus protection software.
                    </p>
                    <div className="bg-red-50 border-l-4 border-red-400 p-4">
                        <p className="text-red-700 font-semibold">Important Security Notice:</p>
                        <p className="text-red-600 mt-1">
                            You must not misuse this website by knowingly introducing viruses, trojans, 
                            worms, logic bombs or other material that is malicious or technologically harmful. 
                        </p>
                        <p className="text-red-600 mt-2">
                            Any such breach will be reported to law enforcement and may lead to criminal charges.
                        </p>
                    </div>
                </div>
            )
        },
        // ⚡ You can keep adding the rest of your sections here the same way...
    ];

    return (
        <AppLayout auth={auth}>
            <Head title="Terms & Conditions" />

            <div className="min-h-screen bg-gray-50 py-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">Terms & Conditions</h1>
                        <p className="mt-2 text-lg text-gray-600">Last updated: {currentDate}</p>
                    </div>

                    {/* Table of Contents */}
                    <div className="bg-white shadow-md rounded-lg p-6 mb-10">
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">Table of Contents</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {sections.map((section) => (
                                <li key={section.id}>
                                    <a 
                                        href={`#${section.id}`} 
                                        className="hover:text-blue-600 transition-colors"
                                    >
                                        {section.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Content */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 sm:p-8 space-y-10">
                            {sections.map((section) => (
                                <section key={section.id} id={section.id}>
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                        {section.title}
                                    </h2>
                                    {section.content}
                                </section>
                            ))}

                            {/* Contact Info */}
                            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Us</h3>
                                <p className="text-gray-600">
                                    If you have any questions about these Terms & Conditions, please contact us at:<br />
                                    <strong>Email:</strong> {import.meta.env.VITE_APP_EMAIL || 'info@sigrut.com'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/" 
                            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 transition"
                        >
                            Back to Home
                        </Link>
                        <Link 
                            href="/rivacyPolicy" 
                            className="inline-flex items-center justify-center px-4 py-2 bg-gray-600 rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 transition"
                        >
                            View Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
