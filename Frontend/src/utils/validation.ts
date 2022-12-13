const REQUIRED_FIELD = "Required field";

export const loginValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if(value.match(/[а-яА-Я]/)) {
            return "Логин не может содержать русские буквы"
        }
        return true;
    }
};

export const passwordValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if(value.length < 3) {
            return "Пароль должен быть длиннее 3 символов"
        }
        return true;
    }
}
