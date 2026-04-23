import gbaImage from '../../GBA.jpg'
import cathayImage from '../../cathay.jpg'
import profileImage from '../../pp.jpg'

const achievements = [
  {
    title: 'GBA Finalist',
    image: gbaImage,
    links: [
      { label: 'View Gallery', href: '#' },
      { label: 'Read Story', href: '#' },
    ],
  },
  {
    title: 'Cathay Innovation Challenge',
    image: cathayImage,
    links: [
      { label: 'See Project', href: '#' },
      { label: 'Team Highlights', href: '#' },
    ],
  },
  {
    title: 'Campus Tech Leadership',
    image: profileImage,
    links: [
      { label: 'Activity Post', href: '#' },
      { label: 'Recognition', href: '#' },
    ],
  },
]

function LinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.828 10.172a4 4 0 015.656 5.656l-3 3a4 4 0 01-5.656-5.656m-1.172 1.172a4 4 0 01-5.656-5.656l3-3a4 4 0 115.656 5.656"
      />
    </svg>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6 bg-slate-900/25">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-indigo-400 text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Milestones
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Achievements</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Highlights from competitions, leadership, and projects that shaped my growth.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory">
          {achievements.map((achievement) => (
            <article
              key={achievement.title}
              className="min-w-[280px] md:min-w-[320px] flex-1 snap-start rounded-xl border border-slate-800 bg-slate-900 hover:border-indigo-500/40 transition-colors duration-200"
            >
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-44 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-4">{achievement.title}</h3>
                <div className="flex flex-wrap gap-4">
                  {achievement.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm text-indigo-300 hover:text-indigo-200 transition-colors"
                    >
                      <LinkIcon />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
