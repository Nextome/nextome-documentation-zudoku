import { FlaskConical } from "zudoku/icons";

export function ExperimentalBanner({functionalityName}) {
    return <div style={{
            backgroundColor: "#bb99ff", 
            border: "1px solid #aa33ff",     
            borderRadius: "12px",     
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
            padding: "16px",               
            margin: "16px 0"              
        }}>
        
        <div style={{display:"table"}}>
            <div style={{display:"table-cell"}}>
                <FlaskConical size={32} color="#8822bb"/>
            </div>
            <div style={{display:"table-cell", textAlign:"left", verticalAlign:"middle", padding:"0px 0px 0px 22px"}}>
                <span style={{color:"#661199", fontWeight:"nomral"}}>
                    The <span style={{color:"#661199", fontWeight:"bold"}}>{functionalityName}</span> functionality is <span style={{color:"#661199", fontWeight:"bold"}}>EXPERIMENTAL</span> and subject to changes.
                    <br></br>This functionality is currently in an early stage of development and may not be stable.
                    <br></br>It is available for testing and feedback purposes only.
                    <br></br>We encourage developers to try it out and report any bugs, unexpected behavior, or suggestions for improvement. 
                    </span>
            </div>
        </div>        
    </div> 
}