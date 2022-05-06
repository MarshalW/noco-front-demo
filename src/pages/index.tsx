import { MemoryRouter as Router, Link, Switch, Route } from 'react-router-dom';

import { ISchema, createSchemaField } from '@formily/react';
import { createForm } from '@formily/core';
import { Form, FormItem } from '@formily/antd';

const Home = ({ name = '' }) => <h1>Home {name}</h1>;
const About = () => <h1>About</h1>;

const schema: ISchema = {
  name: 'home',
  'x-component': 'Home',
  'x-component-props': {
    name: '首页',
  },
};

const SchemaField = createSchemaField({
  components: {
    Home,
    About,
    FormItem,
  },
});

const form = createForm({
  effects: () => {},
});

const routes: object[] = [
  {
    path: '/',
    exact: true,
    component: () => {
      return (
        <Form form={form}>
          <SchemaField>
              <SchemaField.String
                name="Home"
                x-component="Home"
                x-decorator="FormItem"
              />
          </SchemaField>
        </Form>
      );
    },
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
