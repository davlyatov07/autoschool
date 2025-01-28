import HomeSection from './home'

import AboutweSection from './aboutwe'

import ContactSection from './contacts'

export default function MainComponent() {
	return (
		<>
			<section className='flex justify-center flex-col max-w-screen-2xl bg-[#ffffff] box-border overflow-hidden scroll-smooth'>
				<HomeSection />
				<AboutweSection />
				<ContactSection />
			</section>
		</>
	)
}
