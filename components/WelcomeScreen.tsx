import React from 'react';
import { GraduationCap, Library, Globe, Star, FileQuestion, User, School, Phone, ChevronLeft, Map, BookOpen } from 'lucide-react';

interface WelcomeScreenProps {
  onSelectGrade: (grade: 5 | 6 | 7) => void;
  onOpenQuestionBank: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSelectGrade, onOpenQuestionBank }) => {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden font-tajawal text-right flex flex-col" dir="rtl">
      
      {/* 1. خلفية تقنية متطورة (Grid & Glows) */}
      <div className="absolute inset-0 z-0">
        {/* شبكة خلفية */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        {/* إضاءات محيطة */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[100px] opacity-30"></div>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col flex-grow items-center justify-center">
        
        {/* 2. منطقة الشعار والعنوان */}
        <div className="text-center mb-16 space-y-6 max-w-3xl">
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <div className="relative w-28 h-28 bg-slate-900 border border-slate-700 rounded-3xl flex items-center justify-center shadow-2xl">
              <Library size={56} className="text-indigo-400 drop-shadow-lg" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 tracking-tight">
              الحقيبة التفاعلية
            </h1>
            <div className="flex items-center justify-center gap-3 text-indigo-300 text-xl font-medium bg-indigo-950/30 py-2 px-6 rounded-full border border-indigo-500/20 w-fit mx-auto backdrop-blur-sm">
              <Map size={20} />
              <span>للدراسات الاجتماعية</span>
            </div>
          </div>
        </div>

        {/* 3. بطاقات الصفوف (بتأثير الزجاج) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mb-12">
          
          {/* الصف السابع */}
          <GradeCard 
            title="الصف السابع" 
            desc="الغلاف الجوي، الدولة العباسية، المواطنة" 
            icon={<GraduationCap size={32} />} 
            color="text-purple-400"
            bgColor="bg-purple-500/10"
            borderColor="hover:border-purple-500/50"
            onClick={() => onSelectGrade(7)}
          />

          {/* الصف السادس */}
          <GradeCard 
            title="الصف السادس" 
            desc="السكان، الدولة الأموية، المجتمع المدني" 
            icon={<Star size={32} />} 
            color="text-emerald-400"
            bgColor="bg-emerald-500/10"
            borderColor="hover:border-emerald-500/50"
            onClick={() => onSelectGrade(6)}
          />

          {/* الصف الخامس */}
          <GradeCard 
            title="الصف الخامس" 
            desc="الموارد الطبيعية، تاريخ عمان، الحقوق" 
            icon={<Globe size={32} />} 
            color="text-amber-400"
            bgColor="bg-amber-500/10"
            borderColor="hover:border-amber-500/50"
            onClick={() => onSelectGrade(5)}
          />
        </div>

        {/* 4. زر بنك الأسئلة (بتصميم مميز) */}
        <button 
          onClick={onOpenQuestionBank}
          className="group relative w-full max-w-2xl bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 p-1 rounded-2xl overflow-hidden hover:border-slate-500 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex items-center justify-between bg-slate-900/80 backdrop-blur-xl p-5 rounded-xl">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                <FileQuestion size={28} />
              </div>
              <div className="text-right">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-rose-200 transition-colors">بنك الأسئلة الشامل</h3>
                <p className="text-slate-400 text-sm">اختبارات شاملة ومراجعات لجميع الوحدات</p>
              </div>
            </div>
            <div className="bg-slate-800 p-3 rounded-full text-slate-400 group-hover:bg-rose-500 group-hover:text-white transition-all transform group-hover:-translate-x-2">
              <ChevronLeft size={24} />
            </div>
          </div>
        </button>

      </div>

      {/* 5. الفوتر (Footer) */}
      <footer className="relative z-10 w-full border-t border-slate-800 bg-slate-950/50 backdrop-blur-md py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
          
          <div className="flex items-center gap-2 text-indigo-300 bg-indigo-500/5 px-4 py-2 rounded-full border border-indigo-500/10">
            <User size={16} />
            <span>إعداد: أ. محمد درويش الزعابي</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-slate-400">
            <div className="flex items-center gap-2 hover:text-emerald-400 transition-colors cursor-default">
              <School size={16} />
              <span>مدرسة الإبداع للبنين</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-slate-700"></div>
            <div className="flex items-center gap-2 hover:text-yellow-400 transition-colors cursor-default">
              <Phone size={16} />
              <span className="font-mono dir-ltr">98344555</span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

// مكون فرعي للبطاقة لتقليل التكرار وتحسين القراءة
const GradeCard = ({ title, desc, icon, color, bgColor, borderColor, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`group relative overflow-hidden rounded-3xl p-6 text-right border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${borderColor}`}
  >
    <div className={`absolute top-0 left-0 w-24 h-24 ${bgColor} rounded-full blur-2xl -translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700`}></div>
    
    <div className="relative z-10 flex flex-col h-full justify-between gap-6">
      <div className="flex justify-between items-start">
        <div className={`w-14 h-14 rounded-2xl ${bgColor} border border-white/5 flex items-center justify-center ${color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-slate-500">
          <BookOpen size={20} />
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-black text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">{title}</h2>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  </button>
);

export default WelcomeScreen;
