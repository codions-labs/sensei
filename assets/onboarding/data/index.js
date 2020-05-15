import { registerStore } from '@wordpress/data';

import reducer from './reducer';
import * as actions from './actions';
import * as selectors from './selectors';
import controls from './controls';

registerStore( 'sensei-setup-wizard', {
	reducer,
	actions,
	selectors,
	controls,
} );
