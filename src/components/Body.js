import React from 'react'
import SoundItem from './SoundItem'


export default function Body() {
    return (
        <div className="item-container">
            <SoundItem animal="cat" sound="17869_1464188839" />
            <SoundItem animal="pig" sound="174614__yottasounds__pig004" />
            <SoundItem animal="chicken" sound="316920__rudmer-rotteveel__chicken-single-alarm-call" />
        </div>
    )
}
