import React from 'react';
import { Section, QuizQuestion, WeatherElement, Factor, OmanRegion, EarthLayer, Unit } from './types';
import { 
  Thermometer, Wind, CloudRain, Droplets, Gauge, TrendingUp, Users, BookOpen, Sun, Map, Shield, 
  Landmark, Scale, Briefcase, FileText, Globe, CloudSun, Target, Info, Activity, Mountain, Layers, 
  Skull, Ship, Building2, User, Coins, Compass, Clock, MapPin, Database, History, ListChecks, 
  BarChart3, Pyramid, Baby, Plane, AlertTriangle, Scale as ScaleIcon, Calculator, 
  MapPinned, Layout, Swords, Scroll, Crown, PenTool, Hammer, Settings, ArrowRightLeft, Star,
  Flag, UserCheck, HeartHandshake, Vote
} from 'lucide-react';

// Images are referenced directly from the public folder (relative paths with ./)
const mapBinNur = './map_bin_nur.png';
const mapSocotra = './map_socotra.png';

// --- GRADE 7 UNITS ---
export const UNITS: Unit[] = [
  {
    id: 'UNIT_1',
    title: 'الوحدة الأولى: المُناخُ وعملياتُ تشكيلِ الأرضِ',
    description: 'دراسة شاملة للغلاف الجوي، المناخ، وطبقات الأرض وعمليات تشكيلها.',
    lessons: [
      {
        id: 'WEATHER',
        title: 'الدرس الأول: الطقسُ والمُناخُ',
        subtitle: 'مفاهيم أساسية',
        description: 'درس تفاعلي شامل عن عناصر الطقس، العوامل المؤثرة فيه، والفرق بينه وبين المناخ.',
        icon: '🌦️',
        color: 'bg-sky-50 hover:bg-sky-100 border-sky-200',
        textColor: 'text-sky-700',
        available: true
      },
      {
        id: 'OMAN_CLIMATE',
        title: 'الدرس الثاني: مُناخُ سلطنةِ عُمانَ',
        subtitle: 'دراسة حالة',
        description: 'استكشف الأقاليم المناخية في السلطنة، العوامل المؤثرة، وجهود السلطنة في الحياد الصفري.',
        icon: '🇴🇲',
        color: 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200',
        textColor: 'text-emerald-700',
        available: true
      },
      {
        id: 'EARTH_LAYERS',
        title: 'الدرس الثالث: تشكيلُ سطحِ الأرضِ: العملياتُ الداخليةُ',
        subtitle: 'باطن الأرض',
        description: 'رحلة إلى باطن الأرض لاستكشاف الطبقات، الزلازل، البراكين، وحركة الصفائح التكتونية.',
        icon: '🌋',
        color: 'bg-orange-50 hover:bg-orange-100 border-orange-200',
        textColor: 'text-orange-700',
        available: true
      },
      {
        id: 'EXTERNAL_PROCESSES',
        title: 'الدرس الرابع: تشكيلُ سطحِ الأرضِ: العملياتُ الخارجيةُ',
        subtitle: 'التجوية والتعرية',
        description: 'كيف تتشكل الكهوف، الكثبان الرملية، والموائد الصخرية بفعل التجوية والتعرية.',
        icon: '🏜️',
        color: 'bg-amber-50 hover:bg-amber-100 border-amber-200',
        textColor: 'text-amber-700',
        available: true
      },
      {
        id: 'UNIT_1_ASSESSMENT',
        title: 'أُقَيِّمُ تَعَلُّمِي (اختبار الوحدة الأولى)',
        subtitle: 'اختبار شامل',
        description: 'اختبار نهائي للوحدة الأولى مبني بدقة على أسئلة الكتاب المدرسي (صفحات 62-66).',
        icon: '📝',
        color: 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200',
        textColor: 'text-indigo-700',
        available: true
      }
    ]
  },
  {
    id: 'UNIT_2',
    title: 'الوحدة الثانية: عُمانُ في العصرِ العباسيِّ',
    description: 'دراسة تاريخية لعمان والخلافة العباسية (العصر الثاني).',
    lessons: [
        {
            id: 'UMAYYAD_STATE', // Kept for consistency if referenced, but actually Abbasid unit has Abbasid lessons
            title: 'الدرس الأول: العصر العباسي الثاني',
            subtitle: 'الخلافة العباسية',
            description: 'الأوضاع السياسية، الحركات الانفصالية، والغزو المغولي.',
            icon: '🏴',
            color: 'bg-purple-50 hover:bg-purple-100 border-purple-200',
            textColor: 'text-purple-700',
            available: true
        },
        {
            id: 'OMAN_ABBASID',
            title: 'الدرس الثاني: عُمان في العصر العباسي',
            subtitle: 'عمان والخلافة',
            description: 'استقلال عمان، الإمامة الثانية، الحملات العباسية، ودولة النباهنة.',
            icon: '⚔️',
            color: 'bg-rose-50 hover:bg-rose-100 border-rose-200',
            textColor: 'text-rose-700',
            available: true
        },
        {
            id: 'OMAN_CIVILIZATION',
            title: 'الدرس الثالث: المنجزات الحضارية العمانية',
            subtitle: 'تراث وحضارة',
            description: 'جولة في المنجزات الثقافية والعلمية والمعمارية لعمان في العصور الإسلامية.',
            icon: '🏺',
            color: 'bg-amber-50 hover:bg-amber-100 border-amber-200',
            textColor: 'text-amber-700',
            available: true
        },
        {
            id: 'UNIT_2_ASSESSMENT',
            title: 'أُقَيِّمُ تَعَلُّمِي (اختبار الوحدة الثانية)',
            subtitle: 'اختبار شامل',
            description: 'اختبار نهائي للوحدة الثانية مبني بدقة على أسئلة الكتاب المدرسي.',
            icon: '📝',
            color: 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200',
            textColor: 'text-indigo-700',
            available: true
        }
    ]
  },
  {
    id: 'UNIT_3',
    title: 'الوحدة الثالثة: سلطنةُ عُمانَ نهضةٌ متجددةٌ',
    description: 'الهوية العمانية، النظام الأساسي للدولة، ومؤسسات المجتمع المدني.',
    lessons: [
        {
            id: 'BASIC_STATUTE',
            title: 'الدرس الأول: النظامُ الأساسيُّ بوصلةُ الوطنِ',
            subtitle: 'الدستور والقانون',
            description: 'مفهوم النظام الأساسي للدولة، أهميته، أبوابه السبعة، والمبادئ الموجهة للسياسة.',
            icon: '📜',
            color: 'bg-teal-50 hover:bg-teal-100 border-teal-200',
            textColor: 'text-teal-700',
            available: true
        },
        {
            id: 'STATE_INSTITUTIONS',
            title: 'الدرس الثاني: الدولةُ: تنظيمُها ومؤسساتُها',
            subtitle: 'هيكل الدولة',
            description: 'الهيكل التنظيمي للدولة، السلطات الثلاث (التشريعية، التنفيذية، القضائية)، والخدمات الحكومية.',
            icon: '🏛️',
            color: 'bg-cyan-50 hover:bg-cyan-100 border-cyan-200',
            textColor: 'text-cyan-700',
            available: true
        },
        {
            id: 'UNIT_3_ASSESSMENT',
            title: 'أُقَيِّمُ تَعَلُّمِي (اختبار الوحدة الثالثة)',
            subtitle: 'اختبار شامل',
            description: 'اختبار نهائي للوحدة الثالثة مبني بدقة على أسئلة الكتاب المدرسي (صفحات 126-127).',
            icon: '📝',
            color: 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200',
            textColor: 'text-indigo-700',
            available: true
        }
    ]
  },
  {
    id: 'FINAL_EXAM',
    title: 'الاختبار النهائي الشامل (الصف السابع)',
    description: 'هل أنت مستعد للتحدي الأكبر؟ اختبار شامل يغطي جميع وحدات الكتاب المدرسي.',
    lessons: [
        {
            id: 'FINAL_EXAM',
            title: 'الاختبار النهائي للمنهج',
            subtitle: 'تحدي الأبطال',
            description: 'اختبار محاكاة للاختبار النهائي يضم أسئلة من الوحدات الثلاث (المناخ، التاريخ، التربية الوطنية).',
            icon: '🏆',
            color: 'bg-slate-100 hover:bg-yellow-50 border-yellow-400',
            textColor: 'text-slate-800',
            available: true
        }
    ]
  }
];

