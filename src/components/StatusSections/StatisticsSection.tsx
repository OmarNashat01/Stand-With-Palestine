import React from "react";
import {
    Chart as ChartJS,
    RadialLinearScale,
    CategoryScale,
    ArcElement,
    LinearScale,
    BarElement,
    Title,
    Filler,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
  } from "chart.js";
  import { Bar, Line, Radar, Pie } from "react-chartjs-2";

  import "./Statistics.scss";
  
  ChartJS.register(
    CategoryScale,
    RadialLinearScale,
    LinearScale,
    Filler,
    BarElement,
    ArcElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
interface StatisticsSectionProps {
    deathRatiosData: any;
    homeData: any;
    historyData: any;
    recentData: any;
  }
  
  const StatisticsSection: React.FC<StatisticsSectionProps> = ({
    deathRatiosData,
    homeData,
    historyData,
    recentData,
  }) => {
    return (
      <div className="stat-parent">
        <div className="bar grid-item">
          <Bar
            data={historyData}
            options={{
              plugins: {
                legend: {
                  position: "top" as const,
                  labels: {
                    color: "white",
                    font: {
                      family: "Poppins",
                    },
                  },
                },
                title: {
                  display: true,
                  text: "Israeli and Palestinian Fatalities Pre-Conflict",
                  font: {
                    family: "Poppins",
                    size: 20,
                  },
                  color: "white",
                },
              },
              responsive: true,
  
              scales: {
                x: {
                  stacked: true,
                  ticks: {
                    color: "white",
                    font: {
                      family: "Poppins",
                    },
                  },
                },
                y: {
                  stacked: true,
                  ticks: {
                    color: "white",
                    font: {
                      family: "Poppins",
                    },
                  },
                },
              },
            }}
          />
        </div>
        <div className="radar grid-item">
          <Radar
            data={deathRatiosData}
            options={{
              responsive: true,
              backgroundColor: "white",
              scales: {
                r: {
                  angleLines: {
                    color: "white",
                  },
                  ticks: {
                    stepSize: 800,
                    display: false,
                  },
                  pointLabels: {
                    color: "white",
                    font: {
                      family: "Poppins",
                    },
                  },
                  grid: {
                    color: "#ffffff33",
                  },
                },
              },
  
              elements: {
                line: {
                  borderWidth: 3,
                  borderColor: "white",
                  backgroundColor: "white",
                  tension: 0.0,
                },
              },
              plugins: {
                legend: {
                  position: "top" as const,
                  labels: {
                    color: "white",
                    font: {
                      family: "Poppins",
                    },
                  },
                },
                title: {
                  display: true,
                  text: "Israeli Strategy Outcome",
                  font: {
                    family: "Poppins",
                    size: 20,
                  },
                  color: "white",
                },
              },
            }}
          />
        </div>
        <div className="pie grid-item">
          <Pie
            data={homeData}
            options={{
              plugins: {
                legend: {
                  position: "top" as const,
                  labels: {
                    color: "white",
                    font: {
                      family: "Poppins",
                    },
                  },
                },
                title: {
                  display: true,
                  text: "Damaged or Destroyed Homes",
                  font: {
                    family: "Poppins",
                    size: 20,
                  },
                  color: "white",
                },
              },
              responsive: true,
            }}
          />
        </div>
        <div className="line grid-item">
          <Line
            data={recentData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top" as const,
                  labels: {
                    color: "white",
                    font: {
                      family: "Poppins",
                    },
                  },
                },
                title: {
                  display: true,
                  text: "Fatalities Per Day Since 7th Oct.",
                  font: {
                    family: "Poppins",
                    size: 20,
                  },
                  color: "white",
                },
              },
              scales: {
                x: {
                  stacked: true,
                  ticks: {
                    color: "white",
                    font: {
                      family: "Poppins",
                    },
                  },
                },
                y: {
                  stacked: true,
                  ticks: {
                    color: "white",
                    font: {
                      family: "Poppins",
                    },
                  },
                },
              },
            }}
          />
          ;
        </div>
      </div>
    );
  };

  
export default StatisticsSection;