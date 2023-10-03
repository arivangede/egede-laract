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

function ChartDesa({ dataPenduduk }) {
    const labels = dataPenduduk.map((item) => item.kategori);
    const dataValues = dataPenduduk.map((item) => item.jumlah);

    console.log(labels, dataValues);
    var data = {
        labels: labels,
        datasets: [
            {
                label: "Jumlah Penduduk",
                data: dataValues,
                borderWidth: 1,
                backgroundColor: ["#ff4344", "#ff8790", "#ff7657"],
                hoverOffset: 4,
            },
        ],
    };

    var options1 = {
        maintainAspectRatio: false,
        scales: {},
        legend: {
            labels: {
                fontSize: 26,
            },
        },
    };
    var options2 = {
        maintainAspectRatio: false,
        scales: {
            y: {
                fromZero: true,
            },
        },
        legend: {
            labels: {
                fontSize: 26,
            },
        },
    };

    return (
        <>
            <div className="flex flex-col gap-4 px-2">
                <div className="h-[17rem]">
                    <Chart type="doughnut" data={data} options={options1} />
                </div>
                <div className="h-[18rem]">
                    <Chart type="bar" data={data} options={options2} />
                </div>
            </div>
        </>
    );
}

export default ChartDesa;
