import React, { useState, useEffect } from 'react';
import { MoodTracker } from './components/MoodTracker';
import { JournalEntry } from './components/JournalEntry';
import { BreathingExercise } from './components/BreathingExercise';
import { MoodGraph } from './components/MoodGraph';
import { Heart } from 'lucide-react';

interface DailyEntry {
  date: string;
  mood: number;
  journal: string;
}

function App() {
  const [currentMood, setCurrentMood] = useState<number | null>(null);
  const [journalText, setJournalText] = useState('');
  const [entries, setEntries] = useState<DailyEntry[]>(() => {
    const saved = localStorage.getItem('moodEntries');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('moodEntries', JSON.stringify(entries));
  }, [entries]);

  const handleSaveEntry = () => {
    if (currentMood) {
      const newEntry = {
        date: new Date().toLocaleDateString(),
        mood: currentMood,
        journal: journalText,
      };
      setEntries([...entries, newEntry]);
      setCurrentMood(null);
      setJournalText('');
    }
  };

  const graphData = entries.map(({ date, mood }) => ({ date, mood }));

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2">
            <Heart className="text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">
              メンタルヘルス・サポート
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <MoodTracker onMoodSelect={setCurrentMood} selectedMood={currentMood} />
            <JournalEntry onEntryChange={setJournalText} entry={journalText} />
            {(currentMood || journalText) && (
              <button
                onClick={handleSaveEntry}
                className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                記録を保存
              </button>
            )}
          </div>
          <div className="space-y-6">
            <MoodGraph data={graphData} />
            <BreathingExercise />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;