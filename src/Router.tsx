import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import LoadingSpinner from "./component/LoadingSpinner";

const Loadable = (Component: any) => (props: any) => {
    return (
        <Suspense
            fallback={<LoadingSpinner />}
        >
            <Component {...props} />
        </Suspense>
    );
};

function Router() {
    return useRoutes([
        {
            path: '',
            element: <Navigate to={'product'} replace />,
        },
        {
            path: '*',
            element: <Navigate to={'product'} replace />,
        },
        {
            path: "product",
            element: <ProductList />
        },
    ]);
}


const ProductList = Loadable(lazy(() => import('./page/product/ProductList')));

export default Router;