'use client'
import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';

//example data type
type Person = {
  id: number
  name: string;
  urdu: string
  amount: number | string
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
  {
    id: 1, 
    name: 'amir ghafar',
    urdu: 'امیر  غفار',
    amount: 3000
  },
  {
    id: 2, 
    name: 'gull ghafar',
    urdu: 'گل  غفار ',
    amount: 450
  },
  {
    id: 3, 
    name: 'wasi ullah',
    urdu: 'وصی  الله ',
    amount: 1000
  },
  {
    id: 4, 
    name: 'muhammad rafiq',
    urdu: 'محمّد رفیق ',
    amount: 5000
  },
  {
    id: 5, 
    name: 'ghulam haider',
    urdu: 'غلام حیدر ',
    amount: 0
  },
  {
    id: 6, 
    name: 'niaz muhammad',
    urdu: 'نیاز محمّد ',
    amount: 5000
  },
  {
    id: 7, 
    name: 'said muhammad',
    urdu: 'سید محمّد ',
    amount: 2000
  },
  {
    id: 8, 
    name: 'hussain muhammad',
    urdu: 'حسین  محمّد ',
    amount: 3500
  },
  {
    id: 9, 
    name: 'muhammad khan',
    urdu: ' محمّد خان  ',
    amount: 1420
  },
  {
    id: 10, 
    name: 'shah zareen khan',
    urdu: 'شاہ زرین  خان ',
    amount: 2000
  },
  {
    id: 11, 
    name: 'amin ullah khan',
    urdu: 'آمین الله خان ',
    amount: 5500
  },
  {
    id: 12, 
    name: 'ihsan ullah',
    urdu: 'احسان  الله  ',
    amount: 0
  },
  {
    id: 13, 
    name: 'sami ullah',
    urdu: 'سمیع اللہ',
    amount: 0
  },
  {
    id: 14, 
    name: 'israr',
    urdu: 'اسرار ',
    amount: '+2300'
  },
  {
    id: 15, 
    name: 'habib ullah',
    urdu: 'حبیب اللہ ',
    amount: 3000
  },
  {
    id: 16, 
    name: 'shah tamas khan',
    urdu: 'شاہ تماس خان ',
    amount: 4000
  },
  {
    id: 17, 
    name: 'shakil khan',
    urdu: 'شکیل خان ',
    amount: 1000
  },
  {
    id: 18, 
    name: 'ahmad',
    urdu: 'آحمد',
    amount: 1000
  },
  {
    id: 19, 
    name: 'amir zaman',
    urdu: 'امیر  زمان ',
    amount: 6000
  },
  {
    id: 20, 
    name: 'muhammad zareen',
    urdu: 'محمّد زرین ',
    amount: 0
  },
  {
    id: 21, 
    name: 'umer zada',
    urdu: 'عمر زادہ ',
    amount: 3000
  },
  {
    id: 22, 
    name: 'fazal satar',
    urdu: 'فضل ستار ',
    amount: 5000
  },
  {
    id: 23, 
    name: 'imran shamai',
    urdu: 'عمران شمائ ',
    amount: 0
  },
  {
    id: 24, 
    name: 'sultan zaib',
    urdu: 'سلطان زیب ',
    amount: 0
  },
  {
    id: 25, 
    name: 'shoaib',
    urdu: 'شعیب ',
    amount: 4000
  },
  {
    id: 26, 
    name: 'nazir',
    urdu: 'نذیر ',
    amount: 7000
  },
  {
    id: 27, 
    name: 'amir bacha',
    urdu: 'امیر باچا ',
    amount: 1000
  },
  {
    id: 28, 
    name: 'irshad maulana',
    urdu: 'ارشاد مولانا ',
    amount: 2250
  },
  {
    id: 29, 
    name: 'farooq',
    urdu: 'فاروق ',
    amount: 7120
  },
  {
    id: 30, 
    name: 'noor zaman',
    urdu: 'نور زمان ',
    amount: 2000
  },
  {
    id: 31, 
    name: 'gull rahman',
    urdu: 'گل رحمان',
    amount: 6300
  },
  {
    id: 32, 
    name: 'sabir khan',
    urdu: 'صابر  خان ',
    amount: 2000
  },
  {
    id: 33, 
    name: 'jehanzaib',
    urdu: 'جہانزیب ',
    amount: 6000
  },
  {
    id: 34, 
    name: 'nasib rawan',
    urdu: 'نصیب روان ',
    amount: 3000
  },
  {
    id: 35, 
    name: 'momin khan',
    urdu: 'مومن خان ',
    amount: 0
  },
  {
    id: 36, 
    name: 'muhammad zaman',
    urdu: 'محمّد زمان ',
    amount: 1000
  },
  {
    id: 37, 
    name: 'ibrahim',
    urdu: 'ابراہیم ',
    amount: '+1000'
  },
  {
    id: 38, 
    name: 'muhammad karim',
    urdu: 'محمّد کریم ',
    amount: 1600
  },
  {
    id: 39, 
    name: 'ishaq',
    urdu: 'اسحاق ',
    amount: 5000
  },
  {
    id: 40, 
    name: 'abdullah',
    urdu: 'عبدالله ',
    amount: 0
  },
  {
    id: 41, 
    name: 'mahboob ali',
    urdu: 'محبوب علی ',
    amount: 6950
  },
  {
    id: 42, 
    name: 'muhammad iqbal',
    urdu: 'محمّد اقبال ',
    amount: 2000
  },
  {
    id: 43, 
    name: 'umer zaman',
    urdu: 'عمر زمان ',
    amount: 6000
  },
  {
    id: 44, 
    name: 'sherin zaman',
    urdu: 'شیرین زمان ',
    amount: 0
  },
  {
    id: 45, 
    name: 'muhammad islam',
    urdu: 'محمّد اسلام ',
    amount: 5000
  },
  {
    id: 46, 
    name: 'zahid hussain',
    urdu: 'زاہد حسین ',
    amount: 3000
  },
  {
    id: 47, 
    name: 'shahid maidan',
    urdu: 'شاہد  میدان ',
    amount: 1000
  },
  {
    id: 48, 
    name: 'muhammad diyar',
    urdu: 'محمّد دیار ',
    amount: 1000
  },
  {
    id: 50, 
    name: 'lal bacha',
    urdu: 'لعل باچا ',
    amount: 0
  },
  {
    id: 51, 
    name: 'muslium bacha',
    urdu: 'مسلم باچا ',
    amount: 0
  },
  {
    id: 52, 
    name: 'said muhammad badwan',
    urdu: 'سید محمّد باڈوان ',
    amount: 1000
  },
  {
    id: 53, 
    name: 'naveed',
    urdu: 'نوید ',
    amount: 5000
  },
  {
    id: 54, 
    name: 'adnan',
    urdu: 'عدنان ',
    amount: 4700
  },
  {
    id: 55, 
    name: 'aziz ul haq',
    urdu: 'عزیز الحق ',
    amount: 1000
  },
  {
    id: 56, 
    name: 'khan bacha',
    urdu: 'خان باچا ',
    amount: 0
  },
  {
    id: 57, 
    name: 'fazal ul rahman',
    urdu: 'فضل الرحمن ',
    amount: 0
  },
  {
    id: 58, 
    name: 'imran badwan',
    urdu: 'عمران باڈوان ',
    amount: 7450
  },
  {
    id: 59, 
    name: 'khurshaid',
    urdu: 'خورشید ',
    amount: 4450
  },
  {
    id: 60, 
    name: 'izat khan',
    urdu: 'عزت خان ',
    amount: 6150
  },
  {
    id: 61, 
    name: 'muhammad asif',
    urdu: 'محمّد آصف ',
    amount:5000
  },
  {
    id: 62, 
    name: 'bakhtiyar',
    urdu: 'بختیار ',
    amount: 7000
  },
  {
    id: 63, 
    name: 'javed iqbal',
    urdu: 'جاوید اقبال ',
    amount: 2000
  },
  {
    id: 64, 
    name: 'majid gull',
    urdu: 'مجید گل ',
    amount: 6000
  },
  {
    id: 65, 
    name: 'said muhammad khadagzai',
    urdu: 'سید محمّد خادگزی ',
    amount: 0
  },
  {
    id: 66, 
    name: 'ali rahman',
    urdu: 'علی رحمان ',
    amount: 1000
  },
  {
    id: 67, 
    name: 'bahadar said',
    urdu: 'بہادر سید ',
    amount: 1000
  },
  {
    id: 68, 
    name: 'shahid PTI',
    urdu: 'شاہد  (تحریک انصاف )',
    amount: 2000
  },
  {
    id: 69, 
    name: 'parviz',
    urdu: 'پرویز ',
    amount: 3000
  },
  {
    id: 70, 
    name: 'shir ali',
    urdu: 'شیر علی ',
    amount: 4000
  },
  {
    id: 71, 
    name: 'shir zaman',
    urdu: 'شیر زمان ',
    amount: 4000
  },
  {
    id: 72, 
    name: 'umer bacha',
    urdu: 'عمر باچا ',
    amount: 3000
  },
  {
    id: 73, 
    name: 'shabir bhai jan',
    urdu: 'شبیر بھائی جان ',
    amount: 2000
  },
  {
    id: 74, 
    name: 'murad',
    urdu: 'مراد ',
    amount: 4000
  },
  {
    id: 75, 
    name: 'gull faraz',
    urdu: 'گل فراز ',
    amount: 4000
  },
  {
    id: 76, 
    name: 'bahram',
    urdu: 'بہرام ',
    amount: 4000
  },
  {
    id: 77, 
    name: 'fayaz',
    urdu: 'فیاض ',
    amount: 1000
  },

  
];

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
