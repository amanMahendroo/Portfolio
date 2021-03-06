import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import sanityClient from '../client.js'

export default function Project() {
    const [projectData, setProject] = useState(null)
    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "project"]{
                title,
                slug,
                author,
                publishedAt,
                description,
                mainImage {
                    asset -> {
                        _id,
                        url
                    },
                    alt
                },
                link,
                tags,
                finished
            }`)
            .then((data) => setProject(data))
            .catch(console.error)
    }, [])
    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">Projects Page</h1>
                <h2 className="text-l text-gray-600 flex justify-center mb-12">Welcome to my page of projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData && projectData.map((project, index) => (
                        <article>
                            <Link to={project.link} key={project.slug.current}>
                            <span className="block h-64 relative rounded shadow leading-snug 
                            bg-white border-l-8 border-green-400" key={index}>
                                <img src={project.mainImage.asset.url} alt={project.mainImage.alt}
                                className="w-full h-full rounded-r object-cover absolute" />
                                <span className="block relative h-full flex justify-end items-end pr-4 pd-4">
                                    <h3 className="text-gray-800 text-l font-bold px-3 py-4 
                                    bg-red-700 text-red-100 bg-opacity-75 rounded">{project.title}</h3>
                                </span>
                            </span>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}