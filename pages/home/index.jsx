import SearchBar from "@/components/SearchBar";
import Layout from "@/components/layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div className="bg-primary">
        <div className="max-w-6xl mx-auto p-5">
          <h1 className="text-2xl -ml-2 text-white font-bold">Top Jobs</h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10">
        {/* Search Bar */}
        <SearchBar />
        <div className="my-10">
          <div className="flex flex-col rounded-lg shadow-xl">
          {/* People Cards */}
          <div className="flex flex-col p-10 items-center justify-between bordered">
            <div className="flex flex-col text-center items-center gap-2 space-x-2">
                <Image
                  src="/avatar_default.png"
                  width={100}
                  height={100}
                  alt="avatar"
                />
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold">Louis Tomlinson</h1>
                <p className="text-sm text-slate-400">Web developer</p>
                <p className="flex items-center text-sm gap-2 text-slate-400 justify-center">
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
                <div className="flex-wrap space-">
                  <div className="badge border-hidden bg-amber-400 text-white rounded-md h-8">
                    <p className="p-3">PHP</p>
                  </div>
                  <div className="badge border-hidden bg-amber-400 text-white rounded-md h-8">
                    <p className="p-3">PHP</p>
                  </div>
                  <div className="badge border-hidden bg-amber-400 text-white rounded-md h-8">
                    <p className="p-3">PHP</p>
                  </div>
                  <div className="badge border-hidden bg-amber-400 text-white rounded-md h-8">
                    <p className="p-3">PHP</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn-md flex-end rounded-md bg-primary text-white btn">
              Lihat Profile
            </button>
          </div>
          <div className="divider"></div>
          {/* <div className="flex p-10 items-center justify-between bordered">
            <div className="flex items-center gap-2 space-x-2">
              <div className="avatar">
                <Image
                  src="/avatar_default.png"
                  width={100}
                  height={100}
                  alt="avatar"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">Louis Tomlinson</h1>
                <p className="text-sm text-slate-400">Web developer</p>
                <p className="flex items-center text-sm gap-2 text-slate-400">
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
                <div className="flex gap-2">
                  <div className="badge border-hidden bg-amber-400 text-white rounded-md h-8">
                    <p className="p-3">PHP</p>
                  </div>
                  <div className="badge border-hidden bg-amber-400 text-white rounded-md h-8">
                    <p className="p-3">PHP</p>
                  </div>
                  <div className="badge border-hidden bg-amber-400 text-white rounded-md h-8">
                    <p className="p-3">PHP</p>
                  </div>
                  <div className="badge border-hidden bg-amber-400 text-white rounded-md h-8">
                    <p className="p-3">PHP</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn-md rounded-md bg-primary text-white btn">
              Lihat Profile
            </button>
          </div>
          <div className="divider"></div>
          <div className="flex p-10 items-center justify-between bordered">
            <div className="flex items-center gap-2 space-x-2">
              <div className="avatar">
                <Image
                  src="/avatar_default.png"
                  width={100}
                  height={100}
                  alt="avatar"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">Louis Tomlinson</h1>
                <p className="text-sm text-slate-400">Web developer</p>
                <p className="flex items-center text-sm gap-2 text-slate-400">
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
                <div className="flex gap-2">
                  <div className="badge border-hidden bg-amber-400 text-white rounded-md h-8">
                    <p className="p-3">PHP</p>
                  </div>
                  <div className="badge border-hidden bg-amber-400 text-white rounded-md h-8">
                    <p className="p-3">PHP</p>
                  </div>
                  <div className="badge border-hidden bg-amber-400 text-white rounded-md h-8">
                    <p className="p-3">PHP</p>
                  </div>
                  <div className="badge border-hidden bg-amber-400 text-white rounded-md h-8">
                    <p className="p-3">PHP</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn-md rounded-md bg-primary text-white btn">
              Lihat Profile
            </button>
          </div> */}

          </div>
        </div>
      </div>
    </Layout>
  );
}
