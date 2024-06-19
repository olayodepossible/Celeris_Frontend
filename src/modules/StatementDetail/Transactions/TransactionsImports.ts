import { ColumnDef } from "@tanstack/react-table";
import fileUploads from "../../../services/fileuploads.json";
export const columns: ColumnDef<any>[] = [
  {
    header: () => "Date",
    accessorKey: "creation date",
  },
  {
    header: () => "Transaction Description",
    accessorKey: "analysis id",
  },
  {
    header: () => "Type",
    accessorKey: "status",
    cell: (value) => value.getValue(),
  },
  {
    header: () => "Amount",
    accessorKey: "file name",
  },
  {
    header: () => "Balance",
    accessorKey: "uploaded by",
  },
];

export const data = fileUploads;
