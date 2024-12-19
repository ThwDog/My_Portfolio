import './Header.css';
import React, { useEffect, useState ,useRef } from 'react';
import { Box, Tooltip, WrapItem } from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';

function Header() {

  return (
      <>
      <div id='header'>
        <div className='container'>
          
          <div class="header-text">
            <div>
              <br></br>
              <p> Game Developer</p>
              <h1>HI , I'm<span> Thanadul Sodsangsook</span> from Thailand
              <br/>I'm current study on <span>Unity Game Development</span>interesting in <span>VFX</span> and <span> AI </span></h1>
            </div>
          </div>

          

          <div class="header-bottom-link">
            <WrapItem>
              <Tooltip hasArrow  label='GITHUB' bg="0" fontSize='15'  placement='top' color='white' height='15'>
                  <a href="https://github.com/ThwDog" target="_blank">
                    <img src="https://avatars.githubusercontent.com/u/93073193?v=4" loading="lazy" ></img>
                  </a>
              </Tooltip>
              <Tooltip hasArrow  label='LEETCODE' bg="0" fontSize='15'  placement='top' color='white'>
                  <a href="https://leetcode.com/u/ThwDog/" target="_blank">
                    <img src="https://miro.medium.com/v2/resize:fit:1020/0*xJCLQQRZv3XFMUd1" loading="lazy"></img>
                  </a>
              </Tooltip>
              <Tooltip hasArrow  label='YT01' bg="0" fontSize='15'  placement='top' color='white'>
                <a href="https://www.youtube.com/@td_gd2765/videos" target="_blank">
                  <img src="https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg" loading="lazy"></img>
                </a>
              </Tooltip>    
              <Tooltip hasArrow  label='YT02' bg="0" fontSize='15'  placement='top' color='white'>
                <a href="https://www.youtube.com/@ThwDog_Work" target="_blank">
                  <img src="https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg" loading="lazy"></img>
                </a>
              </Tooltip>  
            </WrapItem>     
          </div>
        </div>
          <div className='github-Calender'>
            <div className='calender-BG' />
            <GitHubCalendar username="thwdog" />
          </div>
      </div>
      </>
  );
}

export default Header;
