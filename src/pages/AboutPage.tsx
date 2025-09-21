import { useNavigate } from "react-router";

function AboutPage(){

    const navigate=useNavigate();
  
    const goToHelp=()=>{
        navigate('/help')
    }

    return (
        <div>
            <header>White Washed With Wit</header>
            <h1>This is my about page</h1>

            <h2>We are pioneering in this field. </h2>
            <p1>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p1>
            <p2>
                Our partership with the government has been a fruitful one. We have been able to provide our services to a wider audience and have been able to make a positive impact on the lives of many people. We are committed to continuing our work and making a difference in the world.
            </p2>
            <p3>
                Thank you for visiting our about page. We hope to hear from you soon.   
            </p3>
            <p4>
                Sincerely, The Team at White Washed With Wit
                <li>
                    Address: Kathmandu, Nepal
                    Server location: USA
                    Email:allonyoubaby@github
                </li>
            </p4>
<footer>
    contact us: 9823456789
    Based on: www.nepalgovernment.com
    
</footer>

            <button onClick={goToHelp}>
                Help Page
            </button>
        </div>
    )
}
export default AboutPage;