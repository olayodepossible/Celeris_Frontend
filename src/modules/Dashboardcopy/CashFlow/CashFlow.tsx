import Table from '../../../shared/Table/Table';
import { columns } from './CashFlowImports';
import useTableQuery from '../../../utils/customHooks/UseTableQuery';
import './CashFlow.css';

const CashFlow = () => {
  const [isLoading, data] = useTableQuery();
  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <>
      <div className="metric mb-5">
        <h3>Monthly Metrics</h3>
        <Table columns={columns} data={data} />
      </div>
      <div className="metric mb-5">
        <h3>Weekly Metrics</h3>
        <Table columns={columns} data={data} />
      </div>
      <div className="metric mb-5">
        <h3>Monthly Minimum and Maximum Balance</h3>
        <Table columns={columns} data={data} />
      </div>
      <div className="metric mb-5">
        <h3>Loan Transactions</h3>
        <Table columns={columns} data={data} />
      </div>
    </>
  );
};

export default CashFlow;
