import './App.css';
import './svg/google.svg';
import './svg/github.svg';

function App() {
  return (
    <div className="App">
      <span className="sidebar" />
      <span className="container">
        <div className="bg">
          <div className="footer">
            <p>회원가입 시 SnSLAB의 <b>서비스 약관</b> 및 <b>개인정보 처리방침</b>을 확인하였으며, 이에 동의합니다.</p>
          </div>
          <span className="nav"></span>
          <div className="content">
            <div className="social">
              <p>하나의 아이디로 서비스 이용하기</p> 
              <div className="btn-area">
                <span className="arrow-right"/>
                <input type="button" id="social-btn" className="btn-google"/>
                <input type="button" id="social-btn" className="btn-dcu"/>
                <input type="button" id="social-btn" className="btn-github"/>
                <span className="arrow-left"/>
              </div>
            </div>
            <div className="bg-box"></div>
            <form>
              <div className="form-area">
                <div className="input-email">
                  <input type="text" placeholder="이메일"/>
                  <button className="auth-btn"><b>인증</b></button>
                </div>
                <div className="input-pw">
                  <input type="password" placeholder="비밀번호 (영문, 숫자, 특수문자 8-30자)"/>
                </div>   
                <div className="input-repw">
                  <input type="password" placeholder="비밀번호 확인"/>
                </div>
                <div className="input-name">
                  <input type="text" placeholder="이름 (2-15자)"/>
                </div>
                <div>
                  <button className="btn-regi"><b>회원가입</b></button>
                </div>
              </div>
              <div className="already-id">
                <p>이미 계정이 있으세요? <a href="">로그인</a></p>
              </div>
            </form>
          </div>
          <div className="header"></div>
        </div> 
      </span>
    </div>
  );
}

export default App;
