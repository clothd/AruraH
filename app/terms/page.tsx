import React from 'react'

export default function TermsPage() {
    return (
        <div className="mx-auto max-w-3xl px-6 py-32">
            <h1 className="text-4xl font-serif mb-6">Terms of Service</h1>
            <div className="propose prose-zinc dark:prose-invert">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <div className="space-y-6 mt-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
                        <p className="text-muted-foreground">By accessing and using AruraH, you accept and agree to be bound by the terms and provision of this agreement.</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">2. Use License</h2>
                        <p className="text-muted-foreground">Permission is granted to temporarily download one copy of the materials on AruraH's website for personal, non-commercial transitory viewing only.</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">3. Disclaimer</h2>
                        <p className="text-muted-foreground">The materials on AruraH's website are provided on an 'as is' basis.</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">4. Governing Law</h2>
                        <p className="text-muted-foreground">These terms and conditions are governed by and construed in accordance with the laws.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
