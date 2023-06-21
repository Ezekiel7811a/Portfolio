import Background from '../components/Base Components/Background';
import Header from '../components/Base Components/Header';
import Footer from '../components/Base Components/Footer';

function HomePage() {
    return (
        <Background imageUrl="../../src/assets/backgroundstasis2560x1440.jpg">
            <Header />
            <Footer lang="fr" />
        </Background>
    );
}

export default HomePage;