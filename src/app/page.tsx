'use client';

import { useState } from 'react';

export default function Home() {
	const [state, setState] = useState({
		username: '',
		password: '',
	});
	const [users, setUsers] = useState([]);
	console.log('🚀  users:', users);
	const [loading, setLoading] = useState(false);

	const handleInputChange = (
		event: React.FormEvent<HTMLInputElement>
	) => {
		const { value, name } = event.currentTarget;

		setState({
			...state,
			[name]: value,
		});
	};

	const handleSubmit = (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();
		console.log(state);
	};

	const handleFetchUser = async () => {
		try {
			setLoading(true);
			const response = await fetch('/api/user');
			if (response.ok) {
				const data = await response.json();
				console.log(
					'🚀 ~ file: page.tsx:38 ~ handleFetchUser ~ data:',
					data
				);
				setUsers(data);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<form
				className='w-full max-w-sm'
				onSubmit={handleSubmit}
			>
				<div className='md:flex md:items-center mb-6'>
					<div className='md:w-1/3'>
						<label
							className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
							htmlFor='inline-full-name'
						>
							Username
						</label>
					</div>
					<div className='md:w-2/3'>
						<input
							className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
							id='inline-full-name'
							type='text'
							name='username'
							value={state.username}
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div className='md:flex md:items-center mb-6'>
					<div className='md:w-1/3'>
						<label
							className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
							htmlFor='inline-password'
						>
							Password
						</label>
					</div>
					<div className='md:w-2/3'>
						<input
							className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
							id='inline-password'
							type='password'
							placeholder='******************'
							name='password'
							value={state.password}
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div className='md:flex md:items-center'>
					<div className='md:w-1/3'></div>
					<div className='md:w-2/3'>
						<button
							className='shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
							type='submit'
						>
							Sign Up
						</button>
					</div>
					<div className='md:w-2/3'>
						<button
							className='shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
							type='submit'
							onClick={handleFetchUser}
						>
							Fecth Users
						</button>
					</div>
				</div>
			</form>
			{loading && <div>Loading...</div>}
			{users && (
				<ul className='flex min-h-screen flex-col items-center justify-between p-4'>
					{users.map(
						(user: {
							id: number;
							username: string;
							email: string;
						}) => (
							<li key={user.username}>
								{user.username} - {user.email}
							</li>
						)
					)}
				</ul>
			)}
		</main>
	);
}

