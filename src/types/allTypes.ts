export type Priority = "low" | "mid" | "high"

export interface Todo {
  id: number;
  title: string;
  priority: Priority;
  description: string;
  done: boolean;
}

export type FilterNames = 'all' | Priority

export interface PriorityOption {
  id: number;
  label: Capitalize<Priority>;
  value: Priority
}

export type QueryFromType = 'create' | 'view' | 'edit';

export type QueryFrom = {
  [K in QueryFromType]: Capitalize<K>;
};


export interface TypeEmit {
  (e: "update:modelValue", value: string): void;
}