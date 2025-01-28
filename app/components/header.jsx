'use client'
import Link from 'next/link'
import { links } from '../data/links'
import logo from '../fonts/images/19.png'
import Image from 'next/image'
import { icons } from '../util/icons'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)

	function close() {
		setIsOpen(false)
	}

	function open() {
		setIsOpen(true)
	}

	return (
		<>
			<section className='fixed top-0 z-40 w-full bg-white flex justify-center pt-5 text-[#585858] items-center '>
				<Image src={logo} className='w-24 h-11' alt='image' />
				<h2 className='md:pl-20 pl-16 pr-16 md:pr-16 font-bold'>
					+992 000-220-112
				</h2>
				<button className='md:hidden' onClick={open}>
					{icons.burger}
				</button>
				<div className='md:flex gap-10 hidden'>
					{links.map((link, index) => (
						<Link
							key={index}
							href={link.url}
							className='transition-transform duration-300 ease-in-out hover:scale-105 hover:text-black'
						>
							{link.text}
						</Link>
					))}

					<Link
						className='relative -right-16 md:block hidden border-b-2 transition-opacity duration-300 ease-in-out hover:opacity-70 hover:text-black'
						href='./lit'
					>
						Лицензия
					</Link>
				</div>
			</section>
			<Dialog
				open={isOpen}
				as='div'
				className='absolute z-[1000] focus:outline-none h-screen w-screen'
				onClose={close}
			>
				<div className='fixed inset-0 z-40  overflow-y-auto h-full w-full'>
					<div className='flex min-h-full items-center justify-center h-full w-full'>
						<DialogPanel
							transition
							className=' r bg-[#58AEE6] p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 h-full w-full'
						>
							<div className='flex justify-end pr-2 items-center'>
								<Image src={logo} className='w-24 h-11' alt='image' />
								<h2 className='md:pl-20 pl-14	 pr-16 md:pr-16 font-bold text-nowrap text-white'>
									+992 000-220-112
								</h2>
								<button className='' onClick={close}>
									<svg
										width='25'
										height='25'
										viewBox='0 0 18 19'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M10.6096 9.52684L17.3165 2.81993C17.7458 2.39068 17.7458 1.63951 17.3165 1.21027C16.8873 0.781026 16.1361 0.781026 15.7069 1.21027L8.99995 7.91718L2.29304 1.21027C1.8638 0.781026 1.11262 0.781026 0.683382 1.21027C0.25414 1.63951 0.25414 2.39068 0.683382 2.81993L7.39029 9.52684L0.683382 16.1801C0.25414 16.6093 0.25414 17.3605 0.683382 17.7897C0.898003 18.0044 1.21993 18.1117 1.48821 18.1117C1.75649 18.1117 2.07842 18.0044 2.29304 17.7897L8.99995 11.0828L15.7069 17.7897C15.9215 18.0044 16.2434 18.1117 16.5117 18.1117C16.78 18.1117 17.1019 18.0044 17.3165 17.7897C17.7458 17.3605 17.7458 16.6093 17.3165 16.1801L10.6096 9.52684Z'
											fill='white'
										/>
									</svg>
								</button>
							</div>
							<div className='pt-16 text-2xl text-white font-bold pl-7'>
								<div className='flex flex-col gap-10'>
									{links.map((link, index) => (
										<Link
											key={index}
											href={link.url}
											onClick={() => setIsOpen(false)}
											className='transition-transform duration-300 ease-in-out hover:scale-105'
										>
											{link.text}
										</Link>
									))}

									<Link
										className='transition-opacity duration-300 ease-in-out hover:opacity-70'
										href='./lit'
									>
										Лицензия
									</Link>
								</div>
							</div>
						</DialogPanel>
					</div>
				</div>
			</Dialog>
		</>
	)
}
