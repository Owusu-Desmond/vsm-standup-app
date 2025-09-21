import Link from 'next/link'

export default function ImplementationPage() {
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
          <h1 className="text-4xl font-bold text-slate-900 mb-4">🚀 Implementation Roadmap</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            4-phase roadmap with technical considerations and success metrics
          </p>
        </div>

        {/* Implementation Roadmap */}
        <ImplementationRoadmap />

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
              href="/user-journey"
              className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors border border-purple-200"
            >
              <span className="text-2xl">🗺️</span>
              <div>
                <h4 className="font-semibold text-purple-800">User Journey</h4>
                <p className="text-sm text-purple-600">Explore user journey maps</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function ImplementationRoadmap() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6 border">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Implementation Roadmap</h2>
          <p className="text-slate-600">Recommended development phases and priorities</p>
        </div>
        <div className="space-y-6">
          <RoadmapPhase
            phase="Phase 1: Core MVP"
            duration="2-3 weeks"
            priority="must-have"
            features={[
              "User authentication (OAuth)",
              "Basic stand-up submission form",
              "Team dashboard feed",
              "Basic data persistence"
            ]}
            techStack={["Next.js", "NextAuth.js", "Database (PostgreSQL/SQLite)", "Tailwind CSS"]}
          />
          <RoadmapPhase
            phase="Phase 2: Enhanced Features"
            duration="1-2 weeks"
            priority="must-have"
            features={[
              "Blockers overview page",
              "User profile management",
              "Real-time updates",
              "Basic filtering"
            ]}
            techStack={["WebSocket/Server-Sent Events", "State management", "Advanced queries"]}
          />
          <RoadmapPhase
            phase="Phase 3: Nice-to-Have"
            duration="2-3 weeks"
            priority="nice-to-have"
            features={[
              "Advanced filtering (project, date, user)",
              "Slack integration",
              "Email notifications",
              "Mobile responsiveness"
            ]}
            techStack={["Slack API", "Email service", "Progressive Web App"]}
          />
          <RoadmapPhase
            phase="Phase 4: Future Enhancements"
            duration="3-4 weeks"
            priority="future"
            features={[
              "CSV export functionality",
              "Mobile widget",
              "Analytics dashboard",
              "Team insights"
            ]}
            techStack={["File generation", "Mobile app framework", "Charts library"]}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border">
        <h3 className="text-xl font-bold mb-4">Technical Considerations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Architecture Decisions</h4>
            <ul className="text-sm space-y-2">
              <li>• Next.js for full-stack React application</li>
              <li>• PostgreSQL for production, SQLite for development</li>
              <li>• NextAuth.js for authentication</li>
              <li>• Tailwind CSS + shadcn/ui for styling</li>
              <li>• Vercel/Netlify for deployment</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Success Metrics</h4>
            <ul className="text-sm space-y-2">
              <li>• 90%+ daily stand-up completion rate</li>
              <li>• Average submission time under 2 minutes</li>
              <li>• 100% uptime during business hours</li>
              <li>• User satisfaction score above 4/5</li>
              <li>• Mobile usage above 30%</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border">
        <h3 className="text-xl font-bold mb-4">Development Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Best Practices</h4>
            <ul className="text-sm space-y-2">
              <li>• Start with minimal viable features</li>
              <li>• Focus on user experience and simplicity</li>
              <li>• Implement responsive design from day one</li>
              <li>• Use TypeScript for better code quality</li>
              <li>• Write tests for critical user flows</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Performance Targets</h4>
            <ul className="text-sm space-y-2">
              <li>• Page load time under 2 seconds</li>
              <li>• Form submission under 1 second</li>
              <li>• Mobile-first responsive design</li>
              <li>• Accessibility compliance (WCAG 2.1)</li>
              <li>• Cross-browser compatibility</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function RoadmapPhase({
  phase,
  duration,
  priority,
  features,
  techStack
}: {
  phase: string
  duration: string
  priority: 'must-have' | 'nice-to-have' | 'future'
  features: string[]
  techStack: string[]
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
    <div className={`bg-white rounded-lg shadow-md border-l-4 p-6 ${priorityColors[priority]}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold">{phase}</h3>
          <p className="text-slate-600">{duration}</p>
        </div>
        <span className={`px-2 py-1 rounded text-xs font-medium ${priorityBadges[priority].bg}`}>
          {priorityBadges[priority].text}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold mb-2">Features</h4>
          <ul className="text-sm space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Tech Stack</h4>
          <ul className="text-sm space-y-1">
            {techStack.map((tech, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">→</span>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
