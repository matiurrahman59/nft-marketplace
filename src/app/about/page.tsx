import Image from 'next/image'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
	return (
		<div>
			<h1 className="font-spaceMono">About</h1>
			<div className="relative h-80 w-2/3"></div>
		</div>
	)
}

export default page
