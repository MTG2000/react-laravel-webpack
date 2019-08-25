import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Navbar, Footer } from "./components/layouts";
import ScrollToTop from "./utils/ScrollToTopController";
import "./utils/app.scss";
import "./utils/aos";
import Loading from "./components/layouts/Loading";
import ScrollTopBtn from "./components/layouts/ScrollTopBtn";

const Home = lazy(() => import("./components/layouts/Home"));
const About = lazy(() => import("./components/layouts/About"));
const Contact = lazy(() => import("./components/layouts/Contact"));
const ProductPage = lazy(() => import("./components/layouts/ProductPage"));

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <div className="App ">
                    <Navbar />
                    <Suspense fallback={<Loading />}>
                        <Switch>
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                            <Route
                                path="/products/:id"
                                component={ProductPage}
                            />
                            <Route path="/" component={Home} />
                        </Switch>
                    </Suspense>
                    <ScrollTopBtn />
                    <Footer />
                </div>
            </ScrollToTop>
        </BrowserRouter>
    );
}

export default App;
