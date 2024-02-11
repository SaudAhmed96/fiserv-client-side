import './UserInfo.scss'
import pfp from '../../assets/images/johndavidpfp.png'
import { useState } from 'react';

const UserInfo = () => {
    const cuisineOptions = ["Sushi", "Pizza", "Burgers", "Pasta", "Bubble Tea", "Breakfast", "Korean", "Ramen", "Chinese", "Thai", "Malaysian", "Vietnamese"]; // Array of options

    const [selectedCuisineOptions, setSelectedCuisineOptions] = useState([]); // State to manage selected options

  // Function to handle selection change
    const handleOptionChange = (option) => {
        if (selectedCuisineOptions.includes(option)) {
        setSelectedCuisineOptions(selectedCuisineOptions.filter(item => item !== option));
        } else {
        setSelectedCuisineOptions([...selectedCuisineOptions, option]);
        }
        };

    return (
        <div className='user-info'>
            <div className='user-info__pfp-name'>
                <img className='user-info__pfp' src={pfp} alt="profile icon"/>
                <h1 className='user-info__name'>John Smith</h1>
            </div>
            
            <div className='user-info__details'>
                <h2 className='user-info__subheading'>Personal Info</h2>
                
                <div className='user-info__location-details'>
                    <div>
                        <h3 className='user-info__field'>Location</h3>
                        <p className='user-info__input'>Toronto, ON</p>
                    </div>

                    <div>
                        <h3 className='user-info__field'>Address</h3>
                        <p className='user-info__input'>1234 Front St.</p>
                    </div>

                    <button className='user-info__edit'>Edit</button>

                </div>

                <h3 className='user-info__field'>Email</h3>
                <p className='user-info__input'>johnsmith@gmail.com</p>
                
                <h3 className='user-info__field'>Phone Number</h3>
                <p className='user-info__input'>905-111-2222</p>

                <h2 className='user-info__subheading'>Dietary Info</h2>
                

                <h3 className='user-info__field'>Diet</h3>
                <select className='user-info__diet'>
                    <option value="no-preference">Any</option>
                    <option value="meat">Meat</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="low-carb">Low Carb</option>
                    <option value="ketogenic">Ketogenic</option>
                    <option value="paleo">Paleo</option>
                </select>
                
                <h3 className='user-info__field'>Cuisine Preferences</h3>
                <div className="user-info__radio-columns">
                    {cuisineOptions.map((option, index) => (
                        <div key={index} className="user-info__radio-column">
                            <input
                                type="checkbox"
                                id={option}
                                value={option}
                                checked={selectedCuisineOptions.includes(option)}
                                onChange={() => handleOptionChange(option)}
                            />
                            <label htmlFor={option} className="user-info__option-label">{option}</label>
                        </div>
                    ))}
                </div>

                <h2 className='user-info__subheading'>Payment Info</h2>
                <button className='user-info__button'>Manage Payment Methods</button>

                <h2 className='user-info__subheading'>Password</h2>
                <button className='user-info__button'>Change Password</button>

            </div>

            

            <div className='user-info__delete'>
                <button className='user-info__delete-button'>Delete Account</button>
            </div>



        </div>
    )
}

export default UserInfo;