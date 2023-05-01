import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Animation from './images/animation.jpeg';
import DeliciousFood from './images/delicious_food.jpg';
import DigitalMarketing from './images/digital_marketing.jpg';

const Header = () => {
    return (
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/profile'>Profile</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
        </ul>
    )
}

const Home = () => {
    return (
        <div>
            <h2>Home Component</h2>
            <img src={Animation} alt="Animation" className="img"/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Maecenas tincidunt metus a venenatis ullamcorper. 
                Morbi bibendum nibh vel ex sollicitudin, ut ullamcorper leo suscipit. 
                Pellentesque eget molestie augue, sed aliquet ex. Praesent sed justo metus. 
                Etiam viverra eleifend neque quis posuere. 
                Integer non tortor lacinia dolor condimentum tempus. 
                Vestibulum vitae iaculis enim.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Maecenas tincidunt metus a venenatis ullamcorper. 
                Morbi bibendum nibh vel ex sollicitudin, ut ullamcorper leo suscipit. 
                Pellentesque eget molestie augue, sed aliquet ex. Praesent sed justo metus. 
                Etiam viverra eleifend neque quis posuere. 
                Integer non tortor lacinia dolor condimentum tempus. 
                Vestibulum vitae iaculis enim.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Maecenas tincidunt metus a venenatis ullamcorper. 
                Morbi bibendum nibh vel ex sollicitudin, ut ullamcorper leo suscipit. 
                Pellentesque eget molestie augue, sed aliquet ex. Praesent sed justo metus. 
                Etiam viverra eleifend neque quis posuere. 
                Integer non tortor lacinia dolor condimentum tempus. 
                Vestibulum vitae iaculis enim.
            </p>
        </div>
    )
}

const Profile = () => {
    return (
        <div>
            <h2>Profile Component</h2>
            <img src={DeliciousFood} alt="Delicious Food" class="img"/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Maecenas tincidunt metus a venenatis ullamcorper. 
                Morbi bibendum nibh vel ex sollicitudin, ut ullamcorper leo suscipit. 
                Pellentesque eget molestie augue, sed aliquet ex. Praesent sed justo metus. 
                Etiam viverra eleifend neque quis posuere. 
                Integer non tortor lacinia dolor condimentum tempus. 
                Vestibulum vitae iaculis enim.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Maecenas tincidunt metus a venenatis ullamcorper. 
                Morbi bibendum nibh vel ex sollicitudin, ut ullamcorper leo suscipit. 
                Pellentesque eget molestie augue, sed aliquet ex. Praesent sed justo metus. 
                Etiam viverra eleifend neque quis posuere. 
                Integer non tortor lacinia dolor condimentum tempus. 
                Vestibulum vitae iaculis enim.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Maecenas tincidunt metus a venenatis ullamcorper. 
                Morbi bibendum nibh vel ex sollicitudin, ut ullamcorper leo suscipit. 
                Pellentesque eget molestie augue, sed aliquet ex. Praesent sed justo metus. 
                Etiam viverra eleifend neque quis posuere. 
                Integer non tortor lacinia dolor condimentum tempus. 
                Vestibulum vitae iaculis enim.
            </p>
        </div>
    )
}

const About = () => {
    return (
        <div>
            <h2>About Component</h2>
            <img src={DigitalMarketing} alt="Digital Marketing" className="img" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Maecenas tincidunt metus a venenatis ullamcorper. 
                Morbi bibendum nibh vel ex sollicitudin, ut ullamcorper leo suscipit. 
                Pellentesque eget molestie augue, sed aliquet ex. Praesent sed justo metus. 
                Etiam viverra eleifend neque quis posuere. 
                Integer non tortor lacinia dolor condimentum tempus. 
                Vestibulum vitae iaculis enim.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Maecenas tincidunt metus a venenatis ullamcorper. 
                Morbi bibendum nibh vel ex sollicitudin, ut ullamcorper leo suscipit. 
                Pellentesque eget molestie augue, sed aliquet ex. Praesent sed justo metus. 
                Etiam viverra eleifend neque quis posuere. 
                Integer non tortor lacinia dolor condimentum tempus. 
                Vestibulum vitae iaculis enim.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Maecenas tincidunt metus a venenatis ullamcorper. 
                Morbi bibendum nibh vel ex sollicitudin, ut ullamcorper leo suscipit. 
                Pellentesque eget molestie augue, sed aliquet ex. Praesent sed justo metus. 
                Etiam viverra eleifend neque quis posuere. 
                Integer non tortor lacinia dolor condimentum tempus. 
                Vestibulum vitae iaculis enim.
            </p>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <h1>Welcome to React</h1>
            <BrowserRouter>
                <Header />
                <div className="container">
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/about' element={<About />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App