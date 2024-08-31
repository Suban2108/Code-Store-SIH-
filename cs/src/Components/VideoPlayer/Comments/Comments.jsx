import React, { useState } from 'react';

function Comments() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    let profile_pic = "/src/assets/profile_pic.svg"
    const user = {
        avatar: profile_pic, // Placeholder avatar
        userName: 'Ashmit', // Example username
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
        <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h2 className="font-bold text-lg mb-4">Comments</h2>

            {/* Comments List */}
            <ul className="mb-4 space-y-4">
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <li key={index} className="flex items-start bg-white p-4 rounded shadow">
                            <img
                                src={comment.avatar}
                                alt="Avatar"
                                className="w-10 h-10 rounded-full mr-4 border"
                            />
                            <div>
                                <div className="font-bold text-blue-500">{comment.userName}</div>
                                <p className="text-gray-700">{comment.comment}</p>
                                <div className="text-gray-500 text-sm">{comment.postedOn}</div> 
                            </div>
                        </li>
                    ))
                ) : (
                    <li className="text-gray-500">No comments yet.</li>
                )}
            </ul>

            {/* Comment Input */}
            <form onSubmit={handleAddComment} className="flex items-center">
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
                    Post
                </button>
            </form>
        </div>
    );
}

export default Comments;
