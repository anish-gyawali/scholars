import { useNavigate } from "react-router";

function HomePage(){
     const navigate=useNavigate();

        const goToAbout=()=>{
        navigate('/about')
    }
    return (
        <div>
           <h1> This is my home page</h1>
           <br/>
           <h3> Welcome to Scholars!</h3>
                        <button onClick={goToAbout}>
                About Page
            </button>
        </div>
    )
}
export default HomePage;