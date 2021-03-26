import { Link } from "react-router-dom";
const Notfound = () => {
return  (
    <div className = "page-notfound">
        
        <h1>Sorry</h1>
        <p>Page not found</p>
        <Link to ="/"> <button>Back to home</button> </Link>

    </div>
)
}

export default Notfound