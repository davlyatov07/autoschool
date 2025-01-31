'use client'
import Image from 'next/image'
import moutain from '../fonts/images/20.png'
import car from '../fonts/images/21.png'

import fire from '../fonts/images/7.png'

import person from '../fonts/images/img.png'
import blue from '../fonts/images/blue.png'
import fhor from '../fonts/images/9.png'
import texts from '../fonts/images/84.png'
import map from '../fonts/images/map.png'

import WhatsApp from './whatsapp'
import { icons } from '../util/icons'
import Link from 'next/link'

export default function HomeSection() {
	return (
		<section id='home' className='text-[#e0e1e3]    '>
			<div className='relative h-screen'>
				<div className='flex  flex-col items-start pl-5 font-bold md:text-6xl text-[40px] md:pl-40	md:pt-24 pt-20 md:pb-0 pb-20'>
					<div className='md:flex md:items-center items-start   gap-20  '>
						<p className=' text-[#2D2F30] '>Мы выпустили</p>
					</div>

					<Image
						src={fire}
						className='absolute   md:top-16 -top-1/4 md:right-[480px] md:scale-100 -scale-x-100 w-32 md:w-[180px] md:h-[180px] '
						alt='image'
					/>

					<div className='flex justify-center items-center '>
						<p className=' text-[#58AEE6] '>9000+</p>
						<p className=' text-[#2D2F30] pl-5'>водителей </p>
					</div>
					<p className='pb-4 text-[#2D2F30]'> Ты следующий!</p>
				</div>
				<div className=''>
					<Image
						src={moutain}
						className='pt-10 md:w-full md:object-cover absolute bottom-0 md:h-96 w-full h-[430px]'
						alt='image'
					/>
				</div>
				<div className='pt-20 md:pt-0'>
					<Image
						src={car}
						className='absolute -right-0 top-[48%] -translate-y-1/2 md:w-[555px] md:h-[540px] w-[270px] pt-20'
						alt='image'
					/>
				</div>
				<svg
					width='30'
					height='31'
					viewBox='0 0 30 31'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M15 0.5C10.1342 0.5 6.17566 4.45854 6.17566 9.32434V21.6757C6.17566 26.5415 10.1342 30.5 15 30.5C19.8658 30.5 23.8243 26.5415 23.8243 21.6757V9.32434C23.8243 4.45854 19.8658 0.5 15 0.5ZM22.0243 21.6757C22.0243 25.5488 18.8732 28.7001 15 28.7001C11.1268 28.7001 7.9756 25.5488 7.9756 21.6757V9.32434C7.9756 5.45117 11.1268 2.29994 15 2.29994C18.8731 2.29994 22.0243 5.45117 22.0243 9.32434V21.6757Z'
						fill='white'
					/>
					<path
						d='M15.0002 6.46789C14.5031 6.46789 14.1002 6.87073 14.1002 7.36783V11.5101C14.1002 12.007 14.5031 12.4101 15.0002 12.4101C15.4971 12.4101 15.9002 12.007 15.9002 11.5101V7.36783C15.9002 6.87073 15.4973 6.46789 15.0002 6.46789Z'
						fill='white'
					/>
				</svg>

				<div className='relative '>
					<div className=' font-semibold flex flex-col md:justify-center md:text-xl pl-4 text-sm gap-2 md:pl-40 md:pt-20 pt-2'>
						<div className='flex  gap-2'>
							{icons.fire}
							<p>Профессионально обучаем вождению</p>
						</div>
						<div className='flex  gap-2'>
							{icons.fire}

							<p>Удобный график занятий</p>
						</div>
						<div className='flex  gap-2'>
							{icons.fire}
							<p>Адекватные цены</p>
						</div>
						<div className='flex  gap-2'>
							{icons.fire}
							<p>Филиалы в удобной части города</p>
						</div>
					</div>
					<div className='md:pl-40 pl-36 flex items-center md:gap-7 md:pt-10 gap-1	'>
						<button className='relative transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-300 hover:text-slate-600 bg-[#58AEE6] rounded-full md:px-20 md:py-4 font-bold text-nowrap md:text-xl text-xs px-2 py-2'>
							<Link href={'/formz'}>НАЧАТЬ ОБУЧЕНИЕ</Link>
						</button>
						<svg
							className='relative'
							width='22'
							height='31'
							viewBox='0 0 30 31'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M15 0.5C10.1342 0.5 6.17566 4.45854 6.17566 9.32434V21.6757C6.17566 26.5415 10.1342 30.5 15 30.5C19.8658 30.5 23.8243 26.5415 23.8243 21.6757V9.32434C23.8243 4.45854 19.8658 0.5 15 0.5ZM22.0243 21.6757C22.0243 25.5488 18.8732 28.7001 15 28.7001C11.1268 28.7001 7.9756 25.5488 7.9756 21.6757V9.32434C7.9756 5.45117 11.1268 2.29994 15 2.29994C18.8731 2.29994 22.0243 5.45117 22.0243 9.32434V21.6757Z'
								fill='white'
							/>
							<path
								d='M15.0002 6.46789C14.5031 6.46789 14.1002 6.87073 14.1002 7.36783V11.5101C14.1002 12.007 14.5031 12.4101 15.0002 12.4101C15.4971 12.4101 15.9002 12.007 15.9002 11.5101V7.36783C15.9002 6.87073 15.4973 6.46789 15.0002 6.46789Z'
								fill='white'
							/>
						</svg>
						<a className='relative hover:text-slate-400 ' href='/zapis'>
							Подробнее
						</a>
					</div>
				</div>
			</div>
			<div className='relative flex flex-row'>
				<Image
					src={fhor}
					className='absolute md:top-1/2 top-[43%] md:left-[50%] left-[40%] -translate-y-1/2 -translate-x-1/2 md:w-[230px] md:h-[234px] z-10 w-24'
					alt='image'
				/>
				<Image
					src={person}
					className='object-cover relative  	right-52'
					alt='image'
				/>
				<Image
					src={blue}
					className='object-cover absolute 		right-0 '
					alt='image'
				/>
				<div className='absolute right-36 text-white font-bold text-right'>
					<p className='absolute   text-[42px] right-7 '> </p>
				</div>
				<Image
					src={texts}
					className=' absolute  md:w-[500px] md:h-[320px] w-64 h-40 md:right-20 md:bottom-64 right-5 bottom-28'
					alt='image'
				/>
				<button className=' text-[#58AEE6] md:text-xl text-sm absolute md:right-20 md:bottom-36 right-3 bottom-5 font-bold  bg-white rounded-full px-7 py-4  transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-300 hover:text-slate-600'>
					<Link href={'./zapis'}>ОСТАВИТЬ ЗАВЯВКУ</Link>
				</button>
			</div>

			<div className='relative'></div>
			<div
				className='text-white w-full h-96 md:flex justify-center relative
				'
			>
				<Image
					src={map}
					className='md:w-full md:h-full h-[900px] absolute object-cover'
					alt='image'
				/>
				<div className='w-full h-full flex md:flex-row flex-col justify-between max-w-screen-lg relative z-30 md:pt-0 md:gap-0 pt-10  gap-5	'>
					<div className='flex flex-col items-center justify-center gap-5'>
						{icons.locb}
						<h1 className='text-2xl'>СПОРТИВНАЯ</h1>
						<p className='text-[12px]'>ул. спортивная 4</p>
						<button className='transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-300 hover:text-slate-600 text-[#ffff]  relative 	 font-bold  border rounded-full px-5 py-2  '>
							Выбрать
						</button>
					</div>
					<div className='flex flex-col items-center justify-center gap-5'>
						{icons.locb}
						<h1 className='text-2xl'>ЭГЕРШЕЛЬД</h1>
						<p className='text-[12px]'>ул. Верхнепортовая 38 Феско-Холл</p>
						<button className='transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-300 hover:text-slate-600 text-[#ffff]  relative 	 font-bold  border rounded-full px-5 py-2  '>
							Выбрать
						</button>
					</div>
					<div className='flex flex-col items-center justify-center gap-5'>
						{icons.locb}
						<h1 className='text-2xl'>ЦЕНТР</h1>
						<p className='text-[12px]'>ул. Алеутская 28</p>
						<button className=' transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-300 hover:text-slate-600 text-[#ffff]  relative 	 font-bold  border rounded-full px-5 py-2  '>
							Выбрать
						</button>
					</div>
					<div className='flex flex-col items-center justify-center gap-5'>
						{icons.locb}
						<h1 className='text-2xl'>СТОЛЕТИЕ</h1>
						<p className='text-[12px]'>
							ул. Проспект 100-летия Владивостоку 20
						</p>
						<button className='transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-300 hover:text-slate-600 text-[#ffff]  relative 	 font-bold  border rounded-full px-5 py-2  '>
							Выбрать
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
