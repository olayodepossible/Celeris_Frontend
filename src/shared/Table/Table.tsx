// TableWithPagination.tsx
import React, { useMemo } from 'react';
import {
  PaginationState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import './Table.css';
import { Pagination, Stack } from '@mui/material';
interface TableProps {
  columns: any[];
  data: any[];
  withPagination?: boolean;
  variant?: "outlined" | "normal"
}

const TableComponent = ({ columns, data, withPagination,variant }: TableProps) => {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  // const [data, setData] = React.useState()
  const pageNumbers: any[] = [];
  const memoColumn = useMemo(() => columns, []);
  const memoData = useMemo(() => data, []);
  const table = useReactTable({
    columns: memoColumn,
    data: memoData,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });
  (() => {
    const pageCount = table.getPageCount();
    for (let i = 0; i < pageCount; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  })();
  return (
    <>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={variant}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {withPagination && (
        <div className="d-flex justify-content-between w-75 pagination">
          <div>
            Showing {table.getRowModel().rows.length.toLocaleString()} of{' '}
            {table.getRowCount().toLocaleString()} Rows
          </div>
          <div>
            <Stack spacing={2} justifySelf={'center'} alignSelf={'center'}>
              <Pagination
                count={pageNumbers.length}
                onChange={(event, page) => {
                  table.setPageIndex(page - 1);
                  console.log(event, page);
                }}
                hidePrevButton
                hideNextButton
                color="primary"
              />
            </Stack>
          </div>
        </div>
      )}
    </>
  );
};

export default TableComponent;
