# [요약] You Don’t Know JS: Scope & Closure - Chapter 1

- 프로그래밍 언어의 기본은 변수를 저장하고 꺼내고 수정하는 것이다. 변수는 어디에 저장되는가? 이 질문에 적용되는 규칙이 바로 `Scope` 이다.

## Compiler Theory

1. Tokenizing / Lexing: 프로그래밍 언어를 의미있는 조각들, 즉 `token` 단위로 쪼갠다.
2. Parsing: `Token` 조각들을 하나씩 읽어들여 `AST`로 만든다.
3. Code-Generation: `AST`를 해석하여 실제 실행 가능한 코드로 만든다.

유의할 점은 JS 는 다른 언어와 달리 컴파일 과정에서 최적화를 위한 많은 시간을 투자할 수 없다. JS 에서 컴파일은 단 수마이크로초 이내에 끝나는 작업이다. JS 코드가 실행되기 직전(바로 직전!)에 컴파일이 된다고 이해하면 된다.

## Scope 이해하기

Scope 를 학습하는 것은 `Engine`, `Compiler` 그리고 `Scope` 간 대화의 과정을 이해하는 것이라고 생각하면 된다.

### 역할

1. Engine: 컴파일의 시작과 끝, 그리고 코드의 실행을 담당
2. Compiler: `parsing`과 `code-generation`을 담당
3. Scope: 선언된 모든 변수 목록을 보관하고 있으며, 현재 실행되는 코드에서 접근 가능 여부 확인 및 검색을 담당한다.

### 과정 요약

`var a = 2;`를 만났을 때,

1. `Compiler`는 `var a`를 확인하고 `a`의 존재 유무를 `Scope`에 묻는다. 존재하는 경우 건너뛰고 존재하지 않는 경우 새로운 변수 선언을 `Scope`에 요청한다.
2. `Compiler`는 `= 2`를 확인하고 `Engine`을 위해 실행코드를 생성한다. `Engine`은 `Scope`에 참조 가능한 `a`가 있는 지 묻고 있는 경우 해당 변수를 참조한다. 없는 경우 다음 차례의 `scope`를 검색한다.

### LHS vs RHS

`Compiler`를 이해하기 위해서는 이 두 개념을 이해할 필요가 있다.

1. LHS
   1. 정의: `Left-Hand Side`, 변수 선언 과정
   2. 예제: `var a = 2;`
2. RHS
   1. 정의: `Right-Hand Side`, 변수 참조 과정
   2. 예제: `console.log(a)`

## Nested Scope

`Scope`라고 하면 변수명을 가지고 변수값을 탐색하는 규칙을 말한다. 보통은 1 개 이상의 `Scope`가 존재한다. 블락과 함수가 또다른 블락과 함수 안에 중첩되듯이 `Scope`도 또 다른 `Scope` 내에 중첩된다.

### 과정

```javascript
function foo(a) {
  console.log(a + b)
}

var b = 2

foo(2) // 4
```

1. Engine: `foo` `Scope`! `b`를 아니? `b`를 참조하는 RHS 를 만났는데 말야.
2. Scope: 잘 모르겠는데.
3. Engine: `foot` 밖의 `Scope`! 오 너가 글로벌 `Scope`구나. 혹시 `b`를 아니?
4. Scope: 응 알아. 여깄어.

### 비유

![Building of Nested Scope](https://raw.githubusercontent.com/getify/You-Dont-Know-JS/master/scope%20%26%20closures/fig1.png)

## Errors

LHS/RHS 검색이 실패한 경우 `ReferenceError`, RHS 검색에 성공했으나 변수형에 맞지 않는 함수, 메소드 등을 실행한 경우 `TypeError`를 반환한다.
