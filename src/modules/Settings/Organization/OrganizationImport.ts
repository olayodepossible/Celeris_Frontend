import { IInputProps } from "../../../shared/Forms/Form";
import { ColumnDef } from "@tanstack/react-table";
import fileUploads from "../../../services/fileuploads.json";
export type Person = {
  name: string;
  age: number;
  country: string;
};

export const organizationForm: IInputProps[] = [
	{
	  label: "Full Name",
	  placeholder: "Your Full Name",
	  type: "input",
	  value: [],
	  isRequired: true,
	},
	
	{
	  label: "Phone Number",
	  placeholder: "your phone number",
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
  export const columns: ColumnDef<any>[] = [
  {
    header: () => "#",
    accessorKey: "id",
  },
  {
    header: () => "Analysis ID",
    accessorKey: "analysis_id",
  },
  {
    header: () => "File Name",
    accessorKey: "file name",
  },
  {
    header: () => "Status",
    accessorKey: "status",
    cell: (value) => value.getValue(),
  },
  {
    header: () => "File Type",
    accessorKey: "file type",
  },
  {
    header: () => "Creation Date",
    accessorKey: "creation date",
  },
  {
    header: () => "Uploaded By",
    accessorKey: "uploaded by",
  },
];

export const data = fileUploads;
