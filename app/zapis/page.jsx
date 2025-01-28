'use client'
import step from '../fonts/images/step.png'
import Image from 'next/image'

import { input_data1 } from '../data/inputdata'
import WhatsApp from '../components/whatsapp'
import Contact from '../components/contacts'
import { useEffect, useState } from 'react'

export default function zapis() {
	const [data, setData] = useState({
		lastname: '',
		name: '',
		middle_name: '',
		date: '',
		birth_place: '',
		passport: '',
		address: '',
		phone: '',
		code: '',
	})
	const [formError, setFormError] = useState(false)
	const [successMessage, setSuccessMessage] = useState(false)

	function submit(event) {
		event.preventDefault()

		// Проверяем, заполнены ли все поля
		const isEmptyField = Object.values(data).some(value => !value)

		if (isEmptyField) {
			// Если хотя бы одно поле пустое, показываем сообщение об ошибке
			setFormError(true)
			setTimeout(() => setFormError(false), 2000)
			return // Выходим из функции, чтобы не показывать successMessage
		}

		// Если все поля заполнены, показываем successMessage
		setSuccessMessage(true)
		setTimeout(() => setSuccessMessage(false), 5000)

		// Сбрасываем данные формы
		setData({
			lastname: '',
			name: '',
			middle_name: '',
			date: '',
			birth_place: '',
			passport: '',
			address: '',
			phone: '',
			code: '',
		})
	}

	return (
		<section className='overflow-hidden'>
			<div className='pt-32 flex gap-6 flex-col text-center items-center'>
				<h1 className='text-6xl font-semibold text-black'>
					Форма записи в автошколу
				</h1>
				<h2 className='text-4xl'>Главное лицо</h2>
				<div className='pt-5'>
					<Image
						src={step}
						className='md:w-[865px] md:h-14 w-[450px]'
						alt='image'
					/>
				</div>
			</div>
			{formError && (
				<div className='flex justify-center text-white bg-red-700 absolute -bottom-4 right-[38%] transform translate-x-1/2 border px-5 py-2 rounded-2xl'>
					<p>Заполните поле Пожалуйста!</p>
				</div>
			)}
			{successMessage && (
				<div className='absolute bottom-24 right-1/2 transform translate-x-1/2 backdrop-blur-2xl border px-40 py-20 bg-sky-950/20 text-white font-bold text-2xl rounded-3xl'>
					<p>Благодарим, с вами скоро свяжемся!</p>
				</div>
			)}
			<div className='flex md:flex-row justify-center'>
				<form className='grid md:grid-cols-2 grid-rows-2 gap-5 max-w-screen-lg pt-10'>
					{input_data1.map((element, index) => (
						<input
							key={element.key || index} // Уникальный ключ
							type={element.type}
							placeholder={element.placeholder}
							className='border-black border rounded-2xl px-4 py-2 pr-28'
							value={data[element.key] || ''}
							onChange={event =>
								setData({ ...data, [element.key]: event.target.value })
							}
						/>
					))}
				</form>
			</div>
			<form onSubmit={submit}>
				<div className='flex justify-start items-center gap-4 pt-5 md:pl-[520px] pl-20'>
					<h1>Категория:</h1>
					<div className='flex justify-center items-center w-12 px-3 py-2 border rounded-md'>
						<input type='checkbox' className='w-10 h-4 rounded-full pr-5' />
						<h1 className='text-xl font-semibold pl-2'>A</h1>
					</div>
					<div className='flex justify-center items-center w-12 px-3 py-2 border rounded-md'>
						<input type='checkbox' className='w-10 h-4 rounded-full pr-5' />
						<h1 className='text-xl font-semibold pl-2'>B</h1>
					</div>
				</div>
				<div className='flex flex-col md:items-center md:pl-[540px] pl-20 pt-8'>
					<button className='transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-300 hover:text-slate-600 w-36 text-white bg-[#58AEE6] rounded-full px-5 py-2'>
						Продолжить
					</button>
				</div>
			</form>
			<div className='pt-24'>
				<WhatsApp />
			</div>
			<Contact />
		</section>
	)
}
