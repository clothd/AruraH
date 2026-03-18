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
                    <p className="mb-4">The technical architecture of AruraH is designed to operate seamlessly over platforms like WhatsApp, prioritizing real-time responsiveness and empathy in high-stakes hospitality scenarios. Built initially as an open research model, it addresses not just generic text interactions, but a multimodal understanding of the hotel ecosystem.</p>

                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">1. Introduction</h2>
                    <p className="mb-4">The hospitality industry demands a unique blend of efficiency, personalization, and empathy. Traditional chatbots often fail to capture the nuances of guest interactions, leading to frustration. AruraH introduces a novel multimodal foundation model specifically fine-tuned for the hospitality domain. By integrating natural language processing with visual intelligence and sentiment detection, AruraH empowers hoteliers to provide proactive, context-aware service at scale.</p>

                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">2. Model Architecture</h2>
                    <p className="mb-4">AruraH is built upon a hybrid transformer architecture optimized for low-latency inference. Key components include:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Domain-Specific Encoders:</strong> Pre-trained on vast datasets of hospitality-related communications, enabling deep semantic understanding of industry terminology and guest intent.</li>
                        <li><strong>Multimodal Processing Pipeline:</strong> Capable of analyzing text messages, voice notes, and images concurrently. This allows the model to process a translated voice request or analyze a photo of a room requesting maintenance in real-time.</li>
                        <li><strong>Dynamic Context Window:</strong> Maintains continuous context across long-running guest interactions, ensuring continuity from pre-arrival inquiries to post-departure feedback.</li>
                    </ul>

                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">3. Real-time Sentiment & Tone Detection</h2>
                    <p className="mb-4">A core differentiator of AruraH is its advanced emotional intelligence module. The model architecture relies on real-time sentiment detection to evaluate guest tone, processing linguistic cues and structural patterns to identify urgency and emotional state. This enables automated triage, instantly flagging high-risk interactions (e.g., complaints or distress) for immediate human intervention, while seamlessly handling routine requests.</p>

                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">4. Complaint De-escalation & Resolution</h2>
                    <p className="mb-4">AruraH incorporates specialized reinforcement learning from human feedback (RLHF) pathways focused on service recovery. When a negative sentiment is detected, the model shifts into a de-escalation framework:</p>
                    <ol className="list-decimal pl-6 mb-4 space-y-2">
                        <li><strong>Empathy Assertion:</strong> Generates immediate, contextually appropriate empathetic responses.</li>
                        <li><strong>Fact-Finding:</strong> Asks clarifying questions without frustrating the user.</li>
                        <li><strong>Action Generation:</strong> Proposes tailored solutions or compensations based on hotel policy parameters.</li>
                    </ol>

                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">5. Performance and Benchmarks</h2>
                    <p className="mb-4">The full technical specifications and benchmark results evaluating visual intelligence, sentiment detection precision, and complaint de-escalation efficiency are currently in the mentorship and validation phase. Preliminary results indicate a significant reduction in resolution time for complex service requests compared to baseline models.</p>

                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">6. Security and Data Privacy</h2>
                    <p className="mb-4">Designed with enterprise security at its core, AruraH enforces strict data anonymization protocols. All personally identifiable information (PII) is obfuscated at the edge before reaching the central processing node, ensuring compliance with global data protection regulations.</p>

                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">7. Conclusion</h2>
                    <p>AruraH represents a significant leap forward in domain-specific artificial intelligence. By combining multimodal capabilities with deep empathetic reasoning, we aim to redefine the standard of digital guest experiences in the hospitality ecosystem. Future work will focus on expanding multilingual support and integrating predictive maintenance workflows.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
