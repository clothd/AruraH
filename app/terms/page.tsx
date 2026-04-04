import React from 'react';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default async function TermsPage() {
    const filePath = path.join(process.cwd(), 'terms.md');
    const content = fs.readFileSync(filePath, 'utf8');

    return (
        <div className="mx-auto max-w-3xl px-6 py-32">
            <div className="prose prose-zinc dark:prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content}
                </ReactMarkdown>
            </div>
        </div>
    );
}
