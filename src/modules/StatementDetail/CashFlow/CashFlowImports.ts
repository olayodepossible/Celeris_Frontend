import { ColumnDef } from '@tanstack/react-table';
import { Person } from '../../JobList/JobListImports';

export const columns: ColumnDef<Person>[] = [
  {
    header: () => 'Month Period',
    accessorKey: 'period',
  },
  {
    header: () => 'Opening Balance',
    accessorKey: 'opening_balance',
  },
  {
    header: () => 'Closing Balance',
    accessorKey: 'closing_balance',
  },
  {
    header: () => 'Average Credit',
    accessorKey: 'avrg_credit',
  },
  {
    header: () => 'Average Debit',
    accessorKey: 'avrg_debit',
  },
  {
    header: () => 'STdev Credit',
    accessorKey: 'stdev_debit',
  },
  {
    header: () => 'STdev Debit',
    accessorKey: 'stdev_debit',
  },
];
