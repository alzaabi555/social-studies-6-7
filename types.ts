import React from 'react';

export type LessonId = 
  // Grade 7
  | 'WEATHER' | 'OMAN_CLIMATE' | 'EARTH_LAYERS' | 'EXTERNAL_PROCESSES' | 'UNIT_1_ASSESSMENT' 
  | 'UMAYYAD_STATE' | 'OMAN_ABBASID' | 'OMAN_CIVILIZATION' | 'UNIT_2_ASSESSMENT' 
  | 'BASIC_STATUTE' | 'STATE_INSTITUTIONS' | 'UNIT_3_ASSESSMENT' | 'FINAL_EXAM'
  // Grade 6
  | 'SIXTH_POPULATION' | 'SIXTH_STRUCTURE' | 'SIXTH_GROWTH' | 'SIXTH_DENSITY' | 'UNIT_1_G6_ASSESSMENT'
  | 'OMAN_UMAYYAD' | 'OMAN_UMAYYAD_ACHIEVEMENTS' | 'UNIT_2_G6_ASSESSMENT'
  | 'SIXTH_CIVIL_SOCIETY' | 'SIXTH_COMMUNITY_PARTICIPATION' | 'UNIT_3_G6_ASSESSMENT' // Added Unit 3 Assessment
  | null;

export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  textColor: string;
  available: boolean;
}

export interface Unit {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export enum Section {
  // Common
  INTRO = 'INTRO',
  QUIZ = 'QUIZ',
  SUMMARY = 'SUMMARY',
  
  // Grade 7 Sections
  DEFINITION = 'DEFINITION',
  FACTORS = 'FACTORS',
  ELEMENTS = 'ELEMENTS',
  REGIONS = 'REGIONS',
  SEASONS = 'SEASONS',
  DATA_ANALYSIS = 'DATA_ANALYSIS',
  LAYERS = 'LAYERS',
  TECTONICS = 'TECTONICS',
  PROCESSES = 'PROCESSES',
  WEATHERING = 'WEATHERING',
  EROSION = 'EROSION',
  DEPOSITION = 'DEPOSITION',
  
  // Grade 7 History (Umayyad & Abbasid)
  UMAYYAD_RISE = 'UMAYYAD_RISE',
  UMAYYAD_CONQUESTS = 'UMAYYAD_CONQUESTS',
  UMAYYAD_ACHIEVEMENTS = 'UMAYYAD_ACHIEVEMENTS',
  UMAYYAD_FALL = 'UMAYYAD_FALL',
  
  POLITICAL_MAP = 'POLITICAL_MAP',
  PROSPERITY = 'PROSPERITY',
  CRUSADES = 'CRUSADES',
  MONGOLS = 'MONGOLS',
  IMAMATE_STABILITY = 'IMAMATE_STABILITY',
  SOCOTRA_CAMPAIGN = 'SOCOTRA_CAMPAIGN',
  ABBASID_INVASION = 'ABBASID_INVASION',
  NABHANID_ERA = 'NABHANID_ERA',
  OMAN_CIV_INTRO = 'OMAN_CIV_INTRO',
  OMAN_CIV_CULTURE = 'OMAN_CIV_CULTURE',
  OMAN_CIV_ECONOMY = 'OMAN_CIV_ECONOMY',
  OMAN_CIV_ARCH = 'OMAN_CIV_ARCH',
  
  // Grade 7 Civics
  STATUTE_INTRO = 'STATUTE_INTRO',
  STATUTE_STRUCTURE = 'STATUTE_STRUCTURE',
  STATUTE_PILLARS = 'STATUTE_PILLARS',
  STATUTE_PRINCIPLES = 'STATUTE_PRINCIPLES',
  STATUTE_RUMORS = 'STATUTE_RUMORS',
  STATE_INTRO = 'STATE_INTRO',
  STATE_STRUCTURE = 'STATE_STRUCTURE',
  HEAD_OF_STATE = 'HEAD_OF_STATE',
  GOV_INSTITUTIONS = 'GOV_INSTITUTIONS',
  GOV_SERVICES = 'GOV_SERVICES',

