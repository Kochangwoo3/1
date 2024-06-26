<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>firststepchurch</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div id="container">    
    <header>
      <div id="logo">
        <a href="index.html">
          <h1> <img src="로고.png" alt="교회 로고" class="img-fluid"></h1>
        </a>
      </div>
      <nav>
        <ul id="topMenu">
          <li><a href="#">첫 방문<span>▼</span></a>
            <ul>
              <li><a href="교회소개.html" target="_blank">교회 소개</a></li>
              <li><a href="목회자 소개.html" target="_blank">목회자 소개</a></li>
            </ul>
          </li>
          <li><a href="#">교회 부서 활동 사진<span>▼</span></a>
            <ul>
              <li><a href="영아부.html" target="_blank">영아부</a></li>
              <li><a href="초등부.html" target="_blank">초등부</a></li>
              <li><a href="청소년부.html" target="_blank">청소년부</a></li>
              <li><a href="청년부.html" target="_blank">청년부</a></li>
              <li><a href="중장년부.html" target="_blank">중장년부</a></li>
            </ul>
          </li>
          <li><a href="공휴일 식사나눔 운동본부 갤러리.html" target="_blank">공휴일 식사나눔 운동본부 갤러리</a></li>
        </ul>
      </nav>
    </header>
    <div id="slideShow">
      <div id="slides">
        <img src="images/교회이미지.PNG" alt="교회 이미지" class="resizable-image">
        <img src="" alt="">
        <img src="images/photo-3.jpg" alt="">
        <button id="prev">&lang;</button>
        <button id="next">&rang;</button>
      </div>
    </div>
    <div id="contents">
      <div id="tabMenu">
        <input type="radio" id="tab1" name="tabs" checked>
        <label for="tab1">공지사항</label>
        <input type="radio" id="tab2" name="tabs">
        <label for="tab2">이번 주 기도 및 식사당번</label>      
        <div id="notice" class="tabContent">
          <h2>공지사항 내용입니다.</h2>
          <ul>            
            <li>첫걸음교회 5주년 행사를 하였습니다!</li>                 
          </ul>
        </div>
        <div id="gallery" class="tabContent">
          <h2>이번 주 기도 및 식사당번</h2>
          <ul>            
            <li>이번 주 기도: <br><br>
              이번 주 식사당번:
            </li>                 
          </ul>
        </div>        
      </div>
      <div id="links">
        <ul>
          <li>
            <a href="찾아오시는 길.html" target="_blank">
              <img src="images/찾아오시는 길 이미지.PNG" alt="찾아오시는 길" class="coming"> 
              <p>찾아오시는 길</p>
            </a>
          </li>
          <li>
            <a href="섬기는 분들.html" target="_blank">
              <img src="images/섬기는 분들 이미지.PNG" alt="섬기는 분들" class="love"> 
              <p>섬기는 분들</p>
            </a>            
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCvZF4uK91Dd6JbCHx6-Sb2Q" target="_blank">
              <img src="images/유튜브 이미지.PNG" alt="첫걸음교회 유튜브" class="youtube"> 
              <p>첫걸음교회 유튜브</p>
            </a>            
          </li>
        </ul>
      </div>
    </div>  
    <footer>    
      <div id="bottomMenu">
        <div id="company">
          <p>서울시 노원구 동일로 1382 4층 (대표전화)010-8943-9068</p> 
        </div>     
      </div>
    </footer>  
  </div> 

  <script src="js/slideshow.js"></script>
</body>
</html>
