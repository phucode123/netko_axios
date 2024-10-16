import AdminContent from "@/app/components/layout/adminlayout/admin.content";
import FooterAdmin from "@/app/components/layout/adminlayout/admin.footer";
import HeaderAdmin from "@/app/components/layout/adminlayout/admin.header";

export default function LayoutAdminPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <HeaderAdmin />

      <AdminContent>
        {children}
      </AdminContent>

      <FooterAdmin />
    </div>
  );
}