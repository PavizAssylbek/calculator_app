export interface ITip {
  tipPercentage?: number;
  currentPrecent?: number;
  custom?: boolean;
  type?: string;
  value?: string | number;
  placeholder?: string;
  handleChangeProps: (value: number) => void;
}
