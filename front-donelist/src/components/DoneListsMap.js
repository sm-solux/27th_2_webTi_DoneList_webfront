//DoneListsMap.js
import React, {Component} from 'react';
import DoneListsItem from '../components/DoneListsItem';

function DoneListsMap({otherDLsData}) {

    return (
        <div>
            <ul>
            {otherDLsData.map((oneofData) => (
        <li><DoneListsItem
        oneofData={oneofData}
        key={oneofData.id}
        /></li>
    ))}
            </ul>
        </div>
    );
}

export default DoneListsMap;