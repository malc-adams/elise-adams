import React from 'react'
import { Button } from 'react-bootstrap'
import "../css/sound-item.scss"

export default function SoundItem({ animal, sound }) {
    const sfx = new Audio(`/audio/${sound}.mp3`);

    return (
        <>
            <div className="sound-item">
                <img
                    srcSet={`https://pickchurz.imgix.net/elise/${animal}.png?auto=format&fm=png&h=150&dpr=2 2x, https://pickchurz.imgix.net/elise/${animal}.png?auto=format&fm=png&h=150 1x`}
                    src={`https://pickchurz.imgix.net/elise/${animal}.png?auto=format&fm=png&h=150&dpr=2`}
                    alt={animal}
                    loading="eager"
                />
                <Button
                    className="big-button"
                    size="lg"
                    onClick={() => sfx.play()}
                >{animal}</Button>
            </div>
        </>
    )
}
