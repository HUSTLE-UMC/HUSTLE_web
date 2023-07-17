import * as Q from './QuestionStyle'
import React, {useState} from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import type {QuestionProps} from '../../../constants/interfaces'
import FormRequirements from '../../../constants/FormRequirements'
import {defaultQuestionValue} from '../../../constants/defaultFormOption'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const {titleRequirements, contentRequirements} = FormRequirements;
let defaultValue = defaultQuestionValue;

const QuestionForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<QuestionProps>({
    defaultValues: defaultValue,
  });

  const onSubmitHandler: SubmitHandler<QuestionProps> = async(data) => {
    console.log(data);
    setIsLoading(true);

    try {
      const response = await axios.post(
        "질문작성 api",
        data,
        {
        headers:{
          "Content-Type": "application/json",
        },
      });
      navigate('/Question');
    } catch(error) {
      console.log("form data fail", error);
      setIsLoading(false);
      alert("폼전송실패");
    }
  }

  return (
    <>
      <Q.Form onSubmit={handleSubmit(onSubmitHandler)}>
        <Q.questionContainer>
          <Q.Border>[ 질문게시판 ]</Q.Border>
          <div>
            <Q.text>· 제목</Q.text>
            <Q.contentInput
              type='title'
              placeholder='제목을 입력하세요'
              {...register("title",titleRequirements)}
              />
              {errors.title && (<div>{errors.title.message}</div>)}
          </div>
          <Q.text>· 내용</Q.text>
          <div>
            <Q.textArea
            placeholder = "내용을 입력해주세요"
            rows={5}
            cols={33}
            {...register("content", contentRequirements)}
            />
            {errors.content && (<div>{errors.content.message}</div>)}
          </div>
          <Q.button>글쓰기</Q.button>
        </Q.questionContainer>
      </Q.Form>
    </>
  )
}

export default QuestionForm;
