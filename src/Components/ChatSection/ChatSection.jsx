import React, { useState } from 'react';
import profile_icon from '../Assets/profile_icon.png'

function ChatSection() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    let profile_pic = profile_icon;
    const user = {
        avatar: profile_pic, // Placeholder avatar
        userName: 'Suban', // Example username
    };

    const handleAddComment = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            const currentDateTime = new Date().toLocaleString(); // Get current date and time
            const commentObj = {
                avatar: user.avatar,
                userName: user.userName,
                comment: newComment,
                postedOn: currentDateTime,
            };
            setComments([...comments, commentObj]);
            setNewComment('');
        }
    };

    return (
        <div className="bg-gray-100 rounded-lg h-[100%] mt-0">
            <div className='bg-white shadow-lg rounded-lg border p-[20px]'>
            <h2 className="font-bold text-lg">Channel - Web Devlopment Community</h2>
            </div>

            {/* Comments List */}
            <ul className="mb-4 h-[60vh] overflow-y-auto">
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow m-5">
                            <img
                                src={comment.avatar}
                                alt="Avatar"
                                className="w-10 h-10 rounded-full mr-4 border"
                            />
                            <div className='w-[15%]'>
                                <div className="font-bold text-blue-500 flex justify-between">
                                    {comment.userName}
                                    <div className="text-gray-400 text-sm font-extralight">{comment.postedOn}</div> 
                                    </div>
                                <p className="text-gray-700">{comment.comment}</p>
                                
                            </div>
                        </li>
                    ))
                ) : (
                    <div className='flex w-[100%] h-[100%] items-center justify-center'>
                        <li className="text-gray-500">No comments yet.</li> 
                        </div>
                )}
            </ul>

            {/* Comment Input */}
            <form onSubmit={handleAddComment} className="flex items-center m-5">
                <input
                    type="text"
                    className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
                >
                    Send
                </button>
            </form>
        </div>
    );
}

export default ChatSection;
