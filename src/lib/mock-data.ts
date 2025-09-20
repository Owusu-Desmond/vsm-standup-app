import { StandupEntry, User, Project } from './types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    role: 'Scrum Master'
  },
  {
    id: '2',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    role: 'Team Member'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily@example.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    role: 'Team Member'
  },
  {
    id: '4',
    name: 'David Kim',
    email: 'david@example.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    role: 'Project Manager'
  }
];

export const mockProjects: Project[] = [
  { id: '1', name: 'E-commerce Platform', description: 'Main shopping platform redesign' },
  { id: '2', name: 'Mobile App', description: 'iOS and Android mobile application' },
  { id: '3', name: 'Analytics Dashboard', description: 'Internal analytics and reporting tool' }
];

export const mockStandupEntries: StandupEntry[] = [
  {
    id: '1',
    userId: '1',
    userName: 'Sarah Chen',
    userAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    date: '2024-01-15',
    yesterday: 'Completed user story mapping for sprint 3. Reviewed and approved the new API endpoints. Had productive 1-on-1s with team members.',
    today: 'Planning the sprint retrospective. Will review blockers and impediments. Meeting with stakeholders about the next quarter roadmap.',
    blockers: 'Waiting for design assets from the UX team for the checkout flow. Need approval from legal team for the new privacy policy changes.',
    project: 'E-commerce Platform',
    createdAt: '2024-01-15T09:00:00Z',
    updatedAt: '2024-01-15T09:00:00Z'
  },
  {
    id: '2',
    userId: '2',
    userName: 'Mike Johnson',
    userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    date: '2024-01-15',
    yesterday: 'Implemented authentication middleware. Fixed critical bug in payment processing. Code review for Emily\'s pull request.',
    today: 'Working on shopping cart optimization. Will pair program with David on the search functionality. Testing the new caching layer.',
    blockers: 'Third-party payment gateway is having intermittent issues. Need clarification on the new search requirements.',
    project: 'E-commerce Platform',
    createdAt: '2024-01-15T09:15:00Z',
    updatedAt: '2024-01-15T09:15:00Z'
  },
  {
    id: '3',
    userId: '3',
    userName: 'Emily Rodriguez',
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    date: '2024-01-15',
    yesterday: 'Completed the product detail page component. Updated unit tests to achieve 85% coverage. Participated in architecture review.',
    today: 'Building the responsive navigation component. Will integrate the new design system components. Code review session at 2 PM.',
    blockers: 'None at the moment.',
    project: 'E-commerce Platform',
    createdAt: '2024-01-15T09:30:00Z',
    updatedAt: '2024-01-15T09:30:00Z'
  },
  {
    id: '4',
    userId: '4',
    userName: 'David Kim',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    date: '2024-01-15',
    yesterday: 'Analyzed user feedback from last release. Updated project timeline based on new requirements. Stakeholder presentation went well.',
    today: 'Sprint planning preparation. Will coordinate with design team on upcoming features. Budget review meeting with leadership.',
    blockers: 'Waiting for final approval on the Q2 budget allocation. Need clarity on resource allocation for the mobile app project.',
    project: 'Mobile App',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '5',
    userId: '2',
    userName: 'Mike Johnson',
    userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    date: '2024-01-14',
    yesterday: 'Refactored the user service layer. Implemented new logging framework. Attended team knowledge sharing session.',
    today: 'Focus on performance optimization. Will investigate the slow query issues. Team lunch and learn session on new technologies.',
    blockers: 'Database performance issues in staging environment need immediate attention.',
    project: 'Analytics Dashboard',
    createdAt: '2024-01-14T09:20:00Z',
    updatedAt: '2024-01-14T09:20:00Z'
  }
];
