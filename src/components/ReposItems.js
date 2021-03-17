import React from 'react';
import '../App.css'

const ReposItem = (props) => {
    return (
        <div className="repos-item">
            <ul>
                <li><a href={props.repo.html_url}>{ props.repo.name}</a></li>
            </ul>
        </div>
    )
}

export default ReposItem;