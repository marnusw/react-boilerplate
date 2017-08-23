/**
 * Asynchronously loads the component for NotFoundPage
 */
import universal from 'react-universal-component';

import LoadingIndicator from 'components/LoadingIndicator';

export default universal(() => import('../NotFoundPage'), {
  loading: LoadingIndicator,
});
