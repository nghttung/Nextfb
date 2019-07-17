import NextHead from "next/head";
import { string } from "prop-types";
import { project } from "./constants";

const description = project.description;
const keywords = project.keywords;

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ""}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <link rel="icon" href="/favicon.png" />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon-16x16.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon-32x32.png"
    />
    <link rel="shortcut icon" href="/favicon.ico" />
    
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.9.0/css/all.css"
    />
    <link rel="stylesheet" href={"/css/navstyle.css"} />
    {props.style ? (
      <link rel="stylesheet" href={"/css/" + props.style + ".css"} />
    ) : (
      ""
    )}
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  keywords: string,
  url: string,
  ogImage: string
};

export default Head;
