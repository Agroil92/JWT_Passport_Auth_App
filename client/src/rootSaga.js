import { fork } from 'redux-saga/effects'

import registrationSaga from '@src/components/Auth/Registration/registrationSaga.js'
import loginSaga from '@src/components/Auth/Login/loginSaga.js'

export default function* rootSaga() {
  yield fork(registrationSaga)
  yield fork(loginSaga)
}
