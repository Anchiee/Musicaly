import MainLayout from "@/Layouts/MainLayout";

export default function Privacy() {
    return (
        <MainLayout title="Privacy Policy">
            <div className="px-6 py-8 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-violet mb-6 mt-30">Privacy Policy</h1>
                <p className="text-lg text-gray-700 mb-4">
                    Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services. By using our website, you agree to the terms outlined in this policy.
                </p>

                <ol className="list-decimal pl-6 space-y-4">
                    <li>
                        <h2 className="text-2xl font-semibold text-violet">Information We Collect</h2>
                        <p className="text-gray-700">
                            We may collect personal information you provide directly (such as name, email address, and account details), as well as data collected automatically through your use of our services (such as IP address, browser type, and usage data).
                        </p>
                    </li>

                    <li>
                        <h2 className="text-2xl font-semibold text-violet">How We Use Your Information</h2>
                        <p className="text-gray-700">
                            We use your information to provide and improve our services, personalize your experience, respond to inquiries, communicate important updates, and ensure security and compliance with legal obligations.
                        </p>
                    </li>

                    <li>
                        <h2 className="text-2xl font-semibold text-violet">Cookies and Tracking Technologies</h2>
                        <p className="text-gray-700">
                            We may use cookies and similar technologies to enhance your experience, analyze usage, and deliver relevant content. You can manage cookie preferences through your browser settings.
                        </p>
                    </li>

                    <li>
                        <h2 className="text-2xl font-semibold text-violet">Data Sharing</h2>
                        <p className="text-gray-700">
                            We do not sell your personal data. We may share information with trusted third-party service providers who assist us in operating our services, only when necessary and with appropriate safeguards in place.
                        </p>
                    </li>

                    <li>
                        <h2 className="text-2xl font-semibold text-violet">Data Security</h2>
                        <p className="text-gray-700">
                            We implement technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse. However, no method of transmission over the internet is 100% secure.
                        </p>
                    </li>

                    <li>
                        <h2 className="text-2xl font-semibold text-violet">Your Rights</h2>
                        <p className="text-gray-700">
                            You have the right to access, correct, or delete your personal information. You may also have the right to object to certain data uses or request data portability. Contact us to exercise these rights.
                        </p>
                    </li>

                    <li>
                        <h2 className="text-2xl font-semibold text-violet">Children's Privacy</h2>
                        <p className="text-gray-700">
                            Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal data, we will delete it promptly.
                        </p>
                    </li>

                    <li>
                        <h2 className="text-2xl font-semibold text-violet">Changes to This Policy</h2>
                        <p className="text-gray-700">
                            We may update this Privacy Policy from time to time. We will notify you of significant changes and update the effective date at the top of the policy. Continued use of our services constitutes acceptance of the revised policy.
                        </p>
                    </li>

                    <li>
                        <h2 className="text-2xl font-semibold text-violet">Contact Us</h2>
                        <p className="text-gray-700">
                            If you have any questions or concerns about this Privacy Policy, please contact us at [Your Contact Information].
                        </p>
                    </li>
                </ol>

                <p className="text-lg text-gray-700 mt-6 mb-30">
                    We are committed to protecting your privacy and ensuring transparency in how we handle your personal information. Thank you for trusting us.
                </p>
            </div>
        </MainLayout>
    );
}
