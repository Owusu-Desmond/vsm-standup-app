'use client';

import { useState } from 'react';
import Link from 'next/link';
import { mockUsers, mockStandupEntries } from '@/lib/mock-data';
import { StandupEntry } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {
  ArrowLeft,
  Edit3,
  Calendar,
  BarChart3,
  Users,
  Target,
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

export default function ProfilePage() {
  // Simulate current user (in real app, this would come from auth)
  const currentUser = mockUsers[1]; // Mike Johnson
  const [isEditingProfile, setIsEditingProfile] = useState(true);
  const [profileData, setProfileData] = useState({
    name: currentUser.name,
    email: currentUser.email,
    role: currentUser.role,
    bio: 'Full-stack developer with 5+ years of experience building scalable web applications. Passionate about clean code, user experience, and team collaboration.',
    location: 'San Francisco, CA',
    timezone: 'PST (UTC-8)'
  });

  // Get user's stand-up entries
  const userEntries = mockStandupEntries.filter(entry => entry.userId === currentUser.id);

  // Calculate statistics
  const totalEntries = userEntries.length;
  const totalBlockers = userEntries.filter(entry =>
    entry.blockers && !entry.blockers.toLowerCase().includes('none') && entry.blockers.trim() !== ''
  ).length;
  const blockerRate = totalEntries > 0 ? Math.round((totalBlockers / totalEntries) * 100) : 0;
  const recentEntries = userEntries.slice(0, 5);

  // Get unique projects user has worked on
  const userProjects = [...new Set(userEntries.map(entry => entry.project))];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleSaveProfile = () => {
    // In a real app, this would save to backend
    setIsEditingProfile(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Dashboard</span>
                </Button>
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-2xl font-bold text-gray-900">User Profile</h1>
            </div>

            <Button onClick={() => setIsEditingProfile(true)} className="flex items-center space-x-2">
              <Edit3 className="h-4 w-4" />
              <span>Edit Profile</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card>
              <CardHeader className="text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                  <AvatarFallback className="bg-blue-100 text-blue-700 text-xl font-bold">
                    {getInitials(currentUser.name)}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{profileData.name}</CardTitle>
                <Badge variant="outline" className="mx-auto">
                  {profileData.role}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-sm text-gray-900">{profileData.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Location</p>
                  <p className="text-sm text-gray-900">{profileData.location}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Timezone</p>
                  <p className="text-sm text-gray-900">{profileData.timezone}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Bio</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{profileData.bio}</p>
                </div>
              </CardContent>
            </Card>

            {/* Projects Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Active Projects</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {userProjects.map((project, index) => (
                    <Badge key={index} variant="secondary" className="block w-fit">
                      {project}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Statistics & Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Statistics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-8 w-8 text-blue-600" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{totalEntries}</p>
                      <p className="text-sm text-gray-600">Total Stand-ups</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{totalBlockers}</p>
                      <p className="text-sm text-gray-600">Total Blockers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-8 w-8 text-green-600" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{blockerRate}%</p>
                      <p className="text-sm text-gray-600">Blocker Rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{userProjects.length}</p>
                      <p className="text-sm text-gray-600">Active Projects</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Recent Stand-ups</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentEntries.map((entry) => (
                    <div key={entry.id} className="border-l-4 border-blue-500 pl-4 py-3 bg-gray-50 rounded-r-md">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-gray-900">
                            {formatDate(entry.date)}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {entry.project}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-1">
                          {entry.blockers && !entry.blockers.toLowerCase().includes('none') && entry.blockers.trim() !== '' ? (
                            <AlertTriangle className="h-4 w-4 text-red-500" />
                          ) : (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          )}
                        </div>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium text-green-700">Yesterday: </span>
                          <span className="text-gray-700">{entry.yesterday.substring(0, 100)}...</span>
                        </div>
                        <div>
                          <span className="font-medium text-blue-700">Today: </span>
                          <span className="text-gray-700">{entry.today.substring(0, 100)}...</span>
                        </div>
                        {entry.blockers && !entry.blockers.toLowerCase().includes('none') && entry.blockers.trim() !== '' && (
                          <div>
                            <span className="font-medium text-red-700">Blockers: </span>
                            <span className="text-red-600">{entry.blockers.substring(0, 100)}...</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <Dialog open={isEditingProfile} onOpenChange={setIsEditingProfile}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={profileData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profileData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={profileData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Input
                  id="timezone"
                  value={profileData.timezone}
                  onChange={(e) => handleInputChange('timezone', e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={profileData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <Button variant="outline" onClick={() => setIsEditingProfile(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveProfile}>
                Save Changes
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
