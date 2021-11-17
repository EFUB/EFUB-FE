import photo1 from './project2-1.png';
import photo2 from './project2-2.png';

const project2 = {
    id: 2,
    name: "EWHA CODIC",
    team: [
        {
            position: "Frontend Developer",
            names: "김수아 김혜린 김은지"
        },
        {
            position: "Backend Developer",
            names: "이재희 김윤서 이채은 장보미"
        },
        {
            position: "UX/UI Designer",
            names: "임수진"
        },
    ],
    about: "코딩하는 이화인들을 위한 개발 커뮤니티 서비스로 커뮤니티, 스터디, 코딩 팁과 벗들만의 취업 정보를 공유할 수 있는 TECH&JOBS 기능으로 이루어져 있습니다.",
    links: {
        website: "https://github.com/Pork-Potatoes",
        github: "https://github.com/Pork-Potatoes"
    },
    photos: [
        photo1, photo2
    ]
};

export default project2;