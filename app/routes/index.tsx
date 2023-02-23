import { ActionArgs } from "@remix-run/cloudflare";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { Polymath } from '@polymath-ai/client';

export async function action({ request }: ActionArgs) {
  const form = await request.formData();
  const query = form.get("query");
  const polymath = new Polymath({
    apiKey: process.env.OPENAI_API_KEY,
    servers: ["https://polymath.glazkov.com/"],
  })
  const reply = polymath.ask(query);
  console.log(reply);
  return reply;
}

export default function Index() {
  const fetch = useFetcher();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Simple Polymath Client</h1>
      <fetch.Form method="post">
        <input type="text" name="query" />
        <button type="submit">Ask</button>
      </fetch.Form>
      <script type="module" src="test.js"></script>
    </div>
  );
}
