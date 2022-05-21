export interface InputI {
  id: string;
  name: string;
  icon: string;
  type: string;
  label: string;
  value: string;
  decimals: number;
  placeholder: string;
  validate?: boolean;
  updatePropsValue: (value: string) => void;
}
