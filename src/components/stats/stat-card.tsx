import React from 'react';
import { Card } from '@/components/ui/card';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  className?: string;
}

const StatCard = ({ icon, title, value, className }: StatCardProps) => {
  return (
    <Card className={className}>
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-2xl text-blue-500">{value}</p>
    </Card>
  );
};

export default StatCard;