import { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default function App(){
  useEffect(()=>{
    const map = L.map('map').setView([35.6,139.7],10)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
    L.marker([35.6362,139.8593]).addTo(map).bindPopup("葛西臨海公園")
  },[])
  return <div id="map" style={{height:"100vh"}}></div>
}
