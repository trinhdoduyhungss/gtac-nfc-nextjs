import Link from 'next/link'
import Page from '../components/page'
import Section from '../components/section'
import members from '../public/data/data'
const Members = () => {
	return (
		<Page>
			<Section>
				<h2 className='text-xl font-semibold'>GTAC Members:</h2>

				<div className='mt-2'>
					<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
						{members.map((member) => (
							<Link key={member.id} href='/[mid]' as={`/${member.id}`}>
								<div
									key={member.id}
									className='rounded overflow-hidden shadow-lg bg-inherit'
								>
									<img
										className='w-full'
										src={`images/${member.id}.png`}
										alt='Mountain'
									/>
									<div className='font-bold text-sm mb-2'>{member.name}</div>
									<p className='text-gray-700 text-xs	 text-base'>
										Phone: {member.phone}
									</p>
									<p className='text-gray-700 text-xs text-base'>
										Email: {member.email}
									</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</Section>
		</Page>
	)
}

export default Members
