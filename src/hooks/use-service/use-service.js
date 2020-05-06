import {useCallback} from 'react';
import MediumCloneService from '../../services/medium-clone-service/medium-clone-service';
import useRequest from '../use-request/use-request';


const mediumCloneService = new MediumCloneService();

const useAuthorizesUser = (url, userData) => {
  const request = useCallback(() => mediumCloneService.authorizesUser(url, userData), [url, userData]);

  return useRequest(request);
};

export {useAuthorizesUser};
