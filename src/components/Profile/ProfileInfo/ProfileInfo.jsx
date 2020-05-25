import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';
import Large from '../../../assets/images/Large.png'


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
      
    }
debugger
    return (
        <div >
            <div>
                <img src="data:image/jpeg;base64,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" alt="" />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large !=null? props.profile.photos.large : Large  }  />
                <div className={s.fullName}>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div className={s.contacts}>
                    <span>Contacts:</span>
                <div className={s.socialMedia}>
                        <div>{props.profile.contacts.facebook}</div>
                        <div> {props.profile.contacts.twitter}</div>
                        <div>{props.profile.contacts.instagram}</div>
                        <div> {props.profile.contacts.github}</div>


                    </div>
                </div>
            </div>
        </div>);
}
export default ProfileInfo;