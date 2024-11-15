import { createContext, useState, useEffect, useContext } from "react"
//1. Create Context
const CitiesContext = createContext()
//2. Provide Context
function CitiesProvider({ children }) {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentCity, setCurrentCity] = useState({})

  const BASE_URL = "http://localhost:8000"

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true)
        const res = await fetch(`${BASE_URL}/cities`)
        const data = await res.json()
        setCities(data)
      } catch {
        alert("There was an error loading this data...")
      } finally {
        setIsLoading(false)
      }
    }
    fetchCities()
  }, [])

  async function getCity(id) {
    const fetchCity = async () => {
      try {
        setIsLoading(true)
        const res = await fetch(`${BASE_URL}/cities/${id}`)
        const data = await res.json()
        setCurrentCity(data)
      } catch {
        alert("There was an error loading this data...")
      } finally {
        setIsLoading(false)
      }
    }
    fetchCity()
  }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </CitiesContext.Provider>
  )
}

//custom hook
function useCities() {
  const context = useContext(CitiesContext)
  if (context === undefined)
    throw new Error("CitiesContext was used outside of the PostProvider")
  return context
}

export { CitiesProvider, useCities }
