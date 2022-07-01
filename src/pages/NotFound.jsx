import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <Card>
      <div className="about">
        <h1>Error 404</h1>
        <p>Page not found</p>
        <p>Version: 1.0.0.</p>

        <p>
          <Link to='/'>
            Back to earth
          </Link>
          </p>
      </div>
    </Card>
  )
}

export default NotFound