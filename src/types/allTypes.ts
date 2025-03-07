export interface Todo {
  id: number;
  title: string;
  priority: "low" | "mid" | "high";
  done: boolean;
}