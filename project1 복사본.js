const express = require('express') //express프레임워크 가져와 상수에 할당
const app = express()//express애플리케이션 생성 후 상수에 할당, 
                     //각 요청에 맞는 서버 구성 응답 처리

const nunjucks = require('nunjucks')//numjunks엔진 가져옴, 이는 html사용시 필요

app.set('view engine', 'html')//view engine을 html로 설정 후 이를 템플릿으로 사용하도록 지정
nunjucks.configure('/Users/parkmurphy/Desktop/jshtml', {express:app}) //템플릿 파일의 디렉토리(view)와 express설정
//여기까지가 기본설정이라고 외우래 진짜 미친거 아니야?????
app.get('/', (req, res)=>{
    res.render('index.html') })

let list = [
    {
        subject:'안녕하세요', //글제목
        username:'podo',   //작성자
        date:'2022-02-03', //날짜 안녕하세요
    },
    {
        subject:'안녕하세요2',
        username:'podo2',
        date:'2022-02-03',
    },
    {
        subject:'안녕하세요3',
        username:'podo3',
        date:'2022-02-03',
    },
    {
        subject:'안녕하세요4',
        username:'podo4',
        date:'2022-02-03',
    },
    {
        subject:'안녕하세요5',
        username:'podo5',
        date:'2022-02-03',
    },
]
//board
app.get('/board/list',(req, res)=>{ // /board/list 라우터에서는 
                                    //view폴더안의 board_list.html파일 사용
    res.render('board_list.html',{  //res.render-->html생성 그 후 첫번째 인자가 파일명 
        content:list,
        num:1,       //내용은 list의 배열을 사용할 것이며 현재 페이지 번호는 1이다
        
    })
})

app.get('/board/write', (req,res)=>{ // /board/write주소에서는 
                                     //view폴더안의 board_write.html파일 사용할 것
    res.render('board_write.html') 
})

app.use(express.urlencoded({extended:true,}))// /board/write라는 라우터에서 
             //form으로 넘겨받은 데이터를(내가 입력한 데이터를) 게시판 글 리스트에 넣어준다.
app.post('/board/write',(req,res)=>{
    let board = {...req.body}
    console.log(list, board)
    list.push(board)
    console.log(list)
    res.redirect('/board/list') //redirect는 글 작성이 끝나면 이 라우터로 다시 넘어감
})
app.get('/board/jshtml', (req,res)=>{ // /board/view라는 라우터에서 
    console.log(list)               // view폴더 안의 board_view.html이라는 파일사용
    res.render('board_view.html')
})

app.listen(3000, ()=>{
    console.log('http://localhost:3000에서 서버 실행중')
})