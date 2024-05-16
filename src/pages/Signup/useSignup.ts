import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';

import { SIGNUP_SCHEMA } from './Signup.utils';

export default function useSignup() {
	const [form] = Form.useForm();
	const navigate = useNavigate();
	Form.useWatch([], form);

	function goToLogin() {
		navigate("/");
	}

	const isValid = SIGNUP_SCHEMA.safeParse(form.getFieldsValue()).success;

	return { form, goToLogin, isValid };
}
