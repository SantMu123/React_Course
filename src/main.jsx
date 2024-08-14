import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GifExportApp } from './GifExpertApp'
import "./style.css"

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <GifExportApp />
  //</StrictMode>,
)
