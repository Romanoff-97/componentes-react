import Card from "./Card";
import { cardsData } from "./data/cards.data";
import Profile from "./Profile";
import { profileData } from "./data/profile.data";

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar={profileData.avatar}
        name={profileData.name}
        bio={profileData.bio}
        email={profileData.email}
        phone={profileData.phone}
        githubUrl={profileData.githubUrl}
        linkedinUrl={profileData.linkedinUrl}
      />
      {cardsData.map((movie) => (
        <Card movie={movie} buttonLabel="Ver mais" />
      ))}
    </div>
  );
}
