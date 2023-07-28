import Image from "next/image";
import ModalLogin from "./ModalLogin";
import { useState } from "react";

const LoginPage = () => {
  const [setOpen, setIsOpen] = useState(false);
  const [selectedLogin, setSelectedLogin] = useState(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleLoginChoice = (choice) => {
    setSelectedLogin(choice);
  };

  return (
    <>
      {/* Mobile */}
      <div className="lg:hidden">
        <div className="hero relative min-h-screen bg-hero-login-img">
          <div className="hero-overlay bg-indigo-900/60"></div>
          <div className="hero-content text-white font-bold text-2xl lg:text-5xl leading-relaxed">
            <div className="flex flex-col min-h-fit gap-y-48">
              <Image
                src="/logo.svg"
                width={86}
                height={24}
                alt="logo"
                className="absolute top-0 left-0 m-5"
              />
              <h1>
                Temukan developer berbakat & terbaik di berbagai bidang keahlian
              </h1>
              <div className="mt-10 font-bold ">
                <button className="btn btn-block text-base normal-case text-indigo-900 hover:bg-indigo-950" 
                onClick={() => {
                  setSelectedLogin("Pekerja") 
                  openModal()
                }}
                >
                  Masuk sebagai pekerja
                </button>
                <div className="divider text-sm font-light before:bg-white after:bg-white">
                  atau
                </div>
                <button className="btn btn-block text-base normal-case text-indigo-900 hover:bg-indigo-950" 
                onClick={() => {
                  setSelectedLogin("Perekrut") 
                  openModal()
                }}
                >
                  Masuk sebagai perekrut
                </button>
                {/* Modal for Mobile */}
                <ModalLogin 
                  isOpen={setOpen}
                  closeModal={closeModal}
                  loginChoice={selectedLogin}
                  handleLoginChoice={handleLoginChoice}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden lg:block overflow-y-hidden h-min-screen">
        <div className="flex gap-5 relative">
          <div className="hero bg-hero-login-img h-screen w-1/2">
            <div className="hero-overlay bg-indigo-900/60"></div>
            <Image
              src="/logo.svg"
              width={86}
              height={24}
              alt="logo"
              className="absolute top-0 left-0 m-5"
            />
            <div className="hero-content ma">
              <h1 className="text-4xl leading-normal text-white font-bold max-w-lg">
                Temukan developer berbakat & terbaik di berbagai bidang keahlian
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-5 max-w-lg justify-center h-screen mx-auto">
            <h1 className="text-4xl font-bold">Halo, Pewpeople!</h1>
            <h2 className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nihil
              libero odio quod quidem facere!
            </h2>
            <form action="" className="form-control">
              <div className="">
                <label htmlFor="" className="label">
                  Email
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Masukkan alamat email"
                />
              </div>
              <div className="">
                <label htmlFor="" className="label">
                  Password
                </label>
                <input
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Masukkan kata sandi"
                />
              </div>
              <a href="#" className="text-right mt-5">
                Lupa password?
              </a>
              <button className="btn btn-block mt-5 bg-amber-400 text-white">
                Masuk
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
