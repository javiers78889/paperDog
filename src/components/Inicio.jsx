import React from 'react'
import { Heroe } from '../widgets/HeroeItems/Heroe'
import { Slider } from '../widgets/Slider/Slider'
import { Servicios } from '../widgets/Servicios'
import { Planes } from '../widgets/Planes'
import { ConteoPersonas } from '../widgets/ConteoPersonas'
import { Recomended } from '../widgets/Recomended'
import { Footer } from './Footer'

export const Inicio = () => {
    return (
        <>
            
            <Slider />
            <Servicios />
            <Planes />
            <ConteoPersonas />
            <Recomended />
            
        </>
    )
}
