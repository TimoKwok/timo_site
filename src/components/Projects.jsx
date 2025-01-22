import React from 'react'
import { Avatar } from './Avatar'
import { Leva, useControls } from 'leva'
import { Canvas } from "@react-three/fiber";
import { myProjects } from '../constants';

export const Projects = () => {

    const currentProject = myProjects[0];

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
        <section className='c-space my-20'>
            <p className='hero_tag text-white'>
             My Projects
            </p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right">
                        put logo here
                        <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg">
                        </div>
                        <div className="flex flex-col gap-5 text-white-600 my-5">
                            <p className="text-white">
                                {currentProject.title}
                            </p>

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