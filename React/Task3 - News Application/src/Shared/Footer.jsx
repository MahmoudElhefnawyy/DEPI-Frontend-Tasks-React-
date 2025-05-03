import { Link } from "react-router-dom"
const Footer=()=>{
    return(
        <>
           <div className="container bg-dark text-light w-100 py-3 px-3">
               <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Sport">Sports</Link></li>
                <li><Link to="/Science">Science</Link></li>
               </ul>
           </div>
        </>
    )
}
export default Footer