import photo1 from './project1-1.png';
import photo2 from './project1-2.png';
import photo3 from './project1-3.png';
import photo4 from './project1-4.png';

const project1 = {
    id: 1,
    name: "맛집전공",
    team: [
        {
            position: "Frontend Developer",
            names: "이해린 이윤지 정드림"
        },
        {
            position: "Backend Developer",
            names: "박현아 이서정 김시연 김민주"
        },
        {
            position: "UX/UI Designer",
            names: "김남혜"
        },
    ],
    about: "대학생들이 직접 작성한 대학가 맛집에 대해 작성한 리뷰를 공유할 수 있는 서비스입니다. 학교 인증을 통해 리뷰에 대한 신뢰도를 높일 수 있으며 누구나 리뷰를 열람할 수 있습니다.",
    links: {
        website: "https://github.com/Pork-Potatoes",
        github: "https://github.com/Pork-Potatoes"
    },
    photos: [
        photo1, photo2, photo3, photo4
    ]
};

export default project1;