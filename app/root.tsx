import type { MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Simple Polymath Client",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
