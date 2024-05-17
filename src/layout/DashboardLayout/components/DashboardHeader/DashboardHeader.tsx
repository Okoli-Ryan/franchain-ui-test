import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;
export default function DashboardHeader() {
	return (
		<Layout className="h-screen w-full flex items-center  overflow-auto bg-light">
			<div className="w-full max-w-[1200px]">
				{/* <Header className="bg-green-200 !h-[180px] sticky top-0px-4 flex justify-between items-center"></Header> */}
				<Content className="px-[60px]">
					<Outlet />
				</Content>
			</div>
		</Layout>
	);
}
