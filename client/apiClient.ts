//apiClient.ts

import request from 'superagent'

const activityURL = 'http://www.boredapi.com/api/activity/'

// bored API activities

export async function getActivityApi() {
  const response = await request.get(activityURL)
  return response.body
}
