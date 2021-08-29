import React from "react";
import "./Modal.css";

export type Props = {
	modal: boolean;
	setModal: () => void;
	success?: boolean;
};

const Modal: React.FC<Props> = ({ modal, setModal, success }) => {
	return (
		<div
			className={`main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster ${
				modal ? "" : "hidden"
			}`}
			style={{ background: "rgba(0,0,0,.7)" }}
		>
			<div className="border border-teal-500 modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
				<div className="modal-content py-4 text-left px-6">
					<div className="flex justify-between items-center pb-3">
						<p className="text-2xl font-bold">
							{success ? "Success" : "Failed"}
						</p>
						<div
							className="modal-close cursor-pointer z-50"
							onClick={setModal}
						>
							<svg
								className="fill-current text-black"
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 18 18"
							>
								<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
							</svg>
						</div>
					</div>
					{success ? (
						<form>
							<div className="my-5">
								<label className="block w-full space-y-1 text-gray-700 text-md font-semibold px-4 py-3 rounded-xl border transition hover:bg-gray-50 hover:bg-opacity-50 hover:border-purple-800" >
                                    <span>Give the pokemon a name</span>
                                    <input type="text" id="name" defaultValue="" className="w-full p-3 font-thin transition duration-200 focus:shadow-md focus:outline-none ring-offset-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-purple-300" autoComplete="off" />
                                    <label className="text-sm font-semibold text-gray-500">Please provide a unique name</label>
                                </label>
							</div>
							<div className="flex justify-end pt-2">
								<button
									className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
									onClick={setModal}
								>
									Cancel
								</button>
								<button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ml-1">
									Save
								</button>
							</div>
						</form>
					) : (
						<div>
							<p>
								Failed to catch the pokemon! You can try again
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Modal;
