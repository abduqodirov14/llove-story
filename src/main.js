// Analog Cinema Master: Adriano Celentano (1994)
// High-End Creative Coding • Smooth Kinetic Transitions & Dynamic Typography

const audio = document.getElementById('tapeAudio');

// Anamorphic Canvas
const lensCanvas = document.getElementById('lensCanvas');
const lCtx = lensCanvas.getContext('2d');

// DOM Elements
const timecodeDisplay = document.getElementById('timecodeDisplay');
const analogDeck = document.getElementById('analogDeck');
const reelLeft = document.getElementById('reelLeft');
const reelRight = document.getElementById('reelRight');
const needleLeft = document.getElementById('needleLeft');
const needleRight = document.getElementById('needleRight');

const typeStage = document.getElementById('typeStage');
const langIndicator = document.getElementById('langIndicator');
const monumentalText = document.getElementById('monumentalText');
const poeticSubtext = document.getElementById('poeticSubtext');

const clickCue = document.getElementById('clickCue');
const deckFooter = document.getElementById('deckFooter');
const btnCueDrop = document.getElementById('btnCueDrop');
const btnZero = document.getElementById('btnZero');
const btnPlayPause = document.getElementById('btnPlayPause');
const playSymbol = document.getElementById('playSymbol');
const btnFullscreen = document.getElementById('btnFullscreen');

// Resize
function resize() {
  lensCanvas.width = window.innerWidth;
  lensCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// Web Audio API Setup for Real Analog VU Meters
let audioCtx = null;
let analyser = null;
let dataArray = null;
let isAudioReady = false;

function initAudioEngine() {
  if (isAudioReady) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
    const source = audioCtx.createMediaElementSource(audio);
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.75; // Vintage meter damping
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
    dataArray = new Uint8Array(analyser.frequencyBinCount);
    isAudioReady = true;
  } catch (err) {
    console.warn("AudioContext setup notice:", err);
  }
}

// Anamorphic Lens Flare System
let flareIntensity = 0;
function triggerAnamorphicStreak() {
  flareIntensity = 1.0;
}

function drawAnamorphicFlare() {
  lCtx.clearRect(0, 0, lensCanvas.width, lensCanvas.height);
  if (flareIntensity <= 0.01) return;

  const cy = lensCanvas.height * 0.52;
  const cx = lensCanvas.width * 0.5;

  lCtx.save();
  lCtx.globalAlpha = flareIntensity;

  // Ultra-wide anamorphic blue-amber streak
  const streakWidth = lensCanvas.width;
  const streakGrad = lCtx.createLinearGradient(0, cy, streakWidth, cy);
  streakGrad.addColorStop(0, 'rgba(40, 120, 255, 0)');
  streakGrad.addColorStop(0.3, 'rgba(60, 160, 255, 0.4)');
  streakGrad.addColorStop(0.5, 'rgba(255, 235, 200, 0.95)');
  streakGrad.addColorStop(0.7, 'rgba(255, 180, 50, 0.4)');
  streakGrad.addColorStop(1, 'rgba(255, 100, 50, 0)');

  lCtx.fillStyle = streakGrad;
  lCtx.fillRect(0, cy - 2, streakWidth, 4);

  // Central anamorphic glow halo
  const glowGrad = lCtx.createRadialGradient(cx, cy, 0, cx, cy, 280);
  glowGrad.addColorStop(0, 'rgba(255, 245, 220, 0.5)');
  glowGrad.addColorStop(0.4, 'rgba(212, 175, 55, 0.2)');
  glowGrad.addColorStop(1, 'rgba(212, 175, 55, 0)');
  lCtx.fillStyle = glowGrad;
  lCtx.beginPath();
  lCtx.ellipse(cx, cy, 280, 80, 0, 0, Math.PI * 2);
  lCtx.fill();

  lCtx.restore();

  flareIntensity *= 0.94;
}

