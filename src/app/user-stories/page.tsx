import Link from 'next/link'

export default function UserStoriesPage() {
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
          <h1 className="text-4xl font-bold text-slate-900 mb-4">📝 User Stories</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Complete collection of user stories organized by priority with acceptance criteria
          </p>
        </div>

        {/* User Stories Grid */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Must-Have Stories */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-red-700 flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                Must-Have Features
              </h3>
              <UserStoryCard
                priority="must-have"
                title="Daily Stand-up Submission"
                story="As a Developer, I want to submit my daily stand-up so that my progress is visible to the team."
                acceptanceCriteria={[
                  "Form has three required fields: Yesterday, Today, Blockers",
                  "Entry can only be submitted if all fields are filled",
                  "Submissions save automatically to the dashboard feed"
                ]}
              />
              <UserStoryCard
                priority="must-have"
                title="Team Stand-up Feed"
                story="As a Team Member, I want to view all team updates so that I can stay aligned with everyone's work."
                acceptanceCriteria={[
                  "Feed displays cards in reverse chronological order",
                  "Each card shows name, date, yesterday, today, blockers",
                  "Updates refresh automatically"
                ]}
              />
              <UserStoryCard
                priority="must-have"
                title="Blockers Overview"
                story="As a Scrum Master, I want to view all blockers in one place so that I can help remove impediments."
                acceptanceCriteria={[
                  "Blockers page displays only entries with blockers",
                  "Cards show who raised the blocker and when",
                  "Ability to filter by user or project"
                ]}
              />
              <UserStoryCard
                priority="must-have"
                title="Authentication"
                story="As a User, I want to log in securely so that my updates are tied to my identity."
                acceptanceCriteria={[
                  "OAuth login (Google/GitHub) works",
                  "User cannot access dashboard without login",
                  "Logged-in user sees only their editable entries"
                ]}
              />
            </div>

            {/* Nice-to-Have Stories */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-yellow-700 flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                Nice-to-Have Features
              </h3>
              <UserStoryCard
                priority="nice-to-have"
                title="Filtering Feed"
                story="As a Project Manager, I want to filter updates by project so that I can track project-specific progress."
                acceptanceCriteria={[
                  "Filter by project, date, or user",
                  "Feed updates instantly on filter change"
                ]}
              />
              <UserStoryCard
                priority="nice-to-have"
                title="Slack Reminders"
                story="As a Developer, I want to receive a Slack reminder so that I don't forget to log my update."
                acceptanceCriteria={[
                  "Bot sends reminder at configurable time",
                  "User reply in Slack syncs with dashboard feed"
                ]}
              />
            </div>

            {/* Future Scope Stories */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-700 flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                Future Scope
              </h3>
              <UserStoryCard
                priority="future"
                title="Export Reports"
                story="As a Project Manager, I want to export updates as a CSV so that I can share progress reports with stakeholders."
                acceptanceCriteria={[
                  "Export generates CSV with date, user, yesterday, today, blockers",
                  "Works for filtered and unfiltered views"
                ]}
              />
              <UserStoryCard
                priority="future"
                title="Mobile Quick-Add Widget"
                story="As a Developer, I want a mobile widget so that I can log updates without opening the full app."
                acceptanceCriteria={[
                  "Widget has three input fields (yesterday, today, blockers)",
                  "Submissions from widget appear in dashboard immediately"
                ]}
              />
            </div>
          </div>
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

function UserStoryCard({
  priority,
  title,
  story,
  acceptanceCriteria
}: {
  priority: 'must-have' | 'nice-to-have' | 'future'
  title: string
  story: string
  acceptanceCriteria: string[]
}) {
  const priorityColors = {
    'must-have': 'border-l-red-500 bg-red-50',
    'nice-to-have': 'border-l-yellow-500 bg-yellow-50',
    'future': 'border-l-green-500 bg-green-50'
  }

  const priorityBadges = {
    'must-have': { bg: 'bg-red-100 text-red-800', text: 'Must-Have' },
    'nice-to-have': { bg: 'bg-yellow-100 text-yellow-800', text: 'Nice-to-Have' },
    'future': { bg: 'bg-green-100 text-green-800', text: 'Future Scope' }
  }

  return (
    <div className={`bg-white rounded-lg shadow-md border-l-4 ${priorityColors[priority]}`}>
      <div className="p-4">
        <div className="flex justify-between items-start gap-2 mb-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <span className={`px-2 py-1 rounded text-xs font-medium ${priorityBadges[priority].bg}`}>
            {priorityBadges[priority].text}
          </span>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Story</h4>
            <p className="text-sm italic text-slate-700">{story}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Acceptance Criteria</h4>
            <ul className="text-sm space-y-1">
              {acceptanceCriteria.map((criteria, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  {criteria}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