// --- GRADE 6 UNITS ---
export const UNITS_SIXTH: Unit[] = [
    {
        id: 'UNIT_1_G6',
        title: 'الوحدة الأولى: جغرافية السكان: المصادر والخصائص',
        description: 'استكشف عالم البيانات السكانية، مصادرها، وكيفية جمعها في سلطنة عمان.',
        lessons: [
            {
                id: 'SIXTH_POPULATION',
                title: 'الدرس الأول: البيانات السكانية',
                subtitle: 'المصادر والأهمية',
                description: 'تعرف على المصادر الأولية والثانوية للبيانات، وتطور التعداد السكاني في سلطنة عمان من الورقي إلى الإلكتروني.',
                icon: '📊',
                color: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
                textColor: 'text-blue-700',
                available: true
            },
            {
                id: 'SIXTH_STRUCTURE',
                title: 'الدرس الثاني: بنية السكان',
                subtitle: 'التركيب السكاني',
                description: 'دراسة التركيب النوعي والعمري للسكان، وفهم الهرم السكاني، والتركيب الاقتصادي.',
                icon: '👥',
                color: 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200',
                textColor: 'text-emerald-700',
                available: true
            },
            {
                id: 'SIXTH_GROWTH',
                title: 'الدرس الثالث: النمو السكاني',
                subtitle: 'الزيادة السكانية',
                description: 'مفهوم النمو السكاني، الزيادة الطبيعية وغير الطبيعية، وآثار النمو السكاني.',
                icon: '📈',
                color: 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200',
                textColor: 'text-indigo-700',
                available: true
            },
            {
                id: 'SIXTH_DENSITY',
                title: 'الدرس الرابع: الكثافة السكانية',
                subtitle: 'توزيع السكان',
                description: 'أين يعيش الناس؟ وكيف نحسب الكثافة السكانية؟ تحليل لتوزيع السكان في العالم وعمان.',
                icon: '🗺️',
                color: 'bg-rose-50 hover:bg-rose-100 border-rose-200',
                textColor: 'text-rose-700',
                available: true
            },
            {
                id: 'UNIT_1_G6_ASSESSMENT',
                title: 'أُقَيِّمُ تَعَلُّمِي (نهاية الوحدة الأولى)',
                subtitle: 'أنشطة الكتاب ص 52-53',
                description: 'حل أسئلة الكتاب المدرسي: المصطلحات، النتائج المترتبة، التصنيف، المسائل الحسابية، والمقارنات.',
                icon: '📝',
                color: 'bg-slate-100 hover:bg-indigo-50 border-indigo-200',
                textColor: 'text-indigo-800',
                available: true
            }
        ]
    },
    {
        id: 'UNIT_2_G6',
        title: 'الوحدة الثانية: الدولة الأموية',
        description: 'قيام الدولة الأموية وأبرز خلفائها وفتوحاتها، وعلاقة عمان بها.',
        lessons: [
            {
                id: 'UMAYYAD_STATE',
                title: 'الدرس الأول: قيام الدَّولَةُ الأُمَوِيَّةُ',
                subtitle: 'النشأة والفتوحات',
                description: 'من التأسيس إلى السقوط: نظام الحكم، الفتوحات الكبرى، المنجزات الحضارية، وأسباب النهاية.',
                icon: '🕌',
                color: 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200',
                textColor: 'text-emerald-700',
                available: true
            },
            {
                id: 'OMAN_UMAYYAD',
                title: 'الدرس الثاني: علاقة عُمان بالدولة الأموية',
                subtitle: 'استقلال وصراع',
                description: 'موقف عمان مع بداية الحكم الأموي، استقلالها، حملات الحجاج بن يوسف، والولاة الأمويين.',
                icon: '⚔️',
                color: 'bg-orange-50 hover:bg-orange-100 border-orange-200',
                textColor: 'text-orange-700',
                available: true
            },
            {
                id: 'OMAN_UMAYYAD_ACHIEVEMENTS',
                title: 'الدرس الثالث: منجزات عمان في عصر الدولة الأموية',
                subtitle: 'حضارة وتاريخ',
                description: 'اكتشف إسهامات العمانيين العلمية، العسكرية، والاقتصادية، ودورهم في نشر الإسلام.',
                icon: '🏺',
                color: 'bg-teal-50 hover:bg-teal-100 border-teal-200',
                textColor: 'text-teal-700',
                available: true
            },
            {
                id: 'UNIT_2_G6_ASSESSMENT',
                title: 'أُقَيِّمُ تَعَلُّمِي (اختبار الوحدة الثانية)',
                subtitle: 'اختبار شامل',
                description: 'اختبار نهائي للوحدة الثانية.',
                icon: '📝',
                color: 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200',
                textColor: 'text-indigo-700',
                available: true
            }
        ]
    },
    {
        id: 'UNIT_3_G6',
        title: 'الوحدة الثالثة: المجتمع المدني',
        description: 'المشاركة المجتمعية، العمل التطوعي، ومؤسسات المجتمع المدني.',
        lessons: [
            {
                id: 'SIXTH_CIVIL_SOCIETY',
                title: 'الدرس الأول: مؤسسات المجتمع المدني',
                subtitle: 'تطوع وعطاء',
                description: 'مفهوم المجتمع المدني، أنواع المؤسسات، ودورها في خدمة المجتمع وتحقيق رؤية عمان 2040.',
                icon: '🤝',
                color: 'bg-teal-50 hover:bg-teal-100 border-teal-200',
                textColor: 'text-teal-700',
                available: true
            },
            {
                id: 'SIXTH_COMMUNITY_PARTICIPATION',
                title: 'الدرس الثاني: المشاركة المجتمعية',
                subtitle: 'شراكة وبناء',
                description: 'مفهوم المشاركة المجتمعية، أشكالها المختلفة (الشورى، التطوع)، وأهميتها في بناء الوطن.',
                icon: '🙌',
                color: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
                textColor: 'text-blue-700',
                available: true
            },
            {
                id: 'UNIT_3_G6_ASSESSMENT',
                title: 'أُقَيِّمُ تَعَلُّمِي (نهاية الوحدة الثالثة)',
                subtitle: 'أنشطة الكتاب ص 97',
                description: 'حل أسئلة الكتاب المدرسي: المصطلحات، الجهات المختصة، الأدوار، وتصنيف الأعمال.',
                icon: '📝',
                color: 'bg-purple-50 hover:bg-purple-100 border-purple-200',
                textColor: 'text-purple-700',
                available: true
            }
        ]
    }
];

