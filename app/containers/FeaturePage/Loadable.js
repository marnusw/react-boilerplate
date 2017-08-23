/**
 * Asynchronously loads the component for FeaturePage
 */
import universal from 'react-universal-component';

import LoadingIndicator from 'components/LoadingIndicator';

export default universal(() => import('../FeaturePage'), {
  loading: LoadingIndicator,
});
