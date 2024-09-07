import { Link } from 'react-router-dom'
import './CSS/Signup.css'

const LoginSignup = () => {
  return (
    <div className="signup-container signup-neu">
      <div className="signup-header">
        <i className="ri-book-line ri-4x"></i>
        <h1>Signup</h1>
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
          <div className="signup-name">
            <section>
              <h3>Name</h3>
              <input
                type="text"
                name="firstName"
                id="first-name"
                placeholder='First Name'
                required
              />
            </section>
            <section>
              <h3 style={{ visibility: 'hidden' }}>Name</h3>
              <input
                type="text"
                name="lastName"
                id="last-name"
                placeholder='Last Name'
                required
              />
            </section>
          </div>
        </article>
        <article>
          <section>
            <h3>Contact No.</h3>
            <input
              type="text"
              name="phoneNumber"
              id="phone-number"
              placeholder="+91 12345 67890"
              required
            />
          </section>
          <section>
            <h3>Birthdate</h3>
            <input
              type="date"
              name="birthDate"
              id="birth-date"
              placeholder="MM-DD-YYYY"
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
              placeholder='example@gmail.com'
              required
            />
          </section>
          <section>
            <h3>Set Password</h3>
            <input
              type="password"
              name="password"
              id="password"
              required
            />
          </section>
        </article>
        <article className='signup-addr'>
          <section>
            <h3>Address</h3>
            <input
              type="text"
              name="address"
              id="address"
              placeholder='Street Address'
              required
            />
            <input
              type="text"
              name="address2"
              id="address2"
              placeholder='Street Address Line 2'
              required
            />
            <div className="signup-address">
              <section>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder='City'
                  required
                />
              </section>
              <section>
                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder='State'
                  required
                />
              </section>
            </div>
            <input
              type="text"
              name="zip"
              id="zip"
              placeholder='Pincode'
              required
            />
          </section>
        </article>

        <article className='signup-addr'>
          <section>
            <h3>Work Experience</h3>
            <div className="signup-address">
              <section>
                <input
                  type="text"
                  name="field"
                  id="field"
                  placeholder='Field'
                  required
                />
              </section>
              <section>
                <input
                  type="text"
                  name="language"
                  id="language"
                  placeholder='Language'
                  required
                />
              </section>
            </div>
            <section>
              <div className="signup-file">
                <p>Upload Resume</p>
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  placeholder='Upload Resume'
                  required
                />
              </div>
            </section>
            <section>
              <input
                type="number"
                name="year"
                id="year"
                placeholder='Year of Passing'
                required
              />
            </section>
          </section>
        </article>
        <article>
          <div className="signup-butto">
            <button>Submit</button>
          </div>
        </article>
        <div className="signup-already">
          <h6>Already have an account: </h6>
          <Link to='/Login'><h6> Click here </h6></Link>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
