export interface Weight {
  id: string;
  value: number;
  unit: string;
  timestamp: string;
}

export interface PostWeight {
  unit: string;
  value: number;
  timestamp?: string;
}
