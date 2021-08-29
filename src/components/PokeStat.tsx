import React from "react";

export type Props = {
    name: string;
    stat: number;
};

const PokeStat: React.FC<Props> = ({ name, stat}) => {
	return (
		<tr className="hover:bg-grey-lighter">
			<td className="py-3 px-6 border-b border-grey-light">
				{name}
			</td>
			<td className="py-3 px-6 border-b border-grey-light">
				{stat}
			</td>
		</tr>
	);
};

export default PokeStat;
