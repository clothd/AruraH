"use server";

import { supabase } from "@/lib/supabase";

export async function submitGetInvolved(data: {
    name: string;
    email: string;
    role: string;
    linkedin: string;
    objective: string;
}) {
    const { error } = await supabase.from("get_involved_submissions").insert(data);

    if (error) throw new Error(error.message);

    return { success: true };
}
