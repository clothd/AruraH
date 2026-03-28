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
                    <p className="mb-4">Our model is built on an efficient multimodal transformer architecture, specifically optimized for low-latency edge deployment in hotel environments. Unlike general-purpose LLMs, our model is fine-tuned to deeply understand and process hospitality-specific tasks.</p>
                    
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Total Parameters: 8 Billion (8B).</strong><br/><em>Why this size?</em> We found that an 8B parameter class model represents the &quot;Goldilocks Zone&quot; for hospitality—large enough to understand complex emotional nuance and visual context, but efficient enough to securely run on-premise, providing near-instant responses for front-desk support without relying on cloud latency.</li>
                        <li><strong>Context Window: 128k Tokens.</strong><br/>This allows the model to &quot;remember&quot; the entire history of a guest&apos;s stay, from their initial booking preferences to an inquiry made three days prior.</li>
                        <li><strong>Modality: Native Multimodal (Vision-Language).</strong><br/>The model natively ingests and processes imagery—such as room conditions or maintenance photos—alongside text in a unified latent space.</li>
                    </ul>

                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">The Training Regimen: 2,500+ GPU Hours of Specialized Learning</h2>
                    <p className="mb-4">Our model has undergone a rigorous, multi-stage fine-tuning process:</p>

                    <h3 className="text-xl font-serif font-medium mt-6 mb-4">Phase I: Technical Foundation (2,000+ GPU Hours)</h3>
                    <p className="mb-4">Our engineering team dedicated over 2,000 compute hours to <strong>Supervised Fine-Tuning (SFT)</strong> and structural optimization.</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Dataset:</strong> A highly curated SFT corpus of over 35,000 structured hospitality interactions, focusing on global etiquette, standard operating procedures, food safety standards (HACCP), and travel logistics.</li>
                        <li><strong>Architecture Optimization:</strong> Implementing <strong>FlashAttention-2</strong> with advanced quantization frameworks to drastically reduce inference compute requirements for our partners.</li>
                    </ul>

                    <h3 className="text-xl font-serif font-medium mt-6 mb-4">Phase II: The Guest Experience (RLHF)</h3>
                    <p className="mb-4">We didn&apos;t just train with static text; we trained with realistic <em>interactions</em>. Extensive resources were dedicated to <strong>Reinforcement Learning from Human Feedback (RLHF)</strong>, utilizing hospitality professionals to rank and refine the model&apos;s responses in varied simulations.</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Focus:</strong> Perfecting the &quot;Human Feel.&quot; The model was rewarded for concisely delivering accurate information, demonstrating empathy, and penalized for &quot;robotic&quot; or overly generic phrasing.</li>
                    </ul>

                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">Phase III: The Global Hotelier Mentorship (Ongoing)</h2>
                    <p className="mb-4">We are moving beyond standard benchmarks and into <strong>Domain Expertise</strong>. While base models provide structural understanding, veteran hoteliers provide the localized knowledge necessary for premium service.</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Objective:</strong> To close the accuracy gap by injecting real-world professional judgment into the model&apos;s decision-making process.</li>
                        <li><strong>The &quot;Shadowing&quot; Protocol:</strong> Our AI architecture ingests and analyzes anonymized workflows and query resolutions from Front Desk Supervisors and Concierges to learn real-world operational context.</li>
                        <li><strong>Edge-Case Refinement:</strong> This phase focuses on the complex realities of hospitality, navigating unique requests, and coordinating multi-department logistics seamlessly.</li>
                        <li><strong>RLHF-H (Reinforcement Learning from Hospitality Feedback):</strong> We implemented a proprietary feedback loop where experienced professionals &quot;grade&quot; the AI&apos;s situational awareness across simulated edge-cases to ensure tone and urgency are perfectly matched to the scenario.</li>
                    </ul>

                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">The Accuracy Benchmark</h2>
                    <p className="mb-4">We believe in radical transparency. In our latest internal benchmarks simulating real-world hotel scenarios ranging from &quot;lost luggage&quot; to &quot;complex billing disputes&quot; the model currently holds:</p>

                    <h3 className="text-xl font-serif font-medium mt-6 mb-4">Current Accuracy: 83%</h3>
                    <p className="italic text-muted-foreground mb-4">Status: Active Optimization</p>
                    <p className="mb-4">While 83% significantly outperforms general-purpose base models on standard hospitality benchmarks, we are currently in <strong>Phase III: Hotelier Mentorship</strong>. We are working alongside industry professionals to close the remaining 17% gap by focusing on:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Hyper-local Nuance:</strong> Understanding regional operational differences and seasonal specificities.</li>
                        <li><strong>Visual Edge-Cases:</strong> Correctly identifying specific maintenance issues or recognizing distinct luxury amenities from unstructured image uploads.</li>
                    </ul>

                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">Interaction Quality &amp; Sentiment Benchmarks</h2>
                    <p className="mb-4">Standard AI is measured by &quot;Perplexity.&quot; Our model&apos;s ultimate test is <strong>Guest Satisfaction Probability</strong>.</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>De-escalation Capability:</strong> In 92% of simulated &quot;High-Tension&quot; interactions (e.g., severe delays, lost inventory), the model successfully shifted the dialogue&apos;s sentiment trajectory from negative to neutral or positive within three conversational turns, as measured by standard NLP sentiment analysis metrics.</li>
                        <li><strong>Equitable Service Delivery:</strong> Through rigorous adversarial testing and balanced dataset curation, we actively mitigate statistical biases related to guest names, phrasing, or language proficiency, ensuring consistent high-quality service across diverse demographics.</li>
                    </ul>

                    <h2 className="text-2xl font-serif font-medium mt-8 mb-4">Hardware &amp; Integration Technicals</h2>
                    <ul className="list-disc pl-6 mb-8 space-y-2">
                        <li><strong>Inference Type:</strong> 4-bit and 8-bit Quantization (e.g., AWQ/GGUF) allowing for high-speed performance on standard enterprise server hardware without requiring massive GPU clusters.</li>
                        <li><strong>API Architecture:</strong> RESTful API with dedicated Webhook support, designed to integrate seamlessly into Property Management Systems (PMS) like Opera, Mews, or Cloudbeds.</li>
                        <li><strong>Visual Processing:</strong> Optimized multimodal latency, providing Image-to-Text contextualization in &lt;1.5 seconds on edge hardware.</li>
                    </ul>

                    <h3 className="text-xl font-serif font-medium mt-12 mb-8 text-center sm:text-left">Current Training &amp; Benchmarks</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                        <div className="relative overflow-hidden rounded-2xl border bg-card/50 p-5 flex flex-col items-center text-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] transition-all hover:shadow-lg hover:-translate-y-1">
                            <div className="p-3 rounded-full bg-blue-500/10 mb-4">
                                <Clock className="w-5 h-5 text-blue-500" />
                            </div>
                            <div className="text-3xl font-serif font-medium tracking-tight mb-1 text-foreground/90">2,534</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">GPU Hours</div>
                        </div>
                        <div className="relative overflow-hidden rounded-2xl border bg-card/50 p-5 flex flex-col items-center text-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] transition-all hover:shadow-lg hover:-translate-y-1">
                            <div className="p-3 rounded-full bg-emerald-500/10 mb-4">
                                <Users className="w-5 h-5 text-emerald-500" />
                            </div>
                            <div className="text-3xl font-serif font-medium tracking-tight mb-1 text-foreground/90">12</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Active Mentors</div>
                        </div>
                        <div className="relative overflow-hidden rounded-2xl border bg-card/50 p-5 flex flex-col items-center text-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] transition-all hover:shadow-lg hover:-translate-y-1">
                            <div className="p-3 rounded-full bg-indigo-500/10 mb-4">
                                <Globe2 className="w-5 h-5 text-indigo-500" />
                            </div>
                            <div className="text-3xl font-serif font-medium tracking-tight mb-1 text-foreground/90">8</div>
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
