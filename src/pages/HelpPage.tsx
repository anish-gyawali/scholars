import { useNavigate } from "react-router";


 export const HelpPage=()=>{
    const navigate=useNavigate();

        const goToHome=()=>{
        navigate('/')
    }


    return (
        <div>
            <h1>This is my Help page</h1>
            <button onClick={goToHome}>
                Homepage
            </button>
        </div>
    )
}
