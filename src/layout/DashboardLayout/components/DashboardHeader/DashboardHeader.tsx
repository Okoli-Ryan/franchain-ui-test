import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content } = Layout;
export default function DashboardHeader() {
	return (
		<Layout className="h-screen max-w-[1200px] mx-auto w-full  overflow-auto bg-light">
			{/* <Header className="bg-green-200 !h-[180px] sticky top-0px-4 flex justify-between items-center"></Header> */}
			<Content className="">
				<Outlet />
			</Content>
		</Layout>
	);
}
