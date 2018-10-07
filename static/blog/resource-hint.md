# Resource Hint: Preload & Prefetch & Preconnect

## Resource Hint 란?

HTML Link 엘리먼트에 정의하는 `preload`, `prefetch`, `preconnect` 등을 말한다. 개발자나 자원을 제공하는 서버 측에서는 이를 통해 사용자 에이전트로 하여금 어느 자원이 필요한지 판단할 수 있어 성능 향상을 돕는다.

## Resource Hint 종류

### Preload

- 높은 우선순의의 자원을 미리 불러온다.아래 `prefetch`와 헷갈리지 말자. 후에 필요할 지 모르는 자원이 아니라 현재 작업에 필요한 자원이기 때문에, 현재 작업에서 필요한 자원 중에 가장 우선적으로 불러온다.
- 브라우저 호환성
  [<img src="/images/resource-hint/preload-browser-compatibility.png" />](https://caniuse.com/#search=preload)
- 예제

```html
<link rel="preload" href="https://the6thm0nth.net/image.png">
```

### Prefetch

- 후에 필요할 지 모르는 낮은 우선순위의 자원을 미리 불러와 캐시에 저장해놓는다. 현재 화면에 필요한 모든 작업이 끝난 뒤 유휴 시간을 통해 작업이 이루어진다. `prefetch`에는 총 세가지 유형이 있다.

#### prefetch

- `prefetch`의 기본으로 자원을 미리 불러와 캐시에 저장해놓는다.
- 브라우저 호환성
  [<img src="/images/resource-hint/prefetch-browser-compatibility.png" />](https://caniuse.com/#search=prefetch)
- 예제

  - link prefetching

  ```html
  <link rel="dns-prefetch" href="//the6thm0nth.net/image.png">
  ```

  - HTTP header

  ```http
  Link: <//the6thm0nth.net/image.png>; rel=prefetch
  ```

#### dns-prefetch

- DNS 로부터 IP 주소를 미리 찾아놓는다(DNS lookup). 각종 CDN 자원들에 활용하면 좋다.
- 브라우저 호환성
  [<img src="/imgaes/resource-hint/dns-prefetch-browser-compatibility.png" />](https://caniuse.com/#search=dns-prefetch)
- 예제

```html
 <link rel="dns-prefetch" href="//www.google-analytics.com">
```

#### pretender

- `link prefetch`와 비슷하나 차이점은 백그라운드 작업으로 `prerender` 된 모든 페이지를 그린다. 따라서 매우 무거운 페이지를 설정하는 경우 유의해서 사용해야 한다.
- 브라우저 호환성
  [<img src="/images/resource-hint/prerender-browser-compatibility.png />](https://caniuse.com/#search=prerender)
- 예제

```html
<link rel="prerender" href="https://the6thm0nth.net">
```

## Preconnect

- `dns-prefetch`가 DNS lookup 만을 수행한다면 `pre-connect`는 DNS lookup 뿐만 아니라 TLS 협상 및 TCP handshaking 까지 수행한다.
- 브라우저 호환성
  [<img src="/images/resource-hint/preconnect-browser-compatibility.png />](https://caniuse.com/#search=preconnect)
- 예제

```html
<link rel="preconnect" href="https://the6thm0nth.net">
```

## 참고

- [Resource Hints](https://www.w3.org/TR/resource-hints/)
- [Link prefetching FAQ | MDN](https://developer.mozilla.org/ko/docs/Link_prefetching_FAQ#What_is_link_prefetching.3F)
- [Resource Hints - What is Preload, Prefetch, and Preconnect?](https://www.keycdn.com/blog/resource-hints)
- [Speeding up your website using Prefetching techniques](https://medium.com/@soorajchandran/speeding-up-your-website-using-prefetching-techniques-8077058b7418)
- [Can I use… Support tables for HTML5, CSS3, etc](https://caniuse.com/)
