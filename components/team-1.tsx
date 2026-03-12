import Image from 'next/image'

const members = [
    {
        avatar: 'https://media.licdn.com/dms/image/v2/D5603AQGjdjJrqv7ZNQ/profile-displayphoto-crop_800_800/B56Zzfg_lnH0AQ-/0/1773276495324?e=1775088000&v=beta&t=NPJXgQkRkMWl9PbWKKsUk3pc7sIt0WxOINGkMIaFbR8',
        name: 'Stefan Djordjevic',
        role: 'CEO & Co-Founder',
        bio: 'Leading the vision for AruraH to empower hoteliers with empathetic AI, bridging the gap between technology and genuine human connection.',
    },
    {
        avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQHozWcPOZC2FQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712410917968?e=1775088000&v=beta&t=pFylyztfJeAMnLMwA_1Zlkunv_WivElfRK-PjOlh9pk',
        name: 'José Carvalho',
        role: 'CTO & Co-Founder',
        bio: 'Currently serving as a Senior Systems Engineer at Authex Inc., contributing to advancements in AI/ML and Natural Language Processing while integrating blockchain and cryptocurrency technologies into innovative solutions.',
    },
    {
        avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQG42Ehvfj-wBw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708270649533?e=1775088000&v=beta&t=x2mh2pAAslnAZQBmLIe0uYQz2J_UTcUyv1ueDdL2FBE',
        name: 'Devain Sharma',
        role: 'Senior Engineer',
        bio: 'A human being currently residing on Earth - Orion arm - Milky way - Local group of galaxies.',
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