// Multilingual Cinema Lyrics Timeline
const cinemaTimeline = [
  {
    start: 0.0,
    end: 39.0,
    lang: "ITALIAN RETRO • 1994",
    main: "JA TEBIA LIUBLIU",
    sub: "Adriano Celentano • Quel Punto"
  },
  {
    start: 39.5,
    end: 46.5,
    lang: "ITALIAN / VERSE I",
    main: "MI STO LAVANDO LA FACCIA GUARDANDO TE",
    sub: "Yuzimni yuvib, senga tikilyapman..."
  },
  {
    start: 46.6,
    end: 52.0,
    lang: "ITALIAN",
    main: "CHISSÀ CHE SOGNERAI...",
    sub: "Kim bilsin, tushingda nimani ko'ryapsan..."
  },
  {
    start: 52.1,
    end: 58.0,
    lang: "ITALIAN",
    main: "QUANTE MATTINE TI HO VISTA ACCANTO A ME",
    sub: "Yonimda uyg'ongan qanchadan-qancha tonglaring..."
  },
  {
    start: 58.1,
    end: 65.5,
    lang: "ITALIAN",
    main: "CON GLI OCCHI TUOI NEI MIEI...",
    sub: "Ko'zlaring ko'zimda aks etadi..."
  },
  {
    start: 65.6,
    end: 95.0,
    lang: "ITALIAN",
    main: "CONOSCO COME SEI, CONOSCO COSA VUOI",
    sub: "Qandayligingni bilaman, orzularingni bilaman..."
  },
  {
    start: 95.1,
    end: 110.0,
    lang: "ITALIAN / PRE-CHORUS",
    main: "ANGELI, A VOLTE DIAVOLI...",
    sub: "Gohida farishta, gohida qaysar erka..."
  },
  {
    start: 110.1,
    end: 117.5,
    lang: "ITALIAN",
    main: "TI AMO E VOGLIO DIRTELO...",
    sub: "Seni sevaman va buni aytmoqchiman..."
  },
  {
    start: 117.6,
    end: 127.5,
    lang: "RUSSIAN / MULTILINGUAL",
    main: "Я ТЕБЯ ЛЮБЛЮ, Я ЖИТЬ БЕЗ ТЕБЯ НЕ МОГУ",
    sub: "Seni sevaman, sensiz yasholmayman..."
  },
  {
    start: 127.6,
    end: 136.8,
    lang: "FRENCH / 1994",
    main: "OUI, OUI, MOI JE T'AIME...",
    sub: "Ha, men seni sevaman... Har gal sen uyg'onganingda..."
  },
  {
    start: 136.9,
    end: 142.0,
    lang: "ENGLISH / THE CLIMAX",
    main: "YES, YES, I LOVE YOU",
    sub: "Ha, ha, men seni sevaman!",
    isDrop: true
  },
  {
    start: 142.1,
    end: 146.7,
    lang: "ENGLISH",
    main: "IT'S SO EASY TO SAY AND TO DO...",
    sub: "Buni aytish va his qilish shunchalar oson..."
  },
  {
    start: 146.8,
    end: 151.0,
    lang: "GERMAN",
    main: "ICH, ICH LIEBE DICH...",
    sub: "Men seni sevaman..."
  },
  {
    start: 151.1,
    end: 156.0,
    lang: "GERMAN",
    main: "WEIL NUR DU MICH ZUM LACHEN BRINGST...",
    sub: "Chunki faqat sen meni kuldira olasan..."
  },
  {
    start: 156.1,
    end: 164.5,
    lang: "ITALIAN / CLIMAX",
    main: "IN QUESTO MONDO DI SBAGLI CHE GIUSTA SEI...",
    sub: "Bu xatolarga to'la dunyoda yagonamsan..."
  },
  {
    start: 164.6,
    end: 172.0,
    lang: "ITALIAN",
    main: "SEI L'UNICA, LO SAI...",
    sub: "Bilasan, faqat sen yagonamsan..."
  },
  {
    start: 172.1,
    end: 190.0,
    lang: "ITALIAN",
    main: "TI AMO E RIDO CON TE",
    sub: "Seni sevaman va sen bilan baxtliman..."
  }
];

let activeLyricIndex = -1;
let dropFlareFired = false;
let isSwitchingText = false;

function smoothSwitchLyric(item) {
  if (isSwitchingText) return;
  isSwitchingText = true;

  // Phase 1: Slow Optical Blur Dissolve Out
  typeStage.classList.add('transitioning-out');

  setTimeout(() => {
    // Phase 2: Update content & typography
    langIndicator.textContent = item.lang;
    monumentalText.textContent = item.main;
    poeticSubtext.textContent = item.sub;

    if (item.isDrop) {
      monumentalText.classList.add('highlight-drop');
      triggerAnamorphicStreak();
    } else {
      monumentalText.classList.remove('highlight-drop');
    }

    // Phase 3: Slow Elegant Entrance Animation
    typeStage.classList.remove('transitioning-out');
    typeStage.classList.add('transitioning-in');

    setTimeout(() => {
      typeStage.classList.remove('transitioning-in');
      isSwitchingText = false;
    }, 850);
  }, 380);
}

