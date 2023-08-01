let backendHost;

//이전에 IE와 다른 브라우저들이 자바 스크립트에서 BOM(browser object model)이
//달라서 존재하는 값을 대입하기 위해 사용하던 문법(cross browsing)
//이를 해결하기 위해 등장한 것이 jquery
const hostname = 
    window && window.location && window.location.hostname;

if(hostname === "localhost"){
    backendHost = "http://localhost:8000"
}

//백틱을 이용해서 변수의 내용을 문자열로 출력 : 백틱, 달러, 중괄호 사용
export const API_BASE_URL = `${backendHost}`;

