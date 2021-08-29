import React from "react";
import { bgColor } from "../utils/bgColor";

export type Props = {
    index: number;
    type: {
        name: string;
    }
}

const PokeType: React.FC<Props> = ({index, type}) => {
	return (
		<span
			key={index}
			className={`text-sm font-medium border-2 border-white py-1 px-2 rounded text-white align-middle mr-1 ${bgColor(
				type.name.toLowerCase()
			)}`}
		>
			{type.name}
		</span>
	);
}

export default PokeType;
