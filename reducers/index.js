import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DestinationReducer from './DestinationReducer';
import DriverFormReducer from './DriverFormReducer';
import DriversReducer from './DriversReducer';
import RiderReducer from './RiderReducer';

export default combineReducers({
  auth: AuthReducer,
  destination: DestinationReducer,
  driverForm: DriverFormReducer,
  drivers: DriversReducer,
  rider: RiderReducer
});
