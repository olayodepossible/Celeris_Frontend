import "./MonthlyCreditDebit.css";

export interface ICreBit {
  month: string;
  credit: number;
  debit: number;
  total: number;
}
interface IMonthlyCreditDebitProps {
  data: ICreBit[];
}

const calculatePercentages = (
  total: number,
  credit: number,
  debit: number,
): { creditPercentage: number; debitPercentage: number } => {
  if (total === 0) {
    throw new Error("Total value cannot be zero.");
  }

  const creditPercentage = (credit / total) * 100;
  const debitPercentage = (debit / total) * 100;

  return {
    creditPercentage,
    debitPercentage,
  };
};

const MonthlyCreditDebit = ({ data }: IMonthlyCreditDebitProps) => {
  return (
    <div className="mothlyCreBit">
      <div className="row">
        <div className="col-2">
          <p>Month Period</p>
        </div>
        <div className="col-1">
          <p>Credit</p>
        </div>
        <div className="col-4 credit-title">
          <p className="text-end">Credit</p>
        </div>
        <div className="col-4 debit-title">
          <p>Debit</p>
        </div>
        <div className="col-1">
          <p>Debit</p>
        </div>
      </div>
      <div className="creBit">
        {data.map((item, index) => {
          const { creditPercentage, debitPercentage } = calculatePercentages(
            item.total,
            item.credit,
            item.debit,
          );
          return (
            <div key={index}>
              <div className="row">
                <div className="col-2">
                  <p>{item.month}</p>
                </div>
                <div className="col-1">
                  <p>{item.credit}</p>
                </div>
                <div className="col-4 credit-value d-grid">
                  <p
                    style={{ width: `${creditPercentage}%`, height: "10px" }}
                  ></p>
                </div>
                <div className="col-4 debit-value">
                  <p
                    style={{ width: `${debitPercentage}%`, height: "10px" }}
                  ></p>
                </div>
                <div className="col-1">
                  <p>{item.debit}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthlyCreditDebit;
