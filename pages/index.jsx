import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import { AiFillCheckCircle } from "react-"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <main>
        <section>
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <Image
                src="/landing_image_1.png"
                width={617}
                height={617}
                alt="landing page image"
              />
              <div className="space-y-5">
                <h1 className="text-5xl font-bold">
                  Talenta terbaik negri untuk perubahan revolusi 4.0
                </h1>
                <p className="text-lg text-slate-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </p>
                <button className="btn-lg bg-primary text-white rounded-md">
                  Mulai Dari Sekarang
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
              <Image
                src="/landing_image_2.png"
                width={617}
                height={617}
                alt="landing page image"
              />
              <div className="space-y-5">
                <h1 className="text-5xl font-bold">
                  Kenapa harus mencari talent di Peworld?
                </h1>
                <p className="text-lg text-slate-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </p>
                <button className="btn-lg bg-primary text-white rounded-md">
                  Mulai Dari Sekarang
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}
