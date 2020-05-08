import {useContext} from 'react';
import useLocalStorage from '../../hooks/use-local-storage/use-local-storage';
import useService from '../../hooks/use-service/use-service';
import {CurrentUserContext} from '../../contexts/current-user-context/current-user-context';
import useCheckCurrentUser from '../../hooks/use-check-current-user/use-check-current-user';

const CurrentUserChecker = ({children}) => {
  const [token] = useLocalStorage(`token`);
  const [{data}, doRequest] = useService(`getUser`);
  const [, setCurrentUserState] = useContext(CurrentUserContext);

  useCheckCurrentUser(token, data, doRequest, setCurrentUserState);

  return children;
};

export default CurrentUserChecker;