export const WEATHER_ELEMENTS_DATA: WeatherElement[] = [
  {
    id: 'temp',
    name: 'درجة الحرارة',
    instrument: 'الترجومتر',
    unit: 'درجة مئوية / فهرنهايت',
    definition: 'مقياس لمدى سخونة أو برودة الجو.',
    mechanism: 'تتمدد السوائل (كالزئبق) بالحرارة وتنكمش بالبرودة.',
    importance: 'تؤثر في جميع الأنشطة البشرية ونوع ملابسه وزراعته.',
    realWorldExample: 'تحديد نوع الملابس (صوفية أو قطنية) قبل الخروج.',
    icon: <Thermometer />
  },
  {
    id: 'pressure',
    name: 'الضغط الجوي',
    instrument: 'البارومتر',
    unit: 'مليبار',
    definition: 'وزن عمود الهواء الواقع على مساحة معينة من سطح الأرض.',
    mechanism: 'الهواء له وزن، ويتغير بتغير الحرارة والارتفاع.',
    importance: 'مؤشر قوي لتغيرات الطقس وهبوب العواصف.',
    realWorldExample: 'شعور بطنين الأذن عند صعود الجبل أو الطائرة.',
    icon: <Gauge />
  },
  {
    id: 'wind',
    name: 'الرياح',
    instrument: 'الأنيمومتر (سرعة) / دوارة الرياح (اتجاه)',
    unit: 'عقدة / كم/س',
    definition: 'حركة الهواء الأفقية من مناطق الضغط المرتفع للمنخفض.',
    mechanism: 'اختلاف الضغط الجوي يدفع الهواء للحركة.',
    importance: 'توليد الطاقة، تحريك السحب، وتلقيح النباتات.',
    realWorldExample: 'حركة الأشجار والأعلام، وتوجيه الشراع.',
    icon: <Wind />
  },
  {
    id: 'humidity',
    name: 'الرطوبة',
    instrument: 'الهيجرومتر',
    unit: 'نسبة مئوية %',
    definition: 'كمية بخار الماء العالق في الهواء.',
    mechanism: 'تبخر الماء من المسطحات المائية والنباتات.',
    importance: 'تؤثر في الشعور بالحرارة وتشكل السحب والأمطار.',
    realWorldExample: 'تكون الندى على السيارات صباحاً، أو الضباب.',
    icon: <Droplets />
  },
  {
    id: 'precipitation',
    name: 'الأمطار',
    instrument: 'مقياس المطر',
    unit: 'ملم',
    definition: 'تكثف بخار الماء وسقوطه على شكل قطرات مائية.',
    mechanism: 'تبرد السحب المحملة بالبخار فتتكون قطرات الماء.',
    importance: 'مصدر المياه العذبة الأساسي للحياة والزراعة.',
    realWorldExample: 'جريان الأودية وامتلاء السدود.',
    icon: <CloudRain />
  }
];

