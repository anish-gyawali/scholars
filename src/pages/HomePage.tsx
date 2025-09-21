import { useNavigate } from "react-router";

function HomePage(){
     const navigate=useNavigate();

        const goToAbout=()=>{
        navigate('/about')
    }
    return (
        <div>
           <h1> This is my home page</h1>
                        <button onClick={goToAbout}>
                About Page
            </button>
        </div>
    )
}
export default HomePage;