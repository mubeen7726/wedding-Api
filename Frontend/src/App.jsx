import React from 'react'
import AllDataFrontent from './AllFrontndData/Alldata'
import { Routes ,Route} from 'react-router-dom'
import MainPage from './mainPage/MainPage'

export default function App() {
  return (
<>
<Routes>

<Route path='/' element={<>
  <MainPage/>

</>}/>

<Route path='/Welocome' element={<AllDataFrontent/>}/>
</Routes>
</>

  )
}
