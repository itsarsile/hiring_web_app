import Layout from "@/components/layout";
import Image from "next/image";

export default function EditProfilePage() {
  return (
    <Layout>
      <div className="my-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center lg:place-items-start">
            <div className="flex flex-col gap-5">
              <div className="card w-80 bg-white shadow-lg bordered">
                <div className="card-body justify-center items-center">
                  <div className="avatar w-24">
                    <Image
                      src="/avatar_default.png"
                      width={110}
                      height={110}
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center space-y-2 mt-2">
                    <h1 className="font-medium">Louis Tomlinson</h1>
                    <p className="text-slate-400 text-sm">Web developer</p>
                    <p className="flex items-center text-sm gap-2 text-slate-400 lg:justify-start justify-center">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                      </span>
                      Lorem Ipsum
                    </p>
                    <p className="text-slate-400 text-sm">Freelancer</p>
                  </div>
                </div>
              </div>
              <button className="btn btn-block bg-primary text-white">
                Simpan
              </button>
              <button className="btn btn-block bg-none text-primary text-white btn-outline border-primary">
                Batal
              </button>
            </div>
            <div className="flex flex-col gap-5 col-span-2 w-full h-full">
              {/* Data Diri */}
              <div className="card w-full bg-white shadow-lg bordered">
                <div className="card-body">
                  <div className="card-title text-2xl font-bold">Data Diri</div>
                  <div className="divider w-full"></div>
                  <div className="">
                    <form action="" className="form-control">
                      <label htmlFor="" className="label text-slate-400">
                        Nama
                      </label>
                      <input
                        type="text"
                        className="input input-bordered"
                        placeholder="Masukkan nama lengkap"
                      />
                      <label htmlFor="" className="label text-slate-400">
                        Job Desk
                      </label>
                      <input
                        type="text"
                        className="input input-bordered"
                        placeholder="Masukkan job desk"
                      />
                      <label htmlFor="" className="label text-slate-400">
                        Domisili
                      </label>
                      <input
                        type="text"
                        className="input input-bordered"
                        placeholder="Masukkan domisili"
                      />
                      <label htmlFor="" className="label text-slate-400">
                        Tempat Kerja
                      </label>
                      <input
                        type="text"
                        className="input input-bordered"
                        placeholder="Masukkan tempat kerja"
                      />
                      <label htmlFor="" className="label text-slate-400">
                        Deskripsi singkat
                      </label>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className="textarea textarea-bordered"
                      ></textarea>
                    </form>
                  </div>
                </div>
              </div>
              {/* Skill */}
              <div className="card w-full bg-white shadow-lg bordered">
                <div className="card-body">
                  <div className="card-title text-2xl font-bold">Skill</div>
                  <div className="divider w-full"></div>
                  <div className="">
                    <form action="" className="form-control">
                      <div className="join">
                        <input
                          type="text"
                          className="input input-bordered join-item w-full"
                          placeholder="HTML, JS, CSS..."
                        />
                        <button className="btn bg-primary text-white join-item">
                          Simpan
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* Pengalaman Kerja */}
              <div className="card w-full bg-white shadow-lg bordered">
                <div className="card-body">
                  <div className="card-title text-2xl font-bold">Pengalaman Kerja</div>
                  <div className="divider w-full"></div>
                  <div className="">
                    <form action="" className="form-control gap-3">
                      <label htmlFor="" className="label text-slate-400">
                        Posisi
                      </label>
                      <input
                        type="text"
                        className="input input-bordered"
                        placeholder="Masukkan Posisi"
                      />
                      <div className="join join-vertical lg:join-horizontal gap-3">
                        <div className="join-item">
                          <label htmlFor="" className="label text-slate-400 ">
                            Nama Perusahaan
                          </label>
                          <input
                            type="text"
                            className="input input-bordered w-full lg:w-[25rem]"
                            placeholder="PT. Cinta Sejati..."
                          />
                        </div>
                        <div className="join-item">
                          <label htmlFor="" className="label text-slate-400">
                            Dari
                          </label>
                          <input
                            type="text"
                            className="input input-bordered w-full"
                            placeholder="e.g 2018"
                          />
                        </div>
                        <div className="join-item">
                          <label htmlFor="" className="label text-slate-400">
                            Sampai
                          </label>
                          <input
                            type="text"
                            className="input input-bordered w-full"
                            placeholder="e.g 2023"
                          />
                        </div>
                      </div>
                      <label htmlFor="" className="label text-slate-400">
                        Deskripsi singkat
                      </label>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className="textarea textarea-bordered"
                        placeholder="Deskripsi singkat mengenai pekerjaan Anda"
                      ></textarea>
                      <div className="divider"></div>
                      <button className="btn btn-block bg-primary text-white">Tambah pengalaman kerja</button>
                    </form>
                  </div>
                </div>
              </div>
              {/* Portofolio */}
              <div className="card w-full bg-white shadow-lg bordered">
                <div className="card-body">
                  <div className="card-title text-2xl font-bold">Portofolio</div>
                  <div className="divider w-full"></div>
                  <div className="">
                    <form action="" className="form-control gap-3">
                      <label htmlFor="" className="label text-slate-400">
                        Nama aplikasi
                      </label>
                      <input
                        type="text"
                        className="input input-bordered"
                        placeholder="Masukkan Posisi"
                      />
                      <div className="join join-vertical lg:join-horizontal gap-3">
                        <div className="join-item">
                          <label htmlFor="" className="label text-slate-400 ">
                            Link repository
                          </label>
                          <input
                            type="text"
                            className="input input-bordered w-full lg:w-[25rem]"
                            placeholder="PT. Cinta Sejati..."
                          />
                        </div>
                        <div className="join-item">
                          <label htmlFor="" className="label text-slate-400">
                            Dari
                          </label>
                          <input
                            type="text"
                            className="input input-bordered w-full"
                            placeholder="e.g 2018"
                          />
                        </div>
                        <div className="join-item">
                          <label htmlFor="" className="label text-slate-400">
                            Sampai
                          </label>
                          <input
                            type="text"
                            className="input input-bordered w-full"
                            placeholder="e.g 2023"
                          />
                        </div>
                      </div>
                      <label htmlFor="" className="label text-slate-400">
                        Deskripsi singkat
                      </label>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className="textarea textarea-bordered"
                        placeholder="Deskripsi singkat mengenai pekerjaan Anda"
                      ></textarea>
                      <div className="divider"></div>
                      <button className="btn btn-block bg-primary text-white">Tambah pengalaman kerja</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
