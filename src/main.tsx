import './index.css';

import { ConfigProvider } from 'antd';
import { Theme } from 'core/Theme';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ROUTER } from 'routes.tsx';

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ConfigProvider theme={Theme}>
			<RouterProvider router={ROUTER} />
		</ConfigProvider>
	</React.StrictMode>
);
