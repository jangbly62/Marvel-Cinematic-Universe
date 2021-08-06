// 개봉순배열 생성
const movies_launch = [
  {
    name_kr: "아이언맨",
    name_en: "Ironman 1",
    launch_year: "2008",
    url: "https://www.youtube.com/watch?v=Q9OT3kEClMw",
    img_poster: "img/아이언맨.jpg",
    phase: "1",
    timeline: "3",
  },
  {
    name_kr: "인크레더블 헐크",
    name_en: "Incredible Hulk",
    launch_year: "2008",
    url: "https://www.youtube.com/watch?v=J87E6fDlWBw",
    img_poster: "img/인크레더블 헐크.jpg",
    phase: "1",
    timeline: "4",
  },
  {
    name_kr: "아이언맨 2",
    name_en: "Ironman 2",
    launch_year: "2010",
    url: "https://www.youtube.com/watch?v=9tf_YrfHItM&t=4s",
    img_poster: "img/아이언맨2.jpg",
    phase: "1",
    timeline: "5",
  },
  {
    name_kr: "토르 : 천둥의 신",
    name_en: "Thor : God of Thunder",
    launch_year: "2011",
    url: "https://www.youtube.com/watch?v=CnHmAKvZEd4",
    img_poster: "img/토르1.jpg",
    phase: "1",
    timeline: "6",
  },
  {
    name_kr: "캡틴아메리카 : 퍼스트어벤져",
    name_en: "Captain America: The First Avenger",
    launch_year: "2011",
    url: "https://www.youtube.com/watch?v=iQP2ZG6bxvo&t=1491s",
    img_poster: "img/캡틴아메리카1.jpg",
    phase: "1",
    timeline: "1",
  },
  {
    name_kr: "어벤져스",
    name_en: "Avengers",
    launch_year: "2012",
    url: "https://www.youtube.com/watch?v=xjq5NDum_W0",
    img_poster: "img/어벤져스1.jpg",
    phase: "1",
    timeline: "7",
  },
  {
    name_kr: "아이언맨 3",
    name_en: "Ironman 3",
    launch_year: "2013",
    url: "https://www.youtube.com/watch?v=zrfxAYXoigs",
    img_poster: "img/아이언맨3.jpg",
    phase: "2",
    timeline: "9",
  },
  {
    name_kr: "토르 : 다크월드",
    name_en: "Thor : The Dark World",
    launch_year: "2013",
    url: "https://www.youtube.com/watch?v=w6uO3IHQ5f4",
    img_poster: "img/토르2.jpg",
    phase: "2",
    timeline: "8",
  },
  {
    name_kr: "캡틴 아메리카 : 윈터솔저",
    name_en: "Captain America : The Winter Soldier",
    launch_year: "2014",
    url: "https://www.youtube.com/watch?v=p3LzFlAIbUk",
    img_poster: "img/캡틴아메리카2.jpg",
    phase: "2",
    timeline: "10",
  },
  {
    name_kr: "가디언즈 오브 갤럭시",
    name_en: "Guardians of the Galaxy",
    launch_year: "2014",
    url: "https://www.youtube.com/watch?v=oKkHGFMJ148",
    img_poster: "img/가오갤1.jpg",
    phase: "2",
    timeline: "11",
  },
  {
    name_kr: "어벤져스 : 에이지 오브 울트론",
    name_en: "Avengers : Age of Ultron",
    launch_year: "2015",
    url: "https://www.youtube.com/watch?v=cslYu_VgDpM",
    img_poster: "img/어벤져스2.jpg",
    phase: "2",
    timeline: "13",
  },
  {
    name_kr: "앤트맨",
    name_en: "Ant-man",
    launch_year: "2015",
    url: "https://www.youtube.com/watch?v=FtT0s2eAwf0",
    img_poster: "img/앤트맨.jpg",
    phase: "2",
    timeline: "14",
  },
  {
    name_kr: "캡틴 아메리카 : 시빌 워",
    name_en: "Captain America : Civil War",
    launch_year: "2016",
    url: "https://www.youtube.com/watch?v=WihKgBdcKh8",
    img_poster: "img/캡틴아메리카3.jpg",
    phase: "3",
    timeline: "15",
  },
  {
    name_kr: "닥터 스트레인지",
    name_en: "Doctor Strange",
    launch_year: "2016",
    url: "https://www.youtube.com/watch?v=2ojyCukJOjw",
    img_poster: "img/닥터스트레인지.jpg",
    phase: "3",
    timeline: "18",
  },
  {
    name_kr: "가디언즈 오브 갤럭시 VOL.2",
    name_en: "Guardians of the Galaxy Vol. 2",
    launch_year: "2017",
    url: "https://www.youtube.com/watch?v=oKkHGFMJ148",
    img_poster: "img/가오갤2.jpg",
    phase: "3",
    timeline: "12",
  },
  {
    name_kr: "스파이더맨 : 홈커밍",
    name_en: "Spider-Man : Homecoming",
    launch_year: "2017",
    url: "https://www.youtube.com/watch?v=mO168Yp2IF0",
    img_poster: "img/스파이더맨_홈커밍.jpg",
    phase: "3",
    timeline: "19",
  },
  {
    name_kr: "토르: 라그나로크",
    name_en: "Thor : Ragnarok",
    launch_year: "2017",
    url: "https://www.youtube.com/watch?v=18Ns_yUlkb4",
    img_poster: "img/토르3.png",
    phase: "3",
    timeline: "20",
  },
  {
    name_kr: "블랙 팬서",
    name_en: "Black Panther",
    launch_year: "2018",
    url: "https://www.youtube.com/watch?v=Kxi3AE7Nf5A",
    img_poster: "img/블랙팬서.jpg",
    phase: "3",
    timeline: "17",
  },
  {
    name_kr: "어벤져스: 인피니티 워",
    name_en: "Avengers: Infinity War",
    launch_year: "2018",
    url: "https://www.youtube.com/watch?v=ksZR8xjGuBA",
    img_poster: "img/어벤져스3.jpg",
    phase: "3",
    timeline: "22",
  },
  {
    name_kr: "앤트맨과 와스프",
    name_en: "Ant-Man and the Wasp",
    launch_year: "2018",
    url: "https://www.youtube.com/watch?v=DuwQio1nXwY",
    img_poster: "img/앤트맨과 와스프.jpg",
    phase: "3",
    timeline: "21",
  },
  {
    name_kr: "캡틴 마블",
    name_en: "Captain Marvel",
    launch_year: "2019",
    url: "https://www.youtube.com/watch?v=VXZmea13-V0",
    img_poster: "img/캡틴마블.jpg",
    phase: "3",
    timeline: "2",
  },
  {
    name_kr: "어벤져스: 엔드게임",
    name_en: "Avengers: Endgame",
    launch_year: "2019",
    url: "https://www.youtube.com/watch?v=dNB_QMbwFWE",
    img_poster: "img/어벤져스4.jpg",
    phase: "3",
    timeline: "23",
  },
  {
    name_kr: "스파이더맨: 파 프롬 홈",
    name_en: "Spider-Man: Far From Home",
    launch_year: "2019",
    url: "https://www.youtube.com/watch?v=zsehQ83TtjI",
    img_poster: "img/스파이더맨_파프롬홈.jpg",
    phase: "3",
    timeline: "24",
  },
  {
    name_kr: "블랙위도우",
    name_en: "Black Widow",
    launch_year: "2021",
    url: "",
    img_poster: "img/블랙위도우.jpg",
    phase: "4",
    timeline: "16",
  },
];

