
import { useParams } from 'react-router-dom'
import useFetch from "./useFetch"
import{ useHistory } from "react-router-dom"

const Blogdetails = () => {
    const { id } = useParams()
    const { data : blog } =  useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()

    const handleclick = () => {
        fetch('http://localhost:8000/blogs/' + id , {
            method : 'DELETE'
        }).then( () => {
            history.push("/")
        })
    }

  return (
    <div className="blog-details">
  
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
	<p>Hellp </p>
          <button onClick = {handleclick}>
              Delete blog
          </button>
        </article>
      )}
    </div>
  );
}
 
export default Blogdetails;