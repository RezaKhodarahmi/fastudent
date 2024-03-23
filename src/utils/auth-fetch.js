import { getSession } from 'next-auth/react'

async function fetchWithAuth(url, options = {}) {
  const session = await getSession()
  if (!session) throw new Error('No active session')

  const headers = new Headers(options.headers || {})
  headers.append('Authorization', `Bearer ${session.accessToken}`)

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    ...options,
    headers: headers
  })

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`)
  }

  return response.json()
}

export default fetchWithAuth
