import "../CreatingQuiz/TabComponent.css"
const TabComponent=({tabName,setTab,index})=>
{
    return(
        <div className="tabs" > 
        <button className="tab" onClick={()=>{setTab(index)}}> {tabName}</button>
   </div>
    )
}
export default TabComponent;