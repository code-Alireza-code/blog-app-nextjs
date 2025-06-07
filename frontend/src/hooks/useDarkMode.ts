import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const DARK_MODE_KEY = "dark-mode";

function getInitialDarkMode(): boolean {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem(DARK_MODE_KEY);
  if (stored !== null) return stored === "true";
  // Default: check system preference
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function setDarkModeStorage(value: boolean) {
  localStorage.setItem(DARK_MODE_KEY, value ? "true" : "false");
}

function applyDarkModeClass(isDark: boolean) {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  if (isDark) {
    html.classList.add("dark-mode");
  } else {
    html.classList.remove("dark-mode");
  }
}

export function useDarkMode() {
  const queryClient = useQueryClient();

  // Query for current dark mode state
  const { data: isDarkMode = false } = useQuery({
    queryKey: ["dark-mode"],
    queryFn: () => {
      const value = getInitialDarkMode();
      applyDarkModeClass(value);
      return value;
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  // Mutation for toggling dark mode
  const { mutate: toggleDarkMode } = useMutation({
    mutationFn: async (value: boolean) => {
      setDarkModeStorage(value);
      applyDarkModeClass(value);
      return value;
    },
    onSuccess: (value) => {
      queryClient.setQueryData(["dark-mode"], value);
    },
  });

  // Helper to toggle
  const handleToggle = () => toggleDarkMode(!isDarkMode);

  return {
    isDarkMode,
    setDarkMode: (val: boolean) => toggleDarkMode(val),
    toggleDarkMode: handleToggle,
  };
}
