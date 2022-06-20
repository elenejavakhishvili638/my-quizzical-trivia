import React from "react";
import FirstPage from "../components/FirstPage";
import Main from "../components/Main";


function App() {

    const [mainPage, setMainPage] = React.useState(false)
    
    function start() {
        setMainPage(true)
        // console.log(mainPage)
    }


    return (
        <div>
            {mainPage ? <Main /> : <FirstPage 
                start={start}
            />}
            
        </div>
        
    )
}

export default App;