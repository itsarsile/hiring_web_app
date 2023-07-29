import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const ModalLogin = ({ isOpen, closeModal, loginChoice, handleLoginChoice }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          onClose={closeModal}
          className="fixed inset-0 z-10 overflow-y-auto"
        >
          <div className="min-h-scren px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 bg-primary text-white rounded-md text-left">
                <Dialog.Title as="h3" className="font-medium">
                  Login Sebagai <span className="badge badge-info">{loginChoice}</span>
                </Dialog.Title>
                <div className="mt-2 border-t-2">
                  <form action="" className="form-control text-slate-500 mt-2">
                    <span className="label-text  text-white mt-2">Email</span>
                    <input type="email" className="input input-sm input-bordered mt-2" />
                    <span className="label-text  text-white mt-2">Password</span>
                    <input type="password" className="input input-sm input-bordered mt-2" />
                    <button
                      className="btn bg-indigo-800 border-none btn-md btn-block text-white mt-2"
                      onClick={() => {
                        handleLoginChoice(loginChoice);
                        closeModal();
                      }}
                    >
                      Masuk
                    </button>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalLogin;
