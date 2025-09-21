import { useNavigate } from "react-router";


 export const HelpPage=()=>{
    const navigate=useNavigate();

        const goToHome=()=>{
        navigate('/')
    }


    return (
        <div>
            <title>Need help?</title>
            <h1>Get help from this Page</h1>
            <button onClick={goToHome}>
                Homepage
            </button>
        </div>
    )
}
