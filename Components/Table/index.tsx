import React from 'react';
import Table, { TableProps } from 'rc-table';
import { DefaultRecordType } from 'rc-table/lib/interface';

interface GenericTableProps<T extends DefaultRecordType> extends TableProps<T> {}

function GenericTable<T extends DefaultRecordType>(props: GenericTableProps<T>) {
  return <Table {...props} />;
}

export default GenericTable;