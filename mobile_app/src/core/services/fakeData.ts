export default {
  signIn: {
    data: {
      user_id: 1,
      age: 2,
      gender: 1,
    },
  },
  home: {
    data: [
      { category_id: 1, isnew: 1, count: 12 },
      { category_id: 2, isnew: 0, count: 8 },
      { category_id: 3, isnew: 0, count: 5 },
      { category_id: 4, isnew: 1, count: 3 },
    ],
  },
  Clist: {
    data: {
      list: [
        {
          url_id: 1,
          url: "https://velog.io/@glassestae",
          title: "음식이 맛있는 제주도 맛집 Top 10",
          text: "음식이 맛있는 제주도 맛집",
          image: "https://s3.com/image/jeju.jpg",
          favorite: 0,
          isnew: 1,
          tags: ["맛집", "제주도", "3월여행"],
        },
        {
          url_id: 2,
          url: "https://blog.naver.com/k2ok1102/221957188890",
          title: "성수 쌀국수 추천,성수 벱 BEP,벱 주차",
          text: "서울 성동구 성수일로 4가길 2 1층",
          image: "https://s3.com/image/jeju.jpg",
          favorite: 0,
          isnew: 0,
          tags: ["맛집", "성수"],
        },
        {
          url_id: 3,
          url: "https://blog.naver.com/etudejin/221342886647",
          title: "광화문 칵테일바 포시즌스호텔 서울 비밀스러운 찰스 H 바",
          text:
            "광화문 포시즌스호텔 서울에 아주 비밀스러운 칵테일바가 있다는 정보 입수ㅎㅎㅎ",
          image: "https://s3.com/image/jeju.jpg",
          favorite: 1,
          isnew: 0,
          tags: ["맛집", "바"],
        },
      ],
      tag_list: ["바", "제주도", "맛집", "3월여행"],
    },
  },
  Alist: {
    data: {
      list: [
        {
          url_id: 1,
          url: "https://velog.io/@glassestae",
          title: "음식이 맛있는 제주도 맛집 Top 10",
          text: "음식이 맛있는 제주도 맛집",
          image: "https://s3.com/image/jeju.jpg",
          favorite: 0,
          isnew: 1,
          tags: ["맛집", "제주도", "3월여행"],
        },
        {
          url_id: 2,
          url: "https://blog.naver.com/k2ok1102/221957188890",
          title: "성수 쌀국수 추천,성수 벱 BEP,벱 주차",
          text: "서울 성동구 성수일로 4가길 2 1층",
          image:
            "https://elenajelbucket.s3.ap-northeast-2.amazonaws.com/black.jpg",
          favorite: 0,
          isnew: 0,
          tags: ["맛집", "성수"],
        },
        {
          url_id: 3,
          url: "https://blog.naver.com/etudejin/221342886647",
          title: "광화문 칵테일바 포시즌스호텔 서울 비밀스러운 찰스 H 바",
          text:
            "광화문 포시즌스호텔 서울에 아주 비밀스러운 칵테일바가 있다는 정보 입수ㅎㅎㅎ",
          image:
            "https://elenajelbucket.s3.ap-northeast-2.amazonaws.com/download.jpeg",
          favorite: 1,
          isnew: 0,
          tags: ["맛집", "바"],
        },
        {
          url_id: 4,
          url:
            "https://post.naver.com/viewer/postView.nhn?volumeNo=28437559&memberNo=44865264",
          title: "속쓰림 심하면 어떤 음료 마셔야 할까?",
          text:
            "위 점막에 염증이 있거나 위식도 역류 질환을 앓고 있으면 속이 자주 쓰리죠",
          image:
            "https://elenajelbucket.s3.ap-northeast-2.amazonaws.com/green.png",
          favorite: 1,
          isnew: 0,
          tags: ["역류성식도염"],
        },
        {
          url_id: 5,
          url: "https://post.naver.com/viewer/postView.nhn?volumeNo=28450157",
          title:
            "파도가 집어삼킨 강남 한복판 외신이 앞다퉈 보도한 한국의 3D 물결",
          text: "삼성동 코엑스 앞 사람들이 발걸음을 멈춘다. 파도 때문이다. ",
          image:
            "https://elenajelbucket.s3.ap-northeast-2.amazonaws.com/orange.png",
          favorite: 1,
          isnew: 0,
          tags: ["역류성식도염"],
        },
      ],
      tag_list: ["역류성식도염", "바", "제주도", "맛집", "3월여행"],
    },
  },
};
