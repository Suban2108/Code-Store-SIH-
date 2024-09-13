import React, { useState } from "react";


//   important!!!
//   pass this object as a prop on the caller screen
  const user = {
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


const ProfilePage = ({ user }) => {
    const [profileImage, setProfileImage] = useState(null);

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
      

            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
                <div className="flex items-center justify-center mb-8">
                    <i className="ri-book-line ri-4x text-blue-500"></i>
                    <h1 className="text-3xl font-bold text-center text-gray-800 mx-4">Profile</h1>
                    <i className="ri-book-line ri-4x text-blue-500"></i>
                </div>
                <div className="flex justify-center items-center relative rounded-full mb-4">
                    <img
                        src={profileImage || "/src/assets/clipart-coding.png"}
                        alt="YourProfilePic"
                        className="cursor-pointer rounded-full h-44 w-44 bg-center border-4 border-blue-500"
                        onClick={() => document.getElementById('fileInput').click()}
                        style={{ zIndex: 1 }}
                    />
                    <input
                        type="file"
                        id="fileInput"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleImageUpload}
                    />


                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-2 border-blue-300 rounded-lg p-2 shadow-inner">
                    {/* Name Section */}
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
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 font-bold">Edit Profile</button>
                </div>
            </div>
      
    );
};

export default ProfilePage;
