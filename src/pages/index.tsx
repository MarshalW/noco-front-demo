import { MemoryRouter as Router, Link, Switch, Route } from 'react-router-dom';

import { createSchemaField, FormProvider } from '@formily/react';
import { createForm } from '@formily/core';
import { FormItem } from '@formily/antd';

const Home = ({ name = '' }) => <div><h1>Home {name}</h1><p>为不想打占位符的你随机生成测试文字，支持中文字符拉丁字符切换，支持自定义字库，在界面上根据需要选择区域并点击，生成的内容被复制到剪切板，在所需位置粘贴即可。</p></div>;
const About = () => <h1>About</h1>;

const SchemaField = createSchemaField({
  components: {
    Home,
    About,
    FormItem,
  },
});

const routes: object[] = [
  {
    path: '/',
    exact: true,
    component: 'Home',
  },
  {
    path: '/about',
    component: 'About',
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
            render={() => {
              return (
                <FormProvider
                  form={createForm({
                    effects: () => {},
                  })}
                >
                  <SchemaField
                    schema={{
                      type: 'object',
                      properties: {
                        page: {
                          type: 'string',
                          // 'x-decorator': 'FormItem',
                          'x-component': route.component,
                        },
                      },
                    }}
                  />
                </FormProvider>
              );
            }}
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
