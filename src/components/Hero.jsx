import React from 'react'
import { Waver } from './Waver'
import { Leva, useControls } from 'leva'
import { Canvas } from "@react-three/fiber";


export const Hero = () => {

    const x = useControls('Waver', 
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
                min: -50,
                max: 10
            },
            positionZ: {
                value: 2.5,
                min: -10,
                max: 10
            },

        })

    return (
        <section className="pt-20 min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col">
                <p className="animate-slidein text-2xl font-generalsans text-white font-medium text-center">
                Let's Get To Know Each Other! You Can Call Me
                </p>
                <p className="animate-slidein hero_tag text-gray_gradient">
                    Timo Kwok
                </p>
                <p className="animate-slidein font-medium text-2xl  font-generalsans text-white text-center">
                    Timothy.kwok@torontomu.ca | Toronto, ON. | Computer Science Student
                </p>
                <img className="animate-slidein mb-3 ml-2 h-auto max-w-lg shadow-xl dark:shadow-gray-800 rounded-full w-64 h-64" src='/assets/Githubpfp.png'/>
                <blockquote className="animate-slidein z-(-6) mb-1 ml-4 w-full z-10 px-4 sm:px-8 max-w-4xl text-white font-medium text-lg sm:text-xl leading-relaxed border-l-4 border-gray-400 pl-4 italic">
                    "Hey there, how's it going? I'm Timo and I'm really glad you stopped by, here you can learn more about me, view some of my projects, passions, past experiences, and get into contact with me! It's nice to finally meet you!"
                </blockquote>
                <p className="animate-slidein ml-9 text-white font-medium text-lg sm:text-xl pl-4 italic mt-4">
                    - Timo
                </p>
            </div>


            
            <div className="w-full h-full absolute inset-0">
            <Leva/>
                <Canvas className='w-full h-full'>
                    <perspectiveCamera position={[0,0,-4]} aspect={window.innerWidth / window.innerHeight} fov={75} near={0.1} far={1000}>
                        <ambientLight intensity={3} color={"#bec2e8"}/>
                        <directionalLight 
                            intensity={8} 
                            position={[1.3,10,10]} 
                            color={"#fff6d6"}
                        />
                        <Waver 
                            rotation={[7.9, 3.3, 2.1]}
                            scale={[5.9, 5.9, 5.9]}
                            position={[5.5, -4.7, 2.1]}
                        />
                    </perspectiveCamera>
                </Canvas>
            </div>


        </section>
    )
}
