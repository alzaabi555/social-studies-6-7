
import { QuizQuestion } from '../types';

// Helper to generate a unique ID
const genId = (prefix: string, index: number) => parseInt(`${prefix.charCodeAt(0)}${index}`);

// --- REAL DATA SAMPLES (Examples for specific lessons) ---
const WEATHER_QUESTIONS = [
    { q: "ما هو العنصر الذي يحدد وزن عمود الهواء فوق منطقة ما؟", opts: ["الحرارة", "الضغط الجوي", "الرطوبة", "الرياح"], c: 1 },
    { q: "الجهاز المستخدم لقياس سرعة الرياح هو:", opts: ["البارومتر", "الأنيمومتر", "الثرمومتر", "الهيجرومتر"], c: 1 },
    { q: "وحدة قياس الضغط الجوي هي:", opts: ["الدرجة المئوية", "العقدة", "المليبار", "الملم"], c: 2 },
    { q: "أي مما يلي يعتبر وصفاً لحالة الجو في فترة زمنية قصيرة؟", opts: ["المناخ", "الطقس", "التضاريس", "الغلاف الجوي"], c: 1 },
    { q: "تتناقص درجة الحرارة كلما ارتفعنا عن سطح البحر بمعدل درجة واحدة لكل:", opts: ["100 متر", "150 متر", "200 متر", "50 متر"], c: 1 },
    { q: "الرياح التي تهب من البحر إلى اليابسة نهاراً تسمى:", opts: ["نسيم البر", "نسيم البحر", "الرياح الموسمية", "الرياح التجارية"], c: 1 },
    { q: "يتأثر مناخ سلطنة عمان صيفاً بتعامد الشمس على مدار:", opts: ["الجدي", "السرطان", "الاستواء", "القطبي"], c: 1 },
    { q: "أي الغازات التالية يشكل النسبة الأكبر في الغلاف الجوي؟", opts: ["الأكسجين", "النيتروجين", "ثاني أكسيد الكربون", "الهيدروجين"], c: 1 },
    { q: "الخطوط الوهمية التي تساعد في تحديد المناطق الحرارية هي:", opts: ["خطوط الطول", "دوائر العرض", "خطوط الكنتور", "خطوط غرينتش"], c: 1 },
    { q: "يستخدم جهاز الهيجرومتر لقياس:", opts: ["المطر", "الرطوبة", "الضغط", "الحرارة"], c: 1 }
];

// --- GENERATOR FUNCTION ---
export const getQuestionsForLesson = (lessonId: string, lessonTitle: string): QuizQuestion[] => {
    let baseQuestions: { q: string; opts: string[]; c: number }[] = [];

    // 1. Inject Real Questions if available
    if (lessonId === 'WEATHER') {
        baseQuestions = [...WEATHER_QUESTIONS];
    } else if (lessonId === 'SIXTH_POPULATION') {
        baseQuestions = [
            { q: "تعداد 2020 في سلطنة عمان اعتمد على:", opts: ["الزيارات الميدانية", "السجلات الإدارية", "المسح بالعينة", "التقدير الشخصي"], c: 1 },
            { q: "المصدر الأساسي والأشمل للبيانات السكانية هو:", opts: ["سجلات المواليد", "التعداد السكاني", "سجلات المدارس", "جوازات السفر"], c: 1 },
            { q: "يجرى التعداد السكاني عادة كل:", opts: ["5 سنوات", "10 سنوات", "سنتين", "20 سنة"], c: 1 },
            { q: "أول تعداد سكاني في سلطنة عمان كان عام:", opts: ["1970", "1993", "2003", "2010"], c: 1 },
            { q: "البيانات التي نحصل عليها من سجلات المستشفيات تعتبر مصادر:", opts: ["أولية", "ثانوية", "ميدانية", "غير رسمية"], c: 1 }
        ];
    }

    // 2. Fill the rest to reach 20 questions using algorithmic generation based on lesson context
    // This simulates a large database by creating context-aware variations
    const countNeeded = 20 - baseQuestions.length;
    
    for (let i = 0; i < countNeeded; i++) {
        const type = i % 4;
        let qText = "";
        let options = [];
        let correct = 0;

        if (type === 0) {
            qText = `تعتبر دراسة "${lessonTitle}" مهمة لأنها تساعدنا على:`;
            options = ["فهم الظواهر المحيطة", "زيادة التلوث", "تجاهل التاريخ", "تقليل الموارد"];
            correct = 0;
        } else if (type === 1) {
            qText = `أي من العبارات التالية صحيحة فيما يتعلق بـ ${lessonTitle}؟`;
            options = ["لا تؤثر في حياة الإنسان", "تعتبر جزءاً أساسياً من المنهج", "حدثت في المستقبل فقط", "ليس لها علاقة بعمان"];
            correct = 1;
        } else if (type === 2) {
            qText = `أحد العناصر الرئيسية في موضوع ${lessonTitle} هو:`;
            options = ["العنصر البشري/الطبيعي", "الخيال العلمي", "القصص الخيالية", "لا شيء مما ذكر"];
            correct = 0;
        } else {
            qText = `سؤال تطبيقي ${i + 1} حول ${lessonTitle}: اختر الإجابة الأدق.`;
            options = ["الخيار الأول (صحيح)", "الخيار الثاني", "الخيار الثالث", "الخيار الرابع"];
            correct = 0;
        }

        baseQuestions.push({ q: qText, opts: options, c: correct });
    }

    // 3. Map to QuizQuestion Interface
    return baseQuestions.map((q, index) => ({
        id: index + 1,
        question: q.q,
        options: q.opts,
        correctIndex: q.c
    }));
};
