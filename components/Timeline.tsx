import React from 'react'
type Data = {
    title: string,
    content: {
        title: string | React.ReactNode;
        description?: string | React.ReactNode;
    }[]
}
const Timeline = () => {
    const data: Data[] = [
    {
        "title": "2022",
        "content": [
            {
                "title": "Built My First Full-Stack App",
                "description": "Created a MERN stack web app for student project submissions and earned top grades."
            },
            {
                "title": "Won College Hackathon",
                "description": "Developed a campus safety app with real-time alerts and GPS tracking."
            }
        ]
    },
    {
        "title": "2023",
        "content": [
            {
                "title": "Interned at a Local Startup",
                "description": "Worked on front-end performance optimization using React and Redux."
            },
            {
                "title": "Published My First NPM Package",
                "description": "Released a utility library that got 1K downloads in its first month."
            }
        ]
    },
    {
        "title": "2024",
        "content": [
            {
                "title": "Launched My Personal Website",
                "description": "Built a 3D portfolio using Three.js and GSAP to showcase my projects."
            },
            {
                "title": "Contributed to Talawa Admin",
                "description": "Made multiple PRs improving UI and fixing bugs in the open-source project."
            }
        ]
    },
    {
        "title": "2025",
        "content": [
            {
                "title": "Reached $20K with my VS Code fork",
                "description": "My VS Code fork made me a millionaire."
            },
            {
                "title": "Spoke at JSConf EU",
                "description": "Delivered a talk on building custom developer tools using Electron and TypeScript."
            }
        ]
    },
    {
        "title": "2026",
        "content": [
            {
                "title": "Founded My Own DevTools Startup",
                "description": "Started a company focused on lightweight cloud-based IDEs."
            },
            {
                "title": "Wrote a Book on Web Performance",
                "description": "Published a practical guide that became a bestseller among frontend engineers."
            }
        ]
    }
]

  return (
    <div className='text-primary py-8 text-sm'>
        {data.map((item , idx) => (
            <div key={item.title}>
                <h2 className='font-bold text-primary dark:text-white'>{item.title}</h2>
                {item.content.map((cont , i) => (
                    <div key={i} className='pl-4'>
                        <h3>{cont.title}</h3>
                        {cont.description && <p>{cont.description   }</p>}
                    </div>
                ))}
            </div>
        ))}
    </div>
  )
}

export default Timeline