import { Link,BrowserRouter } from 'react-router-dom';
import {
  RouteSwitchProvider,
  RouteSwitch,
  SchemaComponentProvider,
  compose,
} from '@nocobase/client';
import { Hello } from './Hello';
import { About } from './About';
import { RouteSchemaComponent } from './RouteSchemaComponent';
import routes from './routes';

import { MyDemoProvider } from './MyDemoProvider';

const providers = [
  [BrowserRouter, { initialEntries: ['/'] }],
  [SchemaComponentProvider, { components: { Hello, About } }],
  [RouteSwitchProvider, { components: { RouteSchemaComponent } }],
  [MyDemoProvider, { demoName: 'My Demo Name' }],
];

const App = compose(...providers)(() => {
  return (
    <div>
      <Link to={'/'}>Home</Link>,<Link to={'/about'}>About</Link>
      <RouteSwitch routes={routes} />
    </div>
  );
});

export default App;
