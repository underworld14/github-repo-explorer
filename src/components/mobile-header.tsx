import { Box, Typography, TextField, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import SearchIcon from "@mui/icons-material/Search";
import { lightGreen } from "@mui/material/colors";

interface MobileHeaderProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function MobileHeader({ search, setSearch }: MobileHeaderProps) {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 1,
        bgcolor: lightGreen[500],
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <GitHubIcon htmlColor="white" fontSize="large" />
        <Typography variant="h6" fontWeight={700} component="h1" color="white">
          Github Repositories Search
        </Typography>
      </Stack>
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
