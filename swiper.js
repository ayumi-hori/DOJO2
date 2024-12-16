// Swiperの初期化を関数として定義
function initializeSwiper() {
    return new Swiper('.swiper', {
      // Optional parameters
      loop: true,
      slidesPerView: 1,
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
    });
  }
  
  // Swiperの表示/非表示を切り替える関数
  function toggleSwiperDisplay() {
    const swiperElement = document.querySelector('.swiper');
    if (window.innerWidth <= 700) {
      // 700px以下なら表示
      swiperElement.style.display = 'block';
      if (!window.mySwiper) {
        // Swiperが初期化されていない場合は初期化する
        window.mySwiper = initializeSwiper();
      }
    } else {
      // 700px以上なら非表示
      swiperElement.style.display = 'none';
      if (window.mySwiper) {
        // Swiperが初期化されている場合は破棄する
        window.mySwiper.destroy(true, true);
        window.mySwiper = null;
      }
    }
  }
  
  // 初回実行
  toggleSwiperDisplay();
  
  // ウィンドウのリサイズイベントを監視して、Swiperの表示/非表示を更新
  window.addEventListener('resize', toggleSwiperDisplay);