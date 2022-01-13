import gql from "graphql-tag";

export const getProducts = gql`
    query {
        getProducts{
        id,
        title,
        price}
    }
`

export const getProduct = gql`
    query getProduct($id: ID!){
        getProduct{
        id,
        title,
        price}
    }
`