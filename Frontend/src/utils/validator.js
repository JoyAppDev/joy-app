import { REQUIRED_FIELD, PASSWORD_LENGTH_ERROR } from "./constants";

export const passwordValidator = {
    required: REQUIRED_FIELD,
    validate: (value) => {
        if(value.length < 3) {
            return PASSWORD_LENGTH_ERROR
        }
        return true;
    }
}