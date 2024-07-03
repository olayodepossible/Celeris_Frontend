import Table from "../../../shared/Table/Table";
import { columns } from "./CashFlowImports";
import useTableQuery from "../../../utils/customHooks/UseTableQuery";
import "./CashFlow.css";
import Loader from "../../../shared/Loader/Loader";
import MonthlyCreditDebit, {
  ICreBit,
} from "./MonthlyCreditDebit/MonthlyCreditDebit";

const CashFlow = () => {
  const mothlyCreBitData: ICreBit[] = [
    {
      month: "January",
      credit: 1115,
      debit: 700,
      total: 2600,
    },
    { month: "January", credit: 1300, debit: 700, total: 2000 },
    { month: "February", credit: 550, debit: 1650, total: 2200 },
    { month: "March", credit: 780, debit: 1220, total: 2000 },
    { month: "April", credit: 1500, debit: 500, total: 2000 },
    { month: "May", credit: 1120, debit: 880, total: 2000 },
    { month: "June", credit: 930, debit: 1070, total: 2000 },
    { month: "July", credit: 600, debit: 1400, total: 2000 },
    { month: "August", credit: 870, debit: 1130, total: 2000 },
    { month: "September", credit: 1250, debit: 750, total: 2000 },
    { month: "October", credit: 980, debit: 1020, total: 2000 },
    { month: "November", credit: 1050, debit: 950, total: 2000 },
    { month: "December", credit: 1150, debit: 850, total: 2000 },
    { month: "January", credit: 700, debit: 1300, total: 2000 },
    { month: "February", credit: 920, debit: 1080, total: 2000 },
    { month: "March", credit: 1100, debit: 900, total: 2000 },
    { month: "April", credit: 1300, debit: 700, total: 2000 },
    { month: "May", credit: 820, debit: 1180, total: 2000 },
    { month: "June", credit: 990, debit: 1010, total: 2000 },
    { month: "July", credit: 1230, debit: 770, total: 2000 },
    { month: "August", credit: 840, debit: 1160, total: 2000 },
  ];
  const [isLoading, data] = useTableQuery();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className="metric mb-5">
        <h3>Monthly Credits and Debits</h3>
        <MonthlyCreditDebit data={mothlyCreBitData} />
      </div>
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
