import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>Inventario de Vacunas para Empleados</h1>
        <p>Candidato: Jorge Rivadeneira Cevallos</p>
        <p>Version: 1.0.0.</p>

        <p>
          <Link to='/'>
            Return Home
          </Link>
          </p>
      </div>
    </Card>
  )
}

export default AboutPage