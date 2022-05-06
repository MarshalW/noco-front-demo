import { MemoryRouter as Router, Link, Switch, Route } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

const routes: object[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
];

function RouteSwitch(props: any) {
  const { routes = [] } = props;
  if (!routes.length) {
    return null;
  }

  return (
    <Switch>
      {routes.map((route: any, index: number) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={route.component}
          />
        );
      })}
    </Switch>
  );
}

const App = () => {
  return (
    <Router>
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>
      <RouteSwitch routes={routes} />
    </Router>
  );
};

export default App;
