import { Appbar } from "./Components/Appbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Appbar />
        {children}
      </body>
    </html>
  );
}
