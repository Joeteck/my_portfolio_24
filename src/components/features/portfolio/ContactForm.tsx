"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import emailjs from "@emailjs/browser"
import TextInput from "@/components/globals/form/TextInput"
import Textarea from "@/components/globals/form/Textarea"
import Button from "@/components/globals/ui/Button"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [errorMsg, setErrorMsg] = useState("")

    useEffect(() => {
        const key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        console.log("EmailJS KEY:", key) // remove after confirming
        if (key) {
            emailjs.init(key)
        }
    }, [])

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("loading")
        setErrorMsg("")

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: "joelitserver@gmail.com",
                }
            )

            setStatus("success")
            setFormData({ name: "", email: "", message: "" })
        } catch (error: unknown) {
            console.error("EmailJS error:", error)
            setStatus("error")
            const errMsg =
                error instanceof Error
                    ? error.message
                    : typeof error === "object" &&
                      error !== null &&
                      "text" in error
                    ? (error as { text: string }).text
                    : "Failed to send message. Please try again."
            setErrorMsg(errMsg)
        }
    }

    return (
        <section className="w-full bg-[#CCE8E0] dark:bg-primaryDarklight py-12 px-4 text-primaryDark dark:text-primaryLight">
            <div className="max-w-5xl mx-auto bg-transparent overflow-hidden flex flex-col md:flex-row gap-10 my-0">

                {/* Left - Image */}
                <div className="relative w-full md:w-1/2 h-[500px] md:h-auto">
                    <Image
                        src="/images/contact.jpg"
                        alt="Contact"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover rounded-tr-3xl md:rounded-br-none rounded-bl-3xl"
                    />
                </div>

                {/* Right - Content */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-between shadow-md bg-[#fdfdfd] dark:bg-[#0b1a15]">
                    <h2 className="text-3xl md:text-4xl font-serif text-primaryDark dark:text-primaryLight">
                        Contact Us
                    </h2>

                    {status === "success" && (
                        <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-sm">
                            ✅ Message sent! I will get back to you soon.
                        </div>
                    )}

                    {status === "error" && (
                        <div className="mt-4 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg text-sm">
                            ❌ {errorMsg}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6 mt-6">
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
                            placeholder="E-mail"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            className="border-0 border-b border-gray-400 dark:border-neutral-600 rounded-none bg-transparent focus:ring-0 focus:border-primaryDark dark:focus:border-primaryLight"
                        />
                        <Textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                            className="w-full border-0 border-b border-gray-400 dark:border-neutral-600 rounded-none bg-transparent focus:ring-0 focus:border-primaryDark dark:focus:border-primaryLight"
                        />
                        <Button
                            type="submit"
                            disabled={status === "loading"}
                            className="px-6 py-2 bg-primaryDark dark:bg-primaryLight text-white dark:text-primaryDark rounded-full hover:opacity-90 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "loading" ? "Sending..." : "Contact Us"}
                        </Button>
                    </form>

                    <div className="mt-8 space-y-3 text-sm">
                        <p>
                            <span className="font-semibold">Contact:</span>{" "}
                            adeyojuibukunoluwa1@gmail.com
                        </p>
                        <p>
                            <span className="font-semibold">Based in:</span> Nigeria; Available
                            for remote, worldwide.
                        </p>
                        <div className="flex gap-4 text-lg mt-2">
                            <a
                                href="https://linkedin.com/in/joeteck"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-[#1BBB8B] transition"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://www.facebook.com/joel.adeyoju/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-[#1BBB8B] transition"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href="https://www.instagram.com/joetekz_hub"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-[#1BBB8B] transition"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://x.com/AdeyojuIbukuno1"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-[#1BBB8B] transition"
                                aria-label="Twitter"
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