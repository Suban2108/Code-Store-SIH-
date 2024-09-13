import React, { useState, useRef } from "react";
import profile_pg from '../Assets/new (1).png'
import './ProfilePage.css'

// Hardcoded user object
const defaultUser = {
    firstName: "Ashmit",
    lastName: "Shelke",
    designation: "Student",
    phoneNumber: "+911234567890",
    birthDate: "31-03-2005",
    email: "ashmit@example.com",
    address: "123 Main St",
    address2: "Apt 101",
    city: "Mumbai",
    state: "Maharashtra",
    zip: "400001",
    field: "Computer Science",
    language: "JavaScript",
    year: 2026,
    resume: "resume.pdf"
};

const ProfilePage = ({ user = defaultUser }) => {
    const [profileImage, setProfileImage] = useState(null);
    const fileInputRef = useRef(null);  // useRef to handle file input

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-8 main-prpg mt-20 mb-20">
            <div className="flex items-center justify-left mb-8">
                <i className="ri-book-line ri-4x text-blue-500"></i>
                <h1 className="text-4xl font-bold text-center border-2 border-blue-300 rounded-lg p-3 text-gray-800 mx-4">Profile</h1>
                <i className="ri-book-line ri-4x text-blue-500"></i>
            </div>

            <div className="flex justify-left items-center relative border-4 mb-4 w-[100%] h-[250px] main-prpg-primg">
                {/* <p>&lt;</p> */}
                <img
                    // src={profileImage || "/src/assets/clipart-coding.png"}
                    src={profile_pg}
                    alt="YourProfilePic"
                    className="cursor-pointer rounded-lg h-[250px] w-[230px] bg-center border-2 border-blue-800 main-prpg-img"
                    onClick={() => fileInputRef.current.click()}
                    style={{ zIndex: 1 }}
                />
                <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImageUpload}
                />
                {/* <p>&gt;</p> */}
                {/* <div className="main-prpg-pr-nav mr-4">
                    <table className="main-prpg-table">
                       <tr>
                            <th>Sr.no.</th>
                            <th>Sr.no.</th>
                            <th>Sr.no.</th>
                        </tr>  

                        <tr>
                            <td>Sr.no.</td>
                            <td>Sr.no.</td>
                            <td>Sr.no.</td>
                        </tr> 

                        <tr>
                            <td>Sr.no.</td>
                            <td>Sr.no.</td>
                            <td>Sr.no.</td>
                        </tr>   
                    </table>
                </div> */}
            </div>


            <div className="grid md:grid-cols-2 gap-5 border-2 border-blue-300 rounded-lg p-5 shadow-inner main-prpg-info">
                {/* Name Section*/}
                <div>
                    <h3 className="text-xl font-semibold">Name</h3>
                    <p className="text-gray-600">{user.firstName} {user.lastName}</p>
                </div>

                {/* Designation */}
                <div>
                    <h3 className="text-xl font-semibold">Designation</h3>
                    <p className="text-gray-600">{user.designation}</p>
                </div>

                {/* Contact No. */}
                <div>
                    <h3 className="text-xl font-semibold">Contact No.</h3>
                    <p className="text-gray-600">{user.phoneNumber}</p>
                </div>

                {/* Birthdate */}
                <div>
                    <h3 className="text-xl font-semibold">Birthdate</h3>
                    <p className="text-gray-600">{user.birthDate}</p>
                </div>

                {/* <div className="main-prpg-info-hr"></div> */}
                {/* Email */}
                <div>
                    <h3 className="text-xl font-semibold">Email</h3>
                    <p className="text-gray-600">{user.email}</p>
                </div>

                {/* Address */}
                <div>
                    <h3 className="text-xl font-semibold">Address</h3>
                    <p className="text-gray-600">
                        {user.address}, {user.address2}, {user.city}, {user.state}, {user.zip}
                    </p>
                </div>

                {/* Work Experience */}
                <div>
                    <h3 className="text-xl font-semibold">Work Experience</h3>
                    <p className="text-gray-600">
                        Field: {user.field}
                    </p>
                    <p className="text-gray-600">
                        Language: {user.language}
                    </p>
                    <p className="text-gray-600">
                        Year of Passing: {user.year}
                    </p>
                </div>

                {/* Resume */}
                <div>
                    <h3 className="text-xl font-semibold">Resume</h3>
                    <p className="text-gray-600">Uploaded Resume: {user.resume ? 'Yes' : 'No'}</p>
                </div>
            </div>

            <div className="flex justify-center mt-8">
                <button className="bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-bold w-[200px]">Edit Profile</button>
            </div>
        </div>
    );
};

export default ProfilePage;
