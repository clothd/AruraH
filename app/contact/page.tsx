"use client";

import { HeroHeader } from "@/components/header";
import Footer from "@/components/footer-3";
import { Button } from "@/components/ui/button";
import { submitContact } from "./actions";
import { useState } from "react";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    async function handleAction(formData: FormData) {
        setStatus("loading");
        try {
            await submitContact(formData);
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
                    <h1 className="text-4xl font-serif mb-6 text-center">Contact the Team</h1>
                    <p className="text-muted-foreground text-center mb-8">Want to join as a collaborator or pilot the model? Let us know below.</p>
                    {status === "success" ? (
                        <div className="bg-green-50 text-green-700 p-4 rounded-md border border-green-200 text-center">
                            Thank you! Your message has been received.
                        </div>
                    ) : (
                        <form action={handleAction} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                                <input id="name" name="name" type="text" required className="w-full border rounded-md p-2 bg-background border-border" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                                <input id="email" name="email" type="email" required className="w-full border rounded-md p-2 bg-background border-border" placeholder="you@example.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                                <textarea id="message" name="message" required className="w-full border rounded-md p-2 bg-background border-border h-32" placeholder="How can we collaborate?"></textarea>
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
