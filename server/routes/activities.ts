//server/routes/activities.ts

import express from 'express'
import { getActivityApi } from '../../client/apiClient.ts'
const router = express.Router()

// GET /api/v1/activity
router.get('/', async (req, res) => {
  try {
    const activity = await getActivityApi()
    res.json(activity)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send((error as Error).message)
    } else {
      res.status(500).send('Something went wrong')
    }
  }
})

export default router
