import { useNavigate } from "react-router";

function AboutPage(){

    const navigate=useNavigate();
  
    const goToHelp=()=>{
        navigate('/help')
    }

    return (
        <div>
            <h1>This is my about page</h1>
            <button onClick={goToHelp}>
                Help Page
            </button>
        </div>
    )
}
export default AboutPage;