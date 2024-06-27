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