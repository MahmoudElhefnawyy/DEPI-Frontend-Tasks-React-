import ErrorImg from '../assets/Imgs/Error404.png'
const Notfound=()=>{
    return (
        <>
         <div className="alter alter-danger px-auto py-5 text-center">
           <img src={ErrorImg} alt="Error 404 Image" />
           <p>An Error happened while Fetching Data</p>
         </div>
        </>
    )
}
export default Notfound