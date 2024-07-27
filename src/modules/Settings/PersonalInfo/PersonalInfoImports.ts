import { IInputProps } from "../../../shared/Forms/Form";

export const personalInfoForm: IInputProps[] = [
	{
	  label: "Full Name",
	  placeholder: "Your Full Name",
	  type: "input",
	  value: [],
	  isRequired: true,
	},
	
	{
	  label: "Phone Number",
	  placeholder: "09012345678",
	  type: "input",
	  value: [],
	  isRequired: true,
	},
	
	{
	  label: "Email",
	  placeholder: "Your Email",
	  type: "input",
	  value: [],
	  isRequired: true,
	},
	
	{
	  label: "Role",
	  placeholder: "Your role",
	  type: "input",
	  value: [],
	  isRequired: true,
	},
	
  ];
export const changePasswordForm: IInputProps[] = [
	{
	  label: "New password",
	  placeholder: "************",
	  type: "input",
	  value: [],
	  isRequired: true,
	},
	{
	  label: "Confirm password",
	  placeholder: "************",
	  type: "input",
	  value: [],
	  isRequired: true,
	},	
  ];
  