export const SECTIONS = [
  { id: Section.INTRO, label: 'مقدمة ونشاط', icon: <Target /> },
  { id: Section.DEFINITION, label: 'الطقس والمناخ', icon: <ArrowRightLeft /> },
  { id: Section.FACTORS, label: 'العوامل المؤثرة', icon: <Settings /> },
  { id: Section.ELEMENTS, label: 'عناصر الطقس', icon: <CloudSun /> },
  { id: Section.QUIZ, label: 'اختبر معلوماتك', icon: <ListChecks /> },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  { id: 1, question: 'ما هو العنصر الذي يقاس بجهاز "الأنيمومتر"؟', options: ['الحرارة', 'الضغط الجوي', 'سرعة الرياح', 'الرطوبة'], correctIndex: 2 },
  { id: 2, question: 'كلما ارتفعنا عن سطح البحر 150 متراً، ماذا يحدث لدرجة الحرارة؟', options: ['تزيد 1 درجة', 'تنقص 1 درجة', 'تبقى ثابتة', 'تنقص 5 درجات'], correctIndex: 1 },
  { id: 3, question: 'ما الفرق الرئيسي بين الطقس والمناخ؟', options: ['المكان', 'الفترة الزمنية', 'أدوات القياس', 'لا يوجد فرق'], correctIndex: 1 },
];

export const OMAN_REGIONS_DATA: OmanRegion[] = [
    { id: 'semi_desert', name: 'المناخ شبه الصحراوي', description: 'مناخ حار صيفاً ودافئ شتاءً مع أمطار قليلة.', characteristics: 'يسود في معظم مناطق شمال السلطنة.', location: 'شمال عُمان', color: 'bg-yellow-50 border-yellow-200' },
    { id: 'mediterranean', name: 'مناخ البحر المتوسط', description: 'معتدل صيفاً وبارد شتاءً.', characteristics: 'يظهر في المناطق الجبلية المرتفعة.', location: 'الجبل الأخضر وجبل شمس', color: 'bg-green-50 border-green-200' },
    { id: 'dry_desert', name: 'المناخ الصحراوي الجاف', description: 'حار جداً وجاف صيفاً، بارد شتاءً.', characteristics: 'ندرة الأمطار وارتفاع المدى الحراري.', location: 'الربع الخالي والسهول الداخلية', color: 'bg-orange-50 border-orange-200' },
    { id: 'monsoon', name: 'المناخ الموسمي', description: 'معتدل صيفاً مع أمطار موسمية (الخريف)، ودافئ شتاءً.', characteristics: 'تأثر بالرياح الموسمية الجنوبية الغربية.', location: 'محافظة ظفار', color: 'bg-teal-50 border-teal-200' }
];

export const OMAN_SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة وقصة', icon: <Target /> },
    { id: Section.FACTORS, label: 'العوامل المؤثرة', icon: <Settings /> },
    { id: Section.REGIONS, label: 'الأقاليم المناخية', icon: <Map /> },
    { id: Section.SEASONS, label: 'الفصول والأنواء', icon: <CloudSun /> },
    { id: Section.DATA_ANALYSIS, label: 'تحليل البيانات', icon: <BarChart3 /> },
    { id: Section.QUIZ, label: 'اختبر معلوماتك', icon: <ListChecks /> },
];

export const OMAN_QUIZ_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: 'أي الأقاليم المناخية يسود في الجبل الأخضر؟', options: ['الصحراوي', 'الموسمي', 'البحر المتوسط', 'الاستوائي'], correctIndex: 2 },
    { id: 2, question: 'متى تسقط الأمطار الموسمية على محافظة ظفار؟', options: ['الشتاء', 'الصيف', 'الربيع', 'الخريف'], correctIndex: 1 },
    { id: 3, question: 'ما هو العامل الرئيسي الذي يجعل مناخ عمان حاراً بشكل عام؟', options: ['الموقع الفلكي (مدار السرطان)', 'المسطحات المائية', 'الارتفاع', 'الغطاء النباتي'], correctIndex: 0 },
];

export const EARTH_LAYERS_DATA: EarthLayer[] = [
    { id: 'crust', name: 'القشرة الأرضية', depth: '8 - 60 كم', temp: 'معتدلة', description: 'الطبقة الخارجية الصلبة التي نعيش عليها. تتكون من صخور وتربة.', state: 'صلبة', color: '#8B4513' },
    { id: 'mantle', name: 'الوشاح (الستار)', depth: '2900 كم', temp: '1000 - 3700°C', description: 'طبقة سميكة من الصخور المنصهرة (الماجما). تتحرك ببطء مسببة حركة الصفائح.', state: 'لدنة / سائلة جزئياً', color: '#D2691E' },
    { id: 'outer_core', name: 'اللب الخارجي', depth: '2200 كم', temp: '4000 - 5000°C', description: 'طبقة سائلة من الحديد والنيكل. دورانها يولد المجال المغناطيسي للأرض.', state: 'سائلة', color: '#FF8C00' },
    { id: 'inner_core', name: 'اللب الداخلي', depth: '1200 كم (نصف القطر)', temp: '6000°C', description: 'كرة صلبة كثيفة جداً من الحديد والنيكل. حرارتها تضاهي سطح الشمس.', state: 'صلبة', color: '#FF4500' }
];

