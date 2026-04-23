const projects = [
  {
    title: 'Multi-modal AI Geolocation System',
    description:
      'A full-stack website that leverages AI for geolocation services. Built with Next.js and PostgreSQL.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com/geoseeer/GeoSeer',
    live: 'https://geoseeer.com',
    accentFrom: 'from-indigo-500/10',
    accentTo: 'to-violet-500/10',
    border: 'border-indigo-500/20 hover:border-indigo-500/40',
    highlight: 'AI + map intelligence for real-time location decisions.',
  },
  {
    title: 'Task Management App',
    description:
      'A Kanban-style productivity app with real-time collaboration powered by WebSockets.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/CodyOutcast/TaskTitan',
    live: '#',
    accentFrom: 'from-violet-500/10',
    accentTo: 'to-pink-500/10',
    border: 'border-violet-500/20 hover:border-violet-500/40',
    highlight: 'Smooth collaboration pipeline with live board updates.',
  },
  {
    title: 'Tinder for Projects',
    description:
      'A project matching platform that connects developers with potential collaborators based on project interests and skills.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/CodyOutcast/Ques',
    live: '#',
    accentFrom: 'from-cyan-500/10',
    accentTo: 'to-blue-500/10',
    border: 'border-cyan-500/20 hover:border-cyan-500/40',
    highlight: 'Smart matching flow to help builders find the right team.',
  },
  {
    title: 'Traffic Detection System',
    description:
      "The very site you're looking at. Designed and built from scratch with React and Tailwind CSS.",
    tags: ['React', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/WilliamJokuS/traffic-detection',
    live: '#',
    accentFrom: 'from-emerald-500/10',
    accentTo: 'to-teal-500/10',
    border: 'border-emerald-500/20 hover:border-emerald-500/40',
    highlight: 'Computer vision focused project delivery from idea to deployment.',
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

        <div className="space-y-10">
          {projects.map((project, index) => {
            const frameFirst = index % 2 === 0

            return (
              <article
                key={project.title}
                className="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch"
              >
                <div
                  className={`rounded-2xl p-7 bg-gradient-to-br ${project.accentFrom} ${project.accentTo} border ${project.border} ${frameFirst ? 'md:order-1' : 'md:order-2'}`}
                >
                  <div className="h-full min-h-56 rounded-xl border border-slate-700/60 bg-slate-950/60 flex flex-col justify-between p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Project Frame</p>
                    <h3 className="text-2xl font-bold text-white leading-tight">{project.title}</h3>
                    <p className="text-sm text-indigo-300">{project.highlight}</p>
                  </div>
                </div>

                <div className={`${frameFirst ? 'md:order-2' : 'md:order-1'} flex flex-col justify-center`}>
                  <p className="text-gray-400 leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-slate-800/80 text-gray-400 rounded-md border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

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
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
