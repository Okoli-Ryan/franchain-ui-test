import { useNavigate } from "react-router-dom";

export default function useResetPassword() {
	const navigate = useNavigate();

	function goToLogin() {
		navigate("/");
	}

	function goToEmailVerification() {
		navigate("/email-verify");
	}

	return { goToLogin, goToEmailVerification };
}
