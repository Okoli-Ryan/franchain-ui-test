import { useNavigate } from "react-router-dom";

export default function useEmailVerification() {
	const navigate = useNavigate();

	function goBack() {
		navigate(-1);
	}

	function goToResetPassword() {
		navigate("/reset-password");
	}

	return { goBack, goToResetPassword };
}
