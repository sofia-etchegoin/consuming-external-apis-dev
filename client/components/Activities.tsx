//Activities.tsx
import { getActivityApi } from '../apiClient.ts'
import { useQuery } from '@tanstack/react-query'

export default function Activities() {
  const {
    data: activity,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['activity'],
    queryFn: getActivityApi,
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error fetching data</p>
  }

  return (
    <>
      <h2>Try this!</h2>
      {activity && (
        <div>
          <p>{activity.activity}</p>
        </div>
      )}
    </>
  )
}
