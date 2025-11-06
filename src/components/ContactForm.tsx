"use client"

import { useState, useRef } from "react"
import { Button } from "./ui/Button"
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react"
import emailjs from '@emailjs/browser'
import { useLanguage } from "@/contexts/LanguageContext"

export default function ContactForm() {
  const { data } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return;

    setIsSubmitting(true)
    setSubmitSuccess(false)
    setSubmitError("")

    try {
      const result = await emailjs.sendForm(
        'service_1vvdr8z',
        'template_fvt4mlb',
        formRef.current,
        'PG3s5S25cIVZe_CcM'
      );

      console.log('Email sent successfully:', result.text);

      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitError("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="container py-12 md:py-20">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{data.contact.title}</h1>
          <p className="mt-4 text-muted-foreground md:text-lg">
            {data.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold">{data.contact.getInTouch.title}</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1 rounded-full bg-primary/10 p-2">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{data.contact.info.email}</h3>
                  <a href="mailto:aypierre223@gmail.com" className="text-muted-foreground hover:text-primary">
                    aypierre223@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 rounded-full bg-primary/10 p-2">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{data.contact.info.location}</h3>
                  <p className="text-muted-foreground">Guadalajara, Mexico</p>
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-semibold">{data.contact.socialConnect}</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Aaron3312"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gray-100 p-3 text-slate-700 transition-colors hover:bg-gray-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aaron3312"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gray-100 p-3 text-slate-700 transition-colors hover:bg-gray-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:aypierre223@gmail.com"
                    className="rounded-full bg-gray-100 p-3 text-slate-700 transition-colors hover:bg-gray-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-6">
              <h2 className="mb-4 text-xl font-bold flex items-center gap-2">
                {data.contact.availabilityDetails.title}
              </h2>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                  {data.contact.availabilityDetails.status}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">{data.contact.availabilityDetails.weekdays}</span>
                  <span className="text-sm text-muted-foreground">{data.contact.availabilityDetails.weekdaysTime}</span>
                </div>
                <div className="h-px bg-slate-200 dark:bg-slate-700"></div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">{data.contact.availabilityDetails.weekend}</span>
                  <span className="text-sm text-muted-foreground">{data.contact.availabilityDetails.weekendNote}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-bold">{data.contact.getInTouch.description}</h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  {data.contact.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-slate-200 bg-white px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-950 dark:focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  {data.contact.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-slate-200 bg-white px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-950 dark:focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                  {data.contact.subjectLabel}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-slate-200 bg-white px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-950 dark:focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  {data.contact.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full rounded-md border border-slate-200 bg-white px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-950 dark:focus:border-primary"
                ></textarea>
              </div>

              {submitSuccess && (
                <div className="rounded-md bg-green-50 p-4 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  {data.contact.successMessage}
                </div>
              )}

              {submitError && (
                <div className="rounded-md bg-red-50 p-4 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                  {data.contact.errorMessage}
                </div>
              )}

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <>
                    <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    {data.contact.sending}
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    {data.contact.sendButton}
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
