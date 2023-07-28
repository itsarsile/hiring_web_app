import Layout from "@/components/layout";
import Image from "next/image";

export default function EditProfilePage() {
  return (
      <Layout>
        <div className="h-96 my-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 justify-items-center">
              <div className="card w-56 bg-white shadow-lg">
                <div className="card-body">
                  <div className="avatar w-24 justify-center">
                    <Image
                      src="/avatar_default.png"
                      width={110}
                      height={110}
                      alt="avatar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
  );
}
