import { getImageBaseLink } from "@/constants";
import Image from "next/image";
import React, { ReactElement } from "react";

interface props {
	imgSrc: string;
	imgType?: string;
	title: string;
	stateChange?: Function;
}

const MovieCardImage: React.FC<props> = ({
	imgSrc,
	title,
	stateChange,
}): ReactElement => {
	return (
		// @ts-ignore
		<div className="movie_image_card" onClick={() => stateChange(imgSrc)}>
			<Image
				unoptimized
				src={getImageBaseLink({
					path: imgSrc,
					type: "backdrop",
					quality: "lg",
				})}
				width={250}
				height={150}
				alt={`${title} image`}
			/>
		</div>
	);
};

export default MovieCardImage;
