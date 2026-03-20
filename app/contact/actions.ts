"use server";

import { supabase } from "@/lib/supabase";

export async function submitContact(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const contributorType = formData.get("contributorType") as string;
    const message = formData.get("message") as string;

    const { error } = await supabase.from("contact_submissions").insert({
        name,
        email,
        contributor_type: contributorType,
        message,
    });

    if (error) throw new Error(error.message);

    return { success: true };
}
