'use client'
import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { Person } from '@/types';
import { data } from '@/data/persons';
import Link from 'next/link';

const TableComponent = () => {
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'id', //access nested data with dot notation
        header: 'سیریل نمبر ',
        size: 30,   
        muiTableHeadCellProps: {
          style: {
            fontFamily: 'urdu',
            fontSize: '18px'
          }
        }
      },
     
      {
        accessorKey: 'name', //access nested data with dot notation
        header: 'انگریزی نام ',
        size: 200,
        muiTableBodyCellProps: {
            style: {
              fontSize: '16px', // Cell text font size
              textTransform: 'capitalize'
            },
          },
          muiTableHeadCellProps: {
            style: {
              fontFamily: 'urdu',
              fontSize: '18px'
            }
          }
      },
      {
        accessorKey: 'urdu', //access nested data with dot notation
        header: 'اردو  نام ',
        size: 200,
        muiTableBodyCellProps: {
            style: {
              fontSize: '18px', // Cell text font size
              fontFamily: 'urdu'
            },
          },
          muiTableHeadCellProps: {
            style: {
              fontFamily: 'urdu',
              fontSize: '18px'
            }
          }
      },
      {
        accessorKey: 'amount',
        header: 'رقم',
        size: 80,
        muiTableHeadCellProps: {
          style: {
            fontFamily: 'urdu',
            fontSize: '18px'
          }
        },
        Cell: (data) => {
          let sum = data?.row?.original?.details?.dues;
          if(typeof sum === 'number') {
            data?.row?.original?.details?.history?.forEach(data => {
              if(typeof data?.amount === 'number' && typeof sum === 'number') {
                sum += data?.amount;
              }
         })
          }
          return (
            <h1 className='urdu flex items-center space-x-2'><span>روپے</span> <span>{sum}</span></h1>
          )
        }
      },
      {
        accessorKey: 'details',
        header: 'تفصیل',
        size: 80,
        muiTableHeadCellProps: {
          style: {
            fontFamily: 'urdu',
            fontSize: '18px'
          }
        },
        Cell: (data) => 
        {
          console.log(data.row.original)
          return (
            <Link href={`/person/${data?.row?.original?.id}`} className='outline-none bg-green-600 !text-white capitalize rounded-lg px-4 py-2 urdu'>تفصیل </Link>
          )
        }
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
