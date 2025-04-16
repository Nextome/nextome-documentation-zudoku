import { SyntaxHighlight } from "zudoku/ui/SyntaxHighlight";
import { FileCode } from "zudoku/icons";

export default function CodeBlockMultiLang({code, language}) {

    let platfromLanguageString = "";
    let bgColor = "rgba(206, 206, 206, 0.2)"
    let borderColor = "rgba(206, 206, 206, 1.0)"

    if(language == "kotlin"){
        bgColor = "rgba(119, 210, 68, 0.2)"
        borderColor = "rgba(119, 210, 68, 1.0)"
        platfromLanguageString = "Android - Kotlin"
    }

    if(language == "swift"){
        bgColor = "rgba(255, 98, 0, 0.2)"
        borderColor = "rgba(255, 98, 0, 1.0)"
        platfromLanguageString = "iOS - Swift"
    }

    if(language == "gradle"){
        bgColor = "rgba(112, 137, 112, 0.2)"
        borderColor = "rgba(112, 137, 112, 1.0)"
        platfromLanguageString = "Android - Gradle"
    }

    if(language == "groovy"){
        bgColor = "rgba(112, 137, 112, 0.2)"
        borderColor = "rgba(112, 137, 112, 1.0)"
        platfromLanguageString = "Android - Groovy"
    }

    return <div
    style={{
        backgroundColor: bgColor, 
        border: `1px solid ${borderColor}`,     
        borderRadius: "12px",     
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "20px 0px 20px 0px"              
    }}>

    <div style={{display:"table"}}>
            <div style={{display:"table-cell", padding:"8px"}}>
                <FileCode size={20} color={borderColor}/>
            </div>
            <div style={{display:"table-cell", textAlign:"right", verticalAlign:"middle", padding:"0px 0px 0px 0px"}}>
                <span style={{color:borderColor, fontWeight:"nomral", fontSize:"14px", fontFamily:"courier"}}>{platfromLanguageString}</span>
            </div>
        </div>  

    <SyntaxHighlight 
        language={language}
        code={code}
        //wrapLines = "false"
        //title = "Boo"//{fileName}
        //showCopy = "always"
        //showCopyText= "true"
        //showLanguageIndicator="true"
        noBackground="false"
        />
    </div>
  }

/*export default function CodeBlockMultiLang({code}) {
    return <div>
    <SyntaxHighlight 
        language="typescript"
        code={code}
        wrapLines = "false"
        title = "Questo è il titolo"
        showCopy = "never"
        showCopyText= "false"
        showLanguageIndicator="true"
        noBackground="true"/>
    </div>
}*/