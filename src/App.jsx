import React from 'react'
// import Header from './components/Header/Header'
// import List from './components/List/List'
// import Map from './components/Map/Map'
// import PlaceDetails from './components/PlaceDetails/PlaceDetails'



const App = () => {
  return (
    <>
      <Header />
      <div className='grid grid-cols-12 gap-6 w-full p-4 mt-4'>
        
        <div className='col-span-12 md:col-span-4'>
          <List />
        </div>

        <div className="col-span-12 md:col-span-8">
          <Map />
        </div>

      </div>
    </>
  )
}

export default App