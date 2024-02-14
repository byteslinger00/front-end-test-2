import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../Layouts/Card/Card";
import CardHeader from "../Layouts/Card/CardHeader";
import styles from "@/styles/Dashboard/Dashboard.module.css";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { PieChart } from "react-minimal-pie-chart";

export default function Analytics() {
  return (
    <Card option="bg-white" hidden>
      <CardHeader>
        <h3 className="font-medium my-auto">Analytics</h3>
        <button
          className={`radius-full cursor-pointer my-auto ${styles.btn} btn-transparent`}
        >
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className={`${styles["dot-icon"]}`}
          />
        </button>
      </CardHeader>
      <div>
        <PieChart
          data={[
            { title: "One", value: 100, color: "#7479ff" },
            { title: "Two", value: 100, color: "#ffa812" },
            { title: "Three", value: 150, color: "#dd6751" },
            { title: "Three", value: 50, color: "#eee" },
          ]}
          rounded
          lineWidth={10}
          startAngle={180}
          lengthAngle={180}
          totalValue={400}
          radius={40}
          label={() => (
            <svg>
              <text
                dominantBaseline="central"
                textAnchor="middle"
                transform="rotate(90 6 50 )"
              >
                <tspan
                  x="6"
                  y="50"
                  style={{
                    fontSize: "4px",
                    fontFamily: "DIN Pro",
                    fill: "#000",
                    fontWeight: "500",
                    lineHeight: "16px",
                  }}
                >
                  {"0"}
                </tspan>
              </text>
              <text
                dominantBaseline="central"
                textAnchor="middle"
                transform="rotate(-45 16 20 )"
              >
                <tspan
                  x="16"
                  y="20"
                  style={{
                    fontSize: "4px",
                    fontFamily: "DIN Pro",
                    fill: "#000",
                    fontWeight: "500",
                    lineHeight: "16px",
                  }}
                >
                  {"100"}
                </tspan>
              </text>
              <text>
                <tspan
                  x="45"
                  y="6"
                  style={{
                    fontSize: "4px",
                    fontFamily: "DIN Pro",
                    fill: "#000",
                    fontWeight: "500",
                    lineHeight: "16px",
                  }}
                >
                  {"200"}
                </tspan>
              </text>
              <text
                dominantBaseline="central"
                textAnchor="middle"
                transform="rotate(45 82 20 )"
              >
                <tspan
                  x="82"
                  y="20"
                  style={{
                    fontSize: "4px",
                    fontFamily: "DIN Pro",
                    fill: "#000",
                    fontWeight: "500",
                    lineHeight: "16px",
                  }}
                >
                  {"300"}
                </tspan>
              </text>
              <text
                dominantBaseline="central"
                textAnchor="middle"
                transform="rotate(90 94 50 )"
              >
                <tspan
                  x="94"
                  y="50"
                  style={{
                    fontSize: "4px",
                    fontFamily: "DIN Pro",
                    fill: "#000",
                    fontWeight: "500",
                    lineHeight: "16px",
                  }}
                >
                  {"400"}
                </tspan>
              </text>
              <text>
                <tspan
                  x="40"
                  y="44"
                  style={{
                    fontSize: "12px",
                    fontFamily: "DIN Pro",
                    fill: "#000",
                    fontWeight: "500",
                    lineHeight: "16px",
                  }}
                >
                  {"90%"}
                </tspan>
              </text>
              <text>
                <tspan
                  x="42"
                  y="55"
                  style={{
                    fontSize: "8px",
                    fontFamily: "PingFang SC",
                    fontWeight: "400",
                    lineHeight: "10px",
                    fill: "#ddd",
                  }}
                >
                  Done
                </tspan>
              </text>
            </svg>
          )}
        />
      </div>
    </Card>
  );
}
