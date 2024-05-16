import { Form } from 'antd';

export default function useSignup() {
	const [form] = Form.useForm();

	return { form };
}
