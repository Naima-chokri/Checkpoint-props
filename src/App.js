import Profile from "./Profile/Profile";

function App() {
  const FirstName='Naima';
  const LastName='Chokri';
  const profession='Web Developer'
  const adresse= 'Happy city-Gafsa Tunis (+216) 94-902-044 '
  const bio = "I’m a software engineer specializing in building (and occasionally designing) Currently, I’m focused on building web and Mobile Applications."
  const email ='naima-chokri@outlook.fr';
  const handleName =()=> alert(FirstName)
  return (
    <Profile FirstName={FirstName} LastName={LastName} profession= {profession} adresse = {adresse} bio = {bio} email={email} handleName={handleName}>
    <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.png" alt="..." />
    </Profile>
  );
}

export default App;
