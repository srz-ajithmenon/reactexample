import { all } from "redux-saga/effects";
import { watchUserContainer } from "./user/userSaga";

export function * rootSaga()
{
    yield all(
        [watchUserContainer()]
    )
}