import React, { useState } from 'react';
import './Login.css';
import ArrowIcon from './icons/arrow.svg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        const requestBody = {
            email,
            password
        };

        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody),
                credentials: 'include'  // credentials 옵션 설정
            });

            console.log('Response received:', response);

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                alert('로그인에 성공했습니다.');
                // 성공 처리, 예: 페이지 이동 또는 토큰 저장
                // window.location.href = '/home'; // 예시: 홈 페이지로 이동
            } else if (response.status === 401) {
                const errorData = await response.json();
                setErrorMessage(errorData.message || '잘못된 자격 증명입니다.');
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || '알 수 없는 오류가 발생했습니다.');
            }
        } catch (error) {
            console.error('Error during fetch:', error);
            setErrorMessage('서버에 연결할 수 없습니다.');
        }
    };

    return (
        <div className="App">
            <main className="login-main">
                <div className="login-container">
                    <h3>(서비스 이름)에 로그인 하세요</h3>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="input-container">
                            <input
                                type="email"
                                placeholder="아이디"
                                className="login-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-container">
                            <input
                                type="password"
                                placeholder="비밀번호"
                                className="login-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="submit" className="arrow-button">
                                <img src={ArrowIcon} alt="arrow" className="arrow-icon" />
                            </button>
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </form>
                    <div className="login-links">
                        <a href="/forgotPassword">암호를 잊으셨습니까?</a>
                        <div className="signup-link">
                            <span>(서비스 이름) ID가 없으십니까? </span>
                            <a href="/signup">지금 만드세요.</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Login;
