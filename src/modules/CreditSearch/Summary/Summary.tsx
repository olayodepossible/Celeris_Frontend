import "./Summary.css";
import Chart from "react-apexcharts";
// import ProgressBar from "../../../shared/ProgressBar/ProgressBar";
import Charts, { ChartType } from "../../../shared/Charts/Charts";
import {
  barChartData,
  barChartData2,
  barChartoptions,
  radialChartoptions,
} from "./SummaryImports";

const Summary = () => {
  const infos: { title: string; subtitle: string }[] = [
    {
      title: "25",
      subtitle: "Total Inquiries",
    },
    {
      title: "24 months",
      subtitle: "Age of Credit History",
    },
    {
      title: "NA",
      subtitle: "Derogatory Accounts",
    },
    {
      title: "10",
      subtitle: "Closed Accounts",
    },
    {
      title: "1",
      subtitle: "Written-off Accounts",
    },
    {
      title: "25",
      subtitle: "Total Inquiries",
    },
  ];

  // remove this dummy data start
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  // remove this dummy data

  return (
    <>
      <div className="row ">
        <div className="col-4 d-flex flex-column">
          <div className="insight mb-3">
            <h2 className="heading">Credit Insight</h2>
            <div className="subheading">Last updated: Jan 16, 2024</div>
            <div className="w-100">
              <Chart
                options={radialChartoptions.options}
                series={[87]}
                type="radialBar"
                width="300"
              />

              <h3 className="mb-3 v-good">very good</h3>
            </div>
            <div className="history row row-cols-md-2 row-cols-1">
              {infos.length &&
                infos.map((hist, idx) => {
                  return (
                    <div key={idx} className="d-flex justify-content-between">
                      <div className="creditCardContent">
                        <div className="title">{hist.title}</div>
                        <div className="subtitle">{hist.subtitle}</div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="col-7 d-flex flex-column align-items-center justify-content-between">
          <div className="detailsCard d-flex justify-content-between w-100 p-3">
            <div>
              <div>
                <span className="content">
                  <p>Name</p>
                  <h5>UAC Nigeria Limited</h5>
                </span>
              </div>
              <div className="content">
                <p>BVN</p>
                <h5>2234764843930</h5>
              </div>
              <div className="content">
                <p>Report Period</p>
                <h5>12 months</h5>
              </div>
            </div>
            <div>
              <div>
                <span className="content">
                  <p>DOB</p>
                  <h5>{formattedDate}</h5>
                </span>
              </div>
              <div className="content">
                <p>Phone</p>
                <h5>09065512525</h5>
              </div>
              <div className="content">
                <p>Address</p>
                <h5>32 IDAK UKIM STREET Uyo 003 State</h5>
              </div>
            </div>
            <div>
              <div>
                <span className="content">
                  <p>Gender</p>
                  <h5>Female</h5>
                </span>
              </div>
            </div>
          </div>
          <div className="loanDetails d-flex justify-content-between w-100">
            <div className="d-flex flex-column">
              <h2 className="heading">Loan balance</h2>
              <h4 className="subheading">Total Balance</h4>
              <p className="amount">351,251.02</p>
            </div>
            <div className="d-flex flex-column">
              <Charts
                type={ChartType.Bar}
                options={barChartoptions}
                data={barChartData}
                width={800}
                height={450}
              />
              <h4 className="subheading">Total Balance</h4>
              <p className="amount">351,251.02</p>
            </div>
            <div className="d-flex flex-column">
              <Charts
                type={ChartType.Bar}
                options={barChartoptions}
                data={barChartData2}
                width={800}
                height={450}
              />
              <h4 className="subheading">Total Balance</h4>
              <p className="amount">351,251.02</p>
            </div>
          </div>
          <div className="loanDetails d-flex justify-content-between w-100">
            <div className="d-flex flex-column">
              <h4 className="subheading">Data Point</h4>
              <p className="amount">NGN 351,251.02</p>
            </div>
            <div className="d-flex flex-column">
              <h4 className="subheading">Data Point</h4>
              <p className="amount">NGN 351,251.02</p>
            </div>
            <div className="d-flex flex-column">
              <h4 className="subheading">Data Point</h4>
              <p className="amount">NA</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
