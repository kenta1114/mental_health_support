import React, { useState, useEffect } from 'react';
import { Wind } from 'lucide-react';

export function BreathingExercise() {
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [seconds, setSeconds] = useState(4);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 0) {
          switch (phase) {
            case 'inhale':
              setPhase('hold');
              return 7;
            case 'hold':
              setPhase('exhale');
              return 8;
            case 'exhale':
              setPhase('inhale');
              return 4;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, phase]);

  const toggleExercise = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setPhase('inhale');
      setSeconds(4);
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Wind className="text-blue-500" />
        <h2 className="text-xl font-semibold text-gray-800">呼吸エクササイズ</h2>
      </div>
      <div className="text-center">
        <div className="mb-4">
          <div
            className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300 ${
              isActive
                ? 'bg-blue-100 scale-110'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {seconds}
          </div>
          <p className="mt-2 text-lg font-medium text-gray-700">
            {phase === 'inhale'
              ? '吸う'
              : phase === 'hold'
              ? '止める'
              : '吐く'}
          </p>
        </div>
        <button
          onClick={toggleExercise}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          {isActive ? '停止' : '開始'}
        </button>
      </div>
    </div>
  );
}