import React from "react";
import "../css/left.css";

function Left() {
    const posts = [
        { id: 1, image: './assets/Ellipse 2.png', name: 'Hello World', message: 'Welcome to learning React!', ago: '5', newMessage: '2' },
        { id: 2, image: './assets/Ellipse2.png', name: 'Team Turon 🍌', message: '@sasha sent 3 images.', ago: '10', newMessage: '5' },
        { id: 3, image: './assets/Ellipse3.png', name: 'Da Board Room', message: '@Chris Are you going to the standups for tomorrow? You h...', ago: '5', newMessage: '1' }

    ];

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
        <div className="Left">
            <div className="left_title">
                bubble.
            </div>
            <div className="left_team">
                <span>Team</span>
                <div className="team_details">
                    {posts?.map((details) => (


                        <div className="left_team_details">
                            <div className="left_team_image">
                                <img src={details.image} alt="team_image" />
                            </div>
                            <div className="left_team_name">
                                <span>{details.name}</span>
                                <p>{details.message}</p>
                            </div>
                            <div className="left_team_chat_details">
                                <p>{details.ago} min ago</p>
                                <div className="left_team_chat_details_span">
                                    <span>{details.newMessage}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <span style={{ marginTop: "40px" }}>personal</span>
                <div className="left_personal">
                    {personal.map((details) => (
                    <div className="left_personal_details">
                        <div className="left_personal_details_avatar">
                            <img src={details.image} alt="avatar" />
                        </div>
                        <div className="left_personal_details_name">
                            <p>{details.name}</p>
                            <span>@{details.username}</span>

                        </div>
                        <div className="left_personal_details_message">
                            <div className="left_personal_details_message_count">
                                {details.message}
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Left;
