import React from 'react'
import { Button } from 'react-bootstrap'
import "../css/sound-item.scss"

export default function SoundItem() {
    return (
        <>
            <div className="sound-item">
                <img src="https://pickchurz.imgix.net/elise/cat.png?fm=png&w=100" alt="cat" />
                <Button className="big-button" size="lg">cat</Button>
            </div>
        </>
    )
}
