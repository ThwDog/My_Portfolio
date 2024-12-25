import './Contract.css'
import { Box, Tooltip, Wrap, WrapItem } from '@chakra-ui/react';
import photo from "../Image/MyPhoto.jpg";

function Contract(){
    return(
        <section className="contact"><br/>
            <h1 className='Header-Contract'>Contract</h1>
            <br/>
                <div className="Header-img">
                    <img src={photo}/>
                </div>
            <br/>
            <div id='contact'>
                <div className="button">
                    <a href="mailto:thanadul.sod.work@gmail.com">
                        <img src="https://i.pinimg.com/originals/b4/cb/42/b4cb42a5d991a2ac4ed042939674297c.png" alt="Email icon"/>
                    </a>
                    <span>Thanadul.sod.work@gmail.com</span>
                </div>
                <button className="button">
                    <a href="https://github.com/ThwDog" target="_blank">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/640px-Octicons-mark-github.svg.png" alt="Email icon"/>
                    </a>
                    <span>Github</span>
                </button>
            </div>
        </section> 
    );
}

export default Contract;