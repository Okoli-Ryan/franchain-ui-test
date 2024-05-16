import { useNavigate } from 'react-router-dom';

export default function useLogin() {
	const navigate = useNavigate();

	function goToCreateAccount() {
		navigate("/signup");
	}

	return { goToCreateAccount };
}
