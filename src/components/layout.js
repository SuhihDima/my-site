import * as React from "react"
import { Link } from 'gatsby'
import { container, heading, navLinks, navLinkItem, navLinkText  } from './layout.module.css'
console.log('container:', container)

const Layout = ({ pageTitle, pageHeading, children}) =>{
    return (
        <main className={container}>
            <title>{pageTitle}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to = '/' className={navLinkText}>Домашняя</Link></li>
                    <li className={navLinkItem}><Link to = '/about' className={navLinkText}>О нас</Link></li>
                    <li className={navLinkItem}><Link to = '/contacts' className={navLinkText}>Наши контакты</Link></li>
                </ul>
            </nav>
            <h1 className={heading}>{pageHeading}</h1>
            {children}
        </main>
    );

};

export default Layout;