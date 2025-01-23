import React, { useState } from 'react'
import { Avatar } from './Avatar'
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
                return prevIndex === projectCount - 1 ? 0: prevIndex + 1
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





    return (
        <section className='bg-black'>
            <div className='hero_tag text-white'>
            My Projects
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right">
                        <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg">
                            <img src={currentProject.logo} alt="logo" className="w-20 h-20 shadow-sm rounded-lg"/>
                        </div>

                        <div className="flex flex-col gap-5 text-white-600 my-1">
                            <p className="text-white text-2xl font-semibold animatedText">
                                {currentProject.title}
                            </p>
                            <p className="animatedText">
                                {currentProject.desc}
                            </p>
                        </div>


                        <div className="flex justify-between items-center mt-7">
                            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                                <img src="src/assets/red-right-arrow.png" className='w-4 h-4'/>
                            </button>
                            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                                <img src="src/assets/red-right-arrow.png" className='w-4 h-4'/>
                            </button>
                        </div>



                    </div>
                </div>
            </div>

            <div >
            <Leva/>
            <Canvas className='w-full h-full'>
            <perspectiveCamera position={[-2,0,0]}>
            <directionalLight intensity={4} position={[-9,0,4]} color={"#f7e1ba"}/>
            <Avatar
                 rotation={[x.rotationX, x.rotationY, x.rotationZ]}
                 scale={[x.scale, x.scale, x.scale]}
                 position={[x.positionX, x.positionY, x.positionZ]}
            />
            </perspectiveCamera>
            </Canvas>
            </div>
        </section>
    )
}