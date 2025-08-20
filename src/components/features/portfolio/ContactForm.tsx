"use client"

import React, { useState } from "react"
import TextInput from "@/components/globals/form/TextInput"
import Textarea from "@/components/globals/form/Textarea"

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    return (
        <div className="w-full max-w-md mx-auto p-6 rounded-lg bg-white dark:bg-[#04130d] shadow-lg">
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Name */}
            <TextInput
            name="name" // ✅ must match formData key
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            className="border-gray-300 dark:border-neutral-700"
            />

            {/* Email */}
            <TextInput
            name="email" // ✅ must match formData key
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className="border-gray-300 dark:border-neutral-700"
            />

            {/* Message */}
            <Textarea
            id="message"
            name="message" // ✅ must match formData key
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            />

            {/* Submit */}
            <button
            type="submit"
            className="w-full py-2 rounded-md bg-[#1BBB8B] text-white font-medium hover:bg-[#159a73] transition"
            >
            Send Message
            </button>
        </form>
        </div>
    )
}
