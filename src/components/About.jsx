const stats = [
  { value: '20+', label: 'Projects' },
  { value: '3+', label: 'Years Coding' },
  { value: '5+', label: 'Technologies' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-600/30 to-violet-600/30 border-2 border-indigo-500/40 flex items-center justify-center text-4xl font-bold text-indigo-300">
                  WJ
                </div>
              </div>
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
                I&apos;m a third-year Computer Science student with a passion for
                building things on the web. I enjoy working across the full
                stack — from designing clean UIs to engineering scalable
                back-end systems.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to open-source projects, or diving
                into a good book on software architecture.
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
