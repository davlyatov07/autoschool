import HeaderComponent from './components/header'
import './globals.css'
// import { LanguageProvider } from './hooks/useLanguage'

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				{/* <LanguageProvider>{children}</LanguageProvider> */}
				{/* {children} */}
				<HeaderComponent />
				{children}
			</body>
		</html>
	)
}
