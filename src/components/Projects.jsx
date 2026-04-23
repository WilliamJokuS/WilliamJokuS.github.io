const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack online store with cart, authentication, and Stripe payments. Built with Next.js and PostgreSQL.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    github: '#',
    live: '#',
    accentFrom: 'from-indigo-500/10',
    accentTo: 'to-violet-500/10',
    border: 'border-indigo-500/20 hover:border-indigo-500/40',
  },
  {
    title: 'Task Management App',
    description:
      'A Kanban-style productivity app with real-time collaboration powered by WebSockets.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: '#',
    live: '#',
    accentFrom: 'from-violet-500/10',
    accentTo: 'to-pink-500/10',
    border: 'border-violet-500/20 hover:border-violet-500/40',
  },
  {
    title: 'Weather Dashboard',
    description:
      'Real-time weather app with interactive charts, location search, and 7-day forecasts.',
    tags: ['React', 'OpenWeather API', 'Chart.js'],
    github: '#',
    live: '#',
    accentFrom: 'from-cyan-500/10',
    accentTo: 'to-blue-500/10',
    border: 'border-cyan-500/20 hover:border-cyan-500/40',
  },
  {
    title: 'Portfolio Website',
    description:
      "The very site you're looking at. Designed and built from scratch with React and Tailwind CSS.",
    tags: ['React', 'Vite', 'Tailwind CSS'],
    github: '#',
    live: '#',
    accentFrom: 'from-emerald-500/10',
    accentTo: 'to-teal-500/10',
    border: 'border-emerald-500/20 hover:border-emerald-500/40',
  },
  {
    title: 'Blog Engine',
    description:
      'A CMS-powered blog with markdown support, SEO optimization, and an RSS feed.',
    tags: ['Next.js', 'MDX', 'Contentlayer'],
    github: '#',
    live: '#',
    accentFrom: 'from-orange-500/10',
    accentTo: 'to-red-500/10',
    border: 'border-orange-500/20 hover:border-orange-500/40',
  },
  {
    title: 'CLI Dev Tool',
    description:
      'A command-line tool that automates project scaffolding with opinionated defaults.',
    tags: ['Node.js', 'TypeScript', 'Commander.js'],
    github: '#',
    live: null,
    accentFrom: 'from-slate-600/10',
    accentTo: 'to-gray-600/10',
    border: 'border-slate-600/20 hover:border-slate-500/40',
  },
]

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            A selection of things I&apos;ve built. Each project is a unique solution to a real problem.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group rounded-xl p-6 bg-gradient-to-br ${project.accentFrom} ${project.accentTo} border ${project.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20`}
            >
              {/* Preview placeholder */}
              <div className="w-full h-36 rounded-lg bg-slate-800/70 mb-5 flex items-center justify-center text-slate-600 text-xs tracking-widest uppercase">
                Preview
              </div>

              <h3 className="text-base font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">{project.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-slate-800/80 text-gray-400 rounded-md border border-slate-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-5">
                <a
                  href={project.github}
                  className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors"
                  aria-label={`${project.title} source code`}
                >
                  <GitHubIcon />
                  Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors"
                    aria-label={`${project.title} live demo`}
                  >
                    <ExternalLinkIcon />
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
