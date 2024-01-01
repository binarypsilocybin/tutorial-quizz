import { Typography, Box, Button } from "@mui/material";

const Questions = () => {
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
