export interface IHistory {
  duration: { current: number; goal: number };
  date: string;
  status: string;
  breaks: { current: number; goal: number; duration: number };
  reps: { current: number; goal: number };
  quote: { text: string; author: string };
}
