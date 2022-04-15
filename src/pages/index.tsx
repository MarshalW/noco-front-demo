import styles from './index.less';

import { compose } from '@nocobase/client';

export default function IndexPage() {
  console.log(`${compose}`)

  return (
    <div>
      <h1 className={styles.title}>Page index123</h1>
    </div>
  );
}
