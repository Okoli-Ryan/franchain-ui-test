import "./DashboardLayout.styles.scss";

import { Layout, Menu } from "antd";
import { Button } from "forms/Button";
import { twMerge } from "tailwind-merge";

import SidebarLogo from "@images/franchain-text-logo.svg";

import DashboardHeader from "./components/DashboardHeader";
import { dashboardMenuItems } from "./DashboardLayout.data";
import useDashboardLayout from "./useDashboardLayout";

const { Sider } = Layout;

export default function DashboardLayout() {
	const { currentActiveMenuItem } = useDashboardLayout();

	return (
		<Layout className="min-h-[100dvh]">
			<Sider trigger={null} collapsedWidth="280" collapsible breakpoint="md" width={280} className={twMerge(`bg-dark h-screen overflow-auto`)}>
				<div className="py-[60px] w-full sticky top-0 z-[1000] flex justify-center">
					<img src={SidebarLogo} alt="sidebar logo" className="w-[200px] h-auto cursor-pointer" />
				</div>

				<Menu
					theme="dark"
					mode="inline"
					className="mt-[10px] bg-dark flex flex-col"
					defaultSelectedKeys={[currentActiveMenuItem]}
					items={dashboardMenuItems}
				/>

				<div className="p-2 mt-auto">
					<Button className="w-full px-3 py-4 mb-2 text-left bg-transparent shadow-none text-accent">Logout</Button>
				</div>
			</Sider>
			<DashboardHeader />
		</Layout>
	);
}
