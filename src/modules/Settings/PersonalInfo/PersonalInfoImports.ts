import { FormField } from "../../../shared/Form/FormImports";

export const personalInfoForm: FormField[] = [
  {
    name: "full name",
    label: "Full Name",
    placeholder: "Your Full Name",
    type: "text",
    required: true,
  },

  {
    name: "phone number",
    label: "Phone Number",
    placeholder: "your phone number",
    type: "text",
    required: true,
  },

  {
    name: "email",
    label: "Email",
    placeholder: "Your Email",
    type: "email",
    required: true,
  },

  {
    name: "role",
    label: "Role",
    placeholder: "Your role",
    type: "text",
    required: true,
  },
];
export const changePasswordForm: FormField[] = [
  {
    name: "new password",
    label: "New password",
    placeholder: "************",
    type: "password",
    required: true,
  },
  {
    name: "confirm password",
    label: "Confirm password",
    placeholder: "************",
    type: "password",
    required: true,
  },
];