  // Grade 6 Sections
  
  // Grade 6 Population Sections
  POP_SOURCES = 'POP_SOURCES',
  CENSUS_EVOLUTION = 'CENSUS_EVOLUTION',
  POP_IMPORTANCE = 'POP_IMPORTANCE',
  
  // Grade 6 Structure Sections
  // Reusing FACTORS, REGIONS, DATA_ANALYSIS, PROCESSES for Structure lesson context mapping

  // Grade 6 Growth Sections
  GROWTH_INTRO = 'GROWTH_INTRO',
  OMAN_GROWTH_CHART = 'OMAN_GROWTH_CHART',
  NATURAL_INCREASE = 'NATURAL_INCREASE',
  MIGRATION_IMPACT = 'MIGRATION_IMPACT',
  GROWTH_EFFECTS = 'GROWTH_EFFECTS',

  // Grade 6 Density Sections (Updated)
  DENSITY_INTRO = 'DENSITY_INTRO',
  DENSITY_FACTORS = 'DENSITY_FACTORS',
  CITY_VILLAGE = 'CITY_VILLAGE',
  DENSITY_CALC = 'DENSITY_CALC',
  DENSITY_MAP_ANALYSIS = 'DENSITY_MAP_ANALYSIS',
  OMAN_DENSITY = 'OMAN_DENSITY',

  // Grade 6 Oman & Umayyads (New)
  OMAN_UMAYYAD_INTRO = 'OMAN_UMAYYAD_INTRO',
  OMAN_UMAYYAD_STANCE = 'OMAN_UMAYYAD_STANCE',
  OMAN_UMAYYAD_INDEPENDENCE = 'OMAN_UMAYYAD_INDEPENDENCE',
  OMAN_UMAYYAD_CONTROL = 'OMAN_UMAYYAD_CONTROL',
  OMAN_UMAYYAD_GOVERNORS = 'OMAN_UMAYYAD_GOVERNORS',

  // Grade 6 Oman Achievements (New)
  OMAN_ACHIEVEMENTS_INTRO = 'OMAN_ACHIEVEMENTS_INTRO',
  OMAN_ACHIEVEMENTS_CULTURE = 'OMAN_ACHIEVEMENTS_CULTURE',
  OMAN_ACHIEVEMENTS_MILITARY = 'OMAN_ACHIEVEMENTS_MILITARY',
  OMAN_ACHIEVEMENTS_ECONOMY = 'OMAN_ACHIEVEMENTS_ECONOMY',

  // Grade 6 Civil Society (New)
  CIVIL_SOCIETY_INTRO = 'CIVIL_SOCIETY_INTRO',
  CIVIL_SOCIETY_TYPES = 'CIVIL_SOCIETY_TYPES',
  CIVIL_SOCIETY_IMPORTANCE = 'CIVIL_SOCIETY_IMPORTANCE',

  // Grade 6 Community Participation (New)
  COMMUNITY_INTRO = 'COMMUNITY_INTRO',
  COMMUNITY_FORMS = 'COMMUNITY_FORMS',
  COMMUNITY_IMPORTANCE = 'COMMUNITY_IMPORTANCE'
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  visualComponent?: React.ReactNode; // Optional custom visual for the question
}

export interface WeatherElement {
  id: string;
  name: string;
  instrument: string;
  unit: string;
  definition: string;
  mechanism: string; // How it works/happens
  importance: string; // Why do we measure it?
  realWorldExample: string;
  icon: React.ReactNode;
}

export interface Factor {
  id: string;
  title: string;
  description: string;
  detailedExplanation: string;
  scientificPrinciple: string; // The "Why"
  effect: string;
}

export interface OmanRegion {
    id: string;
    name: string;
    description: string;
    characteristics: string;
    location: string;
    color: string;
}

export interface EarthLayer {
    id: string;
    name: string;
    depth: string;
    temp: string;
    description: string;
    state: string; // Solid, Molten, etc.
    color: string;
}