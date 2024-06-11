import React, { useState} from 'react';
import './PromptsPopUp.css';
import info_icon from '../images/fi-rr-info.svg';
import '../values/colours.css';
import CourseFilter from './CourseFilter';
const PromptsPopUp = ({handlePopUpClick, handleFilterQuery}) => {
    const [popupOpen, setPopupOpen] = useState(false);

    const togglePopup = () => {
        setPopupOpen(!popupOpen);
    };

    const handleClick = (promptText) => {
        handlePopUpClick(promptText);
    };
    
    return(
        <>
            {popupOpen && (
                <div className="popup-main-div">
                <div className='prompts-header-main-div'>
                    <div className='header'>Prompts to ask Hal</div>
                    <div className='info_button'onClick={togglePopup}>
                    <img className='info_icon' src={info_icon} alt="info"/>
                    </div>
                </div>
                <div className='prompts-main-div'>
                    <div className='prompt-div' onClick={() => handleClick("What course electives can I take?")}>
                        What course electives can I take?
                    </div>

                    <CourseFilter
                        handleFilterQuery={handleFilterQuery}
                        handlePopUpClick = {handlePopUpClick}
                    ></CourseFilter>
        
                    <div className='prompt-div' onClick={() => handleClick("What are my classes this semester?")}>
                        What are my classes this semester?
                    </div>
                    <div className='prompt-div' onClick={() => handleClick("What are my subjects for this year?")}>
                        What are my subjects for this year?
                    </div>
                    <div className='prompt-div' onClick={() => handleClick("What are the majors in my course?")}>
                        What are the majors in my course?
                    </div><div className='prompt-div' onClick={() => handleClick("What are the minors in my course?")}>
                        What are the minors in my course?
                    </div>
                </div>
                </div>
            )}

            {!popupOpen && (
            <div className='info_main_div'>
                <div className='info_button'onClick={togglePopup}>
                <img className='info_icon' src={info_icon} alt="info"/>
                </div>
            </div>
            )}
        </>
    );

};

export default PromptsPopUp;