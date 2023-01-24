import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container,
    heading, 
    navLinks, 
    navLinkItem, 
    navLinkText,
    siteTitle

            } from './layout.module.css'
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ pageTitle, pageHeading, children}) =>{
    const data = useStaticQuery(graphql`
    query MyQuery {
    site {
        siteMetadata {
        title
        }
    }
    }
    `)
    // console.log(data);

    return (
        <main className={container}>
            <title>
                {pageTitle} | {data.site.siteMetadata.title}
            </title>
            <p className={siteTitle}>{pageTitle}</p>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to = '/' className={navLinkText}>Домашняя</Link></li>
                    <li className={navLinkItem}><Link to = '/about' className={navLinkText}>О нас</Link></li>
                    <li className={navLinkItem}><Link to = '/contacts' className={navLinkText}>Наши контаты</Link></li>
                    <li className={navLinkItem}><Link to = '/blog' className={navLinkText}>Блог</Link></li>

                </ul>
            </nav>
            <h1 className={heading}>{pageHeading}</h1>
            {children}
        </main>
    );

};

export default Layout;