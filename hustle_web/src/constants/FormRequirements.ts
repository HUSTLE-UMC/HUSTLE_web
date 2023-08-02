const titleRequirements = {
  required: {
    value: true,
    message: '제목을 입력해 주세요!'
  }
};

const contentRequirements = {
  required: {
    value: true,
    message: '내용을 입력해주세요'
  }
};

const usernameRequirements = {
  required: {
    value: true,
    message: '* 아이디를 입력해주세요!'
  }
};

const passwordRequirements = {
  required: {
    value: true,
    message: '* 비밀번호를 입력해주세요!',
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      message:
        '비밀번호는 영문 대/소문자, 숫자, 특수문자를 포함해 입력해주세요!'
    }
  }
};

const idRequirements = {
  required: {
    value: true,
    message: '* 아이디를 입력해주세요.'
  }
};

const birthRequirements = {
  required: {
    value: true,
    message: '* 생년월일을 정확히 입력해주세요.'
  }
};

const FormRequirements = {
  titleRequirements,
  contentRequirements,
  usernameRequirements,
  passwordRequirements,
  birthRequirements,
  idRequirements
};

export default FormRequirements;
