import Chart from "chart.js/auto";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
  const data = {
    labels: ["Weekly interviews", "Target achieved"],
    datasets: [
      {
        label: "Targets",
        data: [300, 50],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };
  const dataRadarChart = {
    labels: ["Technical", "Communication", "Non-verbal"],
    datasets: [
      {
        label: "My Performance",
        data: [65, 59, 90],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };
  useEffect(() => {
    if (Chart.getChart("at-glance-metrics")) {
      Chart.getChart("at-glance-metrics")?.destroy();
    }
    if (Chart.getChart("performace-radar-chart")) {
      Chart.getChart("performace-radar-chart")?.destroy();
    }
    new Chart(document.getElementById("at-glance-metrics"), {
      type: "doughnut",
      data: data,
      responsive: true,
      maintainAspectRatio: false,
    });
    new Chart(document.getElementById("performace-radar-chart"), {
      type: "radar",
      data: dataRadarChart,
    });
  }, [navigate]);
  return (
    <>
      <div className="card dashboard-container mt-2">
        <div class="row">
          <div class="col-6">
            <div className="row">
              <div className="col">
                <div className="card p-2 dashboard-container">
                  {/* <h5 class="card-title">At a glance metrics</h5> */}
                  <canvas id="at-glance-metrics"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div className="col">
              <div className="card p-2 dashboard-container">
                <canvas id="performace-radar-chart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
