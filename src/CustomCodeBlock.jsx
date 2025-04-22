import { SyntaxHighlight } from "zudoku/ui/SyntaxHighlight";
import { FileCode } from "zudoku/icons";

export default function CustomCodeBlock({filename, language, code}) {

    let platfromLanguageString = "";
    let bgColor = "rgba(206, 206, 206, 0.2)"
    let borderColor = "rgba(206, 206, 206, 1.0)"

    if(language == "xml"){
        bgColor = "rgba(68, 165, 210, 0.2)"
        borderColor = "rgba(68, 165, 210, 1.0)"
        platfromLanguageString = "xml"
    }

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

    if(language == "gradle-kotlin"){
        bgColor = "rgba(112, 137, 112, 0.2)"
        borderColor = "rgba(112, 137, 112, 1.0)"
        platfromLanguageString = "Android - Gradle"
    }

    if(language == "gradle-groovy"){
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

            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between", // distribuisce primo e ultimo ai lati
                width: "100%",
                padding: "8px 0"
            }}>
            {/* Icona */}
            <div style={{ paddingLeft: "8px", paddingRight: "8px" }}>
                <FileCode size={20} color={borderColor} />
            </div>

            {/* Nome file (al centro o a sinistra) */}
            <div style={{
                color: borderColor,
                fontWeight: "bold",
                fontSize: "14px",
                fontFamily: "courier"
            }}>
                {filename ?? ""}
            </div>

            {/* Spacer dinamico */}
            <div style={{ flex: 1 }}></div>

            {/* Ultimo elemento allineato a destra */}
            <div style={{
                color: borderColor,
                fontWeight: "normal",
                fontSize: "14px",
                fontFamily: "courier",
                paddingRight: "8px"
            }}>{platfromLanguageString}</div>
        </div>

        <SyntaxHighlight 
            language={language}
            code={code}
            // wrapLines = "false"
            // title = "Boo"//{fileName}
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