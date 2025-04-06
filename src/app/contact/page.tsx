// src/app/contact/page.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react"

export default function ContactPage() {
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
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setSubmitError("")
    
    // Simulate form submission
    try {
      // In a real application, you would send this data to your backend
      console.log("Form data:", formData)
      
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setSubmitError("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <div className="container py-12 md:py-20">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h1>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you!
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mr-4 mt-1 rounded-full bg-primary/10 p-2">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:a01642529@tec.mx" className="text-muted-foreground hover:text-primary">
                  a01642529@tec.mx
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 mt-1 rounded-full bg-primary/10 p-2">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-muted-foreground">Guadalajara, Mexico</p>
              </div>
            </div>
            
            <div>
              <h3 className="mb-3 font-semibold">Connect with me</h3>
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
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-100 p-3 text-slate-700 transition-colors hover:bg-gray-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a 
                  href="mailto:a01642529@tec.mx"
                  className="rounded-full bg-gray-100 p-3 text-slate-700 transition-colors hover:bg-gray-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <h2 className="mb-4 text-2xl font-bold">Working Hours</h2>
            <p className="text-muted-foreground">
              Monday - Friday: 9:00 AM - 6:00 PM (CST)<br />
              Weekend: Available for urgent matters
            </p>
          </div>
        </div>
        
        <div>
          <h2 className="mb-6 text-2xl font-bold">Send Me a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Your Name
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
                Your Email
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
                Subject
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
                Message
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
                Your message has been sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitError && (
              <div className="rounded-md bg-red-50 p-4 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                {submitError}
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
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}