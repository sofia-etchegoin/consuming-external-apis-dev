//Activities.tsx
import { getActivityApi } from '../apiClient.ts'
import { useQuery, useQueryClient } from '@tanstack/react-query'

export default function Activities() {
  const {
    data: activity,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['activity'],
    queryFn: getActivityApi,
  })

  const queryClient = useQueryClient()

  const handleClick = () => {
    queryClient.invalidateQueries({ queryKey: ['activity'] })
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error fetching data</p>
  }

  return (
    <>
      <button onClick={handleClick}>Try this!</button>
      {activity && (
        <div>
          <p>{activity.activity}</p>
        </div>
      )}
    </>
  )
}
