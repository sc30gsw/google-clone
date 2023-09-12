'use client'

import React, { useEffect, useState } from 'react'

const CountryLookup = () => {
  const [country, setCountry] = useState('United States')

  useEffect(() => {
    const fetchCountry = async () => {
      const response = await fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
      const res = await response.json()

      setCountry(res.country)
    }

    fetchCountry()
  }, [])
  return <div>{country}</div>
}

export default CountryLookup
