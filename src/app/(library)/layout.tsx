import { SignUpBanner } from "@/auth/features/sign-up";
import { NavBar } from "@/library/widgets/navBar";
import { Player } from "@/player/widgets/player";
import { getServerSession } from "@/shared/auth/next";
import { MainLayout } from "@/shared/ui/layouts";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TODO: Move it deeper in the tree for better FCP performance and better skeletons granularity
  const session = await getServerSession();

  return (
    <MainLayout
      footer={session ? <Player /> : <SignUpBanner />}
      navBar={<NavBar />}
    >
      {children}
    </MainLayout>
  );
}
