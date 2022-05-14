import Profile from "./Profile/Profile";

function App() {
  const FirstName='Naima'
  const LastName='Chokri'
  const bio ="i'm a web developer i like "
  return (
    <Profile FirstName={FirstName} LastName={LastName} bio = {bio} />
  );
}

export default App;
