"use client";

import { HeroHeader } from "@/components/header";
import Footer from "@/components/footer-3";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { submitGetInvolved } from "./actions";

export default function GetInvolvedPage() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [role, setRole] = useState("");

    async function handleAction(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        const form = new FormData(e.currentTarget);
        try {
            await submitGetInvolved({
                name: form.get("name") as string,
                email: form.get("email") as string,
                role: form.get("role") as string,
                phone: form.get("phone") as string,
                linkedin: form.get("linkedin") as string,
                organization: form.get("organization") as string,
                position: form.get("position") as string,
                department: form.get("department") as string | undefined,
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
                                <select id="role" name="role" value={role} onChange={(e) => setRole(e.target.value)} required className="w-full border rounded-md p-2 bg-background border-border">
                                    <option value="" disabled>Select a role</option>
                                    <option value="developer">Developer</option>
                                    <option value="hotelier">Hotelier</option>
                                </select>
                            </div>
                            {role === "hotelier" && (
                                <div>
                                    <label htmlFor="department" className="block text-sm font-medium mb-1">Department</label>
                                    <select id="department" name="department" defaultValue="" required className="w-full border rounded-md p-2 bg-background border-border">
                                        <option value="" disabled>Select a department</option>
                                        <option value="General Manager">General Manager</option>
                                        <option value="Reservation">Reservation</option>
                                        <option value="Front Office">Front Office</option>
                                        <option value="Housekeeping">Housekeeping</option>
                                        <option value="Food and Beverage (F&B)">Food and Beverage (F&B)</option>
                                        <option value="Kitchen (Culinary)">Kitchen (Culinary)</option>
                                        <option value="Maintenance / Engineering">Maintenance / Engineering</option>
                                        <option value="Sales and Marketing">Sales and Marketing</option>
                                        <option value="Human Resources (HR)">Human Resources (HR)</option>
                                        <option value="Accounting / Finance">Accounting / Finance</option>
                                        <option value="Security">Security</option>
                                        <option value="Purchasing / Procurement">Purchasing / Procurement</option>
                                        <option value="Laundry">Laundry</option>
                                        <option value="Spa and Wellness">Spa and Wellness</option>
                                        <option value="Recreation / Activities">Recreation / Activities</option>
                                        <option value="IT (Information Technology)">IT (Information Technology)</option>
                                        <option value="Concierge / Guest Services">Concierge / Guest Services</option>
                                    </select>
                                </div>
                            )}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                                <input id="phone" name="phone" type="tel" required className="w-full border rounded-md p-2 bg-background border-border" placeholder="Your Phone Number" />
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
                                <input id="position" name="position" type="text" required className="w-full border rounded-md p-2 bg-background border-border" placeholder="Your Position" />
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
