import MusicPlayer from "./component/MusicPlayer"
import BannerSection from "./component/BannerSection"
import InvitationSection from "./component/InvitationSection"
import CountdownSection from "./component/CountdownSection"
import GallerySection from "./component/GallerySection"

function App() {
    return (
        <div className="page-wrapper">
            <MusicPlayer/>
            <BannerSection/>
            <InvitationSection/>
            <CountdownSection/>
            <GallerySection/>
        </div>
    );
}

export default App;
