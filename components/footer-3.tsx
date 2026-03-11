import Link from 'next/link'
import { Logo } from '@/components/logo'

const links = [
    { label: 'Home', href: '/' },
    { label: 'Research', href: '#' },
    { label: 'Model', href: '/white-paper' },
    { label: 'Cloud', href: '#' },
    { label: 'Contact', href: '/contact' },
]

export default function Footer() {
    return (
        <footer className="bg-background @container py-12">
            <div className="mx-auto max-w-2xl px-6">
                <div className="border-y py-8">
                    <div className="@xl:flex-row @xl:items-center flex flex-col gap-6">
                        <Link
                            href="/"
                            aria-label="home">
                            <Logo className="h-5 w-fit" />
                        </Link>
                        <nav className="@xl:ml-auto flex flex-wrap gap-x-6 gap-y-2">
                            {links.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
                <div className="@xl:flex-row @xl:justify-between flex flex-col-reverse gap-4 pt-8">
                    <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} AruraH.</p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                            Terms of Service
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
