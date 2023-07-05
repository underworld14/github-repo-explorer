import { useState, useEffect } from "react";
import { Box, Typography, TextField, Chip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import SearchIcon from "@mui/icons-material/Search";
import { lightGreen } from "@mui/material/colors";

interface DesktopSidebarProps {
  debouncedSearch?: string;
  search: string;
  setSearch: (value: string) => void;
}

export default function DesktopSidebar({
  search,
  setSearch,
  debouncedSearch,
}: DesktopSidebarProps) {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    const recentSearches = localStorage.getItem("recentSearches");
    if (recentSearches) {
      setRecentSearches(JSON.parse(recentSearches));
    }
  }, []);

  useEffect(() => {
    if (debouncedSearch) {
      setRecentSearches((prev) => {
        if (prev.includes(debouncedSearch)) {
          return prev;
        }
        const newRecentSearches = [debouncedSearch, ...prev];
        if (newRecentSearches.length > 10) {
          newRecentSearches.pop();
        }
        localStorage.setItem("recentSearches", JSON.stringify(newRecentSearches));
        return newRecentSearches;
      });
    }
  }, [debouncedSearch]);

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
      <Typography mt={3} fontWeight={700} fontSize={18} color="white">
        Recent Searches
      </Typography>
      <Box mt={2} display="flex" gap={2} flexWrap="wrap">
        {recentSearches.map((search, i) => (
          <Chip key={i} label={search} onClick={() => setSearch(search)} />
        ))}
      </Box>
    </Box>
  );
}
