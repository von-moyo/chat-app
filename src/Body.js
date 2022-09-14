import React from "react"
import avatar from "./images/avatar.jpg"
import dogOne from "./images/dog-image-1.jpg"
import dogTwo from "./images/dog-image-2.jpg"
import dogThree from "./images/dog-image-3.jpg"

export default function Body() {

  const greater = ">"
  const lesser = "<"

  return (
    <div className="bod">
      <div className="patch"></div>
      <div className="phone">
        <div className="top-head">
          <p className="lds"> {lesser} </p>
          <img alt="image" className="pfp" src={avatar} />
          <div className="contact-desc">
            <div className="contact-name">Samuel Green</div>
            <div className="contact-about">Available to walk</div>
          </div>
          <div className="triple-dots">
            <p className="dot"> . </p>
            <p className="dot"> . </p>
            <p className="dot"> . </p>
          </div>
        </div>

        <div className="drop-white"></div>

        <div className="chat">
          <div className="msg-receive">
            That sounds great. I'd be <br /> happy with that.
          </div>
          <div className="msg-receive">Could you send over some pictures of your dog, please?</div>
          <div className="images-sent">
            <img alt="image" className="dog" src={dogOne} />
            <img alt="image" className="dog" src={dogTwo} />
            <img alt="image" className="dog" src={dogThree} />
          </div>
          <div className="sent">
            <div className="msg-sent">Here are a few pictures. She's a happy girl.</div>
            <div className="msg-sent" id="sent2">Can you make it?</div>
          </div>
          <div className="msg-receive">She looks so happy! The time we discussed works. How long shall I take her out for?</div>
          <div className="tag-receive">
            <section className="circle"></section>
            <p className="time">30 minutes walk</p>
            <section className="price">$29</section>
          </div>
          <div className="tag-receive">
            <section className="circle"></section>
            <p className="time">1 hour walk</p>
            <section className="price">$49</section>
          </div>
          <div className="convo">
            <input type="text" className="conversation-entry" placeholder="Type a message..." />
            <div className="send"> {greater} </div>
          </div>
        </div>
      </div>
      <div className="desc">
        <div className="head">
          Simple booking
        </div>
        <div className="para">
          Stay in touch with our dog walkers through the chat interface.
          This makes it easy to discuss arrangements and make bookings.
          Once the walk has been completed you can rate your walker and
          book again all through the chat.
        </div>
      </div>

      <div className="patch2"></div>
    </div>
  )
}