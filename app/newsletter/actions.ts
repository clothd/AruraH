"use server";

import { supabase } from "@/lib/supabase";

export async function subscribeNewsletter(email: string) {
    const { error } = await supabase
        .from("newsletter_subscriptions")
        .upsert({ email }, { onConflict: "email" });

    if (error) throw new Error(error.message);

    return { success: true };
}
