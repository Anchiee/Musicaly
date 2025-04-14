import MainLayout from "@/Layouts/MainLayout";

export default function Mission() {
    return (
        <MainLayout title="Our Mission">
            <section className="px-6 py-8 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-violet mb-6 mt-30">Our Mission</h1>

                <p className="text-lg text-gray-700 mb-4">
                    At Musicaly, our mission is to revolutionize the way people experience music — by making it open, accessible, and empowering. We believe that music is more than just sound; it’s a universal language that connects people, tells stories, and sparks creativity.
                </p>

                <h2 className="text-2xl font-semibold text-violet mb-2 mt-6">Empowering Listeners</h2>
                <p className="text-gray-700 mb-4">
                    We aim to put the power back in the hands of listeners. That means offering high-fidelity streaming without interruptions, limitations, or intrusive ads. Your musical journey should be immersive, pure, and personal — and we're here to make that happen.
                </p>

                <h2 className="text-2xl font-semibold text-violet mb-2 mt-6">Supporting Artists & Creativity</h2>
                <p className="text-gray-700 mb-4">
                    We support the creative community by encouraging a fair and transparent platform. Our long-term vision includes empowering independent artists with tools to share, grow, and monetize their music, all while retaining control of their art.
                </p>

                <h2 className="text-2xl font-semibold text-violet mb-2 mt-6">Built on Open Source</h2>
                <p className="text-gray-700 mb-4">
                    Musicaly is proudly open-source. We believe transparency and community collaboration lead to better, more ethical products. Anyone can contribute, audit, or extend our platform — because innovation thrives in openness.
                </p>

                <h2 className="text-2xl font-semibold text-violet mb-2 mt-6">Privacy-First Philosophy</h2>
                <p className="text-gray-700 mb-4">
                    Your data is yours. Unlike many other platforms, we do not use your personal information to sell ads or create invasive profiles. Our privacy-first approach ensures that your trust is always respected.
                </p>

                <p className="text-lg text-gray-700 mt-8 mb-30">
                    We're not just building a music streaming service — we're building a movement. Thank you for being a part of it.
                </p>
            </section>
        </MainLayout>
    );
}
