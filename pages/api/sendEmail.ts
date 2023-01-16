// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  email: string,
  subject: string,
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body: Data = JSON.parse(req.body)
  if (
    body?.email !== undefined
    && body?.subject !== undefined
    && body?.message !== undefined

    && body?.email !== ''
    && body?.subject !== ''
    && body?.message !== ''
  ) {
    res.status(200).json({message: 'success'})
  }
  else {
    res.status(400).json(undefined)
  }
}
