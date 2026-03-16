import React from 'react'

export default function PrivacyPage() {
    return (
        <div className="mx-auto max-w-3xl px-6 py-32">
            <h1 className="text-4xl font-serif mb-6">Privacy Policy</h1>
            <div className="propose prose-zinc dark:prose-invert">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <div className="space-y-6 mt-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
                        <p className="text-muted-foreground">Welcome to AruraH. We respect your privacy and are committed to protecting your personal data.</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">2. Data We Collect</h2>
                        <p className="text-muted-foreground">We may collect personal data that you provide directly to us.</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Data</h2>
                        <p className="text-muted-foreground">We use the information we collect to provide, maintain, and improve our services.</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">4. Contact Us</h2>
                        <p className="text-muted-foreground">If you have any questions about this Privacy Policy, please contact us.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
