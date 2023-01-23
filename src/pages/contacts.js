import * as React from "react"
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";


const ContactPage = () =>{
return(
    <main>
        <Layout pageHeading='Контакты' pageTitle ='Все о наших мастерах'>
            Надрезаем хомут или резинку и снимаем пластиковый пакет. Корневая система саженца плотно упакована в торф и обмотана тонкой пленкой. Во избежание повреждений корней черную пленку лучше не разрезать, а осторожно размотать.
        </Layout>
    </main>
);

};

export default ContactPage;