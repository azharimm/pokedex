import React from "react";

export type Props = {
    index: number;
    name: string;
}

const PokeMove: React.FC<Props> = ({index, name}) => {
	return (
		<span
			className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm cursor-pointer"
			key={index}
		>
			#{name}
		</span>
	);
};

export default PokeMove;
