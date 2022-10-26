import { useEffect } from "react"

import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createClient } from "@supabase/supabase-js";
import { Feed } from "~/components/Feed";
import { Form } from "~/components/Form";
import { Search } from "~/components/Search";
import { Container } from "~/styles/pages";


export const loader = () => {
    return json({
      url: process.env.SUPABASE_URL!,
      token: process.env.SUPABASE_TOKEN!
    })
  }


export default function Index() {
  const { url, token } = useLoaderData<typeof loader>()
  const supabaseClient = createClient(url, token)
 

  return (
    <Container>
      <Form />
      <Search />
      <Feed />
    </Container>
  );
}