export const EARTH_SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة', icon: <Target /> },
    { id: Section.LAYERS, label: 'طبقات الأرض', icon: <Layers /> },
    { id: Section.TECTONICS, label: 'الصفائح التكتونية', icon: <Activity /> },
    { id: Section.PROCESSES, label: 'العمليات الداخلية', icon: <Mountain /> },
    { id: Section.QUIZ, label: 'اختبر معلوماتك', icon: <ListChecks /> },
];

export const EARTH_QUIZ_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: 'أي طبقات الأرض تكون في الحالة السائلة؟', options: ['القشرة', 'الوشاح', 'اللب الخارجي', 'اللب الداخلي'], correctIndex: 2 },
    { id: 2, question: 'ما العملية التي تؤدي لتكون الجبال الالتوائية؟', options: ['التباعد', 'التقارب (الضغط)', 'الانزلاق', 'البراكين'], correctIndex: 1 },
    { id: 3, question: 'ما الصخور التي تكثر في جبال عمان وتعتبر جزءاً من قشرة المحيط؟', options: ['الجرانيت', 'الرخام', 'الأفيوليت', 'البازلت'], correctIndex: 2 },
];

export const EXTERNAL_SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة', icon: <Target /> },
    { id: Section.WEATHERING, label: 'التجوية', icon: <Hammer /> },
    { id: Section.EROSION, label: 'التعرية', icon: <Wind /> },
    { id: Section.DEPOSITION, label: 'الترسيب', icon: <Layers /> },
    { id: Section.QUIZ, label: 'اختبر معلوماتك', icon: <ListChecks /> },
];

export const EXTERNAL_QUIZ_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: 'تفتت الصخور وبقاؤها في مكانها يسمى:', options: ['التعرية', 'التجوية', 'الترسيب', 'النقل'], correctIndex: 1 },
    { id: 2, question: 'أي العوامل التالية يكون الكثبان الرملية؟', options: ['المياه الجارية', 'الأمواج', 'الرياح', 'الجليد'], correctIndex: 2 },
    { id: 3, question: 'الكهوف الجيرية (مثل كهف الهوتة) ناتجة عن:', options: ['التجوية الميكانيكية', 'التجوية الكيميائية (الإذابة)', 'النحت البحري', 'الرياح'], correctIndex: 1 },
];

export const ABBASID_SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة تاريخية', icon: <History /> },
    { id: Section.POLITICAL_MAP, label: 'الخريطة السياسية', icon: <Map /> },
    { id: Section.PROSPERITY, label: 'مظاهر الازدهار', icon: <TrendingUp /> },
    { id: Section.CRUSADES, label: 'الحروب الصليبية', icon: <Swords /> },
    { id: Section.MONGOLS, label: 'الغزو المغولي', icon: <Skull /> },
    { id: Section.QUIZ, label: 'اختبر معلوماتك', icon: <ListChecks /> },
];

export const ABBASID_QUIZ_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: 'انتهت الدولة العباسية بسقوط بغداد عام:', options: ['656هـ', '132هـ', '583هـ', '400هـ'], correctIndex: 0 },
    { id: 2, question: 'القائد المسلم الذي انتصر في معركة حطين هو:', options: ['قطز', 'صلاح الدين الأيوبي', 'بيبرس', 'هولاكو'], correctIndex: 1 },
    { id: 3, question: 'المؤسسة العلمية التي أحرقها المغول في بغداد هي:', options: ['الجامع الأموي', 'الأزهر', 'بيت الحكمة', 'نظامية بغداد'], correctIndex: 2 },
];

export const OMAN_ABBASID_SECTIONS = [
    { id: Section.INTRO, label: 'الإمامة الثانية', icon: <Target /> },
    { id: Section.SOCOTRA_CAMPAIGN, label: 'نجدة سقطرى', icon: <Ship /> },
    { id: Section.ABBASID_INVASION, label: 'حملة محمد بن نور', icon: <Swords /> },
    { id: Section.NABHANID_ERA, label: 'دولة النباهنة', icon: <Crown /> },
    { id: Section.QUIZ, label: 'اختبر معلوماتك', icon: <ListChecks /> },
];

export const OMAN_ABBASID_QUIZ_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: 'من هو الإمام الذي قاد حملة تحرير سقطرى؟', options: ['الجلندى بن مسعود', 'الصلت بن مالك', 'عزان بن تميم', 'راشد بن سعيد'], correctIndex: 1 },
    { id: 2, question: 'أطلق العمانيون على القائد العباسي محمد بن نور لقب:', options: ['السفاح', 'ابن بور', 'الطاغية', 'المنتصر'], correctIndex: 1 },
    { id: 3, question: 'استمر حكم النباهنة لعمان قرابة:', options: ['100 عام', '200 عام', '400 عام', '500 عام'], correctIndex: 3 },
];

export const OMAN_CIVILIZATION_SECTIONS = [
    { id: Section.OMAN_CIV_INTRO, label: 'المقدمة', icon: <Target /> },
    { id: Section.OMAN_CIV_CULTURE, label: 'الحياة الثقافية', icon: <BookOpen /> },
    { id: Section.OMAN_CIV_ECONOMY, label: 'الحياة الاقتصادية', icon: <Coins /> },
    { id: Section.OMAN_CIV_ARCH, label: 'العمارة', icon: <Building2 /> },
    { id: Section.QUIZ, label: 'اختبر معلوماتك', icon: <ListChecks /> },
];

