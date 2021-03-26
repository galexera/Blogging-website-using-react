    import { useState } from "react"
    import {useHistory}  from "react-router-dom"


    const Create = () => {

        const [title, setTitle] = useState('')
        const [body ,setBody] = useState('')
        const [author ,setAuthor] = useState('mario')
        const [isPending , setisPending] = useState(false)
        const history = useHistory()

   
  const handleSubmit = (e) => {
    setisPending(true)
    e.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      setisPending(false)
      history.push("/")
    })
  }
        
        return (

            <div className ="create">   
                <h1>Add a new blog  </h1>
                <form onSubmit = {handleSubmit}>
                <label>Blog title</label>
                <input 
                    type ="text"
                    required
                    value = {title}
                    onChange = {(x) => setTitle(x.target.value)}
                />
                <label>Blog body</label>
                <textarea
                required
                onChange = { x => setBody(x.target.value) }
                ></textarea>       
                <label>Blog author</label>
                <select 
                value = {author}
                onChange = {x => setAuthor(x.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>

                </select>    
                {!isPending && <button>Add Blog</button>} 
                {isPending && <button disabled>Adding Blog</button>} 

                    <p>{title}</p>
                    <p>{body}</p>
                    <p>{author}</p>
                </form>
            </div>

        )
    }


    export default Create