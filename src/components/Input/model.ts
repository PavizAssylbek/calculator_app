export interface InputI {
  id: string;
  name: string;
  icon: string;
  type: string;
  label: string;
  value: number | string;
  decimals: number;
  placeholder: string;
  validate?: boolean;
  updatePropsValue: (value: number) => void;
}
