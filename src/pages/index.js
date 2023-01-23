import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";


const Homepage = () =>{
return(
    <main>
        <Layout pageHeading='Домашняя' pageTitle ='Наша главная страница'>
            Надрезаем хомут или резинку и снимаем пластиковый пакет. Корневая система саженца плотно упакована в торф и обмотана тонкой пленкой. Во избежание повреждений корней черную пленку лучше не разрезать, а осторожно размотать.
            <StaticImage src="../images/mankitchen.jpg" alt="man" />
            <p>Надрезаем хомут или резинку и снимаем пластиковый пакет. Корневая система саженца плотно упакована в торф и обмотана тонкой пленкой. Во избежание повреждений корней черную пленку лучше не разрезать, а осторожно размотать.</p>
            <StaticImage src="../images/master.webp" alt="man" />
        </Layout>
    </main>
);

};

export default Homepage;