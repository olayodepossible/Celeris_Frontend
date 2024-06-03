import Charts, { ChartType } from '../../../shared/Charts/Charts';
import InfoCard, { IInfo } from '../../../shared/InfoCard/InfoCard';
import './Behavioral.css';
import { doughChartData, doughChartoptions } from './BehavioralImports';

const Behavioral = () => {
  const infos: IInfo[] = [
    {
      title: 'Sweeps Account',
      amount: 'NO',
      color: '#207EDF',
    },
    {
      title: 'Transfer to Self (Credit)',
      amount: '1,205,867.621',
      color: '#F84444',
    },
    {
      title: 'Transfer to Self (Debit)',
      amount: '208,564,501.22',
      color: '#C607E5',
    },
  ];
  return (
    <div className="behavioral">
      <div className="row">
        <div className="col">
          <div className="d-flex loan">
            <div className="totalLoan">
              <p>Total Loan DIsbursement</p>
              <h3>104,785,898.77</h3>
            </div>
            <div className="monthlyLoan">
              <p>Total Monthly Loan Repayment</p>
              <h3>104,785,898.77</h3>
            </div>
          </div>
        </div>
        <div className="col averageLoan">
          <div>
            <p>Most Recent Loan Repayment</p>
            <p>104,785,898.77</p>
          </div>
          <div>
            <p>Most Recent Loan Repayment Date</p>
            <p>404,785,898.77</p>
          </div>
          <div>
            <p>Average Monthly Loan Repayment</p>
            <p>404,785,898.77</p>
          </div>
        </div>
      </div>
      <div className="row row-cols-2 loanDetails">
        <div className="chart">
          <div className="d-flex justify-content-between category">
            <p>Transaction Category</p>
            <div className="selectWrapper">
              <select name="category" id="category">
                <option value="debit">Debit</option>
                <option value="credit">Credit</option>
              </select>
            </div>
          </div>
          <div className="diagram">
            <Charts
              type={ChartType.Doughnut}
              data={doughChartData}
              options={doughChartoptions}
            />
          </div>
        </div>
        <div className="analysis">
          <div className="roundtripping">
            <h3>Roundtripping Analysis</h3>
            <div className="inf">
              <InfoCard infos={infos} />
            </div>
          </div>
          <div className="redFlag">
            <h3>Red Flags</h3>
            <div className="flags">
              <span className="d-flex justify-content-between">
                Number of Returned Cheque
                <p>0</p>
              </span>
              <span className="d-flex justify-content-between">
                Number of Betting Transactions
                <p>25</p>
              </span>
              <span className="d-flex justify-content-between">
                Length of Negative Balance (Days) <p>60</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="period d-flex align-items-center">
        <h3>Statement Period: </h3>
        <p> {" "} 1 August 2023 - 22 February 2024</p>
      </div>
    </div>
  );
};

export default Behavioral;
