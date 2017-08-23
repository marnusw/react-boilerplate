/**
 * Asynchronously loads the component for HomePage
 */
import universal from 'react-universal-component';

import LoadingIndicator from 'components/LoadingIndicator';

export default universal(() => import('../HomePage'), {
  loading: LoadingIndicator,
});
