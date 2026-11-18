"use client"

import React, { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import emailjs from "@emailjs/browser"
import TextInput from "@/components/globals/form/TextInput"
import Textarea from "@/components/globals/form/Textarea"
import Button from "@/components/globals/ui/Button"
import { Toast, type ToastType } from "@/components/globals/ui/Toast"
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa"

type ToastData = {
    id: number
    type: ToastType
    title: string
    message?: string
}

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const [isLoading, setIsLoading] = useState(false)
    const [toast, setToast] = useState<ToastData | null>(null)

    const notify = (type: ToastType, title: string, message?: string) =>
        setToast({ id: Date.now(), type, title, message })

    const closeToast = useCallback(() => setToast(null), [])

    useEffect(() => {
        const key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

        if (key) {
            emailjs.init(key)
        }
    }, [])

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.subject.trim() ||
            !formData.message.trim()
        ) {
            notify(
                "error",
                "Some fields are empty",
                "Fill in your name, email, subject and message, then send again."
            )
            return
        }

        setIsLoading(true)

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: "joelitserver@gmail.com",
                }
            )

            notify(
                "success",
                "Message sent",
                "Thanks for reaching out. I'll reply to your email soon."
            )

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            })
        } catch (error: unknown) {
            console.error("EmailJS error:", error)

            const errMsg =
                error instanceof Error
                    ? error.message
                    : typeof error === "object" &&
                      error !== null &&
                      "text" in error
                    ? (error as { text: string }).text
                    : "Check your connection and try again."

            notify("error", "Message not sent", errMsg)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="w-full bg-[#CCE8E0] dark:bg-primaryDarklight py-12 px-4 text-primaryDark dark:text-primaryLight">
            {/* key remounts the toast so a new notification restarts its timer */}
            {toast && (
                <Toast
                    key={toast.id}
                    type={toast.type}
                    title={toast.title}
                    message={toast.message}
                    duration={toast.type === "error" ? 7000 : 5000}
                    onClose={closeToast}
                />
            )}

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">

                {/* Left Image */}

                <div className="relative w-full md:w-1/2 h-[500px] md:h-auto">
                    <Image
                        src="/images/contact.jpg"
                        alt="Contact"
                        fill
                        sizes="(max-width:768px)100vw,50vw"
                        className="object-cover rounded-tr-3xl md:rounded-br-none rounded-bl-3xl"
                    />
                </div>

                {/* Right */}

                <div className="w-full md:w-1/2 p-8 shadow-md bg-[#fdfdfd] dark:bg-[#0b1a15] flex flex-col">

                    <h2 className="text-3xl md:text-4xl font-serif">
                        Contact Me
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 mt-6"
                    >
                        <TextInput
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            type="text"
                            className="border-0 border-b border-gray-400 dark:border-neutral-600 rounded-none bg-transparent focus:ring-0 focus:border-primaryDark dark:focus:border-primaryLight"
                        />

                        <TextInput
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            className="border-0 border-b border-gray-400 dark:border-neutral-600 rounded-none bg-transparent focus:ring-0 focus:border-primaryDark dark:focus:border-primaryLight"
                        />

                        <TextInput
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            type="text"
                            className="border-0 border-b border-gray-400 dark:border-neutral-600 rounded-none bg-transparent focus:ring-0 focus:border-primaryDark dark:focus:border-primaryLight"
                        />

                        <Textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full border-0 border-b border-gray-400 dark:border-neutral-600 rounded-none bg-transparent focus:ring-0 focus:border-primaryDark dark:focus:border-primaryLight"
                        />

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="px-6 py-2 bg-primaryDark dark:bg-primaryLight text-white dark:text-primaryDark rounded-full hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? "Sending..." : "Send Message"}
                        </Button>
                    </form>

                    <div className="mt-8 space-y-3 text-sm">
                        <p>
                            <span className="font-semibold">
                                Email:
                            </span>{" "}
                            adeyojuibukunoluwa1@gmail.com
                        </p>

                        <p>
                            <span className="font-semibold">
                                Location:
                            </span>{" "}
                            Nigeria · Available for remote work worldwide.
                        </p>

                        <div className="flex gap-4 text-xl pt-2">

                            <a
                                href="https://linkedin.com/in/joeteck"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="hover:text-[#1BBB8B] transition"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://www.facebook.com/joel.adeyoju/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="hover:text-[#1BBB8B] transition"
                            >
                                <FaFacebook />
                            </a>

                            <a
                                href="https://www.instagram.com/joetekz_hub"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="hover:text-[#1BBB8B] transition"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://x.com/AdeyojuIbukuno1"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X"
                                className="hover:text-[#1BBB8B] transition"
                            >
                                <FaTwitter />
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}