import {
    Chart as ChartJs,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";
ChartJs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
    Tooltip,
    Legend
);
import React from "react";

function ChartAdmin({ datachart }) {
    const labels = datachart.map((item) => item.category);
    const dataValues = datachart.map((item) => item.jumlah);
    var data = {
        labels: labels,
        datasets: [
            {
                label: "Jumlah",
                data: dataValues,
                borderWidth: 1,
                backgroundColor: [
                    "#ff4344",
                    "#ff7878",
                    "#ff6565",
                    "#ff3839",
                    "#ff9878",
                    "#ff7390",
                    "#ff2121",
                    "#ff9999",
                ],
                hoverOffset: 12,
            },
        ],
    };

    var options1 = {
        maintainAspectRatio: true,
        scales: {},
        legend: {
            labels: {
                fontSize: 26,
            },
        },
    };
    return (
        <div className="entrance flex flex-col justify-center items-center gap-4 px-2">
            <h1 className="text-lg font-bold">Doughnut Chart</h1>
            <div className="w-full h-full flex justify-center items-center">
                <Chart type="doughnut" data={data} options={options1} />
            </div>
        </div>
    );
}

export default ChartAdmin;
