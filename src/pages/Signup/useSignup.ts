import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function useSignup() {
	const [form] = Form.useForm();
    const navigate = useNavigate();

	function goToLogin() {
		navigate("/");
	}

	return { form, goToLogin };
}
