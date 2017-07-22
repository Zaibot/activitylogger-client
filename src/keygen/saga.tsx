import { takeEvery } from 'redux-saga';
import * as saga from 'redux-saga/effects';
import * as actions from '../actions';
import { Action, isType } from '../actions';
import Keygen from '.';

export default function* () {
  yield takeEvery(actions.GENERATE_KEYPAIR.type, generateKeypair);
}

function* generateKeypair() {
  console.log(`Generating key pair`)
  const pair = Keygen();
  yield saga.put(actions.CHANGED_PUBLICKEY({ key: pair.public }));
  yield saga.put(actions.CHANGED_PRIVATEKEY({ key: pair.private }));
}
