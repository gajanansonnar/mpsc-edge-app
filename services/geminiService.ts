import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

class GeminiService {
  private modelName = 'gemini-3-flash-preview';
  // Use flexible typing for history to ensure compatibility with SDK
  private chatHistory: any[] = [];

  public async generateQuote(): Promise<string> {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: this.modelName,
        contents: "Generate a short, powerful, and unique motivational quote in Marathi for an MPSC aspirant. It should be about grit, determination, or the dream of serving Maharashtra. Keep it under 15 words. Do not include any English text or labels like 'Quote:'.",
      });
      return response.text || "कष्ट इतके शांतपणे करा की तुमचे यश धिंगाणा घालेल!";
    } catch (error) {
      console.error("Error generating quote:", error);
      return "यशाची गुरुकिल्ली म्हणजे सातत्य!";
    }
  }

  public async sendMessageStream(message: string, onChunk: (text: string) => void): Promise<string> {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    try {
      // Create chat with existing history
      const chat = ai.chats.create({
        model: this.modelName,
        config: {
          systemInstruction: "You are an expert tutor for MPSC (Maharashtra Public Service Commission) aspirants. Answer questions concisely, accurately, and explain concepts clearly. You can answer in English or Marathi based on the user's input. Provide exam-oriented explanations.",
          temperature: 0.7,
        },
        history: [...this.chatHistory], // Pass a copy of the history
      });

      const resultStream = await chat.sendMessageStream({ message });

      let fullResponse = '';
      for await (const chunk of resultStream) {
        const responseChunk = chunk as GenerateContentResponse;
        const text = responseChunk.text;
        if (text) {
          fullResponse += text;
          onChunk(fullResponse);
        }
      }

      // Update local history after successful completion
      if (fullResponse) {
        this.chatHistory.push({ role: 'user', parts: [{ text: message }] });
        this.chatHistory.push({ role: 'model', parts: [{ text: fullResponse }] });
      }

      return fullResponse;
      
    } catch (error) {
      console.error("Error sending message to Gemini:", error);
      throw error;
    }
  }
}

export const geminiService = new GeminiService();