'use client'
import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { Person } from '@/types';
import { data } from '@/data/persons';

const TableComponent = () => {
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'id', //access nested data with dot notation
        header: 'S.no',
        size: 30,   
      },
     
      {
        accessorKey: 'name', //access nested data with dot notation
        header: 'Name',
        size: 200,
        muiTableBodyCellProps: {
            style: {
              fontSize: '16px', // Cell text font size
              textTransform: 'capitalize'
            },
          },
      },
      {
        accessorKey: 'urdu', //access nested data with dot notation
        header: 'Name',
        size: 200,
        muiTableBodyCellProps: {
            style: {
              fontSize: '18px', // Cell text font size
              fontFamily: 'urdu'
            },
          },
      },
      {
        accessorKey: 'amount',
        header: 'Amount',
        size: 80,
      },
      
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return <MaterialReactTable table={table} />;
};

export default TableComponent;
