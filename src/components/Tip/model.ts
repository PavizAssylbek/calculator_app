export interface ITip {
  tipPercentage?: number;
  currentPrecent?: number;
  custom?: boolean;
  type?: string;
  value?: number | string;
  placeholder?: string;
  handleChangeProps: (value: number) => void;
}
