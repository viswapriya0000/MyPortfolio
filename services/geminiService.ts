
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, SKILL_CATEGORIES, EXPERIENCES } from '../constants';

const API_KEY = process.env.API_KEY || "";

export class GeminiService {
  private ai: GoogleGenAI;
  private context: string;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: API_KEY });
    this.context = `
      You are an AI assistant for the portfolio of ${PERSONAL_INFO.name}, a ${PERSONAL_INFO.designation}.
      Bio: ${PERSONAL_INFO.bio}
      
      Skills:
      ${SKILL_CATEGORIES.map(c => `${c.category}: ${c.skills.join(', ')}`).join('\n')}
      
      Experience:
      ${EXPERIENCES.map(e => `${e.role} at ${e.company} (${e.period}): ${e.description.join(' ')}`).join('\n')}
      
      Education: ${PERSONAL_INFO.education.degree} from ${PERSONAL_INFO.education.college}.
      
      Answer user questions about ${PERSONAL_INFO.name}'s professional background, technical skills, and experience politely and concisely. If you don't know something based on the context, say so.
    `;
  }

  async ask(question: string): Promise<string> {
    if (!API_KEY) return "The AI assistant is currently offline as the API key is missing.";
    
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: question,
        config: {
          systemInstruction: this.context,
          temperature: 0.7,
        },
      });
      return response.text || "I'm sorry, I couldn't process that request.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Oops! Something went wrong with my logic circuits. Please try again.";
    }
  }
}

export const geminiService = new GeminiService();
