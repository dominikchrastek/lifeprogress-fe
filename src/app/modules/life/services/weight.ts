export class WeightResponse<T> {
  data: T;
}

export class Weight {
  id: string;
  value: number;
  unit: string;
  timestamp: string;
}

export class PostWeight {
  unit: string;
  value: number;
  timestamp?: string;
}
