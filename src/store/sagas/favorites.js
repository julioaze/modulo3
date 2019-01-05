// call é utililzado quando precisamos de uma promise (.then,.catch, etc.)
import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import { addFavoriteSuccess } from '~/store/actions/favorites';

export function* addFavoriteRequest(action) {
  const response = yield call(api.get, `/users/${action.payload.repoName}/repos`);

  yield put(addFavoriteSuccess(response.data));
}
