import { createContext, useState, useEffect } from "react"

const CitiesContext = createContext()

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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
  return
  ;<CitiesContext.Provider>{children}</CitiesContext.Provider>
}
