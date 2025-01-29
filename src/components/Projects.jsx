import React, { useState } from 'react'
import { Avatar } from './Avatar'
import { Laptop } from './Laptop'
import { Leva, useControls } from 'leva'
import { Canvas } from "@react-three/fiber";
import { myProjects } from '../constants';

const projectCount = myProjects.length;

export const Projects = () => {

    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const currentProject = myProjects[selectedProjectIndex];

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if(direction == 'previous'){
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            }
            else {
                return prevIndex === projectCount - 1 ? 0: prevIndex + 1;
            }
        })
    }

    const x = useControls('Avatar', 
        {
            rotationX: {
                value: 2.5,
                min: -10,
                max: 10
            },
            rotationY: {
                value: 2.5,
                min: -10,
                max: 10
            },
            rotationZ: {
                value: 2.5,
                min: -10,
                max: 10
            },
            scale: {
                value: 0.1,
                min: -10,
                max: 10
            },
            positionX: {
                value: 2.5,
                min: -10,
                max: 10
            },
            positionY: {
                value: 2.5,
                min: -10,
                max: 10
            },
            positionZ: {
                value: 2.5,
                min: -10,
                max: 10
            },

        })

    const y = useControls('Laptop', 
        {
            rotationX: {
                value: 2.5,
                min: -10,
                max: 10
            },
            rotationY: {
                value: 2.5,
                min: -10,
                max: 10
            },
            rotationZ: {
                value: 2.5,
                min: -10,
                max: 10
            },
            scale: {
                value: 0.1,
                min: -10,
                max: 10
            },
            positionX: {
                value: 2.5,
                min: -10,
                max: 10
            },
            positionY: {
                value: 2.5,
                min: -10,
                max: 10
            },
            positionZ: {
                value: 2.5,
                min: -10,
                max: 10
            },

        })




    return (
        <section className="h-[90vh] w-full flex flex-col relative">
            <div className='hero_tag text-white'>
                My Projects
            </div>

            {/* project logo + title + description */}
            <div className='flex flex-col sm:flex-row items-start justify-between gap-8 sm:gap-16'>
                
                
                {/* title + description */}
                <div key={selectedProjectIndex} className="max-w-2xl ml-6 animate-fadeIn">
                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg sm:mx-0">
                            <img
                                src={currentProject.logo}
                                alt="logo"
                                className="ml-4 w-24 h-24 shadow-md rounded-lg"
                            />
                    </div>
                    <div className='flex flex-col gap-5 text-white-600 my-1'>
                    <h2 className=" text-3xl font-semibold mb-4">
                        {currentProject.title}
                    </h2>
                    <p className=" text-lg text-gray-300 ">
                        {currentProject.desc}
                    </p>
                    </div>
                </div>

                {/* Navigation buttons */}
                <div className="bottom z-20 absolute bottom-8 left-20 gap-96 flex justify-center space-x-4">
                    <button className="arrow-btn" onClick={() => handleNavigation("previous")}>
                        <img
                        src="src/assets/left_arrow.png"
                        className="w-4 h-4"
                        />
                    </button>
                    <button className="arrow-btn" onClick={() => handleNavigation("next")}>
                        <img
                        src="src/assets/right_arrow.png"
                        className="w-4 h-4"
                        />
                    </button>  
                </div>   


                {/* avatar canvas */}
                <div className="w-full h-full absolute inset-0">
                    <Leva/>
                        <Canvas className='w-full h-full'>
                            <perspectiveCamera position={[0,0,-4]} aspect={window.innerWidth / window.innerHeight}  near={0.1} far={1000}>
                                <ambientLight intensity={5} color={"#e6e8ff"}/>
                                <directionalLight intensity={5} position={[-10,0,-2]} color={"#fff6d6"}/>
                                <Avatar
                                    rotation={[x.rotationX, x.rotationY, x.rotationZ]}
                                    scale={[x.scale, x.scale, x.scale]}
                                    position={[x.positionX, x.positionY, x.positionZ]}
                                />
                                <Laptop
                                    rotation={[y.rotationX, y.rotationY, y.rotationZ]}
                                    scale={[y.scale, y.scale, y.scale]}
                                    position={[y.positionX, y.positionY, y.positionZ]}
                                />
                            </perspectiveCamera>
                        </Canvas>
                </div>


                <div className='rounded-lg shadow-xl dark:shadow-gray-600 mr-8'>
                <div className='p-3 backdrop-filter w-fit rounded-lg sm:mx-0 '>
                    <img
                        src={currentProject.image}
                        alt="logo"
                        className="w-128 h-96 rounded-lg object-cover"
                    />
                </div>
                </div>

            </div>
        </section>
    )
}