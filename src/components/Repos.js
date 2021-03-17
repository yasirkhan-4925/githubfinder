import React from 'react'
import '../App.css'
import ReposItem from '../components/ReposItems'

class Repos extends React.Component{

    

    render() {
        return (
            <div className="repos">
                 
                {this.props.reposData.map((repo) => {
                    return (
                           <ReposItem repo = {repo} />
                       )
                 })}

            </div>
        )
    }

}

export default Repos;