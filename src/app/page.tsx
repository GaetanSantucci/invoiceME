'use client';

import { useState, useRef, useEffect } from 'react';

export default function Home() {
	const inputRef = useRef<HTMLInputElement>(null);

	// const formSubmit = (
	// 	event: React.FormEvent<HTMLFormElement>
	// ): void => {
	// 	event.preventDefault();
	// 	console.log('form submitted');
	// 	if (inputRef.current) {
	// 		console.log(inputRef.current.value);
	// 	}
	// };

	const handleSubmit = (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();
		if (inputRef.current) {
			console.log(inputRef.current.value);
		}
	};

	const [inputValue, setInputValue] = useState<string>('');
	console.log(inputValue);

	const handleInput = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		setInputValue(event.target.value);
	};

	// const formSubmit = (
	// 	event: React.FormEvent<HTMLFormElement>
	// ): void => {
	// 	event.preventDefault();
	// 	console.log('form submitted');
	// };

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
							// value={inputValue}
							// onChange={handleInput}
							ref={inputRef}
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
							// value={inputValue}
							// onChange={handleInput}
							ref={inputRef}
						/>
					</div>
				</div>
				<div className='md:flex md:items-center'>
					<div className='md:w-1/3'></div>
					<div className='md:w-2/3'>
						<button
							className='shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
							type='button'
						>
							Sign Up
						</button>
					</div>
				</div>
			</form>
		</main>
	);
}

