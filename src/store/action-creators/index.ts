import * as userActionCreators from "./user";
import * as todoActionCreators from "./todo";

export default {
    ...userActionCreators,
    ...todoActionCreators
}