'use client'

import { useState } from 'react'
import { Dictionary, Locale } from '@/lib/get-dictionary'

interface ContactFormProps {
  dict: Dictionary
  lang: Locale
}

export function ContactForm({ dict, lang }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    company: '',
    phone: '',
    merchandise: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        company: '',
        phone: '',
        merchandise: '',
        message: '',
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-off-white rounded-lg p-8">
      <h3 className="text-h3 font-display font-semibold text-noveo-blue mb-6">
        {dict.contact.form.title}
      </h3>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          {dict.contact.form.success}
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {dict.contact.form.error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstname" className="block text-sm font-medium text-dark-gray mb-2">
              {dict.contact.form.firstname}
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-noveo-teal"
            />
          </div>
          
          <div>
            <label htmlFor="lastname" className="block text-sm font-medium text-dark-gray mb-2">
              {dict.contact.form.lastname}
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-noveo-teal"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark-gray mb-2">
            {dict.contact.form.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-noveo-teal"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-dark-gray mb-2">
              {dict.contact.form.company}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-noveo-teal"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-dark-gray mb-2">
              {dict.contact.form.phone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-noveo-teal"
            />
          </div>
        </div>

        <div>
          <label htmlFor="merchandise" className="block text-sm font-medium text-dark-gray mb-2">
            {dict.contact.form.merchandise}
          </label>
          <input
            type="text"
            id="merchandise"
            name="merchandise"
            value={formData.merchandise}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-noveo-teal"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-dark-gray mb-2">
            {dict.contact.form.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-noveo-teal"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? dict.contact.form.submitting : dict.contact.form.submit}
        </button>
      </form>
    </div>
  )
} 