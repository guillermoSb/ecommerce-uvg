import React from "react";
import LeftPanel from '../componentes/LeftPanel'
import Panel from "../componentes/Panel"


export default function PanelChat() {
    return (
      <>
        <div className="container">
        <LeftPanel home="" self="" settings="" logout=""></LeftPanel>
        <Panel></Panel>
      </div>
      </>
    );
  }