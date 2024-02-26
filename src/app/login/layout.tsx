import { TopBarCenteredCardLayout } from "@/shared/ui";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <TopBarCenteredCardLayout>{children}</TopBarCenteredCardLayout>;
}
