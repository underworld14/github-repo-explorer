import { useState, useEffect } from "react";
import { Box, Grid, Typography, Pagination, CircularProgress, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useGithubRepositories } from "./queries/github";
import { useDebounce } from "./hooks/use-debounce";
import { DesktopSidebar, RepositoryCard, MobileHeader } from "./components";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [page, setPage] = useState(1);
  const [perPage] = useState(30);
  const [search, setSearch] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const debouncedSearch = useDebounce(search, 500);
  const { data, isLoading, isFetching } = useGithubRepositories({
    q: debouncedSearch,
    page,
    per_page: perPage,
  });

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  useEffect(() => {
    // cache the total_count
    if (data?.total_count) {
      setTotalCount(data.total_count);
    }
  }, [data]);

  return (
    <Box component="main" sx={{ minHeight: "100vh" }}>
      <Grid container>
        {!isMobile && (
          <Grid item xs={0} md={3}>
            <DesktopSidebar search={search} setSearch={setSearch} />
          </Grid>
        )}
        <Grid item xs={12} md={9}>
          {isMobile && <MobileHeader search={search} setSearch={setSearch} />}

          <Box px={isMobile ? 2 : 4} py={isMobile ? 3 : 5}>
            <Typography>
              <strong>{data?.total_count || 0}</strong> results found for <strong>{search}</strong>
            </Typography>

            {isLoading && isFetching && (
              <Box mt={2} display="flex" justifyContent="center">
                <CircularProgress />
              </Box>
            )}

            <Grid container mt={2} spacing={2}>
              {data?.items?.map((item, i) => (
                <Grid key={i} item xs={12} md={6}>
                  <RepositoryCard repository={item} />
                </Grid>
              ))}
            </Grid>

            {!!search && (
              <Box mt={3} display="flex" justifyContent="center">
                <Pagination
                  size={isMobile ? "small" : "medium"}
                  page={page}
                  count={Math.ceil(totalCount / perPage)}
                  onChange={(e, page) => setPage(page)}
                  variant="outlined"
                  shape="rounded"
                />
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
