import React from 'react';

const ForgotPassword = () => {
    return (
        <div>
            <h2>비밀번호 재설정</h2>
            <form>
                <input type="email" placeholder="이메일" />
                <button type="submit">재설정 링크 보내기</button>
            </form>
        </div>
    );
};

export default ForgotPassword;
