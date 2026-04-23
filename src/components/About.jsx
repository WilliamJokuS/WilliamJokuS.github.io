import profileImage from '../../pp.jpg'

const stats = [
  { value: '0+', label: 'Projects' },
  { value: '67+', label: 'Years Coding' },
  { value: '6767+', label: 'Technologies' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Profile image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={profileImage}
                alt="William Joku"
                className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover border border-indigo-500/20"
              />
              {/* Decorative accent boxes */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-violet-600/10 border border-violet-500/20" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-lg bg-indigo-600/10 border border-indigo-500/20" />
            </div>
          </div>

          {/* Text content */}
          <div>
            <p className="text-indigo-400 text-sm font-medium tracking-[0.2em] uppercase mb-3">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
              Crafting digital experiences{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                with purpose
              </span>
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I&apos;m a third-year Computer Science and Engineering student with a passion for
                building things on the web. I enjoy working across the full
                stack — from designing clean UIs to engineering scalable
                back-end systems.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me sleeping and push rank in Mobile Legends: Bang Bang. 
                I&apos;m a professional procrastinator, but I always get the job done on time. I&apos;m currently working on my acccount to Mythical Glory, so wish me luck! 
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="text-center py-4 rounded-lg bg-slate-900 border border-slate-800"
                >
                  <div className="text-2xl font-bold text-indigo-400">{value}</div>
                  <div className="text-xs text-gray-500 mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* Resume CTA */}
            <div className="mt-8">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-gray-300 hover:text-white rounded-lg transition-all duration-200 text-sm font-medium"
              >
                Download Resume
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
