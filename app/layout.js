import "@fontsource-variable/fraunces/opsz.css";
import "@fontsource-variable/instrument-sans/index.css";
import "./globals.css";
import { profile } from "@/lib/data";

export const metadata = {
  title: `${profile.name} | Human Resources, Sylhet`,
  description: `${profile.name} works as ${profile.role} at ${profile.company}, ${profile.location}. Recruitment, onboarding, records and employee engagement.`,
};

export const viewport = { themeColor: "#f4f6f9" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
