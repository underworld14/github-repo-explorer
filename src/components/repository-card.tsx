import { Box, Typography, Paper, Stack, Avatar, Chip } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ForkLeftIcon from "@mui/icons-material/ForkLeft";
import { GithubRepository } from "../interfaces/repository";

interface RepositoryCardProps {
  repository: GithubRepository;
}

export default function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <Paper sx={{ p: 2, height: "100%" }} variant="outlined">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" spacing={1} width="75%">
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
        <Stack
          direction="row"
          alignItems="center"
          ml={1}
          sx={{ borderRadius: 1, p: 1, backgroundColor: "#f2f2f2", fontSize: 12 }}
        >
          <Stack direction="row" mr={1} alignItems="center">
            <StarIcon fontSize="inherit" sx={{ mr: 0.5 }} />
            {repository.stargazers_count}
          </Stack>
          <Stack direction="row" alignItems="center">
            <ForkLeftIcon fontSize="inherit" sx={{ mr: 0.5 }} />
            {repository.forks_count}
          </Stack>
        </Stack>
      </Stack>

      <Typography mt={2}>{repository.description}</Typography>

      <Box display="flex" mt={2} gap={1} flexWrap="wrap">
        {repository.topics?.map((topic, i) => (
          <Chip key={i} size="small" label={topic} color="info" />
        ))}
      </Box>
    </Paper>
  );
}
