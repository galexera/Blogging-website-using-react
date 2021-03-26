import { useState, useEffect } from 'react'
import Bloglist from './bloglist'
import useFetch from './useFetch'

const Content = () => {

    let title = "WELCOME TO THE APP"

    const { data : Blogs, isPending} =  useFetch('http://localhost:8000/blogs')

    // const handleDelete = (id) => {

    //    const  newBlogs = Blogs.filter( items => items.id!==id)
    //    console.log(newBlogs)   
    //    setBlogs(newBlogs)
    // }

    // useEffect(() => {
    //     fetch('http://localhost:8000/blogs')
    //         .then(res => { return res.json() })
    //         .then(data =>{ setBlogs(data)
    //                        setisPending(false) })
    // }, [])


    return (
        <div className="content">
    

            {/* <h1> {title}</h1> */}
            {isPending && <div> <h1>Loading... </h1></div>}
            {Blogs && <Bloglist x={Blogs} title={"All blogs!"}  />}


        </div>
    )
}

export default Content