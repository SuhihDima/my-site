import * as React from 'react';
import Layout from "../components/layout";
import { graphql } from "gatsby";

const Blog = ({ data }) =>{
    console.log(data);
return (
    <Layout pageTitle="Блог">
        {data.allFile.nodes.map((node)=>{
            return <li key={node.name}>{node.name}</li>
        })}
        <h1>Высаживаем розы в открытый грунт.</h1>
    </Layout>
);
};

export const query = graphql`
query{
allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
    nodes {
    name
    }
}
}
`
export default Blog;