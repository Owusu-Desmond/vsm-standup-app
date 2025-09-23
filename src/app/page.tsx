'use client';

import { useState, useMemo } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { StandupEntry, FilterOptions, User } from '@/lib/types';
import { mockStandupEntries, mockUsers, mockProjects } from '@/lib/mock-data';
import { StandupCard } from '@/components/StandupCard';
import { StandupForm } from '@/components/StandupForm';
import { FilterPanel } from '@/components/FilterPanel';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Plus, Users, Calendar, BarChart3, Settings, LogOut, ChevronDown, User as UserIcon } from 'lucide-react';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [entries, setEntries] = useState<StandupEntry[]>(mockStandupEntries);
  const [filters, setFilters] = useState<FilterOptions>({});
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingEntry, setEditingEntry] = useState<StandupEntry | null>(null);

  // Create current user from session data (with fallbacks for loading state)
  const currentUser: User = {
    id: session?.user?.id || 'loading',
    name: session?.user?.name || 'Loading...',
    email: session?.user?.email || '',
    avatar: session?.user?.image || undefined,
    image: session?.user?.image || undefined,
    role: 'Team Member', // Default role, could be fetched from database
    provider: session?.provider,
  };

  // Filter entries to show user's own entries first, then others (read-only)
  const filteredEntries = useMemo(() => {
    if (!session?.user) return [];
    return entries.filter(entry => {
      if (filters.userId && entry.userId !== filters.userId) return false;
      if (filters.project && entry.project !== filters.project) return false;
      if (filters.dateFrom && entry.date < filters.dateFrom) return false;
      if (filters.dateTo && entry.date > filters.dateTo) return false;
      return true;
    });
  }, [entries, filters, session?.user]);

  const sortedEntries = useMemo(() => {
    return [...filteredEntries].sort((a, b) => {
      // Sort by date (newest first), then by creation time
      const dateComparison = new Date(b.date).getTime() - new Date(a.date).getTime();
      if (dateComparison !== 0) return dateComparison;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }, [filteredEntries]);

  const todayEntries = useMemo(() => {
    return sortedEntries.filter(entry =>
      entry.date === new Date().toISOString().split('T')[0]
    );
  }, [sortedEntries]);

  const totalBlockers = useMemo(() => {
    return sortedEntries.filter(entry =>
      entry.blockers && !entry.blockers.toLowerCase().includes('none') && entry.blockers.trim() !== ''
    ).length;
  }, [sortedEntries]);

  // Show loading if session is loading
  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // If no session, this will be handled by middleware redirect
  if (!session?.user) {
    return null;
  }

  const handleSubmitEntry = (entryData: Partial<StandupEntry>) => {
    if (editingEntry) {
      // Update existing entry
      setEntries(prev => prev.map(entry =>
        entry.id === editingEntry.id
          ? { ...entry, ...entryData } as StandupEntry
          : entry
      ));
      setEditingEntry(null);
    } else {
      // Add new entry
      setEntries(prev => [...prev, entryData as StandupEntry]);
    }
  };

  const handleEditEntry = (entry: StandupEntry) => {
    // Only allow editing own entries
    if (entry.userId !== currentUser.id) {
      return;
    }
    setEditingEntry(entry);
    setIsFormOpen(true);
  };

  const handleDeleteEntry = (id: string) => {
    // Only allow deleting own entries
    const entryToDelete = entries.find(entry => entry.id === id);
    if (entryToDelete && entryToDelete.userId !== currentUser.id) {
      return;
    }
    setEntries(prev => prev.filter(entry => entry.id !== id));
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingEntry(null);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">VSM Stand-ups</h1>
              </div>
              <Badge variant="outline" className="hidden sm:inline-flex">
                Virtual Stand-up Meeting Platform
              </Badge>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>Today: {todayEntries.length} entries</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <BarChart3 className="h-4 w-4" />
                  <span>Blockers: {totalBlockers}</span>
                </div>
              </div>

              <Button onClick={() => setIsFormOpen(true)} className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Entry
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2 hover:bg-gray-100 rounded-lg p-2 transition-colors">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={currentUser.avatar || currentUser.image} alt={currentUser.name} />
                      <AvatarFallback className="bg-blue-100 text-blue-700 text-sm">
                        {getInitials(currentUser.name)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden sm:block text-sm font-medium text-gray-700">
                      {currentUser.name}
                    </span>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="flex items-center">
                      <UserIcon className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={() => signOut({ callbackUrl: '/auth/signin' })}
                    className="text-red-600 focus:text-red-600"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Panel */}
          <div className="lg:col-span-1">
            <FilterPanel
              filters={filters}
              onFiltersChange={setFilters}
              users={mockUsers}
              projects={mockProjects}
              className="sticky top-24"
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Summary Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:hidden">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Today's Entries</p>
                      <p className="text-2xl font-bold text-gray-900">{todayEntries.length}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="text-sm text-gray-600">Active Blockers</p>
                      <p className="text-2xl font-bold text-gray-900">{totalBlockers}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-600">Total Entries</p>
                      <p className="text-2xl font-bold text-gray-900">{filteredEntries.length}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Entries Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  Stand-up Entries ({sortedEntries.length})
                </h2>
                {Object.values(filters).some(v => v) && (
                  <Badge variant="secondary">
                    Filtered results
                  </Badge>
                )}
              </div>

              {/* Entries Grid */}
              {sortedEntries.length === 0 ? (
                <div className="text-center py-12">
                  <Users className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No entries found</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {Object.values(filters).some(v => v)
                      ? 'Try adjusting your filters or add a new entry.'
                      : 'Get started by adding your first stand-up entry.'
                    }
                  </p>
                  <div className="mt-6">
                    <Button onClick={() => setIsFormOpen(true)}>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Entry
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="grid gap-6">
                  {sortedEntries.map((entry) => (
                    <StandupCard
                      key={entry.id}
                      entry={entry}
                      onEdit={handleEditEntry}
                      onDelete={handleDeleteEntry}
                      isOwnEntry={entry.userId === currentUser.id}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      <StandupForm
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        onSubmit={handleSubmitEntry}
        editEntry={editingEntry}
        projects={mockProjects}
        currentUser={currentUser}
      />
    </div>
  );
}
