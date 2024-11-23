import React from 'react';
import { SmilePlus, Smile, Meh, Frown, CloudRain } from 'lucide-react';

const moods = [
  { icon: SmilePlus, label: '素晴らしい', value: 5 },
  { icon: Smile, label: '良い', value: 4 },
  { icon: Meh, label: '普通', value: 3 },
  { icon: Frown, label: '悪い', value: 2 },
  { icon: CloudRain, label: 'とても悪い', value: 1 },
];

interface MoodTrackerProps {
  onMoodSelect: (value: number) => void;
  selectedMood: number | null;
}

export function MoodTracker({ onMoodSelect, selectedMood }: MoodTrackerProps) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">今日の気分は?</h2>
      <div className="flex justify-between items-center">
        {moods.map(({ icon: Icon, label, value }) => (
          <button
            key={value}
            onClick={() => onMoodSelect(value)}
            className={`flex flex-col items-center p-3 rounded-lg transition-all ${
              selectedMood === value
                ? 'bg-blue-100 scale-110'
                : 'hover:bg-gray-100'
            }`}
          >
            <Icon
              size={32}
              className={`${
                selectedMood === value ? 'text-blue-500' : 'text-gray-600'
              }`}
            />
            <span className="mt-2 text-sm text-gray-600">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}