import { all, call, put, take } from 'redux-saga/effects'
import { getType } from 'typesafe-actions'
import { } from '../NativeModules/Textile'
import PreferencesActions from '../Redux/PreferencesRedux'
import TextileNodeActions from '../Redux/TextileNodeRedux'
import PhotoViewingActions from '../Redux/PhotoViewingRedux'

export function * onNodeStarted () {
  while (yield take([getType(TextileNodeActions.startNodeSuccess), getType(PreferencesActions.onboardedSuccess)])) {
    try {
      yield put(PhotoViewingActions.refreshThreadsRequest())
    } catch (error) {
      // nothing to do here for now
    }
  }
}
