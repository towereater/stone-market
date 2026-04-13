import { MetaProvider, Title } from "@solidjs/meta";
import { Router, Route } from "@solidjs/router";
import { Suspense } from "solid-js";

import MainLayout from "@layouts/MainLayout";
import AccessLayout from "@layouts/AccessLayout";
import ProfileLayout from "@layouts/ProfileLayout";

import Home from "@pages/Home";
import Login from "@pages/access/Login";
import Register from "@pages/access/Register";

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
      <Route path="/" component={MainLayout}>
        <Route path="/" component={Home} />
      </Route>

      <Route path="/login" component={AccessLayout}>
        <Route path="/" component={Login} />
      </Route>
      <Route path="/register" component={AccessLayout}>
        <Route path="/" component={Register} />
      </Route>

      <Route path="/profile" component={ProfileLayout}>
        
      </Route>
    </Router>
  );
}
