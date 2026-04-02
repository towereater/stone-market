import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import Navbar from "@components/common/Navbar";

import "@styles/global.css";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>Marble Market</Title>
          <Navbar></Navbar>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
