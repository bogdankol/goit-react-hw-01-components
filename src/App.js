import Profile from "./components/Profile";
import Container from './components/Container';
import user from './components/Profile/user.json';
import Statistics from './components/Statistics';
import statsData from './components/Statistics/statistic-data.json';
import FriendList from './components/FriendList';
import friends from "./components/FriendList/friends.json";
import TransactionHistory from "./components/TransactionHistory";
import transactions from './components/TransactionHistory/transactions.json';

function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statsData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
