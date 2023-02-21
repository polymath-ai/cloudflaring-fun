import { ActionArgs } from "@remix-run/cloudflare";
import { Form } from "@remix-run/react";
import { load_env } from "~/lib/polymath";

export async function action({ request }: ActionArgs) {
  const form = await request.formData();
  const query = form.get("query");
  console.log(query);
  return query;
}

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Simple Polymath Client</h1>
      <Form method="post">
        <input type="text" name="query" />
        <button type="submit">Ask</button>
      </Form>
      <script type="module" src="test.js"></script>
    </div>
  );
}
