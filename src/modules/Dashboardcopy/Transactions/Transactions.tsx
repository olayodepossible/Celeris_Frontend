import React from 'react'
import Table from '../../../shared/Table/Table'
import { columns, data } from './TransactionsImports'

type Props = {}

const Transactions = (props: Props) => {
  return (
    <div>
        <Table
            columns={columns}
            data={data}
            variant="outlined"
            withPagination={true}
          />
    </div>
  )
}

export default Transactions