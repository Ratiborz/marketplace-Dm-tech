import { Layout, Pagination } from 'antd';
import { Header } from './components/header/header';
import styles from './mainPage.module.scss';

export const MainPage = () => {
	const onChange = (e: any) => {
		console.log(e);
	};

	return (
		<Layout className={styles.main_page}>
			<Header />
			<Pagination
				showSizeChanger={false}
				defaultCurrent={2}
				total={200}
				onChange={onChange}
			/>
		</Layout>
	);
};
