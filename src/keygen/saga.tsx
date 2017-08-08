import * as saga from 'redux-saga/effects';
import Keygen from '.';
import * as actions from '../actions';
import * as safe from '../helpers';

export default function*() {
  yield safe.catchTakeEvery(actions.GENERATE_KEYPAIR.type, generateKeypair);
}

function* generateKeypair() {
  console.log(`Generating key pair`);
  const pair = Keygen();
  yield saga.put(actions.CHANGED_PUBLICKEY({ key: pair.public }));
  yield saga.put(actions.CHANGED_PRIVATEKEY({ key: pair.private }));
}
