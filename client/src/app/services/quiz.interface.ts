export interface Quiz {
  questions: Question[];
  results: any[];
}

export interface Question {
  question: string;
  options: Option[];
}

export interface Option {
  text: string;
  value: string;
}
