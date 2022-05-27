import React from "react";
import { Chat } from "../componentes/Chat";
import { ChatList } from "../componentes/ChatList";
import LeftPanel from "../componentes/LeftPanel";
import Panel from "../componentes/Panel";

export default function PanelChat() {
  return (
    <div className="overAllContainer">
      <LeftPanel home="" self="" settings="" logout=""></LeftPanel>
      <Panel>
        <div>
          <div className="row">
            <div className="col-3">
              <ChatList />
            </div>
            <div className="col-sm">
              <Chat />
            </div>
          </div>
        </div>
      </Panel>
    </div>
  );
}