import React, {useState, useEffect} from 'react';
import { css } from '@emotion/core';
import usePropiedades from '../hooks/usePropiedades';
import PropiedadPreview from './propiedadPreview';
import listadoPropiedadesCSS from '../css/listadoPropiedades.module.css';
import useFiltro from '../hooks/useFiltro';

const ListadoPropiedades = () => {

    const resultado = usePropiedades();
    const [propiedades] = useState(resultado);
    const [filtrado, setFiltrado] = useState([]);
    //Filtrado por propiedades.
    const { categoria, FiltroUI } = useFiltro();

    useEffect(() => {
        
        if(categoria){

            const filtro = propiedades.filter(propiedad => propiedad.categoria.nombre === categoria);
            setFiltrado(filtro);
        } else{
            setFiltrado(propiedades);
        }

    }, [categoria, propiedades])
    // console.log(propiedades);



    return ( 

        <>
            <h2
                css={css`
                    margin-top: 5rem;
                `}
            > Nuestras propiedades </h2>

            {FiltroUI()}

            <ul className={listadoPropiedadesCSS.propiedades}>
                {filtrado.map(propiedad => (
                    <PropiedadPreview
                        key={propiedad.id}
                        propiedad={propiedad}
                    />
                ))}
            </ul>
        </>
     );
}
 
export default ListadoPropiedades;