export const OMAN_CIVILIZATION_QUIZ_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: 'مؤسس علم العروض هو العالم العماني:', options: ['ابن دريد', 'الخليل بن أحمد', 'كعب بن معدان', 'المبرد'], correctIndex: 1 },
    { id: 2, question: 'من أشهر القلاع التي بناها النباهنة:', options: ['قلعة بهلاء', 'قلعة نزوى', 'حصن الحزم', 'قلعة الرستاق'], correctIndex: 0 },
    { id: 3, question: 'برع العمانيون في صناعة السفن، واشتهرت مدينة ... بذلك:', options: ['مسقط', 'صور', 'صحار', 'نزوى'], correctIndex: 1 },
];

export const BASIC_STATUTE_SECTIONS = [
    { id: Section.STATUTE_INTRO, label: 'المفهوم والأهمية', icon: <BookOpen /> },
    { id: Section.STATUTE_STRUCTURE, label: 'أبواب النظام', icon: <Layout /> },
    { id: Section.STATUTE_PILLARS, label: 'المرتكزات', icon: <Building2 /> },
    { id: Section.STATUTE_PRINCIPLES, label: 'المبادئ الموجهة', icon: <Compass /> },
    { id: Section.STATUTE_RUMORS, label: 'نشاط تحليلي', icon: <AlertTriangle /> },
    { id: Section.QUIZ, label: 'اختبر معلوماتك', icon: <ListChecks /> },
];

export const BASIC_STATUTE_QUIZ_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: 'صدر النظام الأساسي الحالي للدولة في عام:', options: ['1996م', '2011م', '2020م', '2021م'], correctIndex: 3 },
    { id: 2, question: 'دين الدولة في سلطنة عمان هو:', options: ['الإسلام', 'حرية الأديان', 'العلمانية', 'لا يوجد دين رسمي'], correctIndex: 0 },
    { id: 3, question: 'أي من التالية يُعد من المبادئ الاجتماعية؟', options: ['العدل والمساواة', 'حرية الاقتصاد', 'الأمن والسلام', 'التعليم حق للجميع'], correctIndex: 3 },
];

export const STATE_INSTITUTIONS_SECTIONS = [
    { id: Section.STATE_INTRO, label: 'المقدمة', icon: <Target /> },
    { id: Section.STATE_STRUCTURE, label: 'السلطات الثلاث', icon: <Scale /> },
    { id: Section.HEAD_OF_STATE, label: 'رئيس الدولة', icon: <Crown /> },
    { id: Section.GOV_INSTITUTIONS, label: 'المؤسسات', icon: <Building2 /> },
    { id: Section.GOV_SERVICES, label: 'الخدمات', icon: <Briefcase /> },
    { id: Section.QUIZ, label: 'اختبر معلوماتك', icon: <ListChecks /> },
];

export const STATE_INSTITUTIONS_QUIZ_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: 'السلطة المسؤولة عن إصدار القوانين هي:', options: ['التنفيذية', 'التشريعية', 'القضائية', 'الإعلامية'], correctIndex: 1 },
    { id: 2, question: 'رئيس الدولة في سلطنة عمان هو:', options: ['رئيس الوزراء', 'السلطان', 'رئيس مجلس الشورى', 'المفتي'], correctIndex: 1 },
    { id: 3, question: 'مجلس الوزراء يتبع السلطة:', options: ['التشريعية', 'القضائية', 'التنفيذية', 'الرقابية'], correctIndex: 2 },
];

export const SIXTH_POPULATION_SECTIONS = [
    { id: Section.INTRO, label: 'المقدمة', icon: <Target /> },
    { id: Section.POP_SOURCES, label: 'مصادر البيانات', icon: <Database /> },
    { id: Section.CENSUS_EVOLUTION, label: 'تطور التعداد', icon: <History /> },
    { id: Section.POP_IMPORTANCE, label: 'أهمية البيانات', icon: <Star /> },
    { id: Section.SUMMARY, label: 'ملخص الدرس', icon: <FileText /> }, // Replaced BriefcaseBusiness with FileText
    { id: Section.QUIZ, label: 'اختبر معلوماتك', icon: <ListChecks /> },
];

export const SIXTH_POPULATION_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'أي مما يلي يعد مصدراً أولياً للبيانات السكانية؟', options: ['سجلات المدارس', 'التعداد السكاني', 'سجلات المواليد', 'سجلات الوفيات'], correctIndex: 1 },
    { id: 2, question: 'أجري أول تعداد سكاني في سلطنة عمان عام:', options: ['1970', '1993', '2003', '2010'], correctIndex: 1 },
    { id: 3, question: 'لماذا تجري الدول التعداد السكاني؟', options: ['لمعرفة الأسماء فقط', 'للتخطيط وتوفير الخدمات', 'لجمع الضرائب', 'للتسليات'], correctIndex: 1 },
];

export const SIXTH_STRUCTURE_SECTIONS = [
    { id: Section.INTRO, label: 'المقدمة', icon: <Target /> },
    { id: Section.FACTORS, label: 'التركيب النوعي', icon: <Users /> },
    { id: Section.REGIONS, label: 'التركيب العمري', icon: <BarChart3 /> },
    { id: Section.DATA_ANALYSIS, label: 'الهرم السكاني', icon: <Pyramid /> },
    { id: Section.PROCESSES, label: 'التركيب الاقتصادي', icon: <Briefcase /> },
    { id: Section.QUIZ, label: 'اختبر معلوماتك', icon: <ListChecks /> },
];

