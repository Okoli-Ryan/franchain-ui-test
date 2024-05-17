import AuthLayout from 'layout/AuthLayout';
import DashboardLayout from "layout/DashboardLayout";
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import { createBrowserRouter } from 'react-router-dom';

export const ROUTER = createBrowserRouter([
	{
		path: "/",
		element: <AuthLayout />,
		children: [
			{
				index: true,
				element: <Login />,
			},
			{
				path: "signup",
				element: <Signup />,
			},
		],
	},
	{
		path: "/dashboard",
		element: <DashboardLayout />,
	},
]);
