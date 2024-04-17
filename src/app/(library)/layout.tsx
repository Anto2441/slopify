import { LibraryLayout } from "@/library/layouts/library";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LibraryLayout>{children}</LibraryLayout>;
}