function updateCinemaLyrics(time) {
  let found = -1;
  for (let i = 0; i < cinemaTimeline.length; i++) {
    if (time >= cinemaTimeline[i].start && time <= cinemaTimeline[i].end) {
      found = i;
      break;
    }
  }

  // Fire anamorphic flare on 02:17 drop
  if (time >= 137.0 && time <= 137.5 && !dropFlareFired) {
    dropFlareFired = true;
    triggerAnamorphicStreak();
  }

  if (found !== -1 && found !== activeLyricIndex && !isSwitchingText) {
    activeLyricIndex = found;
    smoothSwitchLyric(cinemaTimeline[found]);
  }

  // Update timecode display
  const mins = Math.floor(time / 60);
  const secs = Math.floor(time % 60);
  const ms = Math.floor((time % 1) * 100);
  timecodeDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}:${String(ms).padStart(2, '0')} / 05:29:75`;
}

// Analog VU Meter Needle Physics (Smooth Ballistics)
let currentVULeft = -45;
let currentVURight = -45;

function updateVUMeters() {
  if (isAudioReady && analyser && !audio.paused) {
    analyser.getByteFrequencyData(dataArray);

    let sumL = 0;
    let sumR = 0;
    const half = dataArray.length / 2;
    for (let i = 0; i < half; i++) sumL += dataArray[i];
    for (let i = half; i < dataArray.length; i++) sumR += dataArray[i];

    const avgL = sumL / half / 255;
    const avgR = sumR / half / 255;

    const targetL = -45 + (avgL * 82);
    const targetR = -45 + (avgR * 82);

    currentVULeft += (targetL - currentVULeft) * 0.35;
    currentVURight += (targetR - currentVURight) * 0.35;

    needleLeft.style.transform = `rotate(${currentVULeft}deg)`;
    needleRight.style.transform = `rotate(${currentVURight}deg)`;
  } else {
    currentVULeft += (-45 - currentVULeft) * 0.2;
    currentVURight += (-45 - currentVURight) * 0.2;
    needleLeft.style.transform = `rotate(${currentVULeft}deg)`;
    needleRight.style.transform = `rotate(${currentVURight}deg)`;
  }
}

// Master Render Loop
function loop() {
  requestAnimationFrame(loop);
  drawAnamorphicFlare();
  updateVUMeters();

  if (!audio.paused) {
    updateCinemaLyrics(audio.currentTime);
  }
}
loop();

// Playback Trigger
function cueTape(seconds) {
  initAudioEngine();
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  clickCue.classList.add('hidden');
  reelLeft.classList.add('spinning');
  reelRight.classList.add('spinning');
  analogDeck.classList.add('active');
  playSymbol.textContent = 'PAUSE ⏸';
  dropFlareFired = false;
  activeLyricIndex = -1;

  audio.currentTime = seconds;
  audio.play().then(() => {
    triggerAnamorphicStreak();
  }).catch((err) => {
    console.error("Playback error:", err);
  });
}

// Button Events
clickCue.addEventListener('click', () => {
  cueTape(133.0); // Starts at 02:13
});

btnCueDrop.addEventListener('click', () => {
  cueTape(133.0); // Drop 02:13
});

btnZero.addEventListener('click', () => {
  cueTape(0.0); // Rewind 00:00
});

btnPlayPause.addEventListener('click', (e) => {
  e.stopPropagation();
  if (audio.paused) {
    audio.play();
    reelLeft.classList.add('spinning');
    reelRight.classList.add('spinning');
    analogDeck.classList.add('active');
    playSymbol.textContent = 'PAUSE ⏸';
  } else {
    audio.pause();
    reelLeft.classList.remove('spinning');
    reelRight.classList.remove('spinning');
    analogDeck.classList.remove('active');
    playSymbol.textContent = 'PLAY ▶';
  }
});

btnFullscreen.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
});

// Auto-hide deck transport controls for clean Reels video capture
let hideTimer = null;
function handleActivity() {
  deckFooter.classList.remove('fade-out');
  clearTimeout(hideTimer);
  hideTimer = typeof setTimeout !== 'undefined' ? setTimeout(() => {
    if (!audio.paused) {
      deckFooter.classList.add('fade-out');
    }
  }, 3500) : null;
}
window.addEventListener('mousemove', handleActivity);
window.addEventListener('touchstart', handleActivity, { passive: true });
