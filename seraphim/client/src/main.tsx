import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home.tsx";
import ProductPage from "./pages/ProductPage.tsx";
// import axios from "axios";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StoreProvider } from "./Store.tsx";
import CartPage from "./pages/CartPage.tsx";
import WishListPage from "./pages/WishList.tsx";
import Phones from "./pages/PhonesPage.tsx";
import Ipads from "./pages/TabletPage.tsx";
import Laptops from "./pages/LaptopsPage.tsx";
import Desktops from "./pages/PCs.tsx";
import SigninPage from "./pages/SigninPage.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import UpdateUser from "./pages/UpdateUserPage.tsx";
import ShippingAddressPage from "./pages/ShippingAdressPage.tsx";
import PaymentMethodPage from "./pages/PaymentPage.tsx";
import { ProtectedRoute } from "./components/ProctectedRoute.tsx";
import PlaceOrderPage from "./pages/PlaceOrderPage.tsx";
import OrderPage from "./pages/OrderPage.tsx";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import OrderHistoryPage from "./pages/OrderHistoryPage.tsx";
import SearchResults from "./pages/SearchResultPage.tsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<App />}>
				<Route index element={<Home />} />
				<Route path="/products/search" element={<SearchResults />} />
				<Route path="product/:id" element={<ProductPage />} />
				<Route path="/wishlist" element={<WishListPage />} />
				<Route path="/products/Phones" element={<Phones />} />
				<Route path="/products/Laptops" element={<Laptops />} />
				<Route path="/products/Tablets" element={<Ipads />} />
				<Route path="/products/Desktops" element={<Desktops />} />
				<Route path="/signin" element={<SigninPage />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/customer/update" element={<UpdateUser />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="" element={<ProtectedRoute />}>
					<Route path="/shipping" element={<ShippingAddressPage />} />
					<Route path="/payment" element={<PaymentMethodPage />} />
					<Route path="/placeorder" element={<PlaceOrderPage />} />
					<Route path="/order/:id" element={<OrderPage />} />
					<Route path="/orders" element={<OrderHistoryPage />} />
				</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Route>
			<Route path="*" element={<NotFoundPage />} />
		</>
	)
);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ErrorBoundary>
			<StoreProvider>
				<PayPalScriptProvider options={{ clientId: "sb" }} deferLoading={true}>
					<HelmetProvider>
						<QueryClientProvider client={queryClient}>
							<RouterProvider router={router} />
							<ReactQueryDevtools initialIsOpen={false} />
						</QueryClientProvider>
					</HelmetProvider>
				</PayPalScriptProvider>
			</StoreProvider>
		</ErrorBoundary>
	</React.StrictMode>
);
