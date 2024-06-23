import "./Summary.css";
import InfoCard, { IInfo } from "../../../shared/Card/InfoCard/InfoCard";
import Charts, { ChartType } from "../../../shared/Charts/Charts";
import {
  barChartData,
  lineChartData,
  lineChartoptions,
} from "./SummaryImports";
import useChartQuery from "../../../utils/customHooks/UseChartQuery";
import Loader from "../../../shared/Loader/Loader";

const Summary = () => {
  const { labels, datas, isLoading } = useChartQuery();

  // remove this dummy data start
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  // remove this dummy data end

  const infos: IInfo[] = [
    {
      title: "Average Salary",
      amount: "200,000.00",
      color: "#207EDF",
    },
    {
      title: "Lowest Salary",
      amount: "1,205,867.621",
      color: "#F84444",
    },
    {
      title: "Highest Salary",
      amount: "208,564,501.22",
      color: "#C607E5",
    },
    {
      title: "Last Salary",
      amount: "208,564,501.22",
      color: "#078431",
    },
    {
      title: "Average Salary",
      amount: "200,000.00",
      color: "#207EDF",
    },
    {
      title: "Lowest Salary",
      amount: "1,205,867.621",
      color: "#F84444",
    },
    {
      title: "Highest Salary",
      amount: "208,564,501.22",
      color: "#C607E5",
    },
    {
      title: "Last Salary",
      amount: "208,564,501.22",
      color: "#078431",
    },
  ];
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="row row-cols-lg-2 row-cols-1">
        <div className="customerDetails d-flex flex-column align-items-center">
          <div className="detailsCard mb-3">
            <h2 className="heading">Customer Details</h2>
            <div className="d-flex justify-content-between">
              <div className="cardContent">
                <div>
                  <span>
                    <p>Name</p>
                    <h5>UAC Nigeria Limited</h5>
                  </span>
                </div>
                <div>
                  <p>BVN</p>
                  <h5>2234764843930</h5>
                </div>
                <div>
                  <p>Report Period</p>
                  <h5>12 months</h5>
                </div>
              </div>
              <div className="cardContent">
                <div>
                  <span>
                    <p>DOB</p>
                    <h5>{formattedDate}</h5>
                  </span>
                </div>
                <div>
                  <p>Phone</p>
                  <h5>09065512525</h5>
                </div>
                <div>
                  <p>Address</p>
                  <h5>32 IDAK UKIM STREET Uyo 003 State</h5>
                </div>
              </div>
              <div className="cardContent">
                <div>
                  <span>
                    <p>Gender</p>
                    <h5>Female</h5>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row row-cols-2">
            <div>
              <div className="detailsCard mb-3 ">
                <h2 className="heading">Customer Details</h2>
                <div className="cardContent">
                  <div>
                    <span>
                      <p>Name</p>
                      <h5>UAC Nigeria Limited</h5>
                    </span>
                  </div>
                  <div>
                    <p>BVN</p>
                    <h5>2234764843930</h5>
                  </div>
                  <div>
                    <p>Report Period</p>
                    <h5>12 months</h5>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="creditScore">
                <div>
                  <span>
                    <p>Name</p>
                    <h5>UAC Nigeria Limited</h5>
                  </span>
                </div>
                <div>
                  <p>BVN</p>
                  <h5>2234764843930</h5>
                </div>
                <div>
                  <p>Report Period</p>
                  <h5>12 months</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="d-flex flex-lg-row flex-column justify-content-between w-100">
          <div className="linechart">
            <h2 className="chartTitle">Monthly Loan Disbursement </h2>
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
          <div className="credits">
            <div className="chartDiagram">
              <Charts
                type={ChartType.Bar}
                data={{
                  ...barChartData,
                  labels,
                  datasets: [{ ...barChartData.datasets[0], data: datas }],
                }}
                options={lineChartoptions}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="info">
        <InfoCard infos={infos} />
        <h3>
          Number of Salary Payments: <b>23</b>
        </h3>
      </div>
    </>
  );
};

export default Summary;
