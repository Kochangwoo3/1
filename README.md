<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>어린이 성당</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Gamja+Flower&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <div class="container">
            <h1>어린이 성당</h1>
            <nav>
                <ul>
                    <li><a href="#home">홈</a></li>
                    <li><a href="#bible-stories">성경 이야기</a></li>
                    <li><a href="#prayers">기도</a></li>
                    <li><a href="활동사진.html" target="_blank">활동사진</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <section id="home" class="section">
            <div class="container">
                <h2>홈</h2>
                <p class="intro-text">여기는 어린이들을 위한 성당 공간이에요!</p>
                <img src="예수님과 아이들.PNG" alt="성당 이미지" class="responsive-img">
            </div>
        </section>

        <section id="bible-stories" class="section">
            <div class="container">
                <h2>성경 이야기</h2>
                <div class="story-grid">
                    <div class="story">
                        <h3>노아의 방주</h3>
                        <p>하느님은 노아에게 큰 방주를 만들라고 명령하셨어요...</p>
                        <button onclick="showStory('noah')">자세히 보기</button>
                    </div>
                    <div class="story">
                        <h3>다윗과 골리앗</h3>
                        <p>작은 소년 다윗은 거대한 골리앗을 믿음으로 이겼어요...</p>
                        <button onclick="showStory('david')">자세히 보기</button>
                    </div>
                    <div class="story">
                        <h3>요셉의 꿈</h3>
                        <p>요셉은 꿈을 통해 하느님의 계획을 알게 되었어요...</p>
                        <button onclick="showStory('joseph')">자세히 보기</button>
                    </div>
                    <div class="story">
                        <h3>모세와 홍해</h3>
                        <p>모세는 하느님의 능력으로 홍해를 갈랐어요...</p>
                        <button onclick="showStory('moses')">자세히 보기</button>
                    </div>
                </div>
            </div>
        </section>

        <section id="prayers" class="section">
            <div class="container">
                <h2>기도</h2>
                <p>매일매일 기도를 통해 하느님과 가까워지세요.</p>
                <ul>
                    <li><strong>하느님 오늘 하루도 감사드려요!</strong></li>
                </ul>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2024 어린이 성당 | 모든 권리 보유.</p>
            <p>문의: <a href="mailto:kidschurch@example.com">kidschurch@example.com</a></p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>

body {
  font-family: 'Gamja Flower', cursive;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  background-color: #f0f8ff;
  color: #333;
}

header {
  background: #ffb6c1;
  color: white;
  padding: 1rem 0;
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

header h1 {
  margin: 0;
  font-size: 2.5rem;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
}

nav ul li {
  margin: 0;
}

nav ul li a {
  color: #00008b; /* 진한 파랑색 */
  text-decoration: none;
  font-size: 1.2rem;
  background-color: #e0f7fa;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background 0.3s ease, color 0.3s ease;
}

nav ul li a:hover {
  background-color: #b2ebf2;
}

main {
  padding: 2rem 1rem;
}

.section {
  margin: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

#home img.responsive-img {
  width: 100%; /* 이미지 가로 크기를 부모 요소의 100%로 설정 */
  height: auto; /* 이미지 높이는 자동으로 조정 */
  display: block;
  margin: 1rem 0;
  border-radius: 10px;
}

.intro-text {
  font-size: 2rem; /* 글자 크기를 키웠습니다 */
}

.story-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.story {
  background: #ffe4e1;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: center;
}

.story img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.story:hover {
  transform: translateY(-10px);
}

.story h3 {
  margin-top: 0;
  font-size: 1.5rem;
}

button {
  background: #ff69b4;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #ff1493;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  background: #e0f7fa;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 5px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

form label {
  font-weight: bold;
}

form input, form textarea, form button {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

form button {
  background: #ff69b4;
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
}

form button:hover {
  background: #ff1493;
}

footer {
  background: #ffb6c1;
  color: white;
  text-align: center;
  padding: 1rem 0;
}

footer .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

footer a {
  color: #ffeb3b;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  header h1 {
      font-size: 2rem;
  }

  nav ul {
      flex-direction: column;
      gap: 0.5rem;
  }

  nav ul li {
      margin: 0;
  }

  nav ul li a {
      font-size: 1rem;
  }

  .story-grid {
      grid-template-columns: 1fr;
  }
}
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.5);
}

.modal-content {
  background-color: #fff;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
  border-radius: 10px;
  position: relative;
}

.close-button {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close-button:hover,
.close-button:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

function showStory(story) {
  const stories = {
      noah: `노아의 방주는 큰 배로, 하느님이 세상을 홍수로 심판하실 때 노아와 그의 가족, 그리고 동물들을 보호하기 위해 만든 것입니다. 
             노아는 하느님의 명령에 따라 방주를 만들었고, 모든 동물들을 한 쌍씩 방주에 태웠습니다. 
             그리고 홍수가 일어나 모든 땅이 물에 잠겼지만, 노아와 그의 가족, 그리고 동물들은 안전하게 방주에서 생명을 보존할 수 있었습니다.`,
      david: `다윗은 작은 소년이었지만, 거대한 골리앗을 믿음과 용기로 이겼습니다. 이스라엘 군대가 골리앗을 두려워할 때, 다윗은 하느님을 믿고 골리앗에게 도전했습니다. 
              다윗은 단지 물매와 돌을 사용해 골리앗을 물리쳤습니다. 이 이야기는 우리가 믿음과 용기로 어려움을 이겨낼 수 있다는 것을 보여줍니다.`,
      joseph: `요셉은 꿈을 통해 하느님의 계획을 알게 되었습니다. 그의 형들은 요셉을 질투하여 그를 팔아넘겼지만, 
               하느님은 요셉을 이집트에서 중요한 위치로 올려주셨습니다. 결국 요셉은 그의 가족을 구하는 역할을 하게 되었습니다.`,
      moses: `모세는 하느님을 믿고 홍해를 갈랐습니다. 이스라엘 백성들이 이집트에서 탈출할 때, 
              하느님은 모세를 통해 홍해를 가르셨고, 백성들은 마른 땅을 통해 안전하게 건널 수 있었습니다.`
  };

  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
      <div class="modal-content">
          <span class="close-button">&times;</span>
          <h2>${story}</h2>
          <p>${stories[story]}</p>
      </div>
  `;
  document.body.appendChild(modal);

  modal.querySelector('.close-button').addEventListener('click', () => {
      document.body.removeChild(modal);
  });

  modal.style.display = 'block';
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('메시지가 성공적으로 전송되었습니다!');
});
