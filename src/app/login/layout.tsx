import TopBarCenteredCardLayout from "@/shared/ui/layouts/TopBarCenteredCardLayout";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <TopBarCenteredCardLayout topBar={<p>TopBar</p>}>
      {children}
    </TopBarCenteredCardLayout>
  );
}
