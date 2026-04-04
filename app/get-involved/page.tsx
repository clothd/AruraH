"use client";

import { HeroHeader } from "@/components/header";
import Footer from "@/components/footer-3";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { submitGetInvolved } from "./actions";

export default function GetInvolvedPage() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [position, setPosition] = useState("");

    async function handleAction(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        const form = new FormData(e.currentTarget);
        try {
            const rawPosition = form.get("position") as string;
            await submitGetInvolved({
                name: form.get("name") as string,
                email: form.get("email") as string,
                role: form.get("role") as string,
                linkedin: form.get("linkedin") as string,
                organization: form.get("organization") as string,
                position: rawPosition === "other" ? form.get("otherPosition") as string : rawPosition,
                objective: form.get("objective") as string,
            });
            setStatus("success");
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    }

    return (
        <div className="min-h-screen flex flex-col">
            <HeroHeader />
            <main className="flex-1 flex items-center justify-center p-6 mt-32">
                <div className="max-w-md w-full bg-card p-8 rounded-xl shadow-sm border mt-16 mb-16">
                    <h1 className="text-4xl font-serif mb-6 text-center">Get involved</h1>
                    <p className="text-muted-foreground text-center mb-8">Join us as a developer or hotelier to help shape empathetic AI.</p>
                    {status === "success" ? (
                        <div className="bg-green-50 text-green-700 p-4 rounded-md border border-green-200 text-center">
                            Thank you! Your application has been received.
                        </div>
                    ) : (
                        <form onSubmit={handleAction} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                                <input id="name" name="name" type="text" required className="w-full border rounded-md p-2 bg-background border-border" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                                <input id="email" name="email" type="email" required className="w-full border rounded-md p-2 bg-background border-border" placeholder="you@example.com" />
                            </div>
                            <div>
                                <label htmlFor="role" className="block text-sm font-medium mb-1">Role</label>
                                <select id="role" name="role" defaultValue="" required className="w-full border rounded-md p-2 bg-background border-border">
                                    <option value="" disabled>Select a role</option>
                                    <option value="developer">Developer</option>
                                    <option value="hotelier">Hotelier</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="linkedin" className="block text-sm font-medium mb-1">LinkedIn/Social Profile</label>
                                <input id="linkedin" name="linkedin" type="url" required className="w-full border rounded-md p-2 bg-background border-border" placeholder="https://linkedin.com/in/..." />
                            </div>
                            <div>
                                <label htmlFor="organization" className="block text-sm font-medium mb-1">Organization Name</label>
                                <input id="organization" name="organization" type="text" required className="w-full border rounded-md p-2 bg-background border-border" placeholder="Your Organization" />
                            </div>
                            <div>
                                <label htmlFor="position" className="block text-sm font-medium mb-1">Current Position/Title</label>
                                <select id="position" name="position" value={position} onChange={(e) => setPosition(e.target.value)} required className="w-full border rounded-md p-2 bg-background border-border">
                                    <option value="" disabled>Select a position</option>
                                    <option value="Executive">Executive</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Software Engineer">Software Engineer</option>
                                    <option value="Researcher">Researcher</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            {position === "other" && (
                                <div>
                                    <label htmlFor="otherPosition" className="block text-sm font-medium mb-1">Please specify your position</label>
                                    <input id="otherPosition" name="otherPosition" type="text" required className="w-full border rounded-md p-2 bg-background border-border" placeholder="Title/Position" />
                                </div>
                            )}
                            <div>
                                <label htmlFor="objective" className="block text-sm font-medium mb-1">What do you wish to do?</label>
                                <textarea id="objective" name="objective" required className="w-full border rounded-md p-2 bg-background border-border h-32" placeholder="Tell us about how you want to contribute..."></textarea>
                            </div>
                            <Button type="submit" className="w-full" disabled={status === "loading"}>
                                {status === "loading" ? "Submitting..." : "Submit"}
                            </Button>
                            {status === "error" && (
                                <p className="text-destructive text-sm mt-2 text-center">Something went wrong. Please try again.</p>
                            )}
                        </form>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
