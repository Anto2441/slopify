import {
  Footer,
  TopBar,
  TopBarCenteredCardLayout,
} from "@/shared/ui/layouts/TopBarCenteredCardLayout";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <TopBarCenteredCardLayout topBar={<TopBar />} footer={<Footer />}>
      {children}
    </TopBarCenteredCardLayout>
  );
}
