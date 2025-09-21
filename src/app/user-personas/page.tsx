import Link from 'next/link'

export default function UserPersonasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4 font-medium"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">👥 User Personas</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Detailed profiles of target users with goals, frustrations, and tech-savvy levels
          </p>
        </div>

        {/* User Personas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <UserPersonaCard
            name="Alex Chen"
            role="Software Developer"
            avatar="AC"
            description="Full-stack developer who values quick, efficient workflows"
            goals={["Submit daily updates quickly", "Stay informed about team progress", "Identify blockers early"]}
            frustrations={["Time-consuming status meetings", "Losing track of blockers", "Unclear team priorities"]}
            techSavvy="High"
          />
          <UserPersonaCard
            name="Sarah Martinez"
            role="Scrum Master"
            avatar="SM"
            description="Facilitates team processes and removes impediments"
            goals={["Track team progress", "Identify and resolve blockers", "Generate progress reports"]}
            frustrations={["Scattered information", "Missing stand-up updates", "Manual report creation"]}
            techSavvy="Medium"
          />
          <UserPersonaCard
            name="David Kim"
            role="Project Manager"
            avatar="DK"
            description="Oversees multiple projects and needs high-level visibility"
            goals={["Monitor project progress", "Filter updates by project", "Share reports with stakeholders"]}
            frustrations={["Information silos", "Manual data compilation", "Lack of filtering options"]}
            techSavvy="Medium"
          />
        </div>

        {/* Navigation to Other Sections */}
        <div className="bg-white rounded-lg shadow-md p-6 border">
          <h3 className="text-xl font-bold mb-4 text-slate-900">Explore Other Sections</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/user-stories"
              className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors border border-green-200"
            >
              <span className="text-2xl">📝</span>
              <div>
                <h4 className="font-semibold text-green-800">User Stories</h4>
                <p className="text-sm text-green-600">View all user stories by priority</p>
              </div>
            </Link>
            <Link
              href="/user-journey"
              className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors border border-purple-200"
            >
              <span className="text-2xl">🗺️</span>
              <div>
                <h4 className="font-semibold text-purple-800">User Journey</h4>
                <p className="text-sm text-purple-600">Explore user journey maps</p>
              </div>
            </Link>
            <Link
              href="/implementation"
              className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors border border-orange-200"
            >
              <span className="text-2xl">🚀</span>
              <div>
                <h4 className="font-semibold text-orange-800">Implementation</h4>
                <p className="text-sm text-orange-600">View roadmap and planning</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function UserPersonaCard({
  name,
  role,
  avatar,
  description,
  goals,
  frustrations,
  techSavvy
}: {
  name: string
  role: string
  avatar: string
  description: string
  goals: string[]
  frustrations: string[]
  techSavvy: string
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full border">
      <div className="text-center mb-4">
        <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-lg font-semibold text-slate-700">{avatar}</span>
        </div>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-base font-medium text-blue-600">{role}</p>
        <p className="text-sm text-slate-600 mt-2">{description}</p>
      </div>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-green-700 mb-2">Goals</h4>
          <ul className="text-sm space-y-1">
            {goals.map((goal, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                {goal}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-red-700 mb-2">Frustrations</h4>
          <ul className="text-sm space-y-1">
            {frustrations.map((frustration, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                {frustration}
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-2 border-t">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Tech Savvy:</span>
            <span className={`px-2 py-1 rounded text-xs font-medium ${
              techSavvy === 'High' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
            }`}>
              {techSavvy}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
