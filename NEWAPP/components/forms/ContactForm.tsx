'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dictionary, Locale } from '@/lib/get-dictionary'
import { Send, Loader2 } from 'lucide-react'

interface ContactFormProps {
  dict: Dictionary
  lang: Locale
}

export function ContactForm({ dict }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    company: '',
    phone: '',
    merchandise: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // Simulation d'envoi (remplacer par vraie API)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setIsSubmitted(true)
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        company: '',
        phone: '',
        merchandise: '',
        message: ''
      })
    } catch (err) {
      setError(dict.contact.form.error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="border-noveo-border shadow-xl">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-poppins font-semibold text-noveo-primary mb-2">
            {dict.contact.form.success}
          </h3>
          <p className="text-noveo-text font-inter mb-6">
            {dict.contact.form.successMessage}
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="noveo_accent"
          >
            {dict.contact.form.anotherMessage}
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-noveo-border shadow-xl">
      <CardHeader className="bg-gradient-to-r from-noveo-primary/5 to-noveo-secondary/5">
        <CardTitle className="text-2xl font-poppins font-bold text-noveo-primary">
          {dict.contact.form.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Prénom et Nom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstname" className="block text-sm font-poppins font-medium text-noveo-primary mb-2">
                {dict.contact.form.firstname} *
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-noveo-border rounded-lg focus:outline-none focus:ring-2 focus:ring-noveo-accent focus:border-transparent font-inter"
                placeholder={dict.contact.form.placeholders.firstname}
              />
            </div>
            <div>
              <label htmlFor="lastname" className="block text-sm font-poppins font-medium text-noveo-primary mb-2">
                {dict.contact.form.lastname} *
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-noveo-border rounded-lg focus:outline-none focus:ring-2 focus:ring-noveo-accent focus:border-transparent font-inter"
                placeholder={dict.contact.form.placeholders.lastname}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-poppins font-medium text-noveo-primary mb-2">
              {dict.contact.form.email} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-noveo-border rounded-lg focus:outline-none focus:ring-2 focus:ring-noveo-accent focus:border-transparent font-inter"
              placeholder={dict.contact.form.placeholders.email}
            />
          </div>

          {/* Entreprise et Téléphone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="company" className="block text-sm font-poppins font-medium text-noveo-primary mb-2">
                {dict.contact.form.company} *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-noveo-border rounded-lg focus:outline-none focus:ring-2 focus:ring-noveo-accent focus:border-transparent font-inter"
                placeholder={dict.contact.form.placeholders.company}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-poppins font-medium text-noveo-primary mb-2">
                {dict.contact.form.phone}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-noveo-border rounded-lg focus:outline-none focus:ring-2 focus:ring-noveo-accent focus:border-transparent font-inter"
                placeholder={dict.contact.form.placeholders.phone}
              />
            </div>
          </div>

          {/* Type de marchandise */}
          <div>
            <label htmlFor="merchandise" className="block text-sm font-poppins font-medium text-noveo-primary mb-2">
              {dict.contact.form.merchandise}
            </label>
            <select
              id="merchandise"
              name="merchandise"
              value={formData.merchandise}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-noveo-border rounded-lg focus:outline-none focus:ring-2 focus:ring-noveo-accent focus:border-transparent font-inter"
            >
              <option value="">{dict.contact.form.placeholders.merchandise}</option>
              <option value="general">{dict.contact.form.merchandiseOptions.general}</option>
              <option value="dangerous">{dict.contact.form.merchandiseOptions.dangerous}</option>
              <option value="aerospace">{dict.contact.form.merchandiseOptions.aerospace}</option>
              <option value="automotive">{dict.contact.form.merchandiseOptions.automotive}</option>
              <option value="energy">{dict.contact.form.merchandiseOptions.energy}</option>
              <option value="wine">{dict.contact.form.merchandiseOptions.wine}</option>
              <option value="medical">{dict.contact.form.merchandiseOptions.medical}</option>
              <option value="ecommerce">{dict.contact.form.merchandiseOptions.ecommerce}</option>
              <option value="other">{dict.contact.form.merchandiseOptions.other}</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-poppins font-medium text-noveo-primary mb-2">
              {dict.contact.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className="w-full px-4 py-3 border border-noveo-border rounded-lg focus:outline-none focus:ring-2 focus:ring-noveo-accent focus:border-transparent font-inter resize-none"
              placeholder={dict.contact.form.placeholders.message}
            />
          </div>

          {/* Error message */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 font-inter text-sm">{error}</p>
            </div>
          )}

          {/* Submit button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="noveo_accent"
            size="lg"
            className="w-full"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                {dict.contact.form.submitting}
              </>
            ) : (
              <>
                {dict.contact.form.submit}
                <Send className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>

          <p className="text-xs text-noveo-text font-inter text-center">
            {dict.contact.form.requiredFields}
          </p>
        </form>
      </CardContent>
    </Card>
  )
} 