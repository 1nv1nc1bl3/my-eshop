import './NotFoundPage.css';
import Header from '../../components/Header';

export default function NotFoundPage() {
    return (
        <div className='not-found-section'>
            <link
                rel='icon'
                type='image/svg+xml'
                href='/tracking-favicon.png'
            />
            <title>404</title>
            <Header />
            <h1>Error - Page not found</h1>
        </div>
    );
}
