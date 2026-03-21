import { HeroHeader } from "@/components/header";
import Footer from "@/components/footer-3";
import { Clock, Users, Globe2, Target } from "lucide-react";

export default function WhitePaperPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <HeroHeader />
            <main className="flex-1 p-6 mt-32 mb-16 max-w-3xl mx-auto w-full">
                <h1 className="text-5xl font-serif mb-8 text-center mt-16">AruraH (HFM-1)</h1>
                <div className="prose prose-lg dark:prose-invert">
                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">Model Architecture & Parameters</h2>
                    <p className="mb-4">Our model is built on a custom Multimodal Transformer Architecture, specifically optimized for low-latency edge deployment in hotel environments. Unlike general-purpose LLMs, our model utilizes a Sparse Mixture of Experts (MoE) layer to process hospitality-specific tasks.</p>
                    
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Total Parameters: 34 Billion (34B).</strong><br/><em>Why this size?</em> We found that 34B represents the &quot;Goldilocks Zone&quot; for hospitality-large enough to understand complex emotional nuance and visual context, but efficient enough to provide near-instant responses for front-desk support.</li>
                        <li><strong>Context Window: 128k Tokens.</strong><br/>This allows the model to &quot;remember&quot; the entire history of a guest&apos;s stay, from their initial booking preferences to a complaint made three days prior.</li>
                        <li><strong>Modality: Native Multimodal (Vision-Language-Audio).</strong><br/>The model does not use a separate &quot;plugin&quot; for images; it processes pixels and text in a unified latent space.</li>
                    </ul>

                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">The Training Regimen: 18,000+ Hours of Specialized Learning</h2>
                    <p className="mb-4">our model has undergone a rigorous, multi-stage:</p>

                    <h3 className="text-xl font-serif font-medium mt-6 mb-4">Phase I: Technical Foundation (15,000 Developer Hours)</h3>
                    <p className="mb-4">Our engineering team spent 15,000 hours on <strong>Supervised Fine-Tuning (SFT)</strong> and structural optimization.</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Dataset:</strong> A curated corpus of 2 trillion tokens focusing on global etiquette, international law, food safety standards (HACCP), and travel logistics.</li>
                        <li><strong>Architecture Optimization:</strong> Implementing <strong>FlashAttention-2</strong> to reduce inference costs for nonprofit partners.</li>
                    </ul>

                    <h3 className="text-xl font-serif font-medium mt-6 mb-4">Phase II: The Guest Experience (3,000 User-Centric Hours)</h3>
                    <p className="mb-4">We didn&apos;t just train with data; we trained with <em>interactions</em>. Over 3,000 hours were dedicated to <strong>Reinforcement Learning from Human Feedback (RLHF)</strong> specifically using actual hotel guests and travelers.</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Focus:</strong> Perfecting the &quot;Human Feel.&quot; The model was rewarded for de-escalating tension and penalized for &quot;robotic&quot; or dismissive responses.</li>
                    </ul>

                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">Phase III: The Global Hotelier Mentorship (Starting Soon)</h2>
                    <p className="mb-4">We are moving beyond data and into <strong>Expert Intuition</strong>. While code provides the structure, only a veteran hotelier can provide the &quot;soul&quot; of service.</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Objective:</strong> To close the accuracy gap by injecting real-world professional judgment into the model&apos;s decision-making tree.</li>
                        <li><strong>The &quot;Shadowing&quot; Protocol:</strong> Our AI will begin &quot;shadowing&quot; General Managers, Concierges, and Front Desk Supervisors across diverse global properties.</li>
                        <li><strong>Edge-Case Refinement:</strong> This phase focuses on the &quot;unwritten rules&quot; of hospitality, handling overbooked nights, navigating complex cultural misunderstandings, and the subtle art of the &quot;invisible service&quot; that defines luxury.</li>
                        <li><strong>RLHF-H (Reinforcement Learning from Hospitality Humans):</strong> We are implementing a proprietary feedback loop where 5-star professionals &quot;grade&quot; the AI&apos;s emotional resonance. If the AI is too clinical, the hotelier corrects it; if it is too informal, the hotelier refines it.</li>
                    </ul>

                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">The Accuracy Benchmark</h2>
                    <p className="mb-4">We believe in radical transparency. In our latest internal benchmarks simulating real-world hotel scenarios ranging from &quot;lost luggage&quot; to &quot;complex billing disputes&quot; the model currently holds:</p>

                    <h3 className="text-xl font-serif font-medium mt-6 mb-4">Current Accuracy: 83%</h3>
                    <p className="italic text-muted-foreground mb-4">Status: Active Optimization</p>
                    <p className="mb-4">While 83% outperforms , we are currently in <strong>Phase III: Hotelier Mentorship</strong>. We are working alongside 5-star General Managers to close the remaining 17% gap by focusing on:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Hyper-local Nuance:</strong> Understanding regional dialects and unspoken cultural cues.</li>
                        <li><strong>Visual Edge-Cases:</strong> Correctly identifying rare maintenance issues or obscure luxury amenities.</li>
                    </ul>

                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">Emotional Intelligence (EQ) Scoring</h2>
                    <p className="mb-4">Standard AI is measured by &quot;Perplexity.&quot; Our model is measured by <strong>Sentiment Alignment</strong>.</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>De-escalation Success Rate:</strong> In 92% of simulated &quot;High-Tension&quot; interactions, the model successfully lowered the guest&apos;s heart rate (measured via sentiment analysis of their responses) within three exchanges.</li>
                        <li><strong>Bias Mitigation:</strong> As a nonprofit, we have implemented a <strong>Neutrality Layer</strong> that prevents the AI from showing bias based on a guest&apos;s accent, nationality, or background.</li>
                    </ul>

                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">Hardware &amp; Integration Technicals</h2>
                    <ul className="list-disc pl-6 mb-8 space-y-2">
                        <li><strong>Inference Type:</strong> Int8 Quantization (allowing for high-speed performance on standard server hardware).</li>
                        <li><strong>API Architecture:</strong> RESTful API with Webhook support for Property Management Systems (PMS) like Opera or Mews.</li>
                        <li><strong>Visual Processing:</strong> Real-time Image-to-Action (I2A) latency of &lt;1.2 seconds.</li>
                    </ul>

                    <h3 className="text-xl font-serif font-medium mt-12 mb-8 text-center sm:text-left">Current Training &amp; Benchmarks</h3>
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
                </div>
            </main>
            <Footer />
        </div>
    );
}
