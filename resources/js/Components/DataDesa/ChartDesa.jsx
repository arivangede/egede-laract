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
import TabelChart from "./TabelChart";

ChartJs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
    Tooltip,
    Legend
);

function ChartDesa({ kategori, dataChart, dataTable }) {
    const lotcategory = ["suku_bangsa", "pekerjaan", "pendidikan_terakhir"];
    const labels = dataChart.map((item) => item.kategori);
    const dataValues = dataChart.map((item) => item.jumlah);

    var data = {
        labels: labels,
        datasets: [
            {
                label: "Jumlah Penduduk",
                data: dataValues,
                borderWidth: 1,
                backgroundColor: [
                    "#ff4344",
                    "#ff6565",
                    "#ff3839",
                    "#ff9878",
                    "#ff7390",
                    "#ff2121",
                    "#ff7878",
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
                {!lotcategory.includes(kategori) ? (
                    <div className="bg-white rounded-xl shadow flex justify-center items-center">
                        <div className="h-full w-full p-4">
                            <h1 className="text-slate-700">Doughnut Chart</h1>
                            <Chart
                                type="doughnut"
                                data={data}
                                options={options1}
                            />
                        </div>
                    </div>
                ) : (
                    ""
                )}

                {lotcategory.includes(kategori) || kategori == "agama" ? (
                    <TabelChart dataTable={dataTable} />
                ) : (
                    ""
                )}

                {kategori == "usia" ? (
                    <div className="entrance w-full p-4 bg-black bg-opacity-40 flex flex-col justify-center items-center text-slate-50 rounded-xl shadow">
                        <h1>Legend:</h1>
                        <div className="pt-2">
                            <p>anak-anak = usia dibawah 15thn</p>
                            <p>muda = usia 15thn - 24thn</p>
                            <p>pekerja-awal = usia 25thn - 34thn</p>
                            <p>paruh-baya = usia 35thn - 44thn</p>
                            <p>pra-pensiun = usia 45thn - 54thn</p>
                            <p>pensiun = usia 55thn - 64thn</p>
                            <p>lansia = usia diatas 64thn</p>
                        </div>
                        <div className="w-full flex justify-end items-center pt-4">
                            <p className="font-extrabold text-slate-200">
                                sc. BAPPENAS
                            </p>
                        </div>
                    </div>
                ) : (
                    ""
                )}
                {!lotcategory.includes(kategori) && kategori != "agama" ? (
                    <div className="bg-white rounded-xl shadow flex justify-center items-center">
                        <div className="h-full max-h-[25rem] w-full pt-4 pb-8 px-4">
                            <h1 className="text-slate-700">Bar Chart</h1>
                            <Chart type="bar" data={data} options={options2} />
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </>
    );
}

export default ChartDesa;
