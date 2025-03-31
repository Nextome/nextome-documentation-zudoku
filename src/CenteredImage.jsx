export default function CenteredImage({src, caption}) {
    return <p style={{textAlign: "center"}}>
        <img src={src} width="35%" style={{margin:"auto"}}/>
        <figcaption style={{textAlign: "center"}}> <font size="2"> {caption}</font></figcaption>
    </p>;
  }