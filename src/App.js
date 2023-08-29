import './App.css';
import './svg/google.svg';
import './svg/github.svg';

function App() {
  return (
    <div className="App">
        <div className="background">
            <div className="tab"></div>
            <div className="monitor">
                <div className="monitor-line">
                    <div className="monitor-line2">
                        <div className="contents">
                            <div className="sync-login">
                                <p>하나의 아이디로 서비스 이용하기</p>
                                <div className="sync-btn">
                                    <div id="arrow-right" />
                                    <input type="button" id="btn" className="google-btn" />
                                    <input type="button" id="btn" className="dcu-btn" />
                                    <input type="button" id="btn" className="github-btn" />
                                    <div id="arrow-left" />
                                </div>
                                <form>
                                    <div className="bg-box" />
                                    <div className='input-info'>
                                        <div className="input-email">
                                            <input type="text" className="email" placeholder="이메일" />
                                            <button className="authen-btn">인증</button> <br/>
                                        </div>
                                        <input type="password" className="pw" placeholder="비밀번호 (영문, 숫자, 특수문자 8-30자)" /> <br/>
                                        <input type="password" className="check-pw" placeholder="비밀번호 확인" /> <br/>
                                        <input type="text" className="username" placeholder="이름 (2-15자)" /> <br/>
                                    </div>
                                    <button className="signup-btn"><b>회원가입</b></button>
                                </form>
                                <div className="already-id">
                                    <p>이미 계정이 있으세요? <a href="">로그인</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="upper-tab"></div>
                        <div className="number-tab"></div>
                        <div className="footer-tab">
                            <p>회원가입 시 SnSLAB의 <b>서비스 약관</b> 및 <b>개인정보 처리방침</b>을 확인하였으며, 이에 동의합니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
