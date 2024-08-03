type ThemeValue = "dark" | "light";

export interface Event {
  id: string | number;
  title: string;
  date: string;
  description?: string;
}
