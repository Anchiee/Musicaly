import MainLayout from "@/Layouts/MainLayout";

export default function About() {
    return (
        <MainLayout title="What is Musicaly?">
            <section className="px-6 py-8 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-violet mb-6 mt-30">What is Musicaly?</h1>

                <p className="text-lg text-gray-700 mb-4">
                    Musicaly is a next-generation music streaming platform designed with freedom, quality, and community at its core. Unlike traditional services, we focus on delivering a seamless and empowering music experience without the noise of ads or restrictive paywalls.
                </p>

                <h2 className="text-2xl font-semibold text-violet mb-2 mt-6">A Platform for Pure Listening</h2>
                <p className="text-gray-700 mb-4">
                    We provide a clean, distraction-free interface with high-fidelity audio — because your music deserves to sound the way it was meant to. Whether you're relaxing, studying, or discovering new sounds, Musicaly is your personal audio sanctuary.
                </p>

                <h2 className="text-2xl font-semibold text-violet mb-2 mt-6">Curated & Personalized</h2>
                <p className="text-gray-700 mb-4">
                    From hand-picked playlists to smart recommendations, we tailor your experience based on your tastes, not algorithms designed to sell ads. Our goal is to connect you with music that resonates, inspires, and moves you.
                </p>

                <h2 className="text-2xl font-semibold text-violet mb-2 mt-6">Built by the Community</h2>
                <p className="text-gray-700 mb-4">
                    Musicaly is open-source and community-driven. We're not owned by a corporation — we're powered by passionate people who love music and value ethical technology. Developers, designers, and listeners alike can help shape the future of streaming.
                </p>

                <h2 className="text-2xl font-semibold text-violet mb-2 mt-6">Accessible to Everyone</h2>
                <p className="text-gray-700 mb-4">
                    We believe that music should be accessible to all. Musicaly is free to use and open to contribution — whether you're a casual listener or an aspiring artist, there's a place for you here.
                </p>

                <p className="text-lg text-gray-700 mt-8 mb-30">
                    Musicaly isn't just another app — it's a movement toward a better, more human-centered way to experience music. Welcome to the future of sound.
                </p>
            </section>
        </MainLayout>
    );
}
