import { HeaderCardFooterLayout } from "@/auth/layouts/header-card-footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <HeaderCardFooterLayout>{children}</HeaderCardFooterLayout>;
}