export const SIXTH_STRUCTURE_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'يقصد بالتركيب النوعي تقسيم السكان إلى:', options: ['أطفال وشيوخ', 'ذكور وإناث', 'عاملين وعاطلين', 'متعلمين وأميين'], correctIndex: 1 },
    { id: 2, question: 'الفئة العمرية التي تمثل "قوة العمل" هي:', options: ['صغار السن', 'متوسطو السن', 'كبار السن', 'الرضع'], correctIndex: 1 },
    { id: 3, question: 'قاعدة الهرم السكاني العريضة تدل على:', options: ['ارتفاع المواليد', 'انخفاض المواليد', 'ارتفاع الوفيات', 'ارتفاع كبار السن'], correctIndex: 0 },
];

export const SIXTH_GROWTH_SECTIONS = [
    { id: Section.GROWTH_INTRO, label: 'المفهوم', icon: <Target /> },
    { id: Section.OMAN_GROWTH_CHART, label: 'تحليل النمو', icon: <TrendingUp /> },
    { id: Section.NATURAL_INCREASE, label: 'الزيادة الطبيعية', icon: <Baby /> },
    { id: Section.MIGRATION_IMPACT, label: 'الهجرة', icon: <Plane /> },
    { id: Section.GROWTH_EFFECTS, label: 'الآثار', icon: <Scale /> },
    { id: Section.QUIZ, label: 'اختبر معلوماتك', icon: <ListChecks /> },
];

export const SIXTH_GROWTH_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'الزيادة الطبيعية هي الفرق بين:', options: ['المهاجرين والوفيات', 'المواليد والوفيات', 'الذكور والإناث', 'الصغار والكبار'], correctIndex: 1 },
    { id: 2, question: 'انتقال الأفراد من مكان لآخر يسمى:', options: ['السياحة', 'الهجرة', 'التجوال', 'الزيارة'], correctIndex: 1 },
    { id: 3, question: 'إذا زاد عدد السكان عن الموارد المتاحة، يحدث:', options: ['رفاهية', 'نقص في الغذاء والخدمات', 'زيادة في التعليم', 'تحسن صحي'], correctIndex: 1 },
];

export const SIXTH_DENSITY_SECTIONS = [
    { id: Section.DENSITY_INTRO, label: 'المفهوم', icon: <Target /> },
    { id: Section.DENSITY_FACTORS, label: 'العوامل المؤثرة', icon: <Settings /> },
    { id: Section.CITY_VILLAGE, label: 'المدينة والريف', icon: <Building2 /> },
    { id: Section.DENSITY_CALC, label: 'حساب الكثافة', icon: <Calculator /> },
    { id: Section.DENSITY_MAP_ANALYSIS, label: 'تحليل الخرائط', icon: <Map /> },
    { id: Section.OMAN_DENSITY, label: 'كثافة عمان', icon: <MapPinned /> },
    { id: Section.QUIZ, label: 'اختبر معلوماتك', icon: <ListChecks /> },
];

export const SIXTH_DENSITY_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'تحسب الكثافة السكانية بقسمة عدد السكان على:', options: ['المواليد', 'الوفيات', 'المساحة', 'عدد المدن'], correctIndex: 2 },
    { id: 2, question: 'من العوامل الطبيعية الجاذبة للسكان:', options: ['المناخ المعتدل', 'الصحاري الجافة', 'الجبال الوعرة', 'قلة المياه'], correctIndex: 0 },
    { id: 3, question: 'تعتبر محافظة مسقط ذات كثافة سكانية:', options: ['منخفضة', 'متوسطة', 'مرتفعة', 'نادرة'], correctIndex: 2 },
];

export const UMAYYAD_SECTIONS = [
    { id: Section.UMAYYAD_RISE, label: 'القيام والتأسيس', icon: <Target /> },
    { id: Section.UMAYYAD_CONQUESTS, label: 'الفتوحات', icon: <Swords /> },
    { id: Section.UMAYYAD_ACHIEVEMENTS, label: 'المنجزات', icon: <Star /> },
    { id: Section.UMAYYAD_FALL, label: 'النهاية والسقوط', icon: <AlertTriangle /> },
    { id: Section.QUIZ, label: 'اختبر معلوماتك', icon: <ListChecks /> },
];

export const UMAYYAD_QUIZ_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: 'مؤسس الدولة الأموية هو:', options: ['عمر بن عبدالعزيز', 'عبدالملك بن مروان', 'معاوية بن أبي سفيان', 'الوليد بن عبدالملك'], correctIndex: 2 },
    { id: 2, question: 'بنى الخليفة عبدالملك بن مروان:', options: ['المسجد الأقصى', 'قبة الصخرة', 'الجامع الأموي', 'مسجد قباء'], correctIndex: 1 },
    { id: 3, question: 'سقطت الدولة الأموية بعد معركة:', options: ['اليرموك', 'القادسية', 'الزاب', 'حطين'], correctIndex: 2 },
];

export const OMAN_UMAYYAD_SECTIONS = [
    { id: Section.OMAN_UMAYYAD_INTRO, label: 'المقدمة', icon: <Target /> },
    { id: Section.OMAN_UMAYYAD_STANCE, label: 'الموقف العماني', icon: <Shield /> },
    { id: Section.OMAN_UMAYYAD_INDEPENDENCE, label: 'الاستقلال', icon: <Flag /> },
    { id: Section.OMAN_UMAYYAD_CONTROL, label: 'السيطرة الأموية', icon: <Swords /> },
    { id: Section.OMAN_UMAYYAD_GOVERNORS, label: 'الولاة', icon: <UserCheck /> },
    { id: Section.QUIZ, label: 'اختبر معلوماتك', icon: <ListChecks /> },
];

