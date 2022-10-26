import type { MetaFunction } from "@remix-run/node";
import {
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { FeedProvider } from "./contexts/Feed";
import { FormProvider } from "./contexts/Form";
import { SearchProvider } from "./contexts/Search";
import { GlobalStyle } from "./styles/GlobalStyle";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Entrevista - Quaddro",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        {typeof document === "undefined"
          ? "__STYLES__"
          : null}
      </head>
        <FeedProvider>
          <FormProvider>
            <SearchProvider>
                <body>
                  <Outlet />
                  <ScrollRestoration />
                  <Scripts />
                  <GlobalStyle />
                  <LiveReload />
                </body>
            </SearchProvider>
          </FormProvider>
        </FeedProvider>
    </html>
  );
}
