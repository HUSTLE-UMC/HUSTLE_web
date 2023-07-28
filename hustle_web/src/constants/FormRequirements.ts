const titleRequirements = {
    required: {
        value: true,
        message: "제목을 입력해 주세요!",
    },
};
const contentRequirements = {
    required: {
        value: true,
        message: "내용을 입력해주세요",
    },
};
const usernameRequirements = {
    required: {
        value: true,
        message: "이름을 입력하세요",
    },
};
const passwordRequirements = {
    required: {
        value: true,
        message: "비밀번호를 입력하세요",
        pattern: {
            value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            message:
                "* 비밀번호는 영문, 숫자를 혼합하여 6~20자로 설정해야 합니다.",
        },
    },
};
const passwordCheck = {
    required: {
        value: true,
        message: "비밀번호를 다시 입력하세요",
        pattern: {
            value:
            // 로직 수정
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            message:
                "* 비밀번호가 일치하지 않습니다.",
        },
    },
};

const idRequirements = {
    required: {
        value: true,
        message: "아이디를 입력하세요",
    },
};

const birthRequirements = {
    required: {
        value: true,
        message: "* 생년월일을 정확히 입력해주세요.",
    },
};

const FormRequirements = {
    titleRequirements,
    contentRequirements,
    usernameRequirements,
    passwordRequirements,
    birthRequirements,
    idRequirements,
    passwordCheck,
};

export default FormRequirements;
