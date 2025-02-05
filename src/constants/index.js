export const myProjects = [
    {
        title: 'Uncle Iroh Discord Bot',
        desc: 'Before my first year at TMU, I decided to develop a Discord bot using Python and Java as a bold start to my programming journey. I researched how to integrate a bot using both Discord’s API and Node.js, and began to program “Iroh”. I debugged as I went along, documenting the issues I faced, building the foundation for creative problem solving and test-driven development well before my first class. I implemented command handling, allowing Iroh to listen for user Input, respond to yes/no questions, send images, gifs, mention users, and even clear messages. The result of my hard work was Uncle Iroh, a functional and engaging bot adopted by many of my friends servers and providing me with experience of API integration, Node.js, Java, Python, and creating interactive software!',
        href: 'https://github.com/TimoKwok/Uncle-Iroh-Bot',
        logo: '/assets/project_logo1.jpeg',
        image: '/assets/project_1_bg.png',
        tech: 'Java, Node, Discord, Python',
        tags: [
            {
                id: 1,
                name: 'Node',
                path: '/assets/nodejs-icon.svg',
            },
            {
                id: 2,
                name: 'Java',
                path: '/assets/java-4.svg'
            },
            {
                id: 3,
                name: 'Python',
                path: '/assets/python-5.svg'
            }

        ]
    },
    {
        title: 'The Food Finder',
        desc: 'After my first year at TMU, I was eager to expand my programming knowledge beyond the basics. To challenge myself, I attended a web development seminar focused on React and API integration. I learned the skills to produce Food Finder, a dynamic recipe search tool leveraging TheMealDB API. I adopted the fundamentals of HTML, CSS and JSON to create an interactive interface allowing users to find a variety of meals, videos, images, and dish origins. I handled edge cases with 404 screens, and leveraged React’s framework and state management to handle user requests smoothly. This is a project I am very proud of, for its functionality and front-end development in addition to the initiative I took to seek out web technologies and tools.',
        href: 'https://github.com/TimoKwok/Web-Dev-Version1',
        logo: '/assets/project_logo2.png',
        image: '/assets/project_2_bg.png',
        tech: 'Java, JavaScript, Node, React, HTML, CSS',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Java',
                path: '/assets/java-4.svg'
            },
            {
                id: 3,
                name: 'HTML',
                path: '/assets/html-icon.svg'
            },
            {
                id: 4,
                name: 'CSS',
                path: '/assets/css-icon.svg'
            },
            {
                id: 5,
                name: 'JS',
                path: '/assets/javascript-icon.svg'
            }
        ]
    },
    {
        title: 'Task Master App',
        desc: 'During my work term at theScore, I set out to explore real-time application development using Elixir, PostgreSQL and the Phoenix web framework. I used the framework to deploy a “Task” schema, allowing user create, edit and delete tasks applying Ecto to manage database entries. As a challenge, I implemented a trash system where deleted tasks are moved to a separate page and automatically removed after 24 hours using an Oban worker. This required me to optimize database interactions, research atomic operations, and schedule the background jobs to handle asynchronous executions. Currently, I am expanding the real-time capabilities by adding a chat feature, and hope to implement LiveView in order to create a strong ans scalable real-time application.',
        href: 'https://github.com/TimoKwok/task_manager',
        logo: '/assets/project_logo3.png',
        image: '/assets/project_3_bg.png',
        tech: 'Phoenix, Elixir, Oban, PostgreSQL, Ecto',
        tags: [
            {
                id: 1,
                name: 'Phoenix',
                path: '/assets/phoenix-36.svg'
            },
            {
                id: 2,
                name: 'Elixir',
                path: '/assets/elixir-1.svg',
            },
            {
                id: 3,
                name: 'SQL',
                path: '/assets/postgresql.svg'
            }
        ]
    },
    {
        title: 'Unity Video Game',
        desc: 'As a long time goal, I tasked myself with developing an open world style video game using the Unity engine and C# scripts. Having no prior experience in game development, I followed online tutorials to implement 3D player movement, a 3D camera system, and interactive gameplay/dialogue mechanics. I programmed scripts to allow the player to smoothly jump, dance, sit, interact and roam about the open world without any lagging or drag. I was able to make use of my artistic side too, sculpting each 3D asset using Blender and adding custom VFX and particle effects for added immersion. This remains an incredibly fulfilling project that combined both my skills of software development and digital artistry.',
        href: 'https://github.com/TimoKwok/GameCode',
        logo: '/assets/unity.png',
        image: '/assets/project_4_bg.png',
        tech: 'Unity, Blender, C#',
        tags: [
            {
                id: 1,
                name: 'C',
                path: '/assets/c-icon.svg',
              },
            {
                id: 2,
                name: 'Unity',
                path: '/assets/unity-69.svg'
            },
            {
                id: 3,
                name: 'Blender',
                path: '/assets/blender-2.svg'
            }


        ]
    },
    {
        title: 'War Card Game Simulator',
        desc: 'An assignment from my second year comparative programming class required us to develop a series of programs to simulate a game of War when given a shuffled deck of cards. This needed to be completing in the languages of Elixir, Haskell, and Rust—languages in which an object oriented approach would not apply. I needed to quickly adapt to the world of pattern matching and tail recursion and immutability. I studied each language and as I tested along the way, I created a strong program able to run effificnely using tail recursion to reduce the load on the stack. My efforts resulted in a perfect score and deepend my understanding of functional programming, optimization, clean code architecture as well as how to learn and apply new languages quickly.',
        href: 'https://github.com/TimoKwok/War-Elixir',
        logo: '/assets/card_logo.png',
        image: '/assets/project_5_bg.png',
        tech: 'Elixir, Haskell, Rust',
        tags: [
            {
                id: 1,
                name: 'haskell',
                path: '/assets/haskell.svg',
              },
            {
                id: 2,
                name: 'Elixir',
                path: '/assets/elixir-1.svg'
            }

        ]
    },
    {
        title: 'ATM System',
        desc: 'I collaborated with a team of five to develop a mock ATM system using Agile methodologies and SDLC approaches to creating software in my second year. Our goal was to design a well structured system by following professional practices and workflows. We applied a waterfall model approach and began by documenting UML diagrams, requirement analysis, use case scenarios, and test cases to map out the interactions between the actors and classes within our system. I was able to gain experience with iterative development and navigating team dynamics by resolving conflicts and communicating weekly with our members. This projects allowed me to view how professionals develop their software and how teams are meant to operate to produce high quality products.',
        href: 'https://github.com/TimoKwok/ATM-System',
        logo: '',
        image: '',
        tech: 'Java, Agile, SDLC, Waterfall',
        tags: [
            {
                id: 1,
                name: 'Java',
                path: '/assets/java-4.svg',
              }
        ]
    },
    {
        title: 'E-Commerce System',
        desc: 'In my first year at TMU, I was introduced to object-oriented programming in Java, learning key concepts such as inheritance, classes, and interfaces. I was instructed to develop a mock eCommerce system with core functionalities of product search, categories, shopping cart management, purchases, and a rating/review system. I applied our lessons of inheritance to remove redundancies in the system, ensuring that the systems hierarchy was both maintainable and easy to understand, modify, and re-use. Not only this, but I provided a suite of test cases and performed manual testing as I coded, validating the functionality of each component and class. I am proud of my abilities to create this project using every skill I had attained in my first year of studies, preparing me for my future in computer science.',
        href: '',
        logo: '',
        image: '',
        tech: 'Java',
        tags: [
            {
                id: 1,
                name: 'Java',
                path: '/assets/java-4.svg'
            }

        ]
    }
]