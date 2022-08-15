# useState

## useState 를 통해 컴포넌트에서 바뀌는 값 관리하기


리액트에서 State란 컴포넌트가 가질수 있는 상태를 의미한다. 예를들어 시계라는 컴포넌트가 있다면 state로 현재 시간을 가질 수 있다.

useState란 State를 간편하게 생성하고 업데이트 시킬 수 있는 도구를 제공해 준다.

***

### useState 선언
> 아래 소스코드 처럼 스테이트 생성과 동시에 가져야할 초기값을 useState 함수에 인자로 넣어주면 state와 setState라는 두가지 요소를 배열 형태로 리턴해준다.   
>
> 현재 상태 값은 state라는 변수에 들어 있고 state를 변경 시켜 주고 싶을 때는 setState 함수를 이용하면 간편하게 변경 된다.

```javascript
const [state, setState] = useState (초기값);
```
***

### useState 사용
> state와 setState의 이름은 사용자가 원하는 대로 변경이 가능하다.
> 
> 아래 소스 설명
> > 아래와 같이 선언하면 시계 컴포넌트안에 time이란 state가 생성되고 state의 초기 값은 3이며 시간을 변경하려면 setTime 함수에 변경될 값을 인자로 넣어주면 된다.

```javascript
const [time, setTime] = useState (3); // time : 3 (초기값)
setTime(5) // time : 5로 업데이트
```
***

### useState 업데이트 후
> setState 함수를 사용해서 state를 변경하면 해당 컴포넌트는 화면에 다시 랜더링이 된다. 
>
> 따라서 time state가 변경 될 때마다 화면이 업데이트 되는 시계를 구현할 수 있다. 
***
### useState를 사용하여 개발 해보기

```javascript
function Timer(){
    return (
        <div>
            <span> 현재 시각 : 1시</span>
            <button> Update </button>
         </div>
    );
}
export default Timer;
```