export const OMAN_UMAYYAD_QUIZ_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: 'قاد حملات الدولة الأموية للسيطرة على عمان القائد:', options: ['عمرو بن العاص', 'الحجاج بن يوسف', 'خالد بن الوليد', 'أبو عبيدة'], correctIndex: 1 },
    { id: 2, question: 'حافظت عمان على استقلالها في بداية العصر الأموي بقيادة:', options: ['الجلندى بن مسعود', 'سعيد وسليمان ابنا عباد', 'الصلت بن مالك', 'أحمد بن سعيد'], correctIndex: 1 },
    { id: 3, question: 'قاوم العمانيون السيطرة الأموية بسبب:', options: ['الرغبة في الاستقلال', 'سوء معاملة بعض الولاة', 'الحفاظ على المذهب', 'جميع ما سبق'], correctIndex: 3 },
];

export const OMAN_UMAYYAD_ACHIEVEMENTS_SECTIONS = [
    { id: Section.OMAN_ACHIEVEMENTS_INTRO, label: 'المقدمة واليونسكو', icon: <Target /> },
    { id: Section.OMAN_ACHIEVEMENTS_CULTURE, label: 'المجال الثقافي', icon: <BookOpen /> },
    { id: Section.OMAN_ACHIEVEMENTS_MILITARY, label: 'المجال العسكري', icon: <Swords /> },
    { id: Section.OMAN_ACHIEVEMENTS_ECONOMY, label: 'المجال الاقتصادي', icon: <Coins /> },
    { id: Section.QUIZ, label: 'اختبر معلوماتك', icon: <ListChecks /> },
];

export const OMAN_UMAYYAD_ACHIEVEMENTS_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'أول من ألف في علم الفقه من العلماء العمانيين هو:', options: ['كعب بن معدان', 'الخليل بن أحمد', 'جابر بن زيد', 'المهلب بن أبي صفرة'], correctIndex: 2 },
    { id: 2, question: 'العالم العماني الذي اكتشف علم العروض هو:', options: ['جابر بن زيد', 'الخليل بن أحمد الفراهيدي', 'كعب بن معدان', 'ابن دريد'], correctIndex: 1 },
    { id: 3, question: 'تم سك أول عملة نقدية في عمان سنة:', options: ['41 هـ', '69 هـ', '81 هـ', '132 هـ'], correctIndex: 2 },
    { id: 4, question: 'القائد العماني الذي ولاه الأمويون على خراسان وقام بفتوحات واسعة:', options: ['يزيد بن المهلب', 'المهلب بن أبي صفرة', 'زياد بن المهلب', 'سليمان بن عباد'], correctIndex: 1 },
    { id: 5, question: 'الشخصية العمانية التي أدرجت ضمن برنامج اليونسكو للأحداث التاريخية:', options: ['جابر بن زيد', 'المهلب بن أبي صفرة', 'الخليل بن أحمد الفراهيدي', 'هند بنت المهلب'], correctIndex: 2 },
];

export const CIVIL_SOCIETY_SECTIONS = [
    { id: Section.CIVIL_SOCIETY_INTRO, label: 'المفهوم والنشأة', icon: <HeartHandshake /> },
    { id: Section.CIVIL_SOCIETY_TYPES, label: 'أنواع المؤسسات', icon: <Building2 /> },
    { id: Section.CIVIL_SOCIETY_IMPORTANCE, label: 'الرؤية والتحديات', icon: <Target /> },
    { id: Section.QUIZ, label: 'اختبر معلوماتك', icon: <ListChecks /> },
];

export const CIVIL_SOCIETY_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'الهدف الرئيسي لمؤسسات المجتمع المدني هو:', options: ['الربح المادي', 'خدمة المجتمع دون مقابل', 'إصدار القوانين', 'حماية الحدود'], correctIndex: 1 },
    { id: 2, question: 'أقل عدد من الأعضاء لتأسيس جمعية أهلية حسب القانون العماني هو:', options: ['10 أفراد', '20 فرداً', '40 فرداً', '100 فرد'], correctIndex: 2 },
    { id: 3, question: 'من الأمثلة على الجمعيات التي تهتم بالجانب الصحي:', options: ['جمعية الكتاب', 'جمعية البيئة', 'جمعية الأطفال ذوي الإعاقة', 'جمعية المرأة'], correctIndex: 2 },
];

export const COMMUNITY_PARTICIPATION_SECTIONS = [
    { id: Section.COMMUNITY_INTRO, label: 'المقدمة والمفهوم', icon: <Target /> },
    { id: Section.COMMUNITY_FORMS, label: 'أشكال المشاركة', icon: <Vote /> },
    { id: Section.COMMUNITY_IMPORTANCE, label: 'الأهمية والرؤية', icon: <Star /> },
    { id: Section.QUIZ, label: 'اختبر معلوماتك', icon: <ListChecks /> },
];

export const COMMUNITY_PARTICIPATION_QUIZ: QuizQuestion[] = [
    { id: 1, question: 'ما هو الشكل التاريخي للمشاركة المجتمعية في عمان؟', options: ['المجالس البلدية', 'السبلة العمانية', 'مجلس الشورى', 'النوادي الرياضية'], correctIndex: 1 },
    { id: 2, question: 'المشاركة في الإدلاء بالصوت لاختيار أعضاء مجلس الشورى تندرج تحت:', options: ['العمل التطوعي', 'المناسبات الوطنية', 'الانتخابات', 'اللقاءات'], correctIndex: 2 },
    { id: 3, question: 'من فوائد المشاركة المجتمعية:', options: ['تعزيز الانتماء للوطن', 'زيادة الخلافات', 'تأخير التنمية', 'إضاعة الوقت'], correctIndex: 0 },
];

export const UNIT_1_ASSESSMENT_QUESTIONS = QUIZ_QUESTIONS; 
export const UNIT_2_ASSESSMENT_QUESTIONS = ABBASID_QUIZ_QUESTIONS; 
export const UNIT_3_ASSESSMENT_QUESTIONS = BASIC_STATUTE_QUIZ_QUESTIONS;