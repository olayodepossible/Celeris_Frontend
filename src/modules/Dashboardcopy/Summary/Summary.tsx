import './Summary.css';
import InfoCard, { IInfo } from '../../../shared/Card/InfoCard/InfoCard';
import Charts, { ChartType } from '../../../shared/Charts/Charts';
import {
  barChartData,
  barChartoptions,
  lineChartData,
  lineChartoptions,
} from './SummaryImports';
import useChartQuery from '../../../utils/customHooks/UseChartQuery';

const Summary = () => {
  const [isLoading, labels, datas, isError, error] = useChartQuery();

  const infos: IInfo[] = [
    {
      title: 'Average Salary',
      amount: '200,000.00',
      color: '#207EDF',
    },
    {
      title: 'Lowest Salary',
      amount: '1,205,867.621',
      color: '#F84444',
    },
    {
      title: 'Highest Salary',
      amount: '208,564,501.22',
      color: '#C607E5',
    },
    {
      title: 'Last Salary',
      amount: '208,564,501.22',
      color: '#078431',
    },
  ];
  const infos1: IInfo[] = [
    {
      title: 'Opening Balance',
      amount: '200,000.00',
      color: '1,205,867.621',
    },
    {
      title: 'Closing Balance',
      amount: '1,205,867.621',
      color: '#F84444',
    },
    {
      title: 'Number of Transactions',
      amount: '507',
      color: '#C607E5',
    },
  ];
  return (
    <>
      <div className="d-flex flex-lg-row flex-column justify-content-between w-100">
        <div className="customerDetails d-flex flex-column align-items-center">
          <div className="detailsCard mb-3">
            <h2 className="heading">Customer Details</h2>
            <div className="cardContent">
              <div className="d-flex align-items-center justify-content-between">
                <span>
                  <p>Name</p>
                  <h5>UAC Nigeria Limited</h5>
                </span>
                <span>
                  <p>Account No</p>
                  <h5>1234567980</h5>
                </span>
              </div>
              <div>
                <p>Bank Name</p>
                <h5>Zenith Bank PLC</h5>
              </div>
              <div>
                <p>Statement Period</p>
                <h5>August 2023 - 22 February 2024</h5>
              </div>
            </div>
          </div>
          <div className="info w-100">
            <InfoCard infos={infos1} />
          </div>
        </div>
        <div className="linechart">
          <h2 className="chartTitle">
            Average Monthly Balance - 12 Months Trend
          </h2>
          <div className="chartDiagram">
            <Charts
              type={ChartType.Line}
              data={{
                ...lineChartData,
                labels,
                datasets: [{ ...lineChartData.datasets[0], data: datas }],
              }}
              options={lineChartoptions}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="d-flex flex-lg-row flex-column justify-content-between w-100">
          <div className="bar">
            <h2 className="chartTitle">Total Credit and Debit Transactions</h2>
            <div className="diagram">
              <Charts
                type={ChartType.Bar}
                data={barChartData}
                options={barChartoptions}
              />
            </div>
          </div>
          <div className="credits">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div className="creditDetails d-flex flex-column me-3">
                <h3 className="creditTitle">Credits</h3>
                <div className="agregate">
                  <span>
                    Average Monthly Credits:
                    <p>104,785,898.77</p>
                  </span>
                  <span>
                    Average Weekly Credits:
                    <p>404,785,898.77</p>
                  </span>
                </div>
                <div className="transactions">
                  <span>
                    Highest Transaction:
                    <p>104,785,898.77</p>
                  </span>
                  <span>
                    Lowest Transaction:
                    <p>404,785,898.77</p>
                  </span>
                  <span>
                    Number of Transaction:
                    <p>104,785,898.77</p>
                  </span>
                  <span>
                    Standard Deviation:
                    <p>104,785,898.77</p>
                  </span>
                </div>
              </div>
              <div className="debitDetails d-flex flex-column">
                <h3 className="creditTitle align-self-lg-end align-self-start">
                  Debits
                </h3>

                <div className="agregate">
                  <span>
                    Average Monthly Debits:
                    <p>104,785,898.77</p>
                  </span>
                  <span>
                    Average Weekly Debits:
                    <p>404,785,898.77</p>
                  </span>
                </div>
                <div className="transactions">
                  <span>
                    Highest Transaction:
                    <p>104,785,898.77</p>
                  </span>
                  <span>
                    Lowest Transaction:
                    <p>404,785,898.77</p>
                  </span>
                  <span>
                    Number of Transaction:
                    <p>104,785,898.77</p>
                  </span>
                  <span>
                    Standard Deviation:
                    <p>104,785,898.77</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="info">
              <InfoCard infos={infos} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
