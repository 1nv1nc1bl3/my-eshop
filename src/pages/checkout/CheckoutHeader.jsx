import { Link } from 'react-router';
import './CheckoutHeader.css';
import checkoutLock from '../../assets/images/icons/checkout-lock-icon.png';
import checkoutLogo from '../../assets/images/logo.png';
import checkoutMobLogo from '../../assets/images/mobile-logo.png';

export default function CheckoutHeader() {
    return (
        <div class='checkout-header'>
            <div class='header-content'>
                <div class='checkout-header-left-section'>
                    <Link to='/'>
                        <img class='logo' src={checkoutLogo} />
                        <img class='mobile-logo' src={checkoutMobLogo} />
                    </Link>
                </div>

                <div class='checkout-header-middle-section'>
                    Checkout (
                    <Link class='return-to-home-link' to='/'>
                        3 items
                    </Link>
                    )
                </div>

                <div class='checkout-header-right-section'>
                    <img src={checkoutLock} />
                </div>
            </div>
        </div>
    );
}
