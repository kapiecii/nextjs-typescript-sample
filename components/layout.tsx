import Head from 'next/head'
import Link from 'next/link'

type Props = {
	children?: React.ReactNode
	title?: string
}

const Layout = ({ children, title}: Props) => {
	const pageTitle = title || 'page title'
	return (
		<div className="container">
			<Head>
				<title>{ pageTitle }</title>
			</Head>
			<header>
				<h1>{ pageTitle }</h1>
			</header>
			<nav>
				<li><Link href="/">Home</Link></li>
				<li><Link href="/chart">Chart</Link></li>
			</nav>
			<main> { children } </main>
		</div>
	)
}

export default Layout