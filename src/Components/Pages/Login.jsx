import { Link } from 'react-router-dom';
import './CSS/Login.css';

const Login = () => {
    return (
        <div className="login-container login-neu">
            <div className="login-header">
                <i className="ri-book-line ri-4x"></i>
                <h1>Login</h1>
                <i className="ri-book-line ri-4x"></i>
            </div>
            <form>
                <article className='signup-dropdown'>
                    <h3>Select Your Designation</h3>
                    <select name="designation" id="cars">
                        <option value="">Select here</option>
                        <option value="Admin">Admin</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Student">Student</option>
                    </select>
                </article>
                <article>
                    <section>
                        <h3>Username</h3>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Enter your username"
                            required
                        />
                    </section>
                </article>
                <article>
                    <section>
                        <h3>Email</h3>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@gmail.com"
                            required
                        />
                    </section>
                </article>
                <article>
                    <section>
                        <h3>Password</h3>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            required
                        />
                    </section>
                </article>
                <article>
                    <div className="login-butto">
                        <button type="submit">Login</button>
                    </div>
                </article>
                <div className="login-already">
                    <h6>Don't have an account?</h6>
                    <Link to='/Signup'><h6> Sign up here </h6></Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
