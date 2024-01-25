//Activities.tsx
import { getActivityApi } from '../apiClient.ts'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Button } from 'react-bootstrap'

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
    return <p>Loading an activity...</p>
  }

  if (isError) {
    return <p>Error fetching data</p>
  }

  return (
    <>
      <div className="text-center">
        <Button variant="success" onClick={handleClick} className="button">
          Try this!
        </Button>
        {activity && (
          <div className="activity">
            <p>{activity.activity}.</p>
          </div>
        )}
      </div>
    </>
  )
}
