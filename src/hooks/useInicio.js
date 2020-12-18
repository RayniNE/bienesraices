import { graphql, useStaticQuery } from 'gatsby';



const UseInicio = () => {

    const consulta = useStaticQuery(graphql`
        query{
            allStrapiPaginas (filter: { nombre: { eq: "Inicio" }}){
            nodes{
                    id
                    nombre
                    contenido
                    imagen{
                        sharp: childImageSharp{
                            fluid(maxWidth: 1500 duotone: {
                                highlight: "#222222", shadow: "#192550", opacity: 30
                            }){
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    `);

    return consulta.allStrapiPaginas.nodes.map(inicio => ({
        nombre: inicio.nombre,
        contenido: inicio.contenido,
        imagen: inicio.imagen,
    }));

}
 
export default UseInicio;