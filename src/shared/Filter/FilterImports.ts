export interface IInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  isRequired?: boolean | false;
  value: string[];
}

export interface IFilterProps {
  inputs: IInputProps[];
  button?: {
    text: string;
    width?: string;
  };
  styles: string;
  onApplyFilters?: (selectedFilters: { [key: string]: string }) => void;
  onFormValidityChange?: (isValid: boolean) => void;
}
