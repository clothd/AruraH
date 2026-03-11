"use server";

import fs from "fs";
import path from "path";

export async function submitContact(formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const logEntry = `[${new Date().toISOString()}] Name: ${name}, Email: ${email}, Message: ${message}\n`;

    // Log directly to the console so we can see it in terminal
    console.log("New Contact Submission:", logEntry);

    // Also persist to a file in the root directory for later review
    try {
        const logPath = path.join(process.cwd(), "contact-submissions.log");
        fs.appendFileSync(logPath, logEntry);
    } catch (e) {
        console.error("Failed to write to log file", e);
    }

    // Simulate network delay to show loading state nicely
    await new Promise((resolve) => setTimeout(resolve, 800));

    return { success: true };
}
