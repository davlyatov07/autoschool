import Image from 'next/image'
import ribbon from '../fonts/images/ribbon.png'
import logs from '../fonts/images/logo.png'
import { icons } from '../util/icons'
export default function ContactSection() {
	return (
		<section id='contacts overflow-hidden'>
			<div className='bg-[#2D2F30] w-full h-[500px] flex justify-center'>
				<div
					className=' bg-[#58AEE6] w-full h-[500px] rotate-2 	 	flex flex-col absolute items-center
				'
				>
					<div className='mt-32	 -rotate-2'>
						<h1 className='border-white border-[1px] py-2  text-white text-xl px-3 rounded-3xl w-44   '>
							+992000220112
						</h1>
					</div>
					<div className='w-full h-full flex md:flex-row  justify-between md:max-w-screen-md max-w-screen-sm text-white -rotate-2 md:px-0 px-16'>
						<div className='flex  flex-col items-center justify-center md:gap-4  gap-3'>
							{icons.loc}
							<h1 className='md:text-xl'>СПОРТИВНАЯ</h1>
							<p className='text-[8px]'>ул. спортивная 4</p>
						</div>
						<div className='flex flex-col items-center justify-center gap-4'>
							{icons.loc}
							<h1 className='md:text-xl'>ЭГЕРШЕЛЬД</h1>
							<p className='text-[8px]'>
								ул. Верхнепортовая 38 <br /> Феско-Холл
							</p>
						</div>
						<div className='flex flex-col items-center justify-center gap-4'>
							{icons.loc}
							<h1 className='md:text-xl'>ЦЕНТР</h1>
							<p className='text-[8px]'>ул. Алеутская 28</p>
						</div>
						<div className='flex flex-col items-center justify-center gap-4'>
							{icons.loc}
							<h1 className='md:text-xl'>СТОЛЕТИЕ</h1>
							<p className='text-[8px]'>
								ул. Проспект 100-летия <br /> Владивостоку 20
							</p>
						</div>
					</div>
					<div className='md:pb-20 pb-10 md:px-0 px-10'>
						<div className='-rotate-2 text-white  md:text-xs text-[8px] flex md:flex-row flex-col    gap-2 items-center border-t pt-5  pl-10'>
							<p>Доступны звонки, Telegram, WhatsApp</p>
							{icons.app}

							<p>Создание сайта MADE IN</p>
							<br />
							<p>Автошкола "Драйвингскул" ЧОУ ДПО "УМЦ Эгершельд</p>
						</div>
					</div>
				</div>

				<Image
					src={ribbon}
					className='  absolute   md:w-full md:h-32 w-[640] h-32'
					alt='image'
				/>
				<Image
					src={logs}
					className='w-[259px] bottom-7 h-[126px] relative'
					alt='image'
				/>
			</div>
			<div className='relative -bottom-48'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.9744815983095!2d131.93610687597183!3d43.10505117113345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb39285affaaaab%3A0x4e384c7e8159a19c!2sDrayvingskul!5e0!3m2!1sen!2sus!4v1732802567056!5m2!1sen!2sus'
					allowFullScreen=''
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
					className='w-full h-[500px] relative -top-[200px]'
				></iframe>
			</div>
		</section>
	)
}
