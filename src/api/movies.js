const movies = [
  {
    id: "1",
    title: "Oceans 8",
    category: "Comedy",
    likes: 4,
    dislikes: 1,
    url: "https://www.sliceofscifi.com/wp-content/uploads/2018/06/Oceans8-feat.jpg",
  },
  {
    id: "2",
    title: "Midnight Sun",
    category: "Comedy",
    likes: 2,
    dislikes: 0,
    url: "https://occ-0-1068-1723.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABX7Nn72AriMXaIQ3YCtgnlpgYI8B0a8v3sxUBIuJsm_EWJIknqEV4g9PZHljFM7asX0hn0kpPWAMEjc8jMtvuPlETSjK.jpg?r=15f",
  },
  {
    id: "3",
    title: "Les indestructibles 2",
    category: "Animation",
    likes: 3,
    dislikes: 1,
    url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C2F3AF49BEA14FBEFBC9F0D405A81181A9EAA5BAE157CC833ACAE692D7AD5783/scale?width=1200&aspectRatio=1.78&format=jpeg",
  },
  {
    id: "4",
    title: "Sans un bruit",
    category: "Thriller",
    likes: 6,
    dislikes: 6,
    url:"https://fr.web.img2.acsta.net/newsv7/19/06/17/09/43/0243039.jpg"
  },
  {
    id: "5",
    title: "Creed II",
    category: "Drame",
    likes: 16,
    dislikes: 2,
    url:"https://i.ytimg.com/vi/aliRObJgaRY/maxresdefault.jpg"
  },
  {
    id: "6",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 11,
    dislikes: 3,
    url: "https://i.ytimg.com/vi/tGpTpVyI_OQ/maxresdefault.jpg",
  },
  {
    id: "7",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 12333,
    dislikes: 32,
    url: "https://i.ytimg.com/vi/tGpTpVyI_OQ/maxresdefault.jpg",
  },
  {
    id: "8",
    title: "Seven",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
    url: "https://media.vanityfair.fr/photos/60d37c0ba0a10ca7ad2cc231/16:9/w_1280,c_limit/vf_seven_home_2569.jpeg",
  },
  {
    id: "9",
    title: "Inception",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
    url: "https://www.france.tv/image/vignette_16x9/800/450/a/3/0/7bdc8de3-vodvignette16x9e49f9c60fb78c5529bc4e5129bdb03e7c14b2bb40e3b1c41bdc7865fd9dcd03a.jpg",
  },
  {
    id: "10",
    title: "Gone Girl",
    category: "Thriller",
    likes: 22,
    dislikes: 12,
    url: "https://cinemaccro.com/wp-content/uploads/2017/05/gone-girl-2.jpg",
  },
  {
    id: "11",
    title: "spirited away",
    category: "Animation",
    likes: 3,
    dislikes: 1,
    url: "https://topdata.news/wp-content/uploads/2021/02/Spirited-Away-25tJcD.jpg",
  },
];

export const movies$ = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, movies)
);
