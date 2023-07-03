import GenericTable from '@/Components/Table';
import React from 'react'

const table = () => {
  const columns = [
    {
      title: 'Keyword',
      dataIndex: 'Keyword',
      key: 'Keyword',
    },
    {
      title: 'Receving Platform',
      dataIndex: 'receving',
      key: 'receving',
    },
    {
      title: 'Recevied From User',
      dataIndex: 'recevied',
      key: 'recevied',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  const data = [
    { Keyword: 'LordBGR', receving: "Telegram", recevied: '@username / +01 234 5678', date: 'Sat May 6 2023' },
    { Keyword: 'LordBGR', receving: "WhatsApp", recevied: '+01 234 5678', date: 'Sat May 6 2023' },
    { Keyword: 'LordBGR', receving: "Email", recevied: 'username@mail.com ', date: 'Sat May 6 2023' },
    { Keyword: 'LordBGR', receving: "WhatsApp", recevied: '+01 234 5678', date: 'Sat May 6 2023' },
    { Keyword: 'LordBGR', receving: "Telegram", recevied: '@username / +01 234 5678', date: 'Sat May 6 2023' },
    { Keyword: 'LordBGR', receving: "WhatsApp", recevied: '+01 234 5678', date: 'Sat May 6 2023' },
    { Keyword: 'LordBGR', receving: "Email", recevied: 'username@mail.com ', date: 'Sat May 6 2023' },
    { Keyword: 'LordBGR', receving: "WhatsApp", recevied: '+01 234 5678', date: 'Sat May 6 2023' },
    { Keyword: 'LordBGR', receving: "Email", recevied: 'username@mail.com ', date: 'Sat May 6 2023' },
  ];
  return (
    <GenericTable columns={columns} data={data} />
  )
}

export default table