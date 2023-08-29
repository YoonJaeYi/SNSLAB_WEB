import './App.css';
import './svg/google.svg';
import './svg/github.svg';

function App() {
  return (
    <div className="App">
        <div className="background">
            <div className="tab"></div>
            <div className="monitor"> {/*className "tab"~"monitor-line2"까지 피그마 프레임 네임과 동일*/}
                <div className="monitor-line">
                    <div className="monitor-line2"> {/* 피그마와 동일 */}
                        <div className="contents">
                            <div className="sync-login"> {/* 로그인에 필요한 모든 영역을 나눔 */}
                                <p>하나의 아이디로 서비스 이용하기</p>
                                <div className="sync-btn"> {/* svg 파일과 연동 로그인 버튼 영역 */}
                                    <div id="arrow-right" /> {/* arrow-to-right svg 파일  */}
                                    <input type="button" id="btn" className="google-btn" /> {/* google 계정 연동 버튼 */}
                                    <input type="button" id="btn" className="dcu-btn" /> {/* DCU 홈페이지 계정 연동 버튼 */}
                                    <input type="button" id="btn" className="github-btn" /> {/* github 계정 연동 버튼 */}
                                    <div id="arrow-left" /> {/* arrow-to-left svg 파일 */}
                                </div>
                                <form>
                                    <div className="bg-box" /> {/* 4개의 input box 뒤에 존재하는 박스 디자인 영역 */}
                                    <div className='input-info'> {/* 4개의 input box 영역 */}
                                        <div className="input-email"> {/* 이메일 input box와 이메일 인증 버튼을 겹치기 위한 영역 */}
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
                                    <p>이미 계정이 있으세요? <a href="">로그인</a></p> {/* 기존 계정이 있을 시 로그인하는 앵커 */}
                                </div>
                            </div>
                        </div>
                        <div className="upper-tab"></div> {/* 흰색 상단바 디자인 영역 */}
                        <div className="number-tab"></div> {/* 왼쪽 사이드바 디자인 영역 */}
                        <div className="footer-tab"> {/*회색 하단바 디자인 영역*/}
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
