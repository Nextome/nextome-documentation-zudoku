import { SmartphoneNfcIcon, TagIcon } from "zudoku/icons"

export function SmartphoneTrackingPill() {
    return <span style={{color:"#5BC4F0", float:"left"}}><SmartphoneNfcIcon style={{float:"left", marginRight:"0.5em"}}/> Smartphone Tracking</span>
  }

  export function TagTrackingPill() {
    return <span style={{color:"#7B29EA", float:"left"}}><TagIcon style={{float:"left"}}/> Tag Tracking</span> 
  }