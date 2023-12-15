import LimitBar from "@/Components/Enews/Admin/LimitBar";
import BackBtn from "@/assets/svg/BackBtn";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";

function PanelEnews(props) {
    console.log(props);

    const [state, setState] = useState("berita");

    console.log(state);
    return (
        <div className="bg-slate-50 min-h-screen flex flex-col items-center">
            <div className="entrance flex flex-col w-full">
                <div className="flex items-center gap-4 pt-8 px-4">
                    <div className="h-8 w-8">
                        <Link href="/panel-admin">
                            <BackBtn color={"#1e293b"} />
                        </Link>
                    </div>
                    <h1 className="text-slate-600 text-lg">Panel E-News</h1>
                </div>
                <div className="py-8 px-4 flex flex-col w-full gap-4">
                    {props.flash.message.length > 0 && (
                        <div role="alert" className="alert flex gap-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="stroke-info shrink-0 w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <span>{props.flash.message}</span>
                        </div>
                    )}

                    <LimitBar
                        pengumumanCount={
                            state == "berita"
                                ? props.beritacount
                                : props.pengumumancount
                        }
                        title={state == "berita" ? "Berita" : "Pengumuman"}
                    />
                    <div className="flex gap-4 items-center px-4">
                        <button
                            onClick={() => setState("berita")}
                            className="flex flex-col justify-center items-center gap-2"
                        >
                            <h1
                                className={`${
                                    state == "berita"
                                        ? "text-slate-800 font-bold"
                                        : "text-slate-500"
                                } transition duration-200`}
                            >
                                Berita
                            </h1>
                            <div
                                className={`bg-red-400 block h-1 w-full rounded-t-full ${
                                    state == "berita" ? "scale-100" : "scale-0"
                                } transition duration-200 origin-right`}
                            ></div>
                        </button>
                        <button
                            onClick={() => setState("pengumuman")}
                            className="flex flex-col justify-center items-center gap-2"
                        >
                            <h1
                                className={`${
                                    state == "pengumuman"
                                        ? "text-slate-800 font-bold"
                                        : "text-slate-500"
                                } transition duration-200`}
                            >
                                Pengumuman
                            </h1>
                            <div
                                className={`bg-red-400 block h-1 w-full rounded-t-full ${
                                    state == "pengumuman"
                                        ? "scale-100"
                                        : "scale-0"
                                } transition duration-200 origin-left`}
                            ></div>
                        </button>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        {state == "berita" ? (
                            <BeritaList berita={props.berita} />
                        ) : state == "pengumuman" ? (
                            <PengumumanList pengumuman={props.pengumuman} />
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function BeritaList({ berita }) {
    const [deletedBerita, setDeletedBerita] = useState(null);
    const handleDelete = (id) => {
        setDeletedBerita(id);
        document.getElementById("delete_berita").showModal();
    };

    const confirmDelete = () => {
        console.log("berita yang di delete:", deletedBerita);
        document.getElementById("delete_berita").close();
        router.post(`/panel-admin/e-news/delete/berita${deletedBerita}`);
    };
    return berita.map((item) => (
        <>
            <div
                key={item.id}
                className="entrance w-full h-40 bg-white shadow-lg rounded-xl
            border-slate-100 flex justify-around items-center gap-2
            overflow-hidden"
            >
                <div className="h-full w-[40%] overflow-hidden">
                    <img
                        src={"/storage" + item.image}
                        alt="image"
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className="flex flex-col justify-between w-[60%] p-2">
                    <div>
                        <h1 className="font-bold text-xl line-clamp-1 px-2 break-words">
                            {item.title}
                        </h1>
                        <span className="text-xs text-slate-400 px-2">
                            {item.created_at}
                        </span>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: item.content,
                            }}
                            className="text-sm line-clamp-3 px-2 text-slate-500 text-justify break-words"
                        ></div>
                    </div>
                    <div className="w-full flex justify-end items-center pr-4 gap-2">
                        <button
                            className="py-2 px-4 rounded-xl bg-red-400 text-white"
                            onClick={() => handleDelete(item.id)}
                        >
                            Hapus
                        </button>
                        <dialog id="delete_berita" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Tunggu!</h3>
                                <p className="py-4">
                                    apa kamu yakin untuk menghapus postingan
                                    ini?
                                </p>
                                <div className="modal-action flex items-center gap-4">
                                    <button
                                        onClick={() => confirmDelete()}
                                        className="py-2 px-4 bg-red-400 text-white rounded-xl"
                                    >
                                        Hapus
                                    </button>
                                    <button
                                        onClick={() =>
                                            document
                                                .getElementById("delete_berita")
                                                .close()
                                        }
                                        className="py-2 px-4 bg-slate-200 rounded-xl"
                                    >
                                        Batal
                                    </button>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </>
    ));
}

function PengumumanList({ pengumuman }) {
    const [deletedPengumuman, setDeletedPengumuman] = useState(null);
    const handleDelete = (id) => {
        setDeletedPengumuman(id);
        document.getElementById("delete_pengumuman").showModal();
    };

    const confirmDelete = () => {
        console.log("berita yang di delete:", deletedPengumuman);
        document.getElementById("delete_pengumuman").close();
        router.post(
            `/panel-admin/e-news/delete/pengumuman${deletedPengumuman}`
        );
    };
    return pengumuman.map((item) => (
        <>
            <div
                key={item.id}
                className="entrance w-full h-40 bg-white shadow-lg rounded-xl
            border-slate-100 flex justify-around items-center gap-2
            overflow-hidden"
            >
                <div className="h-full w-[40%] overflow-hidden">
                    <img
                        src={"/storage" + item.image}
                        alt="image"
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className="flex flex-col justify-between w-[60%] p-2">
                    <div>
                        <h1 className="font-bold text-xl line-clamp-1 px-2 break-words">
                            {item.title}
                        </h1>
                        <span className="text-xs text-slate-400 px-2">
                            {item.created_at}
                        </span>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: item.content,
                            }}
                            className="text-sm line-clamp-3 px-2 text-slate-500 text-justify break-words"
                        ></div>
                    </div>
                    <div className="w-full flex justify-end items-center pr-4 gap-2">
                        <button
                            className="py-2 px-4 rounded-xl bg-red-400 text-white"
                            onClick={() => handleDelete(item.id)}
                        >
                            Hapus
                        </button>
                        <dialog id="delete_pengumuman" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Tunggu!</h3>
                                <p className="py-4">
                                    apa kamu yakin untuk menghapus postingan
                                    ini?
                                </p>
                                <div className="modal-action flex items-center gap-4">
                                    <button
                                        onClick={() => confirmDelete()}
                                        className="py-2 px-4 bg-red-400 text-white rounded-xl"
                                    >
                                        Hapus
                                    </button>
                                    <button
                                        onClick={() =>
                                            document
                                                .getElementById(
                                                    "delete_pengumuman"
                                                )
                                                .close()
                                        }
                                        className="py-2 px-4 bg-slate-200 rounded-xl"
                                    >
                                        Batal
                                    </button>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </>
    ));
}

export default PanelEnews;
