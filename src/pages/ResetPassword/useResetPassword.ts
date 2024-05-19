import { useNavigate } from "react-router-dom";

export default function useResetPassword() {
	const navigate = useNavigate();

	function goToLogin() {
		navigate("/");
	}

	return { goToLogin };
}
