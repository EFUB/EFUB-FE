import photo1 from './project4-1.png';
import photo2 from './project4-2.png';
import photo3 from './project4-3.png';

const project4 = {
    id: 4,
    name: "See Me",
    team: [
        {
            position: "Frontend Developer",
            names: "정아연 장예준 김소민 오지은"
        },
        {
            position: "Backend Developer",
            names: "박주은 서수경 강민지"
        },
        {
            position: "UX/UI Designer",
            names: "장해라"
        },
    ],
    about: "날씨 웹 통합 서비스로 기온, 날씨, 미세먼지 농도, 코로나 현황과 더불어 코디 및 환기 시간을 추천해드립니다. 반응형 웹으로구성되어 모바일에서도 손쉽게 이용할 수 있습니다.",
    links: {
        website: "https://github.com/Pork-Potatoes",
        github: "https://github.com/Pork-Potatoes"
    },
    photos: [
        photo1, photo2, photo3
    ]
};

export default project4;