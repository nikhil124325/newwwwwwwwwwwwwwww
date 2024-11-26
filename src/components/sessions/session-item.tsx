import React from 'react';
import Badge from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';
import type { Session } from '@/types/session';

interface SessionItemProps {
  session: Session;
}

const SessionItem = ({ session }: SessionItemProps) => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg">
      <p className="text-sm text-gray-300 mb-2">{session.url}</p>
      <div className="flex justify-between items-center text-sm">
        <div className="space-x-4">
          <span>Views: {session.views}</span>
          <span>{formatDate(session.startTime)}</span>
        </div>
        <Badge variant={session.status === 'active' ? 'success' : 'default'}>
          {session.status}
        </Badge>
      </div>
    </div>
  );
};

export default SessionItem;