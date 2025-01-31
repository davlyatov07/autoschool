import Contact from '../components/contact'
import ContactSection from '../components/contacts'
import { icons } from '../util/icons'
export default function Document() {
	return (
		<section>
			<div
				className='pt-36
        flex justify-center'
			>
				<h1 className=' font-bold text-3xl md:text-5xl'>Документы</h1>
			</div>
			<div className='grid grid-rows-2 md:grid-cols-2 gap-5 md:max-w-screen-2xl pt-20 md:pl-40 px-10 md:text-xl '>
				<div
					className='flex
        items-center font-semibold md:gap-20 border-b md:w-[500px] pb-4 '
				>
					<p>Лицензия на право ведения образовательной деятельности</p>
					{icons.doc}
				</div>
				<div
					className='flex
        items-center font-semibold md:gap-20 border-b md:w-[500px] pb-4 '
				>
					<p>Лицензия на право ведения образовательной деятельности</p>
					{icons.doc}
				</div>
				<div
					className='flex
        items-center font-semibold md:gap-20 border-b md:w-[500px] pb-4 '
				>
					<p>Лицензия на право ведения образовательной деятельности</p>
					{icons.doc}
				</div>
				<div
					className='flex
        items-center font-semibold md:gap-20 border-b md:w-[500px] pb-4 '
				>
					<p>Лицензия на право ведения образовательной деятельности</p>
					{icons.doc}
				</div>
				<div
					className='flex
        items-center font-semibold md:gap-20 border-b md:w-[500px] pb-4 '
				>
					<p>Лицензия на право ведения образовательной деятельности</p>
					{icons.doc}
				</div>
				<div
					className='flex
        items-center font-semibold md:gap-20 border-b md:w-[500px] pb-4 '
				>
					<p>Лицензия на право ведения образовательной деятельности</p>
					{icons.doc}
				</div>
				<div
					className='flex
        items-center font-semibold md:gap-20 border-b md:w-[500px] pb-4 '
				>
					<p>Лицензия на право ведения образовательной деятельности</p>
					{icons.doc}
				</div>
				<div
					className='flex
        items-center font-semibold md:gap-20 border-b md:w-[500px] pb-4 '
				>
					<p>Лицензия на право ведения образовательной деятельности</p>
					{icons.doc}
				</div>
				<div
					className='flex
        items-center font-semibold md:gap-20 border-b md:w-[500px] pb-4 '
				>
					<p>Лицензия на право ведения образовательной деятельности</p>
					{icons.doc}
				</div>
				<div
					className='flex
        items-center font-semibold md:gap-20 border-b md:w-[500px] pb-4 '
				>
					<p>Лицензия на право ведения образовательной деятельности</p>
					{icons.doc}
				</div>
			</div>
			<div className='pt-36'>
				<ContactSection />
			</div>
		</section>
	)
}
