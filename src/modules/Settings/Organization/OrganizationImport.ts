import { ColumnDef } from "@tanstack/react-table";
import fileUploads from "../../../services/fileuploads.json";
import { FormField } from "../../../shared/Form/FormImports";
export type Person = {
	name: string;
	age: number;
	country: string;
};

export const organizationForm: FormField[] = [
	{
		name:"full name",
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
