export interface FormField {
  name: string;
  label: string;
  type: "text" | "number" | "email" | "password" | "select";
  placeholder?: string;
  required?: boolean;
  value?: string[];
}

export interface IFormProps {
  inputs: FormField[];
  button?: {
    text: string;
    width?: string;
  };
  styles: string;
  onSubmit?: (selectedFilters: { [key: string]: string }) => void;
  onFormValidityChange?: (isValid: boolean) => void;
}

export const handleSubmit = (onSubmit: any, values: any) => {
  if (onSubmit) {
    onSubmit(values);
  }
};
