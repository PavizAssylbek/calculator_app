export interface ITip {
  tipPercentage: number;
  tip?: number;
  custom?: boolean;
  type?: string;
  value?: number | string;
  placeholder?: string;
  handleChangeProps: (value: number) => void;
}
