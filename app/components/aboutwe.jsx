import Image from 'next/image'
import suboo from '../fonts/images/25.png'
import water from '../fonts/images/water.png'
import bysikle from '../fonts/images/bysikle.png'
import v1 from '../fonts/images/v1.png'
import v2 from '../fonts/images/v2.png'
import v3 from '../fonts/images/v3.png'
import v4 from '../fonts/images/v4.png'
import yout from '../fonts/images/yout.png'
import rewiews from '../fonts/images/reviews.png'
import info from '../fonts/images/info.png'
import mini from '../fonts/images/mini.png'
import WhatsApp from './whatsapp'
import Grapic from './grapic'
import { icons } from '../util/icons'
import Link from 'next/link'
import laptob from '../fonts/images/27.png'
import insta from '../fonts/images/insta.png'

export default function AboutweSection() {
	return (
		<section id='aboutwe' className=' md:pt-10 pt-[550px]'>
			<Grapic />
			<div className='flex md:flex-row flex-col justify-between pt-10'>
				<Image
					src={suboo}
					className='  md:w-[782px] md:h-[492px] w-[600px] h-[340px]'
					alt='image'
				/>
				<div className='text-[#2D2F30] text-right  flex flex-col gap-2 md:pr-20 pt-7 pr-5 '>
					<h1 className='text-3xl'>
						Обучение вождению <br /> на легковом автомобиле
					</h1>
					<h2 className='font-bold text-2xl'>ОТ 36 950 ₽ </h2>
					<div className='text-[16px] flex flex-col gap-3 pt-5'>
						<p>Длительность обучения 3 месяца -</p>
						<p>Беспроцентная рассрочка! -</p>
						<p>Идеально сбалансированная цена -</p>
						<p>Опытные и вежливые инструкторы -</p>
						<p>В стоимость входят все расходы по обучению -</p>
						<p>Гибкая система графиков обучения -</p>
					</div>
					<div className=''>
						<button className='transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-300 hover:text-slate-600 w-32 text-white bg-[#58AEE6] rounded-full px-5 py-2  '>
							<Link href={'./formz'}>Записаться</Link>
						</button>
					</div>
				</div>
			</div>
			<div className='pt-10 '>
				<WhatsApp />
			</div>
			<div className='flex md:flex-row flex-col justify-between items-center  md:pt-1 pt-10 md:pb-0 pb-10'>
				<div className='md:hidden flex'>
					<Image src={water} className='  w-[655px] h-[460px]' alt='image' />
				</div>

				<div className='flex justify-center flex-col gap-5 md:pl-40 md:pt-0 pt-10 '>
					<h1 className='text-3xl'>Обучение на права ГИМС</h1>
					<h2 className='font-bold text-2xl'>ОТ 23 900 ₽ </h2>

					<p>Получи права на управление: </p>
					<p>- гидроциклом </p>
					<p>- катером </p>
					<p>- парусной яхтой </p>
					<p>- другими маломерными судами</p>

					<button className='transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-300 hover:text-slate-600 w-32 text-white bg-[#58AEE6] rounded-full px-3 py-2 font-semibold  '>
						<Link href={'./gims'}>Подробнее</Link>
					</button>
				</div>
				<div className='md:flex hidden'>
					<Image src={water} className='  w-[755px] h-[560px]' alt='image' />
				</div>
			</div>
			<div className='w-full h-32 bg-[#2D2F30]   text-white text-center text md:text-4xl font-bold flex justify-center items-center gap-7'>
				<h1 className='md:flex hidden'>
					УЧЕБНО - МЕТОДИЧЕСКИЙ ЦЕНТР ЭГЕРШЕЛЬД
				</h1>

				<div>{icons.enshild}</div>
			</div>
			<div className='flex md:flex-row flex-col justify-between pt-0'>
				<Image
					src={bysikle}
					className='  md:w-[752px] md:h-[650px]'
					alt='image'
				/>
				<div className='text-[#2D2F30] text-right  flex flex-col gap-4 md:pr-20 pt-28  pr-5'>
					<h1 className='text-3xl'>
						Обучение вождению <br /> на мотоцикле
					</h1>
					<h2 className='font-bold text-4xl text-[#58AEE6] '>16 500 ₽*</h2>

					<div className='text-[16px] flex flex-col gap-3 pt-5'>
						<p>Длительность обучения 2 месяца -</p>
						<p>В стоимость входят все расходы по обучению -</p>
						<p>В ГАИ сдается только теория и автодром -</p>
						<p>Рассрочка без процентов -</p>
						<p>Онлайн обучение -</p>
						<p className='text-[#58AEE6]'>
							* При обучении у нас дополнительная скидка -
						</p>
					</div>
					<div className='pt-4'>
						<button className='transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-300 hover:text-slate-600 w-32 text-white bg-[#58AEE6] rounded-full px-5 py-2  '>
							<Link href={'./formz'}>Записаться</Link>
						</button>
					</div>
				</div>
			</div>
			<div className='pt-10 '>
				<WhatsApp />
			</div>
			<div className='flex md:flex-row flex-col justify-between items-center md:pl-36 pl-12 md:pb-0 pb-10 pt-1'>
				<div
					className=' text-left  flex flex-col gap-2 
				  '
				>
					<div className='pt-20 flex md:hidden'>
						<Image
							src={laptob}
							className='  md:w-[762px] md:h-[497px]'
							alt='image'
						/>
					</div>
					<h1 className='text-3xl'>Онлайн обучение </h1>
					<h2 className='text-[#58AEE6] text-4xl'>КOMУ ПОДОЙДЕТ:</h2>
					<div className='text-[16px] flex flex-col gap-3 pt-5 '>
						<p>- У кого нет времени на дорогу до лекций </p>
						<p>- Вы находитесь в другом городе</p>
						<p>- Есть ноутбук, планшет или телефон</p>
						<p>- Вы сможете освоить онлайн теоретическую часть целиком</p>
						<p>- парусной яхтой </p>
						<p>- Что здесь объяснять, все понятно Жми на эту кнопку</p>
					</div>

					<div className='flex flex-row gap-10 pt-5'>
						<button className='transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-300 hover:text-slate-600   -bottom-5 w-32 text-white bg-[#58AEE6] rounded-full px-5 py-1  '>
							Записаться
						</button>
						<button className='transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-300 hover:text-slate-600   -bottom-5 md:w-72 border font-bold text-nowrap text-[#58AEE6] rounded-full md:px-10 py-1  '>
							Получить конусльтацию
						</button>
					</div>
				</div>
				<div className='pt-20 md:flex hidden'>
					<Image
						src={laptob}
						className='  md:w-[762px] md:h-[497px]'
						alt='image'
					/>
				</div>
			</div>
			<div className='md:flex md:flex-col hidden'>
				<div className='bg-[#58AEE6] w-full h-[530px]   text-white -top-[1850px]'>
					<div className='text-left pt-16 pl-36 top-12 flex gap-5 flex-col'>
						<h1 className='font-bold text-5xl '>
							Что о нас говорят обучающиеся?
						</h1>
						<p className='text-[23px]'>
							Мы опросили десятки наших учеников и узнали, почему они считают
							<br />
							автошколу ДРАЙВИНГСКУЛ лучшей!ё
						</p>
					</div>
					<div className='flex justify-center pt-7  gap-14  '>
						<Image src={v1} className='  w-[200px] h-[250px]' alt='image' />
						<Image src={v2} className='  w-[200px] h-[250px]' alt='image' />
						<Image src={v3} className='  w-[200px] h-[250px]' alt='image' />
						<Image src={v4} className='  w-[200px] h-[250px]' alt='image' />
						<Image src={v4} className='  w-[200px] h-[250px]' alt='image' />
					</div>
				</div>
				<div className=' flex justify-center pt-20 pb-10 '>
					<Image src={rewiews} className='  w-[1270px] h-[670px]' alt='image' />
				</div>
			</div>
			<div className='bg-[#DEE9F1] h-72  '>
				<div className='flex justify-center md:text-4xl gap-2 pt-10'>
					<h1>Мы в социальных сетях</h1>
					<h2 className='text-[#58AEE6]'>@drivingschoolvl</h2>
				</div>
				<div className='text-center md:text-2xl  pt-10'>
					<p>
						Подписывайтесь на наши социальные сети, следите за новостями. Там мы{' '}
						<br />
						публикуем фотографии и видео, проводим конкурсы на бесплатное
						обучение и <br />
						выкладываем отзывы #ДРАЙВИНГСКУЛ
					</p>
				</div>
			</div>
			<div className=''>
				<Image src={insta} className='  ' alt='image' />
			</div>
			<div className='relative'>
				<Image
					src={info}
					className='md:flex hidden  w-full h-full '
					alt='image'
				/>
				<Image
					src={mini}
					className='flex md:hidden  w-full h-full '
					alt='image'
				/>

				<div className='  absolute top-20 md:pl-40 pl-5 '>
					<h1 className='text-4xl pb-7'>
						Первый в России тренажер <br /> автосимулятор с режимом <br />{' '}
						виртуальной реальности
					</h1>

					<div className='flex pb-5'>
						{icons.rocket}
						<p>Помогает победить страх дороги</p>
					</div>
					<div className='flex pb-5'>
						{icons.rocket}

						<p>Развивает когнитивные функции мозга</p>
					</div>
					<div className='flex pb-5'>
						{icons.rocket}
						<p>Тренирует водительские навыки</p>
					</div>
					<div className='md:pt-7'>
						<button className='transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-300 hover:text-slate-600 w-40 text-white bg-[#58AEE6] rounded-full px-5 py-2  '>
							Попробовать
						</button>
					</div>
				</div>
			</div>
			<div className='flex md:flex-row flex-col justify-around px-20 '>
				<div className='md:pt-0 pt-10 md:pb-0 pb-10'>
					<Image src={yout} className=' ' alt='image' />
				</div>
				<div className=''>
					<h1 className='text-4xl'>Узнайте больше</h1>
					<p>
						В конце 2016 года мы разработали и внедрили в процесс обучения
						<br />
						тренажер-автосимулятор с режимом виртуальной реальности. <br />
						Тренажер работает на базе VR-очков и специального програмного <br />
						обеспечения. Вы сможете пройти предварительное обучение как на
						<br />
						автодроме, так и на городе. Важно помнить, что тренажер входит в
						<br />
						стоимость и является совершенно бесплатным для наших <br />{' '}
						обучающихся. Перед посадкой в реальный автомобиль, каждый из Вас{' '}
						<br />
						сможет справиться со своими страхами и испытать свои силы за рулем,{' '}
						<br />
						на дорогах в виртуальной реальности.
					</p>
					<div className='flex items-center pt-10 gap-4'>
						<a className='border-b' href=''>
							{' '}
							Смотреть на
						</a>
						{icons.yout}
					</div>
				</div>
			</div>
			<div className='pt-20'>
				<Grapic />
			</div>
			<div className='flex md:flex-row flex-col  text-[#2D2F30] justify-center text-center md:gap-40 md:px-48 gap-10 px-10 relative pt-20 pb-40'>
				<p>
					О нас
					<br />
					<br />
					Автошкола ДРАЙВИНГСКУЛ создана командой профессионалов. За 10 лет
					работы мы выпустили более 9000 водителей категории «А» и «В». В
					ДРАЙВИНГСКУЛ четыре учебных класса расположенных в шаговой доступности
					от остановок, которые оборудованы современной материально- технической
					базой. У нас большой штат инструкторов и разнообразный автопарк,
					который дает возможность выбора автомобиля для обучения по душе.
				</p>
				<p>
					ОФИС <br /> <br />
					На сегодняшний день ДРАЙВИНГСКУЛ - это 4 учебных класса, расположенных
					в разных частях города вблизи от остановок общественного транспорта.
					Мы находимся по адресам: Спортивная; Эгершельд, Центр, Столетие. Наши
					администраторы вежливы, быстры и очень точны. Мы помним обо всех
					учениках и отслеживаем процесс обучения до самого получения
					водительского удостоверения. Возник вопрос? Позвони в наш офис,
					администратор найдет способ решения!
				</p>
				<p>
					АВТОПАРК
					<br />
					<br />
					Практическая часть проходит на специально оборудованных автомобилях и
					включает несколько этапов обучения: автодром и город. Вождение в
					городе проходит по 4 учебным маршрутам - БАМ, Вторая речка, Чуркин и
					Нейбута. Среди учебных автомобилей в автошколе ДРАЙВИНГСКУЛ - модели с
					левосторонним расположением руля, например: Toyota Prius, Hyundai
					Solaris, Kia Rio И другие.
				</p>
			</div>
		</section>
	)
}
