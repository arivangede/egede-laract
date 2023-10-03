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
            <div className="entrance flex flex-col gap-4 px-2 pb-8">
                <div className="bg-white rounded-xl shadow">
                    <div className="h-[25rem] pt-4 pb-12 px-4">
                        <h1>Doughnut Chart</h1>
                        <Chart type="doughnut" data={data} options={options1} />
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow">
                    <div className="h-[25rem] pt-4 pb-12 px-4">
                        <h1>Bar Chart</h1>
                        <Chart type="bar" data={data} options={options2} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChartDesa;
