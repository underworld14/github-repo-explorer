import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "@mui/material";
import theme from "../config/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function renderWithProviders(ui: React.ReactElement) {
  const rtl = render(ui, {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </QueryClientProvider>
    ),
  });

  return {
    ...rtl,
    rerender: (ui: React.ReactElement) => renderWithProviders(ui),
  };
}

export { screen } from "@testing-library/react";

export { renderWithProviders as render, userEvent as user };
