import GenericTable from '@/Components/Table';
import React from 'react'

const table = () => {
          const columns = [
  {
    title: 'Keyword',
    dataIndex: 'name',
    key: 'Keyword',
    width: 100,
  },
  {
    title: 'Receving Platform',
    dataIndex: 'Receving Platform',
    key: 'Receving Platform',
    width: 100,
  },
  {
    title: 'Recevied From User',
    dataIndex: 'Recevied From User',
    key: 'Recevied From User',
    width: 200,
  },
  {
    title: 'Date',
    dataIndex: '',
    key: 'Date',
  },
];

const data = [
  { Keyword: 'Jack', ["Receving Platform"]: 28, ["Recevied From User"]: 'some where', ["Date"]: '1' },
];
  return (
    <GenericTable columns={columns} data={data} />
  )
}

export default table