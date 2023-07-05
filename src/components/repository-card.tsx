import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Avatar,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Snackbar,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ForkLeftIcon from "@mui/icons-material/ForkLeft";
import BugReportIcon from "@mui/icons-material/BugReport";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { GithubRepository } from "../interfaces/repository";
import { programmingLanguages } from "../constants/programming-languages";

interface RepositoryCardProps {
  repository: GithubRepository;
}

export default function RepositoryCard({ repository }: RepositoryCardProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const open = Boolean(anchorEl);

  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleCloneRepository = (isHttp: boolean) => {
    const url = isHttp ? repository.clone_url : repository.ssh_url;
    navigator.clipboard.writeText(url);
    setSnackbarOpen(true);
    handleCloseMenu();
  };

  return (
    <Paper
      sx={{
        p: 2,
        height: "100%",
        "&:hover": {
          backgroundColor: "#f2f2f2",
        },
      }}
      variant="outlined"
    >
      <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
        <Box>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack direction="row" alignItems="center" spacing={1}>
              <Avatar alt={repository.owner.login} src={repository.owner.avatar_url} />
              <Typography
                component="a"
                href={repository.html_url}
                target="_blank"
                color="primary"
                fontWeight={700}
                textOverflow="ellipsis"
              >
                {repository.full_name}
              </Typography>
            </Stack>
            <Stack flexDirection="row" alignItems="center">
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  mr: 1,
                  backgroundColor: programmingLanguages.find(
                    (language) => language.name === repository.language
                  )?.color,
                }}
              />
              <Typography fontSize={12}>{repository.language}</Typography>
            </Stack>
          </Stack>

          <Typography mt={2}>{repository.description}</Typography>

          <Box display="flex" mt={2} gap={1} flexWrap="wrap">
            {repository.topics?.map((topic, i) => (
              <Chip key={i} size="small" label={topic} color="info" />
            ))}
          </Box>
        </Box>

        <Stack mt={3} direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" alignItems="center" sx={{ borderRadius: 1, p: 1, fontSize: 14 }}>
            <Stack direction="row" mr={1} alignItems="center">
              <StarIcon fontSize="inherit" sx={{ mr: 0.5 }} />
              {repository.stargazers_count}
            </Stack>
            <Stack direction="row" mr={1} alignItems="center">
              <ForkLeftIcon fontSize="inherit" sx={{ mr: 0.5 }} />
              {repository.forks_count}
            </Stack>
            <Stack direction="row" alignItems="center">
              <BugReportIcon fontSize="inherit" sx={{ mr: 0.5 }} />
              {repository.open_issues_count}
            </Stack>
          </Stack>
          <IconButton size="small" onClick={handleClickMenu}>
            <FileCopyIcon fontSize="inherit" />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => handleCloneRepository(true)}>Clone with Http</MenuItem>
            <MenuItem onClick={() => handleCloneRepository(false)}>Clone with SSH</MenuItem>
          </Menu>
        </Stack>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        message="Clone URL copied to clipboard"
        autoHideDuration={1000}
      />
    </Paper>
  );
}
