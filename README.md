# 별코딩 useCallback
컴포넌트 성능을 최적화하기 위한 도구

## useCallback 예시
```js
const calculate = useCallback((num) => {
  return num +1;
},[item])
```
위 경우와 비슷?
```js
const calculate =(num) =>{
  return num+1;
}
```

리액트에서 함수형 컴포넌트는
함수라는 사실
렌더링이 된다는것 => 함수가 호출이 된것
모든 내부 변수 초기화
* ex)
```js
function Component(){
  const calculate = (num) =>{
    return num +1;
  }
  return <div> {value} </div>
}
```
이 경우를 올바르게 useCallback()을 사용해준다면
```js
function Component(){
  const calculate = useCallback((num) => {
    return num +1
  },[item]);
  return <div>{value}</div>
}
```
컴포넌트가 다시 랜더링이 되더라도 calculate가 초기화 되는것을 막을 수 있음 
컴포넌트가 맨처음 랜더링될때 calculate를 초기화하면서
calculate는 함수 객체를 계속 가지게 되면서 재사용 가능

## useCallback 뼈대
```js
useCallback(() => {
  return value;
},[item])
```
첫 번째 매개변수 우리가 메모이제이션 해줄 콜백함수
두 번째 매개변수 의존성 배열
의존성 배열의 값이 변경되면 새롭게 함수를 만들어주고
그렇지 않는다면 기존의 함수를 재사용

