export interface ITip {
  tipPercentage?: string;
  currentPrecent?: string;
  custom?: boolean;
  type?: string;
  value?: string;
  placeholder?: string;
  handleChangeProps: (value: string) => void;
}
