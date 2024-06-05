import { ColumnDef } from '@tanstack/react-table';
import fileUploads from '../../services/fileuploads.json';
export type Person = {
  name: string;
  age: number;
  country: string;
};
export const filterInputs = [
  {
    label: 'This month',
    type: 'select',
    value: ['Electronics', 'Books', 'Clothing'],
  },
  { label: 'Status', type: 'select', value: ['Apple', 'Samsung', 'Sony'] },
  {
    label: 'File Type',
    type: 'select',
    value: ['Under $50', '$50 to $100', 'Above $100'],
  },
  {
    label: 'File Name',
    placeholder: 'File Name',
    type: 'input',
    value: [],
  },
];
export const columns: ColumnDef<any>[] = [
  {
    header: () => '#',
    accessorKey: 'id',
  },
  {
    header: () => 'Analysis ID',
    accessorKey: 'analysis id',
  },
  {
    header: () => 'File Name',
    accessorKey: 'file name',
  },
  {
    header: () => 'Status',
    accessorKey: 'status',
    cell: (value) => value.getValue(),
  },
  {
    header: () => 'File Type',
    accessorKey: 'file type',
  },
  {
    header: () => 'Creation Date',
    accessorKey: 'creation date',
  },
  {
    header: () => 'Uploaded By',
    accessorKey: 'uploaded by',
  },
];

export const data = fileUploads;
