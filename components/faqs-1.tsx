'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

const faqItems = [
    {
        id: 'item-1',
        question: 'High-EQ Complaint Management',
        answer: 'Our model detects frustration or subtle disappointment in text and voice, adjusting its tone. Trained on the HEARD Protocol ensuring every guest feels valued, it empowers the AI to offer pre-approved "Service Recovery" options.',
    },
    {
        id: 'item-2',
        question: 'Operational Intelligence',
        answer: "Features include Smart Priority Routing, Shift Handover Summaries, and Housekeeping Management to streamline hotel operations.",
    },
    {
        id: 'item-3',
        question: 'Cultural & Linguistic Fluency',
        answer: "Nuanced Translation goes beyond simple translation—it understands cultural etiquette, formal/informal language, and addresses guests in 100+ languages. It's also trained to act as a Local Expert for your specific neighborhood.",
    },
]

export default function FAQs() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <div className="text-center">
                    <h2 className="text-balance font-serif text-4xl font-medium">Additional Capabilities</h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance">Explore more of what makes AruraH the ultimate digital hotelier.</p>
                </div>
                <Card
                    variant="outline"
                    className="mt-12 p-2">
                    <Accordion
                        type="single"
                        collapsible>
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-b-0 px-4">
                                <AccordionTrigger className="cursor-pointer py-4 text-sm font-medium hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-muted-foreground pb-2 text-sm">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Card>
                <p className="text-muted-foreground mt-6 text-center text-sm">
                    Still have questions?{' '}
                    <Link
                        href="/contact"
                        className="text-primary font-medium hover:underline">
                        Contact the team
                    </Link>
                </p>
            </div>
        </section>
    )
}
