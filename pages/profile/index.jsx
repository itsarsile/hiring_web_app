import Layout from "@/components/layout";
import Image from "next/image";
import { BsInstagram, BsEnvelope, BsGithub } from "react-icons/bs";
import { FiGitlab } from "react-icons/fi";

export default function ProfilePage() {
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
                  <div className="flex flex-col space-y-2 mt-2 w-full">
                    <h1 className="font-bold">Louis Tomlinson</h1>
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
                    <p className="text-slate-400 text-sm mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam expedita fugiat doloremque illum, iste
                      consequuntur?
                    </p>
                  </div>
                </div>
                <div className="card-body gap-5">
                  <div className="card-title">Skill</div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="badge badge-primary">PHP</span>
                    <span className="badge badge-primary">JavaScript</span>
                    <span className="badge badge-primary">HTML</span>
                    <span className="badge badge-primary">CSS</span>
                    <span className="badge badge-primary">React</span>
                  </div>
                  <div className="text-slate-400">
                    <div className="flex flex-col space-y-2">
                      <div className="grid grid-cols-3 text-right">
                        <BsEnvelope className="w-6 h-6 col-span-1" />
                        <p className="col-span-2">example@example.com</p>
                      </div>
                      <div className="grid grid-cols-3 text-right">
                        <BsInstagram className="w-6 h-6 col-span-1 " />
                        <p className="col-span-2">@example</p>
                      </div>
                      <div className="grid grid-cols-3 text-right">
                        <BsGithub className="w-6 h-6 col-span-1" />
                        <p className="col-span-2">@example</p>
                      </div>
                      <div className="grid grid-cols-3 text-right">
                        <FiGitlab className="w-6 h-6 col-span-1" />
                        <p className="col-span-2">@example</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 col-span-2 w-full h-full">
              {/* Portfolio */}
              <div className="card w-80 mx-auto mt-10 lg:mt-0 lg:w-full bg-white shadow-lg bordered">
                <div className="card-body">
                  <div className="card-title text-lg lg:text-2xl font-bold ">
                    Portofolio
                  </div>
                  <div className="divider w-full"></div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="flex flex-col text-center gap-5">
                      <Image
                        src="/portfolio_default.png"
                        width={220}
                        height={150}
                        alt="portfolio thumbnail"
                      />
                      <p>Reminder app</p>
                    </div>
                    <div className="flex flex-col text-center gap-5">
                      <Image
                        src="/portfolio_default.png"
                        width={220}
                        height={150}
                        alt="portfolio thumbnail"
                      />
                      <p>Reminder app</p>
                    </div>

                    <div className="flex flex-col text-center gap-5">
                      <Image
                        src="/portfolio_default.png"
                        width={220}
                        height={150}
                        alt="portfolio thumbnail"
                      />
                      <p>Reminder app</p>
                    </div>
                    <div className="flex flex-col text-center gap-5">
                      <Image
                        src="/portfolio_default.png"
                        width={220}
                        height={150}
                        alt="portfolio thumbnail"
                      />
                      <p>Reminder app</p>
                    </div>

                  </div>
                  <div className="card-title mt-10 text-lg lg:text-2xl font-bold ">
                    Pengalaman Kerja
                  </div>
                  <div className="divider w-full"></div>
                  <div className="flex flex-col">
                    <p className="font-bold text-md">Engineer</p>
                    <p>Tokopedia</p>
                    <p className="text-sm text-slate-400">July 2019 - January 2020 6 months</p>
                    <p className="mt-5 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, cumque nemo asperiores consectetur sit quaerat!</p>
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
