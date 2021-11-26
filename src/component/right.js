import React  from "react";
import "../css/right.css";
function Right() {
  const personal = [
    { id: 1, image: './assets/avatar1.png', name: 'Robert Fox', username: 'robert',message:'8' },
    { id: 2, image: './assets/avatar2.png', name: 'Jenny Wilson', username: 'jen',message:'7' },
    { id: 3, image: './assets/avatar3.png', name: 'Jane Cooper', username: 'coop',message:'6' },
    { id: 4, image: './assets/avatar4.png', name: 'Eleanor Pena', username: 'pena',message:'5' },
    { id: 5, image: './assets/avatar5.png', name: 'Courtney Henry', username: 'courtney',message:'4' },
    { id: 6, image: './assets/avatar6.png', name: 'Darrell Steward', username: 'rell',message:'3' },
    { id: 7, image: './assets/avatar7.png', name: 'Brooklyn Simmons', username: 'brook',message:'2' },
];
  return (
    <div className="Right">
      <div className="right_team_details">
    <div className="right_team_logo">
      <img src="./assets/Ellipse3.png" alt="team_logo" />
    </div>
    <div className="right_team_name">
      Team Turon 
    </div>
    </div>
    <span style={{ marginTop: "40px" }}>personal</span>
    <div className="left_personal">
                    {personal.map((details) => (
                    <div className="left_personal_details">
                        <div className="left_personal_details_avatar">
                            <img src={details.image} alt="avatar" />
                        </div>
                        <div className="right_personal_details_name">
                            <p>{details.name}</p>
                            <span>@{details.username}</span>

                        </div>
                       
                    </div>
                    ))}
                </div>
    </div>
  );
}

export default Right;
