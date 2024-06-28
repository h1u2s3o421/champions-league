import './sectionNews.scss'
export default function SectionNews() {
    return (
        <section className=' bg-blue-900'>
            <div className="container p-12">
                <div className="columns-1 md:columns-2">
                    <div className='mainNews'>
                        <img className='image1' src="src\assets\sectionNews\00.avif" alt="" />
                        <p className='text text-white'>
                            Highlights, report: Madrid win Champions League!
                        </p>
                    </div>
                    <div className=''>
                        <div className='blueGradient m-4 p-4 rounded-lg'>
                            <h2 className='text-white text-2xl mb-3'>Headlines</h2>
                            <div className='flex m-3'>
                                <div>
                                    <img src="src\assets\sectionNews\01.avif" alt="" />
                                </div>
                                <div className='pl-3 flex justify-center items-center'>
                                    <p className='text-white text-2xl'>
                                        Champions League technical <br /> report
                                    </p>
                                </div>
                            </div>
                            <div className='flex m-3'>
                                <div>
                                    <img src="src\assets\sectionNews\01.avif" alt="" />
                                </div>
                                <div className='pl-3 flex justify-center items-center'>
                                    <p className='text-white text-2xl'>
                                        Champions League technical <br /> report
                                    </p>
                                </div>
                            </div>
                            <div className='flex m-3'>
                                <div>
                                    <img src="src\assets\sectionNews\01.avif" alt="" />
                                </div>
                                <div className='pl-3 flex justify-center items-center'>
                                    <p className='text-white text-2xl'>
                                        Champions League technical <br /> report
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </section>
    )
}