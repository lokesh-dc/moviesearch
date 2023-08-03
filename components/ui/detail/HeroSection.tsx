import { getImageBaseLink } from "@/constants";
import Image from "next/image";
import React, { ReactElement } from "react";

interface props {
	backdrop_path: string;
	title: string;
}

const HeroSection: React.FC<props> = ({
	backdrop_path,
	title,
}): ReactElement => {
	return (
		<div className="relative">
			<Image
				className="w-screen h-auto md:h-3/6 object-cover"
				src={getImageBaseLink({
					type: "backdrop",
					quality: "original",
					path: backdrop_path,
				})}
				height={1000}
				width={1200}
				alt={`${title}`}
			/>
			<p
				className="absolute w-screen text-center text-7xl bebas_nueve pb-1 md:pb-10 hidden md:block"
				style={{
					bottom: 0,
					zIndex: "1",
					color: "white",
					background:
						"linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent)",
				}}
			>
				{title}
			</p>
		</div>
	);
};

export default HeroSection;
