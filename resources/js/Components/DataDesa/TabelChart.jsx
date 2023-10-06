import React from "react";

function TabelChart({ dataTable }) {
    console.log(dataTable);
    return (
        <div className=" w-full bg-white rounded-xl p-4 shadow">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sub-Kategori</th>
                            <th>Jumlah</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataTable.map((item, i) => (
                            <tr className=" hover" key={i + 1}>
                                <th className="entrance">{i + 1}</th>
                                <td className="entrance">{item.kategori}</td>
                                <td className="entrance">{item.jumlah}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TabelChart;
