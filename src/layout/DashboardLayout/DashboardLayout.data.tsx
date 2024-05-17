import { MenuProps } from "antd";

import { getItem } from "./Dashboard.utils";

export type SideMenuItem = Required<MenuProps>["items"][number];

export const dashboardMenuItems = [
	getItem("Home", "/", null, []),
	getItem("Collections", "collections", null, [getItem("Operators", "operators", null)]),
	getItem("Operators", "operators", null, []),
	getItem("Locations", "locations", null, []),
];
