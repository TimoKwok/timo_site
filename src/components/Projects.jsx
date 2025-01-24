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





    return (
        <section className='min-h-screen flex flex-col relative'>
            <div className='hero_tag text-white'>
                My Projects
            </div>


            <div className="max-w-2xl mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 ">
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
                    </div>   
                            
                </div>
                
            </div>



                <div className="max-w-2xl mt-72 flex justify-between ml-4">
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
            
            <div className="flex justify-center items-center left-0">
                <div className="w-3/4 h-64 bg-pink-500 rounded-2xl"></div>
            </div>

        </section>

    )
}