export type Priority = "low" | "mid" | "high"

export interface Todo {
  id: any;
  title: string;
  priority: Priority | string;
  done: boolean;
}

export type FilterNames = 'all' | 'done' | Exclude<Priority, 'mid'>

export interface PriorityOption {
  id: any;
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