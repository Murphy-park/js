/*
//case 1
const express = require('express') //express 프레임워크 불러옴, 후에 할당
const app = express() //express 애플리케이션을 생성하고 할당하자

app.get('/', (req, res) => { //라우터생성, 여기서는 https://localhost:3000/ 이 주소가 되는 API서버를 생성한다.
  res.send('Hello World') // respond로 이해하자, send 영단어 그 자체로 이해하자, 이러면 반응하고 내보낸다라고 이해해야 할 것이며 소괄호속 문장을 출력할 수 있다.
})

app.listen(3000)  //3000번을 계속 듣고 있겠다라고 인식하자. 이 코드는 로컬호스트 서버를 여는데 필수적이다.
//정리해보자면 이 case1은 가장 기본적인 api서버를 생성하는 방식중 하나일 수 있다. 필히 외우자

*/
/*

//case 2
const express = require('express') 
const app = express() 

app.get('/dog', (req, res) => {  
  res.send('멍멍') 
})
//API서버는 라우터의 동작으로 각각 작동 할 수 있다. 여기서는 /dog을 이용해 각각의 동물소리를 반응시키려는 것이다

app.get('/cat', (req, res) => {
  res.send('야옹')
})
//API서버는 라우터의 동작으로 각각 작동 할 수 있다. 여기서는 /dog을 이용해 각각의 동물소리를 반응시키려는 것이다

app.listen(3000) 
//이 case2는 라우터 주소로 API서버의 응답을 각각 다르게 가져올 수 있다는데에 의의가 있는것 같다. 이런 유형의 대표적인 API서버

*/
/*

//case 3
const express = require('express') //express 프레임워크 불러옴, 후에 할당
const app = express() //express 애플리케이션을 생성하고 할당하자

app.get('/user/:id', (req, res) => { 
  const q = req.params //request로 이해하자 이제는 API서버가 응답하는 것이 아닌 요청하는 단계로 온 것 같다 여기서는 라우터주소에서 유저에게 요청한다. 그리고 입력받은 값을 상수 q에 저장한다
  console.log(q) //q를 출력함

  res.send('Hello World')
})

app.listen(3000)
//이번 case3는 라우터주소에서 유저에게 입력받는 동작을 수행했다. req.params를 사용하는 대표적인 유형으로 이해하면 될 것 같음

*/
/*

//case 4
const express = require('express')
const app = express()

app.get('/user/:id', (req, res) => { //라우터 주소로 요청하는건 case3와 동일하다
  const q = req.params //상수q에 할당한다 
  console.log(q.id) //여기서 차이점이 나오는 것 같음, 처음에는 q.id를 보고 이해가 되질 않았는데 여기서의 q는 상수이지만....
                    //애초에 q를 정의하는 req.params 그 자체는 라우터주소로 요청 받기때문에 동적으로 변한다 
                    //이런상황에서 출력이나 res시에는 q.id를 사용하는것이 올바르게 보임

  res.send({'id' : q.id})
})

app.listen(3000)



const express = require('express')
const app = express()

app.get('/user/:id', (req, res) => { 
 
 const q = req.query
 console.log(q)
 res.json({'userid' : q})
})

app.listen(3000)



const express = require('express')
const app = express()

app.get('/sound/:name', (req, res) => {
 const {name} = req.params
 console.log(name)

 res.json({'sound' : '야옹'})
})

app.listen(3000)
*/
