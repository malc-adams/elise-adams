import React from 'react'
import SoundItem from './SoundItem'


export default function Body() {
    return (
        <div className="item-outer-container">
          <h2>My animals</h2>
          <div className="item-container">
              <SoundItem animal="cat" sound="17869_1464188839" />
              <SoundItem animal="pig" sound="174614__yottasounds__pig004" />
              <SoundItem animal="chicken" sound="316920__rudmer-rotteveel__chicken-single-alarm-call" />
          </div>
          <h2>Explore the World</h2>
          <div className="item-container">
              <a href="https://www.google.com/maps/@51.3426135,-2.9832091,378m/data=!3m1!1e3" target="_blank">View the world</a>
          </div>
        </div>
    )
}
