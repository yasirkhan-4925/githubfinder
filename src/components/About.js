import React, {Fragment} from 'react'
import '../App.css'


const About = () =>{
    return(
    <Fragment>
        <div className = 'container about'>

            <h1>About</h1>
            <h3>Version: 1.0.1</h3>
            <p>This app is integrated with github api which helps you to find github users and their repos</p>

        </div>
    </Fragment>
    )
}
export default About;