const urlSlug = require('url-slug');
// import urlSlug from 'url-slug';

exports.createPages = async ({actions, graphql, reporter}) => {

    const resultado = await graphql(`
    query{
      allStrapiPaginas{
        nodes{
          nombre
          id
        }
      }
        allStrapiPropiedades{
          nodes{
            id
            nombre
          }
        }
      }
    `);

    // console.log(resultado);
    
    //Si hay algun error o no hay resultado
    if(resultado.errors){
        reporter.panic("No hubo resultados", resultado.errors);
    }

    const paginas = resultado.data.allStrapiPaginas.nodes;
    const propiedades = resultado.data.allStrapiPropiedades.nodes;

    paginas.forEach((pagina) => {

        actions.createPage({
            path: urlSlug(pagina.nombre),
            component: require.resolve('./src/components/paginas.js'),
            context: {
              id: pagina.id
            }
        })

    });

    propiedades.forEach((propiedad) => {

        actions.createPage({
            path: urlSlug(propiedad.nombre),
            component: require.resolve('./src/components/propiedades.js'),
            context: {
              id: propiedad.id
            }
        })

    });
};