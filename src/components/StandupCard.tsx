'use client';

import { StandupEntry } from '@/lib/types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Edit3, Trash2, Calendar, AlertTriangle } from 'lucide-react';

interface StandupCardProps {
  entry: StandupEntry;
  onEdit?: (entry: StandupEntry) => void;
  onDelete?: (id: string) => void;
  isOwnEntry?: boolean;
}

export function StandupCard({ entry, onEdit, onDelete, isOwnEntry = false }: StandupCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Card className="w-full hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={entry.userAvatar} alt={entry.userName} />
              <AvatarFallback className="bg-blue-100 text-blue-700 font-medium">
                {getInitials(entry.userName)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">{entry.userName}</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(entry.date)}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="text-xs">
              {entry.project}
            </Badge>
            {isOwnEntry && (
              <div className="flex space-x-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onEdit?.(entry)}
                  className="h-8 w-8 p-0"
                >
                  <Edit3 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDelete?.(entry.id)}
                  className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-green-700 text-sm mb-1 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Yesterday
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed pl-4">{entry.yesterday}</p>
          </div>

          <div>
            <h4 className="font-medium text-blue-700 text-sm mb-1 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Today
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed pl-4">{entry.today}</p>
          </div>

          <div>
            <h4 className="font-medium text-red-700 text-sm mb-1 flex items-center">
              <AlertTriangle className="h-3 w-3 mr-2" />
              Blockers
            </h4>
            <p className={`text-sm leading-relaxed pl-4 ${
              entry.blockers.toLowerCase().includes('none') || entry.blockers.trim() === ''
                ? 'text-green-600 italic'
                : 'text-red-600'
            }`}>
              {entry.blockers || 'None'}
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            Updated {new Date(entry.updatedAt).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
