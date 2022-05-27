import React, { useState } from "react";

export const ChatList = () => {
  const [chats, setChats] = useState(["Usuario", "Amigo", "UVG"]);

  return (
    <div>
      <section
        style={{ backgroundColor: "#000", height: "600px", width: "290px", color:'#fff' }}
      >
        <br />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5 className="font-weight-bold mb-3 text-center text-lg-start">
                Usuario
              </h5>

              <div className="">
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    {chats.map((chat) => (
                      <li
                        className="p-2 border-bottom"
                        style={{ backgroundColor: "#000" }}
                      >
                        <span  className="d-flex justify-content-between">
                          <div className="d-flex flex-row">
                            <div className="pt-1">
                              <p className="fw-bold mb-0">{chat}</p>
                            </div>
                          </div>
                          <div className="pt-1">
                            <p className="small text-muted mb-1">Fecha</p>
                          </div>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
