import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import OrdersPage from './pages/orders/OrdersPage';
import TrackingPage from './pages/TrackingPage';

export default function App() {
    return (
        <>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='checkout' element={<CheckoutPage />} />
                <Route path='orders' element={<OrdersPage />} />
                <Route path='tracking' element={<TrackingPage />} />
            </Routes>
        </>
    );
}
