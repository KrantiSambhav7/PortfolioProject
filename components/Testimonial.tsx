import React from 'react'
import Marquee from 'react-fast-marquee'
import Heading from './Heading'
import Subheading from './Subheading'

const Testimonial = () => {
    const data = [
        {
            quote: "Kranti is a great human being. He solved all our problems by deleting the complete codebase. Highly recommended.",
            name: "A Boss Bitch",
            avatar: "https://plus.unsplash.com/premium_photo-1680391379682-d0ad0ff7dd71?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            quote: "Some fix bugs, some write tests. Kranti just deletes the code and claims peace. Highly effective",
            name: "Commander of the BTS Army",
            avatar: "https://images.unsplash.com/photo-1644018458601-75adfb90f14a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            quote: "When the CI/CD pipeline saw Kranti’s commit, it deployed itself",
            name: "A 10/10 Baddie",
            avatar: "https://images.unsplash.com/photo-1464863979621-258859e62245?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmxzfGVufDB8fDB8fHww"
        },        {
            quote: "Kranti is a great human being. He solved all our problems by deleting the codebase itself. Highly recommended.",
            name: "A true swiftie",
            avatar: "https://images.unsplash.com/photo-1478465726282-ddb11650c80b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGdpcmxzfGVufDB8fDB8fHww"
        },
    ]
  return (
    <div className='py-10'>
        <h1 className='text-lg md:text-xl font-bold tracking-tight text-primary mb-4'>What people think about me :</h1>
        <Marquee pauseOnHover={true} className='mt-4'>
            {data.map((item) => (
                <TestimonialCard key={item.name} quote={item.quote} name={item.name} avatar={item.avatar}/>
            ))}
        </Marquee>
    </div>
  )
}

const TestimonialCard = ({quote , name , avatar} : {
    quote: string,
    name: string,
    avatar: string
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