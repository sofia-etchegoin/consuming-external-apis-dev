import { getActivityApi } from '../apiClient.ts'
import { useEffect, useState } from 'react'

export default function Activities() {
  const [activity, setActivity] = useState(null)

  useEffect(() => {
    // Fetch activity when component mounts
    const fetchData = async () => {
      const response = await getActivityApi()
      setActivity(response)
    }
    fetchData()
  }, [])

  return (
    <>
      <h2>Try this!</h2>
      {activity ? <p>{activity.activity}</p> : <p>Loading...</p>}
    </>
  )
}
