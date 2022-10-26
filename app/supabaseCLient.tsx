import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { createClient } from "@supabase/supabase-js"

export const loader = () => {
  return json({
    url: process.env.SUPABASE_URL!,
    token: process.env.SUPABASE_TOKEN!
  })
}

export const SupabaseClient = () => {
  const { url, token } = useLoaderData<typeof loader>()

  return createClient(url,  token)
}