import React from "react";

export type Props = {
    name: string;
}

const PokeMove: React.FC<Props> = ({name}) => {
	return (
		<span
			className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm cursor-pointer"
		>
			#{name}
		</span>
	);
};

export default PokeMove;
