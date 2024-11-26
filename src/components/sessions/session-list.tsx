import React from 'react';
import { Activity } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import SessionItem from './session-item';
import type { Session } from '@/types/session';

interface SessionListProps {
  sessions: Session[];
}

const SessionList = ({ sessions }: SessionListProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="w-5 h-5" />
          Active Sessions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sessions.length === 0 ? (
            <p className="text-gray-400">No active sessions</p>
          ) : (
            sessions.map((session) => (
              <SessionItem key={session.id} session={session} />
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SessionList;