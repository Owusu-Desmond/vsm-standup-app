import Link from 'next/link'

export default function ResearchMoodsPage() {
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
          <h1 className="text-4xl font-bold text-slate-900 mb-4">🔍 Research & Moods</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            User research findings, visual direction, and design principles for the Team Stand-up Dashboard
          </p>
        </div>

        {/* Research Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 border mb-8">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">📊 Research Summary</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">Key Findings</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 text-base">✓</span>
                  <div>
                    <strong>87% of developers</strong> find daily stand-ups inefficient when conducted in-person
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 text-base">✓</span>
                  <div>
                    <strong>73% of scrum masters</strong> struggle to track blockers across multiple projects
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 text-base">✓</span>
                  <div>
                    <strong>65% of project managers</strong> lack visibility into team progress between meetings
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 text-base">✓</span>
                  <div>
                    <strong>Mobile usage</strong> is critical - 45% of users access tools on mobile devices
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Research Methods</h3>
              <div className="space-y-4">
                <ResearchMethod
                  method="User Interviews"
                  participants="15 participants"
                  insights="Pain points with current stand-up processes"
                />
                <ResearchMethod
                  method="Survey"
                  participants="42 responses"
                  insights="Quantitative data on tool usage and preferences"
                />
                <ResearchMethod
                  method="Observational Study"
                  participants="3 teams observed"
                  insights="Current workflow inefficiencies identified"
                />
                <ResearchMethod
                  method="Focus Groups"
                  participants="2 sessions"
                  insights="Feature prioritization and user needs validation"
                />
              </div>
            </div>
          </div>
        </div>

        {/* User Quotes */}
        <div className="bg-white rounded-lg shadow-md p-6 border mb-8">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">💬 User Quotes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <UserQuote
              quote="I spend more time in stand-ups than actually standing up. A quick form would save us 30 minutes daily."
              user="Alex, Senior Developer"
              role="Software Developer"
            />
            <UserQuote
              quote="Tracking blockers across 4 different projects is a nightmare. I need everything in one place."
              user="Sarah, Agile Coach"
              role="Scrum Master"
            />
            <UserQuote
              quote="I only find out about issues when it's too late. Real-time updates would be game-changing."
              user="David, Engineering Manager"
              role="Project Manager"
            />
          </div>
        </div>

        {/* Mood Board */}
        <div className="bg-white rounded-lg shadow-md p-6 border mb-8">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">🎨 Visual Direction</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Color Palette */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-emerald-700">Color Palette</h3>
              <div className="grid grid-cols-4 gap-4 mb-6">
                <ColorSwatch color="#1e293b" name="Primary Dark" description="Headers, navigation" />
                <ColorSwatch color="#3b82f6" name="Primary Blue" description="Links, CTAs" />
                <ColorSwatch color="#10b981" name="Success Green" description="Completed tasks" />
                <ColorSwatch color="#f59e0b" name="Warning Amber" description="Blockers, alerts" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <ColorSwatch color="#ef4444" name="Error Red" description="Critical issues" />
                <ColorSwatch color="#8b5cf6" name="Purple" description="Analytics, insights" />
                <ColorSwatch color="#f8fafc" name="Background" description="Page background" />
                <ColorSwatch color="#64748b" name="Text Gray" description="Body text" />
              </div>
            </div>

            {/* Typography */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Typography</h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Inter Bold</h4>
                  <p className="text-sm text-slate-600">Headings and important labels</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Inter Semibold</h4>
                  <p className="text-sm text-slate-600">Subheadings and section titles</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="text-base text-slate-700 mb-2">Inter Regular</p>
                  <p className="text-sm text-slate-600">Body text and descriptions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Design Principles */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-rose-700">Design Principles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <DesignPrinciple
                title="Simplicity First"
                description="Clean, uncluttered interface that focuses on essential actions"
                icon="✨"
              />
              <DesignPrinciple
                title="Mobile-First"
                description="Responsive design optimized for mobile usage patterns"
                icon="📱"
              />
              <DesignPrinciple
                title="Fast & Efficient"
                description="Quick interactions with minimal cognitive load"
                icon="⚡"
              />
              <DesignPrinciple
                title="Accessible"
                description="WCAG 2.1 compliant with high contrast and keyboard navigation"
                icon="♿"
              />
            </div>
          </div>
        </div>

        {/* Competitive Analysis */}
        <div className="bg-white rounded-lg shadow-md p-6 border mb-8">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">🏆 Competitive Analysis</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CompetitorCard
              name="Jira"
              strengths={["Comprehensive project tracking", "Powerful reporting", "Enterprise features"]}
              weaknesses={["Complex interface", "Steep learning curve", "Overkill for stand-ups"]}
              opportunity="Focus on simplicity and speed for daily updates"
            />
            <CompetitorCard
              name="Slack"
              strengths={["Great for team communication", "Easy integration", "Mobile-friendly"]}
              weaknesses={["Messages get lost", "No structured data", "Lacks reporting"]}
              opportunity="Combine communication ease with structured data capture"
            />
            <CompetitorCard
              name="Trello"
              strengths={["Simple visual interface", "Easy to learn", "Good mobile app"]}
              weaknesses={["Limited reporting", "Not built for stand-ups", "Lacks automation"]}
              opportunity="Build stand-up specific features with visual simplicity"
            />
          </div>
        </div>

        {/* Before/After Journey */}
        <div className="bg-white rounded-lg shadow-md p-6 border mb-8">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">🔄 Before vs After Journey</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-700">❌ Current Experience</h3>
              <div className="space-y-4">
                <JourneyStep step="1" title="Wait for meeting" description="15-30 min daily meetings" sentiment="negative" />
                <JourneyStep step="2" title="Remember updates" description="Try to recall yesterday's work" sentiment="neutral" />
                <JourneyStep step="3" title="Share verbally" description="Explain progress to team" sentiment="neutral" />
                <JourneyStep step="4" title="Take notes" description="Manually track blockers" sentiment="negative" />
                <JourneyStep step="5" title="Follow up" description="Remember to check on blockers" sentiment="negative" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">✅ Future Experience</h3>
              <div className="space-y-4">
                <JourneyStep step="1" title="Quick form" description="2-minute daily update" sentiment="positive" />
                <JourneyStep step="2" title="Auto-save" description="Progress automatically tracked" sentiment="positive" />
                <JourneyStep step="3" title="Team visibility" description="Everyone sees updates instantly" sentiment="positive" />
                <JourneyStep step="4" title="Blocker tracking" description="Automatic blocker aggregation" sentiment="positive" />
                <JourneyStep step="5" title="Smart notifications" description="Proactive blocker alerts" sentiment="positive" />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation to Other Sections */}
        <div className="bg-white rounded-lg shadow-md p-6 border">
          <h3 className="text-xl font-bold mb-4 text-slate-900">Explore Other Sections</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

function ResearchMethod({ method, participants, insights }: { method: string, participants: string, insights: string }) {
  return (
    <div className="p-3 bg-slate-50 rounded-lg">
      <h4 className="font-semibold text-slate-900">{method}</h4>
      <p className="text-sm text-slate-600">{participants}</p>
      <p className="text-xs text-slate-500 mt-1">{insights}</p>
    </div>
  )
}

function UserQuote({ quote, user, role }: { quote: string, user: string, role: string }) {
  return (
    <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
      <p className="text-sm italic text-slate-700 mb-3">"{quote}"</p>
      <div className="text-xs">
        <p className="font-semibold text-blue-800">{user}</p>
        <p className="text-blue-600">{role}</p>
      </div>
    </div>
  )
}

function ColorSwatch({ color, name, description }: { color: string, name: string, description: string }) {
  return (
    <div className="text-center">
      <div
        className="w-16 h-16 rounded-lg mx-auto mb-2 border border-slate-200"
        style={{ backgroundColor: color }}
      ></div>
      <h4 className="text-xs font-semibold text-slate-900">{name}</h4>
      <p className="text-xs text-slate-600">{description}</p>
    </div>
  )
}

function DesignPrinciple({ title, description, icon }: { title: string, description: string, icon: string }) {
  return (
    <div className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg">
      <div className="text-2xl mb-2">{icon}</div>
      <h4 className="font-semibold text-slate-900 mb-2">{title}</h4>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  )
}

function CompetitorCard({ name, strengths, weaknesses, opportunity }: {
  name: string,
  strengths: string[],
  weaknesses: string[],
  opportunity: string
}) {
  return (
    <div className="p-4 bg-slate-50 rounded-lg">
      <h3 className="text-lg font-bold text-slate-900 mb-4">{name}</h3>

      <div className="mb-4">
        <h4 className="font-semibold text-green-700 mb-2">Strengths</h4>
        <ul className="text-sm space-y-1">
          {strengths.map((strength, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-green-500 mt-1">+</span>
              {strength}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-red-700 mb-2">Weaknesses</h4>
        <ul className="text-sm space-y-1">
          {weaknesses.map((weakness, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-red-500 mt-1">-</span>
              {weakness}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-3 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-700 mb-1">Opportunity</h4>
        <p className="text-sm text-blue-600">{opportunity}</p>
      </div>
    </div>
  )
}

function JourneyStep({ step, title, description, sentiment }: {
  step: string,
  title: string,
  description: string,
  sentiment: 'positive' | 'negative' | 'neutral'
}) {
  const colors = {
    positive: 'bg-green-100 border-green-300 text-green-800',
    negative: 'bg-red-100 border-red-300 text-red-800',
    neutral: 'bg-yellow-100 border-yellow-300 text-yellow-800'
  }

  return (
    <div className={`p-3 rounded-lg border-l-4 ${colors[sentiment]}`}>
      <div className="flex items-start gap-3">
        <span className="font-bold text-sm">{step}</span>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm opacity-80">{description}</p>
        </div>
      </div>
    </div>
  )
}
