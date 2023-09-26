import {
    Chart as ChartJs,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

ChartJs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
    Tooltip,
    Legend
);

function BarChart() {
    var data = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: "# of Votes",
                data: [490, 183, 293, 527, 678, 850],
                borderWidth: 1,
                backgroundColor: ["#ff4344", "#ff8790", "#ff7657"],
                hoverOffset: 4,
            },
        ],
    };

    var options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        legend: {
            labels: {
                fontSize: 26,
            },
        },
    };

    return (
        <div className="h-52 flex flex-col gap-4 mt-10">
            <Doughnut data={data} options={options} />
            <Bar data={data} options={options} />
        </div>
    );
}

export default BarChart;
