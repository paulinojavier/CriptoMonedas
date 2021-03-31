import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ResultadoDiv = styled.div`
    background-color:white;
    width:100%auto;
    color: #0d2235;
    font-family: Arial, Helvetica, sans-serif;
    border-radius:10px;
`;

const Info = styled.p`
    font-size: 18px;
    text-align:center;
    span {
        font-weight:bold;
    }
`;
const Precio = styled.p`
    text-align:center;
    font-size: 30px;
    span {
        font-weight:bold;
    }
`

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;

    console.log(resultado)

    return ( 
        <ResultadoDiv>
            <Precio>El precio es: <span>{resultado.PRICE}</span> </Precio>
            <Info>Precio más alto del día: <span>{resultado.HIGHDAY}</span> </Info>
            <Info>Precio más bajo del día: <span>{resultado.LOWDAY}</span> </Info>
            <Info>Variación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span> </Info>
            <Info>Última Actualización: <span>{resultado.LASTUPDATE}</span> </Info>
        </ResultadoDiv>
     );
}
 
Cotizacion.protoType = {
    resultado:PropTypes.object.isRequired
}

export default Cotizacion;