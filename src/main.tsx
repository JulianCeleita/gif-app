import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifApp } from './GifApp';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>                        {/* Solo se usa en modo desarrollo, para crear warnings y avisos de APIs, no afecta la producción */}
    <GifApp />
  </React.StrictMode>                       // Lo desactivo para evitar que es escriba duplicado en consola
)
