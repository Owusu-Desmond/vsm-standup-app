export interface StandupEntry {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  date: string;
  yesterday: string;
  today: string;
  blockers: string;
  project: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'Team Member' | 'Scrum Master' | 'Project Manager' | 'Admin';
}

export interface Project {
  id: string;
  name: string;
  description?: string;
}

export interface FilterOptions {
  userId?: string;
  project?: string;
  dateFrom?: string;
  dateTo?: string;
}
