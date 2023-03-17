import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

import { exercisesOptions, fetchData } from "../utils/fetchData";

const Exercises = ({ Exercises, setExercises, bodyPart }) => {
	const [currentPage, setCurrentPage] = useState(1);

	const exercisesPerPage = 9;

	const paginate = (e, value) => {
		setCurrentPage(value);

		window.scrollTo({ top: 1800, behavior: "smooth" });
	};

	const indexOfLastExercise = currentPage * exercisesPerPage;
	const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
	const currentExercises = Exercises.slice(
		indexOfFirstExercise,
		indexOfLastExercise
	);

	return (
		<Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
			<Typography variant="h3" mb="46px">
				Showing Results
			</Typography>
			<Stack
				direction="row"
				sx={{ gap: { lg: "110px", xs: "50px" } }}
				flexWrap="wrap"
				justifyContent="center"
			>
				{currentExercises.map((exercise, index) => (
					<ExerciseCard key={index} exercise={exercise} />
				))}
			</Stack>
			<Stack mt="100px" alignItems="center">
				{Exercises.length > 9 && (
					<Pagination
						color="standard"
						shape="rounded"
						defaultPage={1}
						count={Math.ceil(Exercises.length / exercisesPerPage)}
						page={currentPage}
						onChange={paginate}
						size="large"
					/>
				)}
			</Stack>
		</Box>
	);
};

export default Exercises;
