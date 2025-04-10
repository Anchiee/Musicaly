import MainLayout from "@/Layouts/MainLayout";

export default function Terms() {
    return (
        <MainLayout title="Terms of Service">
            <div className="px-6 py-8 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-violet mb-6 mt-30">Terms of Service</h1>
                <p className="text-lg text-gray-700 mb-4">
                    Welcome to our platform! These Terms of Service ("Terms") govern your access to and use of our services. By accessing or using our website, you agree to comply with these Terms. If you do not agree to these Terms, please do not use our services.
                </p>

                <ol className="list-decimal pl-6 space-y-4">
                    <li>
                        <h2 className="text-2xl font-semibold text-violet">Acceptance of Terms</h2>
                        <p className="text-gray-700">
                            By using our services, you accept and agree to these Terms, as well as any updates or amendments made to them. We reserve the right to modify these Terms at any time, and it is your responsibility to review them periodically.
                        </p>
                    </li>

                    <li>
                        <h2 className="text-2xl font-semibold text-violet"> User Accounts</h2>
                        <p className="text-gray-700">
                            You may need to create an account to access certain features. You are responsible for maintaining the confidentiality of your account and for all activities under your account.
                        </p>
                    </li>

                    <li>
                        <h2 className="text-2xl font-semibold text-violet">Acceptable Use</h2>
                        <p className="text-gray-700">
                            You agree to use our services in a lawful manner and will not engage in any activities that violate the rights of others or breach any applicable laws.
                        </p>
                    </li>

                    <li>
                        <h2 className="text-2xl font-semibold text-violet">Privacy</h2>
                        <p className="text-gray-700">
                            We respect your privacy. Our privacy practices are outlined in our Privacy Policy. By using our services, you consent to the collection and use of your data as described in that policy.
                        </p>
                    </li>

                    <li>
                        <h2 className="text-2xl font-semibold text-violet">Termination</h2>
                        <p className="text-gray-700">
                            We reserve the right to suspend or terminate your account if you violate these Terms. You may also terminate your account at any time by contacting us.
                        </p>
                    </li>

                    <li>
                        <h2 className="text-2xl font-semibold text-violet">Limitation of Liability</h2>
                        <p className="text-gray-700">
                            Our liability is limited to the maximum extent permitted by law. We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.
                        </p>
                    </li>

                    <li>
                        <h2 className="text-2xl font-semibold text-violet">Governing Law</h2>
                        <p className="text-gray-700">
                            These Terms are governed by the laws of [Your Country/State], without regard to its conflict of law principles. Any disputes will be resolved in the appropriate courts in [Your Jurisdiction].
                        </p>
                    </li>

                    <li>
                        <h2 className="text-2xl font-semibold text-violet">Contact Us</h2>
                        <p className="text-gray-700">
                            If you have any questions or concerns about these Terms, please contact us at [Your Contact Information].
                        </p>
                    </li>
                </ol>

                <p className="text-lg text-gray-700 mt-6 mb-30">
                    Thank you for using our services! We value your trust and are committed to providing you with a secure and reliable platform.
                </p>
            </div>
        </MainLayout>
    );
}
