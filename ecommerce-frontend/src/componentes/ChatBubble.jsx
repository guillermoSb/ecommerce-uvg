import React, { Component, useState } from "react";
import "../styles/chat.css";
import Chat from "./svg/chat";
import Content from "./content/Content.js";
import { getAuth } from "firebase/auth";
import { initChat } from "../services/api.service";

const bubbleSta = {
  open: {
    bubble: "block",
  },
  closed: {
    bubble: "hidden",
  },
};

const Chatbubble = () => {
  const [bubbleState, setBubbleState] = useState("closed");

  const initbubble = () => {
    if (bubbleState === "closed") {
      setBubbleState("open");
    }
    if (bubbleState === "open") {
      setBubbleState("closed");
    }
  };

  /**
   * Function that initializes the chat
   */
  const startChat = async () => {
    const auth = getAuth();
    const chat = await initChat(auth.currentUser.uid); // Call the api to init a chat
    console.log(chat);
  };

  return (
    <div className="">
      <div className="absolute right-2 bottom-2 ">
        <div className="flex justify-end">
          <div
            className={
              bubbleSta[bubbleState].bubble +
              " bg-gradient-to-br from-primary2 to-primary1 w-[320px] h-[600px] rounded-md mx-auto p-8 tablet:w-[700px] tablet:h-[800px] laptop:w-[500px] laptop:h-[450px]  desktop:w-[650px]"
            }
          >
            <Content />
          </div>
          <div
            onClick={() => {
              initbubble();
              startChat();
            }}
            className="bg-gradient-to-br from-primary2 to-primary1 w-8 h-8 rounded-full content-center ml-1.5 items-center object-center mx-auto hover:from-primary3 hover:to-primary2 duration-100 active:bg-primary4"
          >
            <div className="w-8 h-8 p-1">
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbubble;
