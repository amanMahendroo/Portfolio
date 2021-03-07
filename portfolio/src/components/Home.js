import React from 'react'
import image from "../assets/background.jpg"

export default function Home() {
    return (
        <main>
            <img src={image} alt="background image" className="fixed inset-0 z-0 bg-contain object-cover w-full h-full"/>
            <section className="relative flex justify-center pt-12 lg:pt-64 px-8">
                <h4 className="text-9xl text-green-100 font-bold cursive lg:leading-snug">Hi I'm Aman Mahendroo</h4>
            </section>
        </main>
    )
}