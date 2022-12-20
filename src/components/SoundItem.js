import React from 'react'
import { Button } from 'react-bootstrap'
import "../css/sound-item.scss"

export default function SoundItem() {
    return (
        <>
            <div className="sound-item">
                <img
                    srcSet="https://pickchurz.imgix.net/elise/cat.png?auto=format&fm=png&w=100&dpr=2 2x, https://pickchurz.imgix.net/elise/cat.png?auto=format&fm=png&w=100 1x"
                    src="https://pickchurz.imgix.net/elise/cat.png?auto=format&fm=png&w=100&dpr=2"
                    alt="cat"
                    loading="eager"
                />
                <Button className="big-button" size="lg">cat</Button>
            </div>
        </>
    )
}