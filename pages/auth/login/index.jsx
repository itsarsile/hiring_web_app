import Image from "next/image";
import ModalLogin from "./ModalLogin";
import { useState } from "react";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const [setOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter();
  const formData = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        setIsSubmitting(true)
        const result = await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirect: false,
        });

        if (result.ok) {
          console.log("Authentication successful");
          router.push("/");
        } else {
          console.error("Authentication gagal: ", result.error);
        }
      } catch (error) {
        console.error("An error occured while authenticating: ", error);
      } finally {
        setIsSubmitting(false)
      }
    },
  });
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
                <button
                  className="btn btn-block text-base normal-case text-indigo-900 hover:bg-indigo-950"
                  onClick={() => {
                    setSelectedLogin("Pekerja");
                    openModal();
                  }}
                >
                  Masuk sebagai pekerja
                </button>
                <div className="divider text-sm font-light before:bg-white after:bg-white">
                  atau
                </div>
                <button
                  className="btn btn-block text-base normal-case text-indigo-900 hover:bg-indigo-950"
                  onClick={() => {
                    setSelectedLogin("Perekrut");
                    openModal();
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
            <form onSubmit={formData.handleSubmit} className="form-control">
              <div className="">
                <label htmlFor="" className="label">
                  Email
                </label>
                <input
                  name="email"
                  values={formData.values.email}
                  onChange={formData.handleChange}
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
                  name="password"
                  onChange={formData.handleChange}
                  values={formData.values.password}
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Masukkan kata sandi"
                />
              </div>
              <a href="#" className="text-right mt-5">
                Lupa password?
              </a>
              <button
                type="submit"
                className="btn btn-block mt-5 bg-amber-400 text-white"
              >
                {isSubmitting ? <span className="loading loading-dots loading-md"></span> : "Masuk"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
