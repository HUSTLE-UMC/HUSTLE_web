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

const FormRequirements = {
  titleRequirements,
  contentRequirements,
};

export default FormRequirements;
