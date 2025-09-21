import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">User Story Collection</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive guide for implementing the Team Stand-up Dashboard application
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <NavigationCard
            href="/user-personas"
            title="User Personas"
            description="Detailed profiles of target users with goals, frustrations, and tech-savvy levels"
            icon="👥"
            color="bg-blue-500"
          />
          <NavigationCard
            href="/user-stories"
            title="User Stories"
            description="Complete collection of user stories organized by priority with acceptance criteria"
            icon="📝"
            color="bg-green-500"
          />
          <NavigationCard
            href="/user-journey"
            title="User Journey"
            description="Journey maps showing how users interact with the system and their pain points"
            icon="🗺️"
            color="bg-purple-500"
          />
          <NavigationCard
            href="/implementation"
            title="Implementation"
            description="4-phase roadmap with technical considerations and success metrics"
            icon="🚀"
            color="bg-orange-500"
          />
        </div>

        {/* New Research Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 border">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">📊 Research & Moods</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore user research findings, visual direction, and design principles for the project
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              href="/research-moods"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <span className="text-xl">🔍</span>
              View Research & Moods
              <span className="text-sm bg-white/20 px-2 py-1 rounded">NEW</span>
            </Link>
          </div>
        </div>

        {/* Quick Overview */}
        <div className="bg-white rounded-lg shadow-md p-6 border">
          <h3 className="text-xl font-bold mb-4 text-slate-900">Project Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-slate-700 mb-2">Must-Have Features</h4>
              <ul className="text-slate-600 space-y-1">
                <li>• Daily stand-up submission</li>
                <li>• Team dashboard feed</li>
                <li>• Blockers overview</li>
                <li>• User authentication</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700 mb-2">Key User Types</h4>
              <ul className="text-slate-600 space-y-1">
                <li>• Software Developers</li>
                <li>• Scrum Masters</li>
                <li>• Project Managers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700 mb-2">Implementation Timeline</h4>
              <ul className="text-slate-600 space-y-1">
                <li>• Phase 1: Core MVP (2-3 weeks)</li>
                <li>• Phase 2: Enhanced (1-2 weeks)</li>
                <li>• Phase 3: Nice-to-Have (2-3 weeks)</li>
                <li>• Phase 4: Future (3-4 weeks)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavigationCard({
  href,
  title,
  description,
  icon,
  color
}: {
  href: string
  title: string
  description: string
  icon: string
  color: string
}) {
  return (
    <Link
      href={href}
      className="bg-white rounded-lg shadow-md p-6 border hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group"
    >
      <div className="flex flex-col h-full">
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
          <span className="text-xl text-white">{icon}</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed flex-grow">
          {description}
        </p>
        <div className="mt-4 text-blue-500 font-medium text-sm group-hover:text-blue-600">
          Explore →
        </div>
      </div>
    </Link>
  )
}
