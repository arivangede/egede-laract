import { Link } from "@inertiajs/react";

function CardBerita({ berita }) {
    if (!berita || !berita.length) {
        return <p>Tidak ada berita tersedia.</p>;
    }

    return (
        <>
            {berita
                ? berita.map((item, i) => (
                      <div
                          key={i}
                          className="w-full h-40 bg-white shadow-lg rounded-xl border-slate-100 flex justify-around items-center gap-2 overflow-hidden"
                      >
                          <div className="h-full w-[40%] overflow-hidden">
                              <img
                                  src={"/storage" + item["image"]}
                                  alt="image"
                                  className="h-full w-full object-cover object-center"
                              />
                          </div>
                          <div className="flex flex-col justify-center w-[60%] p-2">
                              <div>
                                  <h1 className="font-bold text-xl line-clamp-1 px-2 break-words">
                                      {item["title"]}
                                  </h1>
                                  <span className="text-xs text-slate-400 px-2">
                                      {item["created_at"]}
                                  </span>
                                  <div
                                      dangerouslySetInnerHTML={{
                                          __html: item["content"],
                                      }}
                                      className="text-sm line-clamp-3 px-2 text-slate-500 text-justify break-words"
                                  ></div>
                              </div>
                              <div className="w-full flex justify-between items-center">
                                  <span className="badge border-red-300 bg-transparent text-slate-500 text-xs">
                                      {item["desa"]["nama_desa"]}
                                  </span>
                                  <Link
                                      href={"/e-news/" + berita[i]["id"]}
                                      className="border rounded-md bg-red-500 px-3 py-1 text-sm text-white"
                                  >
                                      Lihat
                                  </Link>
                              </div>
                          </div>
                      </div>
                  ))
                : ""}
        </>
    );
}

export default CardBerita;
