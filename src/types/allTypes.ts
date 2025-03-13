export interface Todo {
  id: number;
  title: string;
  priority: "low" | "mid" | "high";
  description: string;
  done: boolean;
}

export type FilterNames = 'all' | 'low' | 'high' | 'done'

export interface TypeEmit {
  (e: "update:modelValue", value: string): void;
}