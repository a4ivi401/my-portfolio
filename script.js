const App = () => {
	return (
		<div className='max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start'>
			<div className='text-center md:text-left md:mr-8 mb-6 md:mb-0'>
				{/* Avatar and Name */}
				<img
					src='https://placehold.co/100x100'
					alt='Profile picture of Olexandr Bielinskiy'
					className='rounded-full mx-auto md:mx-0 mb-4'
				/>
				<h1 className='text-4xl md:text-5xl font-bold'>Olexandr Bielinskiy</h1>
			</div>
			{/* GitHub */}
			<div className='flex-1'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
					<div className='bg-white shadow-md rounded-lg p-4'>
						<div className='flex items-center mb-4'>
							<i className='fab fa-github text-2xl mr-2'></i>
							<span className='font-semibold'>Olexandr Bielinskiy</span>
						</div>
						<button className='bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded'>
							Follow
						</button>
					</div>
					{/* Instagram */}
					<div className='bg-white shadow-md rounded-lg p-4'>
						<div className='flex items-center mb-4'>
							<i className='fab fa-instagram text-2xl mr-2'></i>
							<span className='font-semibold'>Instagram</span>
						</div>
						<button className='bg-blue-500 text-white font-semibold py-2 px-4 rounded'>
							Follow
						</button>
					</div>
					{/* Twitter */}
					<div className='bg-blue-100 shadow-md rounded-lg p-4'>
						<div className='flex items-center mb-4'>
							<i className='fab fa-twitter text-2xl mr-2'></i>
							<div>
								<span className='font-semibold'>Twitter</span>
								<p className='text-sm text-gray-600'>@a4ivi4</p>
							</div>
						</div>
						<button className='bg-blue-500 text-white font-semibold py-2 px-4 rounded'>
							Follow
						</button>
					</div>
					{/* YouTube */}
					<div className='bg-red-100 shadow-md rounded-lg p-4'>
						<div className='flex items-center mb-4'>
							<i className='fab fa-youtube text-2xl mr-2'></i>
							<span className='font-semibold'>Olexandr Bielinskiy</span>
						</div>
						<button className='bg-red-500 text-white font-semibold py-2 px-4 rounded'>
							Subscribe 19
						</button>
					</div>
				</div>
				{/* Biography */}
				<div id='biography' className='bg-white shadow-md rounded-lg p-6 mb-6'>
					<h2 className='text-xl font-bold mb-4'>Biography</h2>
					<p className='text-gray-700'>
						Olexandr Bielinskiy is a software developer with a passion for
						creating innovative solutions. With a background in computer science
						and extensive experience in various programming languages, Olexandr
						has contributed to numerous projects and continues to push the
						boundaries of technology.
					</p>
				</div>
				<div id='projects' className='bg-white shadow-md rounded-lg p-6'>
					<h2 className='text-xl font-bold mb-4'>Projects</h2>
					<ul className='list-disc list-inside text-left'>
						<li className='mb-2'>
							<strong>Project 1:</strong> A web application for managing tasks
							and projects.
						</li>
						<li className='mb-2'>
							<strong>Project 2:</strong> An e-commerce platform with a
							user-friendly interface.
						</li>
						<li className='mb-2'>
							<strong>Project 3:</strong> A mobile app for tracking fitness
							activities and goals.
						</li>
						<li className='mb-2'>
							<strong>Project 4:</strong> A machine learning model for
							predicting stock prices.
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
