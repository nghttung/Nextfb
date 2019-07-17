import Head from './head'
import Nav from './nav'
import Footer from './footer';


export default (props) => (
    <>
    <Head title={props.title} style={props.style} />
    <Nav />
    {props.children}

    <Footer />
    </>
)