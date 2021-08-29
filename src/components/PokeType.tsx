import React from "react";
import { bgColor } from "../utils/bgColor";

export type Props = {
    name: string;
}

const PokeType: React.FC<Props> = ({name}) => {
	return (
		<span
			className={`text-sm font-medium border-2 border-white py-1 px-2 rounded text-white align-middle mr-1 ${bgColor(
				name.toLowerCase()
			)}`}
		>
			{name}
		</span>
	);
}

export default PokeType;
