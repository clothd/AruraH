"use client";
import { logout } from "./actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminDashboard({ getInvolved, contacts, newsletters }: { getInvolved: any[], contacts: any[], newsletters: any[] }) {
    const router = useRouter();
    const [tab, setTab] = useState("get-involved");

    async function handleLogout() {
        await logout();
        router.refresh();
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8 text-black font-sans">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                    <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                        Form Submissions
                    </h1>
                    <button 
                        onClick={handleLogout} 
                        className="px-5 py-2.5 bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 rounded-md font-medium transition-colors cursor-pointer text-sm shadow-sm"
                    >
                        Sign Out
                    </button>
                </div>

                <div className="flex space-x-2 mb-6 border-b border-gray-200 pb-2 overflow-x-auto">
                    <button 
                        onClick={() => setTab("get-involved")} 
                        className={`px-5 py-2.5 text-sm font-medium rounded-t-lg transition-colors cursor-pointer whitespace-nowrap ${tab === "get-involved" ? "text-blue-700 bg-white border-b-2 border-blue-600 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]" : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"}`}
                    >
                        Get Involved ({getInvolved.length})
                    </button>
                    <button 
                        onClick={() => setTab("contact")} 
                        className={`px-5 py-2.5 text-sm font-medium rounded-t-lg transition-colors cursor-pointer whitespace-nowrap ${tab === "contact" ? "text-blue-700 bg-white border-b-2 border-blue-600 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]" : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"}`}
                    >
                        Contact Forms ({contacts.length})
                    </button>
                    <button 
                        onClick={() => setTab("newsletter")} 
                        className={`px-5 py-2.5 text-sm font-medium rounded-t-lg transition-colors cursor-pointer whitespace-nowrap ${tab === "newsletter" ? "text-blue-700 bg-white border-b-2 border-blue-600 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]" : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"}`}
                    >
                        Newsletter ({newsletters.length})
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-sm">
                    {tab === "get-involved" && (
                        <div className="overflow-x-auto min-h-[400px]">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 text-xs uppercase tracking-wider">
                                    <tr>
                                        <th className="p-4 font-semibold">Submission Details</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {getInvolved.length === 0 ? (
                                        <tr><td className="p-8 text-center text-gray-500">No submissions found.</td></tr>
                                    ) : getInvolved.map((item, i) => (
                                        <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="p-4 sm:p-5 flex flex-col gap-1.5">
                                                <div className="font-semibold text-base text-gray-900">
                                                    {item.name} <a href={`mailto:${item.email}`} className="font-normal text-blue-600 hover:underline">({item.email})</a>
                                                </div>
                                                <div className="text-gray-600 flex flex-wrap gap-x-4 gap-y-1 mt-1">
                                                    <span><span className="font-medium text-gray-400">Role:</span> {item.role}</span>
                                                    <span><span className="font-medium text-gray-400">Org:</span> {item.organization}</span>
                                                    <span><span className="font-medium text-gray-400">Pos:</span> {item.position}</span>
                                                    {item.department && <span><span className="font-medium text-gray-400">Dept:</span> {item.department}</span>}
                                                </div>
                                                <div className="text-gray-600 flex flex-wrap gap-x-4 gap-y-1">
                                                    <span><span className="font-medium text-gray-400">Phone:</span> {item.phone || "N/A"}</span>
                                                    <span><span className="font-medium text-gray-400">LinkedIn:</span> {item.linkedin ? <a href={item.linkedin} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">{item.linkedin}</a> : "N/A"}</span>
                                                </div>
                                                <div className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                                    {item.created_at ? new Date(item.created_at).toLocaleString() : "Unknown date"}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    
                    {tab === "contact" && (
                        <div className="overflow-x-auto min-h-[400px]">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 text-xs uppercase tracking-wider">
                                    <tr>
                                        <th className="p-4 font-semibold">Contact Details</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {contacts.length === 0 ? (
                                        <tr><td className="p-8 text-center text-gray-500">No submissions found.</td></tr>
                                    ) : contacts.map((item, i) => (
                                        <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="p-4 sm:p-5 flex flex-col gap-2">
                                                <div className="flex justify-between items-start">
                                                    <div className="font-semibold text-base text-gray-900">
                                                        {item.name} <a href={`mailto:${item.email}`} className="font-normal text-blue-600 hover:underline">({item.email})</a>
                                                    </div>
                                                    <span className="px-2.5 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-100">
                                                        {item.contributor_type}
                                                    </span>
                                                </div>
                                                <div className="text-gray-700 bg-white border border-gray-100 shadow-sm p-3.5 rounded-lg mt-2 whitespace-pre-wrap leading-relaxed">
                                                    {item.message}
                                                </div>
                                                <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                                    {item.created_at ? new Date(item.created_at).toLocaleString() : "Unknown date"}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    
                    {tab === "newsletter" && (
                        <div className="overflow-x-auto min-h-[400px]">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 text-xs uppercase tracking-wider">
                                    <tr>
                                        <th className="p-4 font-semibold w-2/3">Email Address</th>
                                        <th className="p-4 font-semibold">Date Registered</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {newsletters.length === 0 ? (
                                        <tr><td colSpan={2} className="p-8 text-center text-gray-500">No subscriptions found.</td></tr>
                                    ) : newsletters.map((item, i) => (
                                        <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="p-4 text-gray-800 font-medium">{item.email}</td>
                                            <td className="p-4 text-gray-500 text-sm">
                                                {item.created_at ? new Date(item.created_at).toLocaleString() : "Unknown"}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
