import "./globals.css";
import SidebarProvider from "@/src/components/context/SidebarContext";
import { Sidebar } from "@/src/components/templates/Sidebar";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <main className="flex flex-row transition-all duration-300 ease-linear h-screen ">
            <Sidebar />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
