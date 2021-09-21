import React, { Suspense } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));

function App() {
  const history = useHistory();
  return (
    <Layout>
      <Suspense
        fallback={
          <div class="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <section className="sorting" style={{ margin: "1rem 0" }}>
          <button onClick={history.goBack} className="btn">
            Back
          </button>
        </section>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/new" exact>
            <NewQuote />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
