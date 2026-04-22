import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { Suspense } from "solid-js";

import { routes } from "./routes";

import "@styles/global.css";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>Marble Market</Title>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      {routes}
    </Router>
  );
}
