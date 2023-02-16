import myPic from "../../assets/myPic.jpg"
const Info_about_me = () => {

    return (
        <main className='flex gap-[3rem] flex-wrap items-center justify-center transformY100remfromBottom'>
            <section className='flex flex-col gap-[2rem]'>
                <div className='flex flex-col gap-[0.3rem]'>
                    <p className={`opacity-[0.3]`}>Hey there!</p>
                    <h3 className='text-3xl text-primary'>I'M ABDULREHMAN JAFER</h3>
                </div>
                <div className='max-w-[800px] flex flex-col gap-[3rem] sm:translateX text-secondary'>
                    <p className='max-w-[500px] [word-spacing:0.5rem]'>
                        I am a web developer and looking forward to be a part of awesome projects.
                        I would love to work with a team of creative developer and I'm very enthusiastic
                        about helping my colleague under tough spot. And I always like to be the guy on
                        which his team can count at any hurdle.
                    </p>
                    <p className='max-w-[500px] [word-spacing:0.5rem]'>
                        As a web developer , I have learned many creative and helpful skills for my profession.
                        My favourite programming languages are javascript and typescript. I think I am able to
                        solve any problem in these languages. I am very passionate and have a innovative mindset.
                        Its been a great journey and I would love to make you a part of it.
                    </p>
                </div>
            </section>
            <section className='bg-third rounded-md sm:p-[2rem] p-4 min-w-[300px]'>
                <img src={myPic} alt="myPic" className='object-cover w-[100%] h-[500px]' />
            </section>
        </main>
    )
}

export default Info_about_me
