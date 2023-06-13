

import React ,{useState}from "react";


const Tabs = ({tabs})=>{

 let [content,setContent] = useState("");

    function handleContent(content){
        setContent(content);
    }

    return (
     <div>
        <ul>
            {
             tabs.map((tab)=>(
               <li onClick={()=> handleContent(tab.content)}>{tab.title}</li>
             ))
            }
        </ul>
        {
            content && <p>{content}</p>
        }
    </div>  
    )
}

export default Tabs;