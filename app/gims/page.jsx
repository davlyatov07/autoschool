import Link from 'next/link'
import { links } from '../data/links'
import ribbon from '../fonts/images/ribbon.png'
import logs from '../fonts/images/logo.png'
import logo from '../fonts/images/19.png'
import gimes from '../fonts/images/gime.png'

import gidro from '../fonts/images/gidro.png'
import boat from '../fonts/images/boat.png'
import clas from '../fonts/images/class.png'
import parus from '../fonts/images/parus.png'

import Image from 'next/image'
import WhatsApp from '../components/whatsapp'

import { icons } from '../util/icons'
export default function Gims() {
	return (
		<section className=''>
			<div className='flex md:flex-row md:px-0 px-2  flex-col justify-between  pt-36'>
				<div className='flex md:hidden'>
					<Image
						src={gimes}
						className='md:w-[853px] md:h-[558px] '
						alt='image'
					/>
				</div>
				<div className='flex justify-start flex-col gap-3 md:pl-56 pl-12 pt-10 md:pt-0 pb-10'>
					<h1 className='text-3xl'>
						Государственное <br /> удостоверение на право <br /> управления
						маломерным <br />
						судном:
					</h1>

					<p>- гидроцикл </p>
					<p>- катер </p>
					<p>- парусная яхта </p>
					<p>- другиe маломерныe суда</p>
					<p>
						Удостоверение ГИМС действует на всей территории <br /> Российской
						Федерации и позволяет управлять маломерными <br /> судами длиною до
						20 метров, без ограничения по мощности <br /> двигателя, с
						количеством людей на борту до 12 человек.
					</p>
					<div className='pt-5'>
						<button className=' w-72 text-white bg-[#58AEE6] rounded-full px-5 py-3  '>
							<Link href={'./formz'}>Записаться на курс </Link>
						</button>
					</div>
				</div>
				<div className='md:flex hidden'>
					<Image src={gimes} className='w-[853px] h-[558px] ' alt='image' />
				</div>
			</div>
			<WhatsApp />
			<div className='flex md:flex-row flex-col md:pb-0 pb-5  justify-between'>
				<Image src={gidro} className='md:w-[604px] md:h-[611px] ' alt='image' />
				<div className='flex md:flex-row flex-col  justify-between  pt-12'>
					<div className='flex justify-start flex-col gap-4 md:pr-28 pl-12'>
						<h1 className='text-4xl font-bold pb-5'>
							Где и чем я смогу <br /> управлять после <br /> курса?
						</h1>
						<h2 className='text-lg text-[#58AEE6] '>Моторное судно:</h2>

						<p className='text-sm'>
							до 20 метров со стационарным или подвесным мотором <br /> без
							ограничения по мощности.
						</p>
						<h2 className='text-lg text-[#58AEE6] '>Гидроцикл:</h2>

						<p className='text-sm'>
							скоростное персональное водное транспортное <br /> средство.
						</p>
						<h2 className='text-lg text-[#58AEE6] '>Парусное судно:</h2>

						<p className='text-sm'>
							яхта до 20 метров, которое использует парус и силу <br /> ветра
							для движения.
						</p>
					</div>
				</div>
			</div>
			<div className='md:flex hidden'>
				<Image src={boat} className='w-full h-[349px] relative ' alt='image' />
				<div className='absolute -bottom-[950px] text-white  flex-row flex  gap-20 pl-72 text-center '>
					<div className=' flex flex-col gap-5'>
						<h2 className='text-xl font-bold'>Внутренние водные пути (ВВП)</h2>
						<p>
							судоходные реки и озëра, где <br /> действуют правила плавания по{' '}
							<br />
							внутренним водным путям
						</p>
					</div>
					<div className=''>
						<h2 className='text-xl font-bold'>Внутренние пути (ВП)</h2>
						<p>
							не судоходные реки и <br /> озёра
						</p>
					</div>
					<div className=''>
						<h2 className='text-xl font-bold'>Морские пути (МП)</h2>
						<p>
							внутренние и территориальные <br /> моря. К данной категории также{' '}
							<br />
							относятся водоемы, которые не <br /> являются морями, но где{' '}
							<br /> действуют правила судоходства, <br /> как на морских путях.
						</p>
					</div>
				</div>
			</div>
			<div className='flex md:flex-row flex-col justify-between  pt-20'>
				<div className='flex md:hidden'>
					<Image src={clas} className='w-[500px] h-[490px] ' alt='image' />
				</div>
				<div className='flex justify-start flex-col gap-3 pl-12 pb-5 md:pl-56'>
					<h1 className='text-3xl'>
						Теоретические занятия <br /> проходят в учебно- <br />
						методическом центре
					</h1>

					<h2 className='text-3xl text-[#58AEE6]'>ЭГЕРШЕЛЬД</h2>
					<h2 className='font-bold text-2xl'>ОТ 23 900 ₽ </h2>
					<p>
						Программа зависит от выбранных категорий прав и состоит <br /> из 8
						лекций — все обучение займет около 2 месяцев.
					</p>

					<p className='font-bold text-lg'>Эгершельд</p>
					<p>ул. Лейтенанта Шмидта, 17А. (Эгершельдоставляем)</p>

					<button className=' w-72 text-white bg-[#58AEE6] rounded-full px-5 py-3  '>
						<Link href={'./zapis'}>ОСТАВИТЬ ЗАЯВКУ </Link>
					</button>
				</div>
				<div className='md:flex hidden'>
					<Image src={clas} className='w-[500px] h-[490px] ' alt='image' />
				</div>
			</div>
			<div className='w-full h-32 bg-[#2D2F30]  text-white text-center text md:text-4xl font-bold flex justify-center items-center gap-7'>
				<h1 className='md:flex hidden'>
					УЧЕБНО - МЕТОДИЧЕСКИЙ ЦЕНТР ЭГЕРШЕЛЬД
				</h1>

				<div>{icons.enshild}</div>
			</div>
			<div className='flex md:flex-row flex-col justify-between'>
				<Image src={parus} className='w-[604px] h-[611px] ' alt='image' />
				<div className='flex flex-row justify-between  pt-20'>
					<div className='flex justify-start flex-col gap-4 pl-12 md:pr-28'>
						<h1 className='text-2xl  pb-5'>
							Практические занятия <br /> проходят на базе самого <br />{' '}
							большого яхт-клуба на <br />
							Дальнем Востоке — «Семь <br /> футов».
						</h1>

						<p className='text-sm'>
							6 часов тренировок на воде на катере или парусной яхте — <br />{' '}
							время подбирается индивдуально. На тренировках <br /> отрабатываем
							маневры, которые надо будет выполнить <br /> самостоятельно на
							экзамене в ГИМС.
						</p>
						<p className='font-bold text-lg'>Эгершельд</p>
						<p>ул. Лейтенанта Шмидта, 17А. (Эгершельдоставляем)</p>
						<button className=' w-72 text-white bg-[#58AEE6] rounded-full px-5 py-3  '>
							<Link href={'./Gims'}>Узнать стоимость </Link>
						</button>
					</div>
				</div>
			</div>

			<div className=' bg-[#DEE9F1] w-full h-96 pt-20 flex flex-col gap-4 items-center'>
				<h1 className='font-bold text-4xl text-center'>
					СВЯЖИТЕСЬ С НАМИ ПРЯМО СЕЙЧАС!
				</h1>
				<div className=' flex items-center md:flex-row l gap-3 justify-center '>
					<h1 className='text-4xl text-[#58AEE6]'>Мы в социальных сетях</h1>
					{icons.i}
					{icons.b}
					{icons.c}
				</div>
				<div className='bg-white w-[800px] h-32 flex md:flex-row flex-col   rounded-3xl   justify-center'>
					<div className=''>
						<h3 className='text-[#58AEE6] text-2xl font-bold pt-5 text-center'>
							КОНТАКТЫ
						</h3>
						<div className=' flex md:flex-row fll text-sm gap-3 items-center pt-3 px-40'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className='size-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z'
								/>
							</svg>

							<h2>+992 000 220 112</h2>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className='size-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
								/>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
								/>
							</svg>

							<h2>ул. Верхнепортовая 38 (Феско-Холл)</h2>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className='size-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
								/>
							</svg>

							<h2>drivingschoolvl@mail.ru</h2>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-[#2D2F30] w-full h-[500px] flex justify-center'>
				<div
					className=' bg-[#58AEE6] w-full h-[500px] rotate-2 absolute 	flex flex-col  items-center
				'
				>
					<div className=' flex justify-center pt-48	-rotate-1'>
						<h1 className='border-white border-[1px] py-2  -rotate-1 text-white text-xl px-3 rounded-3xl w-44 '>
							+992000220112
						</h1>
					</div>
					<div className='flex  items-center justify-center gap-4 p text-white -rotate-1 pt-5'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='size-6'
						>
							<path
								fill-rule='evenodd'
								d='m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
								clip-rule='evenodd'
							/>
						</svg>
						<div className='flex flex-col items-center justify-center gap-4 p text-white -rotate-1 pt-5 pb-10'>
							<h1 className='text-xl'>ЭГЕРШЕЛЬД</h1>
							<p className='text-[8px]'>ул. Верхнепортовая 38 Феско-Холл</p>
						</div>
					</div>
					<div className='-rotate-2 text-white  text-xs flex    gap-2 items-center border-t pt-5  pl-'>
						<p>Доступны звонки, Telegram, WhatsApp</p>
						{icons.app}

						<p>Создание сайта MADE IN</p>
						<br />
						<p>Автошкола Драйвингскул ЧОУ ДПО УМЦ Эгершельд</p>
					</div>
				</div>

				<div className='w-full pt-16'>
					<Image src={ribbon} className=' absolute  w-full h-32 ' alt='image' />
				</div>
				<div className='absolute pt-10'>
					<Image src={logs} className='w-[259px] h-[126px] ' alt='image' />
				</div>
			</div>
			<div className=''>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d655.2007457120245!2d68.78744716237851!3d38.58050839798987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d3e0008cc3f1%3A0xf749ac20bf53a83b!2sLa%20Cite!5e0!3m2!1sen!2s!4v1731591472833!5m2!1sen!2s'
					allowfullscreen=''
					loading='lazy'
					referrerpolicy='no-referrer-when-downgrade'
					className='w-full h-[500px] absolute '
				></iframe>
			</div>
		</section>
	)
}
