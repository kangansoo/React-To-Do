
//첫 번째 매개 변수는 작업
//두 번째 매개 변수가 전송 방식
//세 번째 매개 변수가 파라미터 
export function call(api, method, request){
    let options = {
        headers:new Headers({
            "Content-Type":"application/json"
        }),
        url:"http://localhost:8000" + api,
        method:method,
    };
    //GET 방식일 때의 파라미터 생성
    if(request){
        options.body = JSON.stringify(request);
    }

    //요청
    return fetch(options.url, options)
    .then((response)=>response.json()  
    .then((json)=>{
        if(!response.ok){
            return Promise.reject(json);
        }
        return json;
    }))
};