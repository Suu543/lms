import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>

      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      {/* Medium Device에서 w-56 이니까, w-56 만큼 밀어내기, h-[80px]이니 위로 80px 패딩 밀어내기 */}
      <main className="md:pl-56 pt-[80px] h-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
