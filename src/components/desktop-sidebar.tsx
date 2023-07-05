import { Box, Typography, TextField } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import SearchIcon from "@mui/icons-material/Search";
import { lightGreen } from "@mui/material/colors";

interface DesktopSidebarProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function DesktopSidebar({ search, setSearch }: DesktopSidebarProps) {
  return (
    <Box
      component="aside"
      sx={{
        position: "sticky",
        top: 0,
        height: "100vh",
        bgcolor: lightGreen[500],
        p: 3,
        textAlign: "center",
      }}
    >
      <GitHubIcon htmlColor="white" fontSize="large" />
      <Typography mt={1} variant="h5" fontWeight={700} component="h1" color="white">
        Github Repositories Search
      </Typography>
      <TextField
        size="medium"
        fullWidth
        sx={{ mt: 3, color: "white" }}
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          startAdornment: <SearchIcon sx={{ mr: 2 }} />,
        }}
      />
    </Box>
  );
}
