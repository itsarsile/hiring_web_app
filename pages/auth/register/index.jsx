import Image from "next/image";
import ModalRegister from "./ModalRegister";
import { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const RegisterPage = () => {
  const router = useRouter()
  const [setOpen, setIsOpen] = useState(false);
  const [selectedLogin, setSelectedLogin] = useState(null);

  // * FORM HANDLING
  const formData = useFormik({
    initialValues: {
      name: "",
      email: "",
      photo: "",
      phoneNumber: "",
      password: "",
      passwordConfirm: "",
      portfolioIds: [],
      workExpreienceIds: [],
      jobDesk: "",
      domicile: "Not set yet",
      workPlace: "",
      socialMediaAccounts: {
        email: "",
        github: "",
        instagram: "",
      },
      skills: [],
      bio: "Not yet set"
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required").min(6),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
    }),
    onSubmit: async (values) => {
      try {
        const DEFAULT_ROLES = "pekerja";
        values.roles = DEFAULT_ROLES;

        if (!values.photo) {
          values.photo = "/default.webp";
        }
        const { passwordConfirm, ...data } = values;
        const response = await fetch("http://localhost:5000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        console.log(JSON.stringify(data));
        if (response.ok) {
          console.log("Data submitted");
        } else {
          console.error("Form submission failed!");
        }

        const signInResponse = await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirect: false,
        })

        if (signInResponse.ok) {
          router.push("/")
        } else {
          console.error("Authentication after registration failed: ", signInResponse.error);
        }
      } catch (error) {
        console.error("An error occured while registering or logging in: ", error);
      }
    },
  });

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
                <ModalRegister
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
                  Nama
                </label>
                <input
                  name="name"
                  className="input input-bordered w-full"
                  placeholder="Masukkan nama panjang"
                  onChange={formData.handleChange}
                  value={formData.values.name}
                />
              </div>

              <div className="">
                <label htmlFor="" className="label">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Masukkan alamat email"
                  onChange={formData.handleChange}
                  values={formData.values.email}
                />
              </div>
              <div className="">
                <label htmlFor="" className="label">
                  No. Handphone
                </label>
                <input
                  name="phoneNumber"
                  type="tel"
                  className="input input-bordered w-full"
                  placeholder="Masukkan nomor telepon"
                  onChange={formData.handleChange}
                  values={formData.values.phoneNumber}
                />
              </div>

              <div className="">
                <label htmlFor="" className="label">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Masukkan kata sandi"
                  onChange={formData.handleChange}
                  values={formData.values.password}
                />
              </div>
              <div className="">
                <label htmlFor="" className="label">
                  Konfirmasi Password
                </label>
                <input
                  name="passwordConfirm"
                  type="password"
                  className={`input input-bordered w-full ${
                    formData.touched.passwordConfirm &&
                    formData.errors.passwordConfirm
                  }`}
                  placeholder="Konfirmasi kata sandi"
                  onChange={formData.handleChange}
                  values={formData.values.passwordConfirm}
                />
                {formData.touched.passwordConfirm &&
                  formData.errors.passwordConfirm && (
                    <span className="alert alert-error text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {formData.errors.passwordConfirm}
                    </span>
                  )}
              </div>

              <button
                className="btn btn-block mt-5 bg-amber-400 text-white"
                type="submit"
              >
                Daftar
              </button>
              <p className="text-center mt-5">
                Anda sudah punya akun?
                <Link href="/login" className="text-amber-400">
                  Masuk
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
