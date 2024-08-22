type ThemeValue = "dark" | "light";

export interface Event {
  _id: string | number;
  title: string;
  startDate: string;
  description?: string;
}
