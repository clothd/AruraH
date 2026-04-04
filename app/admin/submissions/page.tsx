import { cookies } from "next/headers";
import { supabase } from "@/lib/supabase";
import LoginForm from "./LoginForm";
import AdminDashboard from "./AdminDashboard";

export const metadata = {
    title: "Admin Submissions | AruraH",
    robots: {
        index: false,
        follow: false,
    }
};

// Opt out of caching
export const dynamic = "force-dynamic";

export default async function AdminPage() {
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");
    
    if (session?.value !== (process.env.ADMIN_PASSWORD || "admin2026")) {
        return <LoginForm />;
    }

    // Fetch data with error handling
    let getInvolved = [], contacts = [], newsletters = [];
    
    try {
        const [{ data: gData }, { data: cData }, { data: nData }] = await Promise.all([
            // In case there is no created_at, just fetch normally. 
            // supabase-js will typically return records in insert order unless ordered.
            supabase.from("get_involved_submissions").select("*"),
            supabase.from("contact_submissions").select("*"),
            supabase.from("newsletter_subscriptions").select("*"),
        ]);
        
        getInvolved = gData || [];
        contacts = cData || [];
        newsletters = nData || [];
        
        // Try to sort by created_at client side or during mapped phase if available
        const sortByDate = (a: any, b: any) => {
            if (!a.created_at || !b.created_at) return 0;
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        };
        
        getInvolved.sort(sortByDate);
        contacts.sort(sortByDate);
        newsletters.sort(sortByDate);

    } catch (e) {
        console.error("Failed to fetch admin data", e);
    }

    return (
        <AdminDashboard 
            getInvolved={getInvolved} 
            contacts={contacts} 
            newsletters={newsletters} 
        />
    );
}
