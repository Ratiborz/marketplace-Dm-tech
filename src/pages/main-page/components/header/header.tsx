import { Image, Tabs } from 'antd';
import styles from './header.module.scss';

export const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<Image src='/Logo-header.svg' preview={false} width={150} />

			<div className={styles.choice_buttons}>
				<Tabs
					defaultActiveKey={'1'}
					className={styles.tabs}
					items={[
						{
							label: `Товары`,
							key: '1',
						},
						{
							label: `Заказы`,
							key: '2',
						},
					]}
				/>
			</div>

			<p className={styles.basket}>
				<Image src='/basket.svg' width={17} preview={false} />
				Корзина (2)
			</p>
		</header>
	);
};
