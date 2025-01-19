import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-container">
            <div className="about-box">
                <h2 className="about-title">About the Library</h2>
                <div className="about-data">
                    <div className="about-img">
                        <img
                            src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80"
                            alt="Library"
                        />
                    </div>
                    <div>
                        <p className="about-text">
                            Welcome to our library—a hub for learning, exploration, and
                            inspiration! Our library has been a cornerstone of knowledge
                            and community for decades, offering access to an extensive
                            collection of books, digital resources, and programs designed
                            for all ages.
                        </p>
                        <p className="about-text">
                            From ancient manuscripts to modern eBooks, we bridge the gap
                            between history and innovation. Our aim is to nurture curious
                            minds and foster a love for lifelong learning.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mission-box">
                <h3 className="mission-title">Our Mission</h3>
                <p className="mission-text">
                    To empower individuals through knowledge, inspire creativity,
                    and strengthen our community by providing resources, programs,
                    and a welcoming space for all.
                </p>
            </div>
            <div className="goals-box">
                <h3 className="goals-title">Library Goals</h3>
                <ul className="goals-list">
                    <li>Promote literacy and lifelong learning.</li>
                    <li>Provide access to diverse resources and perspectives.</li>
                    <li>Encourage cultural exchange and understanding.</li>
                    <li>Support local authors and creators.</li>
                    <li>Foster a sense of community and collaboration.</li>
                </ul>
            </div>
            <div className="feedback-box">
                <h3 className="feedback-title">We Value Your Feedback</h3>
                <p className="feedback-text">
                    Your suggestions help us improve! Let us know how we can better serve
                    you and make your experience unforgettable.
                </p>
            </div>
        </div>
    );
}

export default About;
