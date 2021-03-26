import {Link} from 'react-router-dom'
const Bloglist = (props) => {

    const blogs = props.x
    const title = props.title

    //  const handleDelete = props.handleDelete


    return (
        <div className="Bloglist-preview">
            <h2>{title}</h2>    

            {blogs.map((item) => (
                <div className="blog-preview" key={item.id} >
                <Link to={`/blogs/${item.id}`}>
                    <h2>{item.title}</h2>
                    <p>Written by {item.author}</p>
                </Link>
                </div>


            ))}

        </div>

    )
}

export default Bloglist
