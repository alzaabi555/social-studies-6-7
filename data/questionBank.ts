
import { QuizQuestion } from '../types';
import { GRADE_5_QUESTIONS } from './grade5Questions';
import { GRADE_6_QUESTIONS } from './grade6Questions';
import { GRADE_7_QUESTIONS } from './grade7Questions';

// Combine all questions into one dictionary
export const QUESTION_BANK: Record<string, QuizQuestion[]> = {
    ...GRADE_5_QUESTIONS,
    ...GRADE_6_QUESTIONS,
    ...GRADE_7_QUESTIONS
};

// Retrieve questions for a specific lesson
export const getQuestions = (lessonId: string): QuizQuestion[] => {
    return QUESTION_BANK[lessonId] || [];
};
