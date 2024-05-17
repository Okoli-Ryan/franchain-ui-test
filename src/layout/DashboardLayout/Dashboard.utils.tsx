import { NavLink } from "react-router-dom";

import { SideMenuItem } from "./DashboardLayout.data";

/**
 *
 * @param label The label to be shown on the sidebar menu
 * @param key The key of the sidebar menuItem
 * @param icon The icon of the sidebar menuItem
 * @param children Submenu items
 * @returns
 */
export function getItem(label: React.ReactNode, key?: string, icon?: React.ReactNode, children?: Array<SideMenuItem>): SideMenuItem {
	return {
		key,
		icon,
		children,
		label: (
			<NavLink to={key === "/" ? "/" : `/${key}`} className={({ isActive }) => (isActive ? "active-link" : "")}>
				{label}
			</NavLink>
		),
	} as SideMenuItem;
}
