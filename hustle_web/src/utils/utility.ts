/* 유효성 검사나 예외처리를 담아 놓으면 좋을거같아요 ex) 이메일 유효성, 로그인 데이터 처리 등등*/
// utils 대신 services\validation 등과 같이 할수도

export const isValidPassword = (password: string): boolean => {
    // 비밀번호 유효성 검사 로직을 작성합니다.
    // 여기에 원하는 비밀번호 유효성 검사 조건을 추가하면 됩니다.

    // 예시: 비밀번호는 최소 8자 이상이어야 합니다.
    if (password.length < 8) {
        return false;
    }

    // 예시: 비밀번호에는 숫자가 포함되어야 합니다.
    if (!/\d/.test(password)) {
        return false;
    }

    // 예시: 비밀번호에는 대문자와 소문자가 모두 포함되어야 합니다.
    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
        return false;
    }

    // 모든 유효성 검사 조건을 통과한 경우에는 유효한 비밀번호로 판단합니다.
    return true;
};

