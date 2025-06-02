import React from 'react'
import Marquee from 'react-fast-marquee'


const Testimonial = () => {
    const data = [
        {
            quote: "Kranti is a great human being. He solved all our problems by deleting the complete codebase. Highly recommended.",
            name: "A Boss Bitch",
        },
        {
            quote: "Some fix bugs, some write tests. Kranti just deletes the code and claims peace. Highly effective",
            name: "Commander of the BTS Army",
        },
        {
            quote: "When the CI/CD pipeline saw Kranti’s commit, it deployed itself",
            name: "A 10/10 Baddie",
        },        {
            quote: "Kranti is a great human being. He solved all our problems by deleting the codebase itself. Highly recommended.",
            name: "A true swiftie",
        },
    ]
  return (
    <div className='py-10'>
        <h1 className='text-lg md:text-xl font-bold tracking-tight text-primary mb-4'>What people think about me :</h1>
        <Marquee pauseOnHover={true} className='mt-4'>
            {data.map((item) => (
                <TestimonialCard key={item.name} quote={item.quote} name={item.name} />
            ))}
        </Marquee>
    </div>
  )
}

const TestimonialCard = ({quote , name } : {
    quote: string,
    name: string,
}) => {
    return <div className='text-sm shadow-md hover:shadow-lg shadow-cyan-400 flex flex-col justify-between mx-2 p-4 text-neutral-300 max-w-96 h-38 mb-10 border border-neutral-500 rounded-xl'>
        <p>{quote}</p>
        <div className='flex items-center gap-4 '>
            <div className='h-6 w-6 rounded-full border border-white text-xs flex items-center justify-center'>{name.charAt(0).toUpperCase()}</div>
            <p className='text-sm text-neutral-400'> - {name}</p>
        </div>
    </div>
}
export default Testimonial