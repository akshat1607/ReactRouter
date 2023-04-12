import React from 'react'
import { Link } from 'react-router-dom'

function Page3() {
  return (
    <div>
        <h1>Page3</h1>
        <Link to='/page2'><button>Back</button></Link>
        <Link to='/'><button>Start</button></Link>
    </div>
  )
}

export default Page3