import SelectField from "../components/SelectField";

import { Button, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <SelectField label="Category" />
      <SelectField label="Difficulty" />
      <SelectField label="Type" />
      <TextFieldComp />
      <Box mt={3} with="100%">
        <Button fullWidth variant="contained" type="submit">
          Get Started
        </Button>
      </Box>
    </form>
  );
};

export default Settings;
