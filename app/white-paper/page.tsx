import { HeroHeader } from "@/components/header";
import Footer from "@/components/footer-3";
import { Clock, Users, Globe2, Target } from "lucide-react";

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
                    <p className="mb-4">AruraH incorporates a custom Multimodal Transformer Architecture with a Sparse Mixture of Experts (MoE) layer, optimized for low-latency edge deployment in hotel environments. Key structural components include:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Optimal Parameter Scale (34B):</strong> We found that 34 Billion parameters represent the "Goldilocks Zone" for hospitality—large enough to understand complex emotional nuance, but efficient enough to provide near-instant front-desk support.</li>
                        <li><strong>Native Multimodality:</strong> Analyzes text messages, voice notes, and images concurrently in a unified latent space without relying on external cascaded vision-language models.</li>
                        <li><strong>128k Dynamic Context Window:</strong> Maintains continuous context across long-running guest interactions, remembering a guest's entire stay history from original booking preferences to past complaints.</li>
                        <li><strong>Domain-Specific Encoders:</strong> Pre-trained on a curated corpus focusing on global hotel operations, etiquette, and travel logistics.</li>
                    </ul>

                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">3. Real-time Sentiment & Tone Detection</h2>
                    <p className="mb-4">A core differentiator of AruraH is its advanced emotional intelligence module. The model architecture relies on real-time sentiment detection to evaluate guest tone, processing linguistic cues and structural patterns to identify urgency and emotional state. This enables automated triage, instantly flagging high-risk interactions (e.g., complaints or distress) for immediate human intervention, while seamlessly handling routine requests.</p>

                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">4. Complaint De-escalation & Resolution (HEARD Protocol)</h2>
                    <p className="mb-4">AruraH utilizes a proprietary Reinforcement Learning from Hospitality Humans (RLHF-H) pathway focused on service recovery, developed side-by-side with veteran hoteliers. When a negative sentiment is detected, the model shifts into a de-escalation framework based on the 5-step hospitality recovery method (HEARD):</p>
                    <ol className="list-decimal pl-6 mb-4 space-y-2">
                        <li><strong>Hear:</strong> Actively listens and records the guest's entire complaint.</li>
                        <li><strong>Empathize:</strong> Generates immediate, contextually appropriate empathetic responses.</li>
                        <li><strong>Apologize:</strong> Offers a genuine apology without shifting blame.</li>
                        <li><strong>Resolve:</strong> Proposes tailored solutions or compensations based on hotel policy parameters.</li>
                        <li><strong>Diagnose:</strong> Logs the root cause of the issue for future operational intelligence.</li>
                    </ol>

                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">5. Performance Benchmarks & Integration</h2>
                    <p className="mb-4">Our model architecture leverages Int8 Quantization to achieve high-speed inference on standard server hardware, ensuring seamless integration via a RESTful API with Webhook support for hotel Property Management Systems (PMS). Preliminary performance metrics demonstrate:</p>
                    
                    <ul className="list-disc pl-6 mb-8 space-y-2">
                        <li><strong>Visual Processing Speed:</strong> Real-time Image-to-Action (I2A) latency of &lt;1.2 seconds.</li>
                        <li><strong>Emotional Intelligence (EQ) Efficacy:</strong> 92% De-escalation Success Rate in high-tension simulations, successfully lowering guest frustration within three conversational exchanges.</li>
                        <li><strong>Bias Mitigation:</strong> Features a built-in Neutrality Layer that prevents the AI from showing bias based on a guest's accent, nationality, or demographic background.</li>
                    </ul>

                    <h3 className="text-xl font-serif font-medium mt-6 mb-8 text-center sm:text-left">Current Training & Benchmarks</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                        <div className="relative overflow-hidden rounded-2xl border bg-card/50 p-5 flex flex-col items-center text-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] transition-all hover:shadow-lg hover:-translate-y-1">
                            <div className="p-3 rounded-full bg-blue-500/10 mb-4">
                                <Clock className="w-5 h-5 text-blue-500" />
                            </div>
                            <div className="text-3xl font-serif font-medium tracking-tight mb-1 text-foreground/90">18,034</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Training Hours</div>
                        </div>
                        <div className="relative overflow-hidden rounded-2xl border bg-card/50 p-5 flex flex-col items-center text-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] transition-all hover:shadow-lg hover:-translate-y-1">
                            <div className="p-3 rounded-full bg-emerald-500/10 mb-4">
                                <Users className="w-5 h-5 text-emerald-500" />
                            </div>
                            <div className="text-3xl font-serif font-medium tracking-tight mb-1 text-foreground/90">92</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Active Mentors</div>
                        </div>
                        <div className="relative overflow-hidden rounded-2xl border bg-card/50 p-5 flex flex-col items-center text-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] transition-all hover:shadow-lg hover:-translate-y-1">
                            <div className="p-3 rounded-full bg-indigo-500/10 mb-4">
                                <Globe2 className="w-5 h-5 text-indigo-500" />
                            </div>
                            <div className="text-3xl font-serif font-medium tracking-tight mb-1 text-foreground/90">104</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Languages</div>
                        </div>
                        <div className="relative overflow-hidden rounded-2xl border bg-card/50 p-5 flex flex-col items-center text-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] transition-all hover:shadow-lg hover:-translate-y-1">
                            <div className="p-3 rounded-full bg-orange-500/10 mb-4">
                                <Target className="w-5 h-5 text-orange-500" />
                            </div>
                            <div className="text-3xl font-serif font-medium tracking-tight mb-1 text-foreground/90">83%</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">Accuracy</div>
                            <div className="mt-auto text-[10px] uppercase font-bold tracking-widest text-orange-600 bg-orange-500/10 px-2 py-0.5 rounded-full inline-block">Goal: 90%</div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">6. Cultural and Linguistic Fluency</h2>
                    <p className="mb-4">Beyond simple translation, AruraH understands cultural etiquette, formal/informal address, and subtleties across 100+ languages. It acts as a local expert, specifically trained on your neighborhood to understand unique contexts and suggest relevant recommendations.</p>

                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">7. Security and Data Privacy</h2>
                    <p className="mb-4">Designed with enterprise security at its core, AruraH enforces strict data anonymization protocols. All personally identifiable information (PII) is obfuscated at the edge before reaching the central processing node, ensuring compliance with global data protection regulations.</p>

                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">8. Conclusion</h2>
                    <p>AruraH represents a significant leap forward in domain-specific artificial intelligence. By combining multimodal capabilities with deep empathetic reasoning, we aim to redefine the standard of digital guest experiences in the hospitality ecosystem. Future work will focus on integrating predictive maintenance workflows.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
