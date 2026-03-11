import { HeroHeader } from "@/components/header";
import Footer from "@/components/footer-3";

export default function WhitePaperPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <HeroHeader />
            <main className="flex-1 p-6 mt-32 mb-16 max-w-3xl mx-auto w-full">
                <h1 className="text-5xl font-serif mb-8 text-center mt-16">AruraH Model White Paper</h1>
                <div className="prose prose-lg dark:prose-invert">
                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">Abstract</h2>
                    <p className="mb-4">The technical architecture of AruraH is designed to operate seamlessly over platforms like WhatsApp, prioritizing real-time responsiveness and empathy in high-stakes hospitality scenarios.</p>
                    <p className="mb-4">Built initially as an open research model, it addresses not just generic text interactions, but a multimodal understanding of the hotel ecosystem.</p>

                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">Technical Foundation</h2>
                    <p className="mb-4">The model architecture relies on real-time sentiment detection to evaluate guest tone, processing both text and visual inputs concurrently. More technical documentation is scheduled for future release.</p>

                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">Coming Soon</h2>
                    <p>The full technical specifications and benchmark results evaluating visual intelligence, sentiment detection, and complaint de-escalation efficiency are currently in the mentorship and validation phase.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