// 페이즈 div 지정
const order_launch_p = [
  document.querySelector("#order_launch .phase:first-child .phase_movie"),
  document.querySelector("#order_launch .phase:nth-child(2) .phase_movie"),
  document.querySelector("#order_launch .phase:nth-child(3) .phase_movie"),
  document.querySelector("#order_launch .phase:nth-child(4) .phase_movie"),
];

// 시간순 div 지정
const order_time = document.querySelector(
  "#order_time .phase:first-child .phase_movie"
);

// 시간순배열 생성
const movies_time = [];

for (let t = 0; t < movies_launch.length; t++) {
  for (let l = 0; l < movies_launch.length; l++) {
    if (String(t + 1) === movies_launch[l].timeline) {
      movies_time.push(movies_launch[l]);
    }
  }
}
// 함수 생성
function f_div_movie(div_movie) {
  div_movie.classList.add("eachMovie");
  div_movie.style.width = "150px";
  div_movie.style.display = "flex";
  div_movie.style.flexDirection = "column";
  div_movie.style.alignItems = "center";
  div_movie.style.paddingBottom = "10px";
}

function f_img_movie(img_movie, i, array) {
  img_movie.src = array[i].img_poster;
  img_movie.style.width = "100px";
  img_movie.style.height = "150px";
}

function f_a_img(a_img, i, array) {
  a_img.href = array[i].url;
  a_img.rel = "noreferrer";
  a_img.target = "_blank";
}

function f_a_title(a_title, i, array) {
  a_title.href = array[i].url;
  a_title.rel = "noreferrer";
  a_title.target = "_blank";
  a_title.style.textAlign = "center";
}

// 개봉순 정렬
for (let p = 0; p < 4; p++) {
  for (let i = 0; i < movies_launch.length; i++) {
    const div_movie = document.createElement("div");
    const img_movie = document.createElement("img");
    const a_img = document.createElement("a");
    const a_title = document.createElement("a");

    f_div_movie(div_movie);
    f_img_movie(img_movie, i, movies_launch);
    f_a_img(a_img, i, movies_launch);

    a_title.innerText = `${movies_launch[i].name_kr}(${movies_launch[i].name_en}) - ${movies_launch[i].launch_year}`;
    f_a_title(a_title, i, movies_launch);

    a_img.appendChild(img_movie);
    div_movie.appendChild(a_img);
    div_movie.appendChild(a_title);

    if (String(p + 1) === movies_launch[i].phase) {
      order_launch_p[p].appendChild(div_movie);
    }
  }
}

// 타임라인순 정렬
for (let i = 0; i < movies_time.length; i++) {
  const div_movie = document.createElement("div");
  const img_movie = document.createElement("img");
  const a_img = document.createElement("a");
  const a_title = document.createElement("a");

  f_div_movie(div_movie);
  f_img_movie(img_movie, i, movies_time);
  f_a_img(a_img, i, movies_time);

  a_title.innerText = `${movies_time[i].timeline}. ${movies_time[i].name_kr}(${movies_time[i].name_en}) - ${movies_time[i].launch_year}`;
  f_a_title(a_title, i, movies_time);

  a_img.appendChild(img_movie);
  div_movie.appendChild(a_img);
  div_movie.appendChild(a_title);
  order_time.appendChild(div_movie);
}
