import React from 'react';
import share from '../images/share_button.svg';
import shareMobile from '../images/share_button_mobile.svg'
import profile from '../images/profile__img.svg'
import Links from './modules/links';
import Socials from './socials';

const profiledata ={
  twitterUsername: "Mary Mutuku",
  slackUserName: "Mary Mutuku"
}

const data = [
    ['btn_twitter','https://twitter.com/MallyMutuku13','Twitter Link',''],
    ['btn_zuri','https://training.zuri.team/', 'Zuri Team',''],
    ['books','https://books.zuri.team', 'Zuri Books','this is where you find books about design and coding'],
    ['book__python','https://books.zuri.team/python-for-beginners?ref_id=%3Cyourslackname%3E', 'Python Books','where you feature the book as if you were selling it'],
    ['pitch','https://background.zuri.team/', 'Background Check for Coders',' where you pitch a service for doing background checks on coders'],
    ['book_design','https://books.zuri.team/design-rules', 'Design Books','where you pitch the free design book offered by Zuri'],
]


function Main(){
  return (
    <>
    <div className='profile'>
    <div className='share' data-text="Share Link" onClick={()=>{navigator.clipboard.writeText("https://hngi-stage1-mary.netlify.app/")}}>
      <img id='share__img' src={share} alt='share'  />
      <img id='sharemobile__img' src={shareMobile} alt='share'/>
      <div className='share-overlay' data-text="Link Copied"></div>
    </div>
    
      <div className='profile-img'>
          <img id='profile__img' src={profile} alt='profile'/>
          <div className='overlay'>
          </div>
      </div>
      <div id='twitter'>{profiledata.twitterUsername}</div>
      <div id='slack'>{profiledata.slackUserName}</div>
    </div>

    <Links initialData={data}></Links>
    
    <Socials/>

    </>
    
  )
}

export default Main;