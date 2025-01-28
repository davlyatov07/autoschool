import step from '../fonts/images/2.png'
import Image from 'next/image'

import Contact from '../components/contacts'

export default function Formz() {
	return (
		<section>
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
			<div className='flex justify-center'>
				<div className='grid md:grid-cols-2 grid-rows-2 gap-5 max-w-screen-lg pt-10'>
					<label htmlFor='Выберете филиал'>
						<select
							defaultValue='2'
							className='border-slate-600 border rounded-2xl px-4 py-2 pr-20'
							name='filials'
						>
							<option value='2'>Выберете филиал</option>
							<option value='1'>Спортивная</option>
							<option value='3'>Центр</option>
							<option value='4'>Эгершельд</option>
							<option value='5'>Столетие</option>
						</select>
					</label>
					<label htmlFor='Выберете вид трансмиссии'>
						<select
							defaultValue='2'
							className='border-slate-600 border rounded-2xl px-4 py-2'
							name='transmission'
						>
							<option value='2'>Выберете вид трансмиссии</option>
							<option value='1'>Автоматическая</option>
							<option value='3'>Механическая</option>
						</select>
					</label>
					<label htmlFor='Выберете дату и время'>
						<select
							defaultValue='2'
							className='border-slate-600 border rounded-2xl px-4 py-2 pr-9'
							name='datetime'
						>
							<option value='2'>Выберете дату и время</option>
							<option value='1'>Понедельник 14:00</option>
							<option value='3'>Суббота 10:00</option>
						</select>
					</label>
					<label htmlFor='Выберете способ оплаты'>
						<select
							defaultValue='2'
							className='border-slate-600 border rounded-2xl px-4 py-2 pr-[40px]'
							name='payment'
						>
							<option value='2'>Выберете способ оплаты</option>
							<option value='1'>Полная</option>
							<option value='3'>Частичная</option>
						</select>
					</label>
					<div>
						<select
							defaultValue='2'
							className='border-slate-600 border rounded-2xl px-4 py-2 pr-20'
							name='discount'
						>
							<option value='2'>Выбор скидки</option>
							<option value='1'>Студент</option>
							<option value='3'>Готов сделать фото</option>
						</select>
					</div>
					<div>
						<form
							className='border-slate-600 border rounded-2xl px-4 py-2 pr-10'
							name='date'
						>
							<input type='date' name='date' placeholder='Дата' />
						</form>
					</div>
				</div>
			</div>
			<form>
				<div className='flex justify-start items-center gap-1 pt-5 md:pl-[470px] px-10'>
					<div className='flex justify-center items-center w-12 px-3 py-5 rounded-md'>
						<input type='checkbox' className='w-10 h-10' />
					</div>
					<h5 className='text-xs'>
						Обучаться практическому вождению во <br /> время определенное
						образовательным <br /> учреждением согласен
					</h5>
					<div className='flex justify-center px-3 py-2 md:pl-20 rounded-md'>
						<input type='checkbox' className='w-6 h-6' />
					</div>
					<h5 className='text-xs'>
						Даю своё согласие на сбор и <br /> обработку моих персональных
						данных
					</h5>
				</div>
				<div className='flex items-center gap-5 md:pl-[480px] pt-16 pl-20'>
					<h2>Сумма:</h2>
					<h1 className='text-[#58AEE6] text-3xl font-semibold'>37 500 ₽</h1>
				</div>
				<div className='flex flex-col md:items-center md:pl-[540px] relative top-10 pt-20 md:pt-0 pl-20'>
					<button className='w-52 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-300 hover:text-slate-600 text-nowrap text-white bg-[#58AEE6] rounded-full px-5 py-2'>
						Оформить заявку
					</button>
				</div>
			</form>
			<div className='pt-20'>
				<Contact />
			</div>
		</section>
	)
}
