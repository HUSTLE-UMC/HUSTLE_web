interface NotLoginProps {
    onClick: () => void; // onClick prop 추가
  }

export const NotLoginComponent = ({ onClick }: NotLoginProps) => {

    

    return(
        <div onClick={onClick}>로그인</div>
    )
}