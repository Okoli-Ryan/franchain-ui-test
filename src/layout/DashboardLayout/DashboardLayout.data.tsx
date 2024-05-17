import { MenuProps } from "antd";

import { getItem } from "./Dashboard.utils";

export type SideMenuItem = Required<MenuProps>["items"][number];

export const dashboardMenuItems = [
	getItem("Collections", "collections", null, [getItem("Operators", "collections-operators", null), getItem("Locations", "collections-locations", null)]),
	getItem("Operators", "/", null, [getItem("Operators", "home-operators", null), getItem("Locations", "home-locations", null)]),
	getItem("Locations", "locations", null, []),
];
