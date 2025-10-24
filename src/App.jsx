import { lazy, Suspense, useState } from 'react'


const Cllg = lazy(() => import ('./Cllg'));


const App = () => {

  const [load,setLoad] = useState(false)
  return (
    <div>
      <h1>Lazy Loading..</h1>
      <button onClick={() => setLoad(prev => !prev)}>Login for Cllg</button>
      {
        load ? <Suspense fallback={<h2>Loading...</h2>} ><Cllg /></Suspense> : null
      }
    </div>
  )
}

export default App