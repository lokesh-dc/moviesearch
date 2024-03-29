import YoutubeEmbedComponent from "@/components/functional-components/YoutubeEmbedComponent";
import { movieVideos } from "@/constants/typescript";
import React, { ReactElement } from "react";

import { IoMdClose } from "react-icons/io";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

interface props {
	position: number;
	bodyType?: string;
	videoId: string;
	title: string;
	changeModalVideo: Function;
	data: Array<movieVideos>;
}

const YoutubeVideoModal: React.FC<props> = ({
	position,
	videoId,
	title,
	changeModalVideo,
	data,
}): ReactElement => {
	const handleModalImageChange = (event: any, incre: number) => {
		event.stopPropagation();
		if (position + incre < data.length && position + incre > 0)
			changeModalVideo(
				position + incre,
				data[position + incre]?.key,
				data[position]?.name
			);
	};

	return (
		<div
			className="fixed top-0 w-screen h-screen bg-black/90 flex flex-col justify-center items-center gap-2 default_screen_adjust"
			style={{ padding: "0 10px", overflowY: "hidden", zIndex: 2055 }}
		>
			<div
				className="text-white flex w-screen md:w-11/12"
				style={{ justifyContent: "end" }}
				onClick={() => changeModalVideo({})}
			>
				<IoMdClose style={{ fontSize: "30px" }} />
			</div>
			<div className="youtubeModal">
				<YoutubeEmbedComponent
					classes={"w-full md:w-80 z-[2]"}
					videoId={videoId}
					title={title}
				/>
			</div>
			<div
				className="w-72 flex justify-between"
				style={{ margin: "20px auto" }}
			>
				<div
					className="p-3 flex items-center"
					onClick={(event) => handleModalImageChange(event, -1)}
					style={{
						color: position == 0 ? "rgba(255,255,255,0.4)" : "white",
					}}
				>
					<RiArrowLeftSLine />
					previous
				</div>
				<p className="p-3" style={{ color: "rgba(255,255,255,0.4)" }}>
					{position + 1} / {data?.length}
				</p>

				<div
					className="p-3 flex items-center"
					style={{
						color:
							position == data?.length - 1 ? "rgba(255,255,255,0.4)" : "white",
					}}
					onClick={(event) => handleModalImageChange(event, 1)}
				>
					next
					<RiArrowRightSLine style={{ fontSize: "18px" }} />
				</div>
			</div>
		</div>
	);
};
export default YoutubeVideoModal;
