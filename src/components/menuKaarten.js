import React, { Component } from "react"
import Kaart from "../components/kaart"

export default class MenuKaarten extends Component {
  render() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-10  gap-5 ">
        <Kaart
          titel="Presentatrice"
          afbeelding="presentatrice"
          knopTekst="Lees meer"
        />
        <Kaart
          titel="Ambassadrice"
          afbeelding="ambassadrice"
          knopTekst="Lees meer"
        />
        <Kaart titel="Contact" afbeelding="contact" knopTekst="Lees meer" />
      </div>
    )
  }
}
