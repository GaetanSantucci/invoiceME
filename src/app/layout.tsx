import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
	weight: ['100', '300', '500', '700', '900'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'InvoiceME ',
	description:
		'Manage your invoices with ease for micro businesses',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={roboto.className}>{children}</body>
		</html>
	);
}

