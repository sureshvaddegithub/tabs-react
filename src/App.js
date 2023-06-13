

// import Header from "./Components/Header";
import Tabs from "./Components/Tabs";

const tabs = [{title : "Tab1" ,content : "Inside Tab1"},{title : "Tab2" ,content : "Inside Tab2"},{title : "Tab3" ,content : "Inside Tab3"}]
const App =()=>{
    return (
        <div>
            {/* <Header/> */}

            <Tabs tabs = {tabs}/>
        </div>
    )
}

export default App