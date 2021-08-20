import { PayloadAction } from "@reduxjs/toolkit";
import { all, takeEvery } from "redux-saga/effects";

function* log(action: PayloadAction) {
    console.log('Log', action);
}

function* helloSaga() {
    console.log('hello saga');
    yield takeEvery('*', log);
}

export default function* rootSaga() {
    console.log('root saga');
    yield all([
        helloSaga(),
    ]);
}