'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronRight, Send, ArrowRight } from 'lucide-react'

export function NewsletterInput({ 
    buttonText = "Get started",
    variant = "default",
    size = "sm",
    className = ""
}: { 
    buttonText?: string,
    variant?: "default" | "outline" | "ghost" | "link" | "secondary" | "destructive",
    size?: "default" | "sm" | "lg" | "icon",
    className?: string
}) {
    const [isOpen, setIsOpen] = useState(false)
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return
        setStatus("submitting")
        // Simulate API call
        setTimeout(() => {
            setStatus("success")
            setTimeout(() => {
                setIsOpen(false)
                setStatus("idle")
                setEmail('')
            }, 2000)
        }, 1000)
    }

    return (
        <div className={`relative flex items-center h-9 ${className}`}>
            <AnimatePresence mode="wait" initial={false}>
                {!isOpen ? (
                    <motion.div
                        key="button"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Button
                            variant={variant}
                            size={size}
                            onClick={() => setIsOpen(true)}
                            className="gap-1 pr-1"
                        >
                            <span>{buttonText}</span>
                            <ChevronRight className="opacity-50" />
                        </Button>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        initial={{ opacity: 0, width: 120, scale: 0.95 }}
                        animate={{ opacity: 1, width: 250, scale: 1 }}
                        exit={{ opacity: 0, width: 120, scale: 0.95 }}
                        transition={{ duration: 0.3, type: "spring", bounce: 0 }}
                        onSubmit={handleSubmit}
                        className="relative flex w-full items-center"
                    >
                        <Input
                            type="email"
                            placeholder="Enter email..."
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            className="h-9 w-full rounded-full pr-10 text-sm focus-visible:ring-1"
                            autoFocus
                            disabled={status !== "idle"}
                        />
                        <div className="absolute right-0.5 z-10">
                            <Button 
                                type="submit" 
                                size="icon" 
                                variant="ghost" 
                                className="size-8 rounded-full hover:bg-transparent"
                                disabled={status !== "idle" || !email}
                            >
                                {status === "success" ? (
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                                        <svg className="size-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </motion.div>
                                ) : (
                                    <ArrowRight className="size-4 text-muted-foreground transition-colors hover:text-foreground" />
                                )}
                            </Button>
                        </div>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    )
}
