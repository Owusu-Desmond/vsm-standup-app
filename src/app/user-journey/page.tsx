import Link from 'next/link'

export default function UserJourneyPage() {
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
          <h1 className="text-4xl font-bold text-slate-900 mb-4">🗺️ User Journey Maps</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Journey maps showing how users interact with the system and their pain points
          </p>
        </div>

        {/* User Journey Maps */}
        <div className="space-y-8">
          <UserJourneyMap />
        </div>

        {/* Navigation to Other Sections */}
        <div className="bg-white rounded-lg shadow-md p-6 border mt-8">
          <h3 className="text-xl font-bold mb-4 text-slate-900">Explore Other Sections</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/user-personas"
              className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200"
            >
              <span className="text-2xl">👥</span>
              <div>
                <h4 className="font-semibold text-blue-800">User Personas</h4>
                <p className="text-sm text-blue-600">View detailed user profiles</p>
              </div>
            </Link>
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

function UserJourneyMap() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6 border">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Developer Journey - Daily Stand-up</h2>
          <p className="text-slate-600">How a developer interacts with the system daily</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <JourneyStep
            step="1"
            title="Login"
            description="Authenticate via OAuth"
            emotion="neutral"
            touchpoints={["Login page", "OAuth provider"]}
          />
          <JourneyStep
            step="2"
            title="View Dashboard"
            description="See team updates from yesterday"
            emotion="positive"
            touchpoints={["Dashboard feed", "Team updates"]}
          />
          <JourneyStep
            step="3"
            title="Submit Update"
            description="Fill in yesterday, today, blockers"
            emotion="neutral"
            touchpoints={["Submission form", "Text inputs"]}
          />
          <JourneyStep
            step="4"
            title="Review Blockers"
            description="Check if team has blockers"
            emotion="concerned"
            touchpoints={["Blockers page", "Filter options"]}
          />
          <JourneyStep
            step="5"
            title="Continue Work"
            description="Focus on development tasks"
            emotion="positive"
            touchpoints={["External tools", "Development environment"]}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Scrum Master Journey - Weekly Review</h2>
          <p className="text-slate-600">How a Scrum Master uses the system for team management</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <JourneyStep
            step="1"
            title="Review Feed"
            description="Check all team updates"
            emotion="analytical"
            touchpoints={["Dashboard feed", "Team updates"]}
          />
          <JourneyStep
            step="2"
            title="Identify Blockers"
            description="Find impediments to resolve"
            emotion="concerned"
            touchpoints={["Blockers page", "User filters"]}
          />
          <JourneyStep
            step="3"
            title="Take Action"
            description="Contact team members about blockers"
            emotion="proactive"
            touchpoints={["External communication", "Meeting schedules"]}
          />
          <JourneyStep
            step="4"
            title="Follow Up"
            description="Track blocker resolution"
            emotion="satisfied"
            touchpoints={["Dashboard feed", "Progress tracking"]}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Project Manager Journey - Progress Monitoring</h2>
          <p className="text-slate-600">How a project manager uses the system for oversight</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <JourneyStep
            step="1"
            title="Filter by Project"
            description="Focus on specific project updates"
            emotion="focused"
            touchpoints={["Filter controls", "Project selection"]}
          />
          <JourneyStep
            step="2"
            title="Analyze Progress"
            description="Review team velocity and blockers"
            emotion="analytical"
            touchpoints={["Progress metrics", "Blocker reports"]}
          />
          <JourneyStep
            step="3"
            title="Export Data"
            description="Generate reports for stakeholders"
            emotion="productive"
            touchpoints={["Export function", "CSV generation"]}
          />
          <JourneyStep
            step="4"
            title="Share Insights"
            description="Communicate findings to leadership"
            emotion="satisfied"
            touchpoints={["External tools", "Stakeholder meetings"]}
          />
        </div>
      </div>
    </div>
  )
}

function JourneyStep({
  step,
  title,
  description,
  emotion,
  touchpoints
}: {
  step: string
  title: string
  description: string
  emotion: string
  touchpoints: string[]
}) {
  const emotionColors = {
    positive: 'text-green-600',
    neutral: 'text-blue-600',
    concerned: 'text-yellow-600',
    analytical: 'text-purple-600',
    proactive: 'text-orange-600',
    satisfied: 'text-green-600',
    focused: 'text-indigo-600',
    productive: 'text-emerald-600'
  }

  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
        <span className="font-bold text-blue-600">{step}</span>
      </div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-slate-600 mb-3">{description}</p>
      <div className={`text-sm font-medium mb-2 ${emotionColors[emotion as keyof typeof emotionColors]}`}>
        {emotion.charAt(0).toUpperCase() + emotion.slice(1)}
      </div>
      <div className="text-xs text-slate-500">
        {touchpoints.map((touchpoint, index) => (
          <div key={index}>{touchpoint}</div>
        ))}
      </div>
    </div>
  )
}
