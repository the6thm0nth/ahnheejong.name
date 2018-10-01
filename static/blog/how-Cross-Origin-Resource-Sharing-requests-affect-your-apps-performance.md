# [요약]] Cross-Origin Resource Sharing 요청이 어떻게 어플리케이션 성능에 영향을 미치는가?

## 출처

- [How Cross-Origin Resource Sharing requests affect your app’s performance](https://medium.freecodecamp.org/the-terrible-performance-cost-of-cors-api-on-the-single-page-application-spa-6fcf71e50147)

## 요약

1. 대부분 SPA 는 마이크로서비스로 구현되어 있어서 서로 다른 Resource 를 다양한 endpoint 로부터 가져온다.

   - 예)현재 화면에 `spa.example.com` 이라면 사용자 정보를 가져오기 위한 API endpoint 는 `api.example.com/users/reports/1`로 가정할 수 있다.

2. '단순'한 요청인 경우에는 문제가 없지만 대부분의 요청은 그렇게 '단순'하지 않다.
   - 일반적으로 우리가 보내는 요청은 [CORS-safelisted-request-header](https://fetch.spec.whatwg.org/#cors-safelisted-request-header)를 벗어난다. 예) `Authorization`을 위한 `x-corelation-id`라거나, 혹은 `Content-Type`이 `application/json`인 경우
3. 이 경우 `spa.example.com`에서는 `OPTIONS` 요청을 먼저 보낸다. 이 `preflight`는 실제 보낼 요청이 안전한 지를 판단하기 위한 목적이다.
4. 즉, 한번의 API 요청을 위해서는 총 두번의 요청을 보내는 셈이다.
5. ['Access-Control-Max-Age`](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Preflighted_requests#Access-Control-Max-Age) 헤더를 사용하여 캐싱을 하면 되지 않을까?
6. 맞다. 하지만 여기서 이야기하고 싶은 것은 애초에 CORS 요청을 위한 성능이 API 디자인 설계상 매우 나쁘다는 것을 말하려고 한다.
7. preflight 캐시는 Origin 단위가 아니라 URL 단위(쿼리 파라미터 포함)으로 작동한다. 즉, `api.example.com/users/reports/1234`와 `api.example.com/users/reports/1235`를 요청하기 위해 총 네번의 요청을 해야한다.
8. 정답은 없다. 다만 CORS 가 필요한 SPA 를 설계할 때는 API 설계를 할 때 주의를 기울여야 할 것이다.
