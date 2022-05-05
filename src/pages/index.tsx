import { MemoryRouter as Router, Link, Switch, Route } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

const App = () => {
  return (
    <Router>
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
