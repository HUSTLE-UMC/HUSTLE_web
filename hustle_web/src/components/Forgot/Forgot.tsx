import React,{useState} from 'react';
import * as F from './ForgotStyle'
import FindID from './FindID/FindID'
import FindPW from './FIndPW/FindPW'

const ForgotMain = () => {
  const [activeForm, setActiveForm] = useState('id');

  const handlebuttonClick = (form:string) => {
    setActiveForm(form);
  }
  return (
    <F.Div>
    <F.Container>
      <F.Text>계정 찾기</F.Text>
      <F.Button active = {activeForm === "id"} onClick={() => handlebuttonClick("id")}>아이디 찾기</F.Button>
      <F.Button active = {activeForm === "pw"} onClick={() => handlebuttonClick("pw")}>비밀번호 찾기</F.Button>
      <div>
        {activeForm === 'id' ? <FindID/> : null}
        {activeForm === 'pw' ? <FindPW/> : null}
      </div>
    </F.Container>
    </F.Div>
  )
}

export default ForgotMain;