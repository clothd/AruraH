"use server";
import { cookies } from "next/headers";

export async function login(form: FormData) {
    const password = form.get("password");
    if (password === (process.env.ADMIN_PASSWORD || "admin2026")) {
        (await cookies()).set("admin_session", password as string, { httpOnly: true, path: "/" });
        return { success: true };
    }
    return { success: false, error: "Invalid password" };
}

export async function logout() {
    (await cookies()).delete("admin_session");
}
