import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

import { exercisesOptions, fetchData } from "../utils/fetchData";

const Exercises = ({ Exercises, setExercises, bodyPart }) => {
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
				{Exercises.map((exercise, index) => (
					<ExerciseCard key={index} exercise={exercise} />
				))}
			</Stack>
			<Stack>
				
			</Stack>
		</Box>
	);
};

export default Exercises;
