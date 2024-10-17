import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Sidebar from "@/components/admin/sidebar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed flex h-screen w-full">
      <div className="dark:bg-gray-500/15">
        <Sidebar />
      </div>
      <main className="h-full flex-1 border-l border-gray-500/20 dark:bg-gray-500/10">
        {children}
      </main>
    </div>
  );
}
