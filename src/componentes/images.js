import React from 'react';
import photo1 from '../photo1.png';
import photo2 from '../photo2.png';
import photo3 from '../photo3.png';
import photo4 from '../photo4.png';
import photo5 from '../photo5.png';
import photo6 from '../photo6.png';

function Images () {
    return(
        <div className="images">
            <div className="maskGroup1">
                <img className="photo1" src={photo1} alt="photo1" />
                <p className="name1">Bill Mahoney</p>
                <p className="team1">Product owner</p>
            </div>
        
            <div className="maskGroup2">
                <img className="photo2" src={photo2} alt="photo2" />
                <p className="name2">Saba Cabrera</p>
                <p className="team2">Art director</p>
            </div>
            
            <div className="maskGroup3">
                <img className="photo3" src={photo3} alt="photo3" />
                <p className="name3">Shae Le</p>
                <p className="team3">Tech Lead</p>
            </div>

            <div className="maskGroup4">
                <img className="photo4" src={photo4} alt="photo4" />
                <p className="name4">Skylah Lu</p>
                <p className="team4">UX Designer</p>
            </div>

            <div className="maskGroup5">
                <img className="photo5" src={photo5} alt="photo5" />
                <p className="name5">Griff Richards</p>
                <p className="team5">Developer</p>
            </div>

            <div className="maskGroup6">
                <img className="photo6" src={photo6} alt="photo6" />
                <p className="name6">Stan John</p>
                <p className="team6">DEverloper</p>
            </div>
        </div>
    )
}

export default Images;