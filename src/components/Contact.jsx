import { useState } from 'react'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/williamjokus',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/williamjkkkk',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:hello@williamjokus@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
   {
    name: 'Instagram',
    href: 'https://instagram.com/williamjkkkk',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  }
]

const inputClass =
  'w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-gray-100 placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 transition-colors text-sm'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: integrate with Formspree, EmailJS, or your own API
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-28 px-6 bg-slate-900/40">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: info & socials */}
          <div className="flex flex-col justify-center gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Let&apos;s work together
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I&apos;m currently open to freelance work and interesting
                collaborations. Whether it&apos;s a full project or just a quick
                question, feel free to reach out.
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase tracking-[0.15em] mb-4">
                Find me on
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ name, href, icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-indigo-600 text-gray-400 hover:text-white border border-slate-700 hover:border-indigo-500 transition-all duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form or success state */}
          {submitted ? (
            <div className="flex flex-col items-center justify-center rounded-xl bg-slate-900 border border-slate-800 p-10 text-center gap-3">
              <div className="w-14 h-14 rounded-full bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Message Sent!</h3>
              <p className="text-gray-400 text-sm">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-xl bg-slate-900 border border-slate-800 p-6 space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors duration-200 text-sm hover:shadow-lg hover:shadow-indigo-500/20"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
