import Table from '../../../shared/Table/Table';
import { columns, data } from './TransactionsImports';

const Transactions = () => {
  return (
    <div>
      <Table
        columns={columns}
        data={data}
        variant="outlined"
        withPagination={true}
      />
    </div>
  );
};

export default Transactions;
