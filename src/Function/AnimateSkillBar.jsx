import './AnimateSkillBar.css';

function AnimateSkillBar() {
    return (
        <>
            <br />
            <div className="skill-bars">
                <div className="bar">
                    <div className="info"> <span>Unity C# : medium to high</span> </div>
                    <div className="progress-line unity"> <span></span> </div>
                </div>
                <div className="bar">
                    <div className="info"> <span>HTML</span> </div>
                    <div className="progress-line html"> <span></span> </div>
                </div>
            </div>
        </>
    );
}

export default AnimateSkillBar;

