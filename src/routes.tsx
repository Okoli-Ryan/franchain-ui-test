import AuthLayout from 'layout/AuthLayout';
import DashboardLayout from "layout/DashboardLayout";
import EmailVerification from "pages/EmailVerification";
import Home from "pages/Home";
import Login from 'pages/Login';
import ResetPassword from "pages/ResetPassword";
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
			{
				path: "email-verify",
				element: <EmailVerification />,
			},
			{
				path: "reset-password",
				element: <ResetPassword />,
			},
		],
	},
	{
		path: "/dashboard",
		element: <DashboardLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
]);
