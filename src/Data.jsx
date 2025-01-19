import knight from "./Image/ItAKnightTime.mp4";
import mod from "./Image/MODGame.mp4";
import name from "./Image/NameLessBoy.mp4";
import escape from "./Image/EscapeFromTu.mp4";
import mail from "./Image/MailMan.mp4";
import turtle from "./Image/TurtleFly.mp4";
import mid from "./Image/MidTermPro2023.mp4";
import swepp from "./Image/SweppGirl.mp4";
import maze from "./Image/Maze_spatial.mp4";

const data = [
    {
        status: 'Uni Project',
        name: 'light to the ashes ', // name of project
        img: 'https://img.itch.zone/aW1nLzE4ODQ4Nzc4LnBuZw==/347x500/KNACmK.png',
        dis: '3D Top down game that mix with 2D art style', //description
        link: 'https://github.com/ThwDog/GameProject2_Year3',
        youtube: 'pz4bCJTtc5w',
        itch: 'https://thwdog.itch.io/light-to-the-ashes'
    }
    ,
    {
        status: 'Uni Project',
        name: 'DonkeyKong_Project', // name of project
        img: 'https://img.itch.zone/aW1nLzE4ODYyNjIzLnBuZw==/347x500/oqwLyJ.png',
        dis: 'This game is made for Game Project 1 class Task is to made old game look new', //description
        link: 'https://github.com/ThwDog/DonkeyKong_Project',
        youtube: 'a8er-xcG3dI',
        itch: 'https://thwdog.itch.io/donkey-kong-remake-university-project'
    }
    ,
    {
        status: 'Uni Project',
        name: 'ItsAKnightTimes', // name of project
        video: knight,
        dis: '2D Rogue like game Art style pixel', //description
        link: 'https://github.com/ThwDog/GP_ItsAKnightTimes',
        youtube: ''
    },
    {
        status: 'Uni Project',
        name: 'TurtleFlySystem_Visitor_Facade', // name of project
        video: turtle,
        dis: 'This project is inspired by a vending machine called "เตาบิน". I`m using game programming patterns such as Visitor and Facade.', //description
        link: 'https://github.com/ThwDog/TurtleFlySystem_Visitor_Facade',
        // youtube : 'pz4bCJTtc5w',
    },
    {
        status: 'Uni Project',
        name: 'Maze_spatial', // name of project
        video: maze,
        dis: 'I developed this game while learning about design patterns. It utilizes the Spatial pattern, where specific actions are triggered when the player enters different areas.', //description
        link: 'https://github.com/ThwDog/Maze_Spatial',
        // youtube : 'pz4bCJTtc5w',
    },
    {
        status: 'Game jam 2023',
        name: 'MOD_Gam', // name of project
        video: mod,
        dis: 'I created a 2D platform game for Global Game Jam 2023.', //description
        link: 'https://github.com/ThwDog/Mod_Game'
    }
    ,
    {
        status: 'Uni Project',
        name: 'MidTermPro2023', // name of project
        video: mid,
        dis: '2D top down shooting game', //description
        link: 'https://github.com/ThwDog/MidTermPro2023-1_Survive'
    }
    ,
    {
        status: 'Uni Project',
        name: 'NameLessBoy', // name of project
        video: name,
        dis: '2D turn base game', //description
        link: 'https://github.com/ThwDog/NameLessBoy'
    }
    ,
    {
        status: 'Uni Project',
        name: 'EscapeFromTu', // name of project
        video: escape,
        dis: '2D top down shooting game', //description
        link: 'https://github.com/ThwDog/EscapeFromTu'
    }
    ,
    {
        status: 'GlobalJam2024',
        name: 'Swepp Girl', // name of project
        video: swepp,
        dis: 'I collaborated on this game. I made it for the Global Game Jam 2024, and my role was coding.', //description
        link: 'https://globalgamejam.org/games/2024/swepp-girl-8'
    }
    ,
    {
        status: 'Uni Project',
        name: 'Mailman', // name of project
        video: mail,
        dis: '3D first person game', //description
        link: 'https://github.com/ThwDog/Mailman'
    }
];

export { data };