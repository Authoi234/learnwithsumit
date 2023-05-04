import React from 'react';
import './InfoBox.css';
import { VideoCameraIcon, ArrowDownOnSquareIcon, ClipboardDocumentListIcon, CodeBracketIcon, UserGroupIcon, InboxArrowDownIcon } from '@heroicons/react/24/solid';

const InfoBox = ({courseInfo}) => {
    let icon;

    if (courseInfo.icon === 'video') {
        icon = <VideoCameraIcon style={{width: '44', color: 'blue'}}></VideoCameraIcon>
    }
    else if (courseInfo.icon === 'arrow-down-on-squ') {
        icon = <ArrowDownOnSquareIcon style={{width: '44', color: 'blue'}}></ArrowDownOnSquareIcon>
    }
    else if (courseInfo.icon === 'clipboard-document') {
        icon = <ClipboardDocumentListIcon style={{width: '44', color: 'blue'}}></ClipboardDocumentListIcon>;   
    }
    else if (courseInfo.icon === 'codeBracket') {
        icon = <CodeBracketIcon style={{width: '44', color: 'blue'}}></CodeBracketIcon>
    }
    else if (courseInfo.icon === 'userGroup') {
        icon = <UserGroupIcon style={{width: '44', color: 'blue'}}></UserGroupIcon>
    }
    else if (courseInfo.icon === 'inbox') {
        icon = <InboxArrowDownIcon style={{width: '44', color: 'blue'}}></InboxArrowDownIcon>
    }

    return (
        <div className='box'>
            <div>
            <div>{icon}</div>
            <h2>{courseInfo.name}</h2>
            <h4>{courseInfo.para}</h4>
            </div>
        </div>
    );
};

export default InfoBox;