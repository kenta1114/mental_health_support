import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { LineChart as ChartIcon } from 'lucide-react';

interface MoodData {
  date: string;
  mood: number;
}

interface MoodGraphProps {
  data: MoodData[];
}

export function MoodGraph({ data }: MoodGraphProps) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <ChartIcon className="text-blue-500" />
        <h2 className="text-xl font-semibold text-gray-800">気分の推移</h2>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[1, 5]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="mood"
              stroke="#3b82f6"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}