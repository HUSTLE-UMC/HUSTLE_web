import React, {useState} from "react";

const List = () => {
  const QuestionList = [ 
    {
      id : 1,
      title : "부천 주변에 야외 농구 코트 있나요?",
      detail : "부천 주변 야외 농구 코드가 있는지 궁금합니다."
    },
    {
      id : 2,
      title : "공덕 주변에 야외 농구 코트 있나요?",
      detail : "공덕 근처 야외 농구 코드가 있는지 궁금합니다."
    },
    {
      id : 3,
      title : "역곡 주변에 야외 농구 코트 있나요?",
      detail : "역곡 근처 야외 농구 코드가 있는지 궁금합니다."
    },
    {
      id : 4,
      title : "신도림 주변에 야외 농구 코트 있나요?",
      detail : "신도림 근처 야외 농구 코드가 있는지 궁금합니다."
    }
  ]

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (id:any) => {
    setSelectedQuestion(id);
  };

  return (
    <div>
      <ul>
        {QuestionList.map((post) => (
          <li key={post.id} onClick={() => handleQuestionClick(post.id)}>
            {post.title}
            {selectedQuestion === post.id && (
              <>
                <br/>
                {post.detail}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List;