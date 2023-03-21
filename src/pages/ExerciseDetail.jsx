import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "../components/Details";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercise from "../components/SimilarExercise";
import {
	exercisesOptions,
	fetchData,
	youtubeOptions,
} from "../utils/fetchData";

const ExerciseDetail = () => {
	const [exerciseDetail, setExerciseDetail] = useState({});
	const [exerciseVideos, setExerciseVideos] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		const fetchExercisesData = async () => {
			const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
			const youtubeSearchUrl =
				"https://youtube-search-and-download.p.rapidapi.com";
			const exerciseDetailData = await fetchData(
				`${exerciseDbUrl}/exercises/exercise/${id}`,
				exercisesOptions
			);
			setExerciseDetail(exerciseDetailData);

			const exerciseVideoData = await fetchData(
				`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
				youtubeOptions
			);
			setExerciseVideos(exerciseVideoData.contents);
		};
		fetchExercisesData();
	}, [id]);

	return (
		<Box>
			<Detail exerciseDetail={exerciseDetail} />
			<ExerciseVideos
				exerciseVideos={exerciseVideos}
				name={exerciseDetail.name}
			/>
			<SimilarExercise />
		</Box>
	);
};

export default ExerciseDetail;
