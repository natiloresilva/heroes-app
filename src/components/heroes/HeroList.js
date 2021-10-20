import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher'
import HeroCard from './HeroCard'

export const HeroList = ({ publisher }) => {

    //const heroes = getHeroesByPublisher(publisher)
    // En lugar de utilizar esta función utilizaremos un useMemo, para que de esta manera se vuelvan a obtener la lista de heroes solo si el publisher cambia
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div className='animate__animated animate__fadeIn'>
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    )
}
