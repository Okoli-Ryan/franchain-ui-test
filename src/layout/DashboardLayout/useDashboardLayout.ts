import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function useDashboardLayout() {
	const [isSidebarVisible, setIsSidebarVisible] = useState(false);
	const { pathname } = useLocation();

	function showSidebar() {
		setIsSidebarVisible(true);
	}

	function hideSidebar() {
		setIsSidebarVisible(false);
	}

	function toggleSidebar() {
		setIsSidebarVisible(!isSidebarVisible);
	}

	const currentActiveMenuItem = (pathname as string).slice(1) || "/";

	return {
		isSidebarVisible,
		showSidebar,
		hideSidebar,
		toggleSidebar,
		currentActiveMenuItem,
	};
}
