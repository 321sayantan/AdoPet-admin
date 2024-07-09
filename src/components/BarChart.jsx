import { useEffect, useRef } from "react";
// import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { barData } from "../misc/ChartData";

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) {
      console.error('Canvas element is not rendered in the DOM');
      return;
    }

    const ctx = chartRef.current.getContext("2d");
    if (ctx) {
      const chart = new Chart(ctx, {
        type: "bar",
        // data: {
        //   labels: ["M", "T", "W", "T", "F", "S", "S"],
        //   datasets: [
        //     {
        //       label: "Sales",
        //       tension: 0.4,
        //       borderWidth: 0,
        //       borderRadius: 4,
        //       borderSkipped: false,
        //       backgroundColor: "rgba(255, 255, 255, .8)",
        //       data: [50, 20, 10, 22, 50, 10, 40],
        //       maxBarThickness: 6,
        //     },
        //   ],
        // },
        // options: {
        //   responsive: true,
        //   maintainAspectRatio: false,
        //   plugins: {
        //     legend: {
        //       display: false,
        //     },
        //   },
        //   interaction: {
        //     intersect: false,
        //     mode: "index",
        //   },
        //   scales: {
        //     y: {
        //       grid: {
        //         drawBorder: false,
        //         display: true,
        //         drawOnChartArea: true,
        //         drawTicks: false,
        //         borderDash: [5, 5],
        //         color: "rgba(255, 255, 255, .2)",
        //       },
        //       ticks: {
        //         suggestedMin: 0,
        //         suggestedMax: 500,
        //         beginAtZero: true,
        //         padding: 10,
        //         font: {
        //           size: 14,
        //           weight: 300,
        //           family: "Roboto",
        //           style: "normal",
        //           lineHeight: 2,
        //         },
        //         color: "#fff",
        //       },
        //     },
        //     x: {
        //       grid: {
        //         drawBorder: false,
        //         display: true,
        //         drawOnChartArea: true,
        //         drawTicks: false,
        //         borderDash: [5, 5],
        //         color: "rgba(255, 255, 255, .2)",
        //       },
        //       ticks: {
        //         display: true,
        //         color: "#f8f9fa",
        //         padding: 10,
        //         font: {
        //           size: 14,
        //           weight: 300,
        //           family: "Roboto",
        //           style: "normal",
        //           lineHeight: 2,
        //         },
        //       },
        //     },
        //   },
        // },
        data: barData.data,
        options: barData.options,
      });
      chartRef.current = chart;
      console.log(chartRef.current);
    } else {
      console.error("Failed to acquire 2D context from canvas element");
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);
  
  return (
    <>
      <div className="card z-index-2 ">
        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
          <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
            <div className="chart">
              <canvas
                ref={chartRef}
                id="chart-bars"
                className="chart-canvas"
                height={170}
              ></canvas>
              {/* <Bar data={barData.data} options={barData.options} /> */}
            </div>
          </div>
        </div>
        <div className="card-body">
          <h6 className="mb-0 ">Website Views</h6>
          <p className="text-sm ">Last Campaign Performance</p>
          <hr className="dark horizontal" />
          <div className="d-flex ">
            <i className="material-icons text-sm my-auto me-1">schedule</i>
            <p className="mb-0 text-sm"> campaign sent 2 days ago </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarChart;

// BarChart.propTypes = {
//   data: null,
//   options: null,
// };
