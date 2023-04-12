import React from 'react'
import { Link } from 'react-router-dom'

function Page2() {
  return (
    <div>
        <h1>Page2</h1>
        <Link to='/ '><button>Back</button></Link>
        <Link to='/page3'><button>Next</button></Link>
    </div>
  )
}

export default Page2