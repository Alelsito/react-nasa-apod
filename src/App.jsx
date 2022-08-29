import { useEffect, useState } from 'react'
import Card from './components/Card'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Searcher from './components/Searcher'
import axiosData from './services/axiosData'
import getDate from './utils/getDate'

function App() {
  const [data, setData] = useState([])
  const [url, setUrl] = useState('https://api.nasa.gov/planetary/apod?api_key=ZsWKGUC8ZokfPMJhGFqAZganf7a1uYctvABdQZv3')

  // Url change
  useEffect(() => {
    const asyncData = async () => {
      const res = await axiosData(url)
      setData(res)
    }
    asyncData()
  }, [url])

  // Search
  const createUrl = (date) => {
    setUrl(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=ZsWKGUC8ZokfPMJhGFqAZganf7a1uYctvABdQZv3`)
  }

  getDate()

  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Searcher onCreate={createUrl} />
      <Card data={data} />
    </div>
  )
}

export default App
