import './SectionLatestNews.scss'
export default function SectionLatestNews() {
    return (
        <section className='container'>
            <h2 className='text-2xl'>Latest news</h2>
            <div className='news1'>
                <div>
                    <img src="https://editorial.uefa.com/resources/028d-1ad79495f1c0-f00d4da4f16e-1000/badges.jpeg" alt="" />
                </div>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/en/f/f0/2021_UEFA_Champions_League_Final_programme.png" alt="" />
                    <p>The season in numbers</p>
                </div>
                <div>
                    <iframe src="https://www.youtube.com/embed/yxvaURdWJS8?si=1vS7uBS9HSBLPRCO"
                    
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div className='news2'>
                <div>
                    1
                </div>
                <div>
                    2
                </div>
                <div>
                    3
                </div>
            </div>
        </section>
    )
}