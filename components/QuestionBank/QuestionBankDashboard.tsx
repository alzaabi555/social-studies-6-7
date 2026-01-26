
import React, { useState } from 'react';
import { UNITS, UNITS_SIXTH, UNITS_FIFTH } from '../../constants';
import { Lesson } from '../../types';
import { BookOpen, ChevronLeft, Search, Filter } from 'lucide-react';

interface Props {
  onBack: () => void;
  onStartQuiz: (lesson: Lesson, grade: number) => void;
}

const QuestionBankDashboard: React.FC<Props> = ({ onBack, onStartQuiz }) => {
  const [selectedGrade, setSelectedGrade] = useState<number | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allUnits = [
    { grade: 7, units: UNITS },
    { grade: 6, units: UNITS_SIXTH },
    { grade: 5, units: UNITS_FIFTH }
  ];

  // Flatten lessons and filter
  const filteredLessons = allUnits.flatMap(group => 
    group.units.flatMap(unit => 
      unit.lessons.map(lesson => ({ ...lesson, grade: group.grade }))
    )
  ).filter(lesson => {
    // Filter by grade
    const matchesGrade = selectedGrade === 'all' || lesson.grade === selectedGrade;
    // Filter by search term
    const matchesSearch = lesson.title.includes(searchTerm) || lesson.description.includes(searchTerm);
    return matchesGrade && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-tajawal text-right dir-rtl" dir="rtl">
      {/* Header */}
      <header className="bg-white p-4 shadow-sm border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold transition-colors">
            <ChevronLeft size={20}/> العودة
          </button>
          <h1 className="text-xl font-black text-slate-800">بنك الأسئلة الشامل</h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6 space-y-8">
        {/* Filters */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-3 text-slate-400" size={20}/>
              <input 
                type="text" 
                placeholder="ابحث عن درس..." 
                className="w-full pr-10 pl-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <Filter className="text-slate-400 flex-shrink-0" size={20}/>
              <button onClick={() => setSelectedGrade('all')} className={`px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap transition-colors ${selectedGrade === 'all' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>الكل</button>
              <button onClick={() => setSelectedGrade(5)} className={`px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap transition-colors ${selectedGrade === 5 ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>الصف 5</button>
              <button onClick={() => setSelectedGrade(6)} className={`px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap transition-colors ${selectedGrade === 6 ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>الصف 6</button>
              <button onClick={() => setSelectedGrade(7)} className={`px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap transition-colors ${selectedGrade === 7 ? 'bg-purple-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>الصف 7</button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid md:grid-cols-2 gap-4">
          {filteredLessons.map((lesson) => (
            <div key={`${lesson.grade}-${lesson.id}`} className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 hover:border-indigo-300 transition-all group flex items-start gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 ${lesson.grade === 5 ? 'bg-amber-500' : lesson.grade === 6 ? 'bg-emerald-500' : 'bg-purple-500'}`}>
                {lesson.grade}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-800 text-lg mb-1">{lesson.title}</h3>
                <p className="text-sm text-slate-500 mb-3">{lesson.subtitle}</p>
                <button 
                  onClick={() => onStartQuiz(lesson, lesson.grade)}
                  className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-100 transition-colors w-full md:w-auto"
                >
                  بدء الاختبار
                </button>
              </div>
            </div>
          ))}
          {filteredLessons.length === 0 && (
            <div className="col-span-full text-center py-12 text-slate-400">
              <BookOpen size={48} className="mx-auto mb-4 opacity-50"/>
              <p>لا توجد دروس تطابق بحثك</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default QuestionBankDashboard;
