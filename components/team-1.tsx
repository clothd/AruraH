import Image from 'next/image'

const members = [
    {
        avatar: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2754&auto=format&fit=crop',
        name: 'Developers',
        role: 'Engineering & Community',
        bio: 'Contribute to the open-source hospitality core.',
    },
    {
        avatar: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=2873&auto=format&fit=crop',
        name: 'Hoteliers',
        role: 'Hospitality Experts',
        bio: 'Join our pilot program and help us refine empathy.',
    },
    {
        avatar: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop',
        name: 'Partners',
        role: 'Sponsorship',
        bio: 'Sponsor a more human future for travel.',
    },
]

export default function Team() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-4xl px-6">
                <div className="space-y-4 text-center">
                    <h2 className="text-balance font-serif text-4xl font-medium">The Finishing Touch</h2>
                    <p className="text-muted-foreground text-balance max-w-2xl mx-auto">The technical architecture is complete. Now, we are giving our AI a heart. We have officially moved from the development phase to <strong>The Mentorship Stage</strong>. We are currently working side-by-side with veteran hoteliers and hospitality experts to train our model in the nuances of empathy, the art of de-escalation, and the 'sixth sense' of service that only a human knows. We aren't just building a tool; we are raising a digital colleague.</p>

                    <h3 className="font-serif text-3xl font-medium mt-16 pt-8 block">Get Involved</h3>
                </div>
                <div className="mt-12 grid sm:grid-cols-3 gap-6 text-sm">
                    {members.map((member, index) => (
                        <div
                            key={index}
                            className="bg-card border rounded-2xl p-6 shadow-sm flex flex-col items-center text-center gap-6 transition-all hover:shadow-md">
                            <div className="relative size-32 rounded-full overflow-hidden shadow-sm border border-foreground/10">
                                <Image
                                    src={member.avatar}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <div>
                                    <p className="text-foreground text-xl font-medium">{member.name}</p>
                                    <p className="text-primary text-sm font-medium mt-1">{member.role}</p>
                                </div>

                                <p className="text-muted-foreground text-sm mt-2">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
