import PageHero from '../components/common/PageHero';
import Waitlist from '../sections/Waitlist';

const WaitlistPage = () => {
    return (
        <>
            <PageHero
                title="Join Our Waitlist"
                subtitle="Be the first to know about new product launches and exclusive early-bird offers. Sign up today and get exclusive discounts when we launch!"
                badge="Early Access"
            />
            <Waitlist />
        </>
    );
};

export default WaitlistPage;
