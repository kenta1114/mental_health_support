import React from 'react';
import { PenLine } from 'lucide-react';

interface JournalEntryProps {
  onEntryChange: (text: string) => void;
  entry: string;
}

export function JournalEntry({ onEntryChange, entry }: JournalEntryProps) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <PenLine className="text-blue-500" />
        <h2 className="text-xl font-semibold text-gray-800">日記を書く</h2>
      </div>
      <textarea
        value={entry}
        onChange={(e) => onEntryChange(e.target.value)}
        placeholder="今日の気持ちや出来事を書いてみましょう..."
        className="w-full h-32 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
      />
    </div>
  );
}