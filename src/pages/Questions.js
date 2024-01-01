import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import useAxios from "../hooks/useAxios";

const Questions = () => {
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
  } = useSelector((state) => state);
  console.log(
    question_category,
    question_difficulty,
    question_type,
    amount_of_question
  );
  let apiUrl = `/api.php?amount=10`;
  const { response, loading } = useAxios({ url: apiUrl });
  console.log(response);
  return (
    <Box>
      <Typography variant="h4">Questions 1</Typography>
      <Typography mt={5}>This is the question?</Typography>
      <Box mt={2}>
        <Button variant="contained">Answer 1</Button>
      </Box>
      <Box mt={2}>
        <Button variant="contained">Answer 2</Button>
      </Box>
      <Box mt={5}>
        <Button>Score: 2/6</Button>
      </Box>
    </Box>
  );
};

export default Questions;
