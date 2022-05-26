

const api_url = "http://localhost:8000/api";

/**
 * Iniciar  
 * @param {string} iniciadoPor 
 */
export const initChat = async (iniciadoPor) => {
    const URL = `${api_url}/chats`;
    const body = { iniciadoPor }
    const otherPram = {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),

    }
    const res = await fetch(URL, otherPram);
    const data = await res.json();
    return data;
}

/**
 * Iniciar  
 * @param {string} iniciadoPor 
 */
export const changeState = async (id, state) => {
    const URL = `${api_url}/chats/state`;
    const body = { id, estado: state }
    const otherPram = {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),

    }
    const res = await fetch(URL, otherPram);
    const data = await res.json();
    return data;
}

export const sendingChat = async (uId, cId, uMessage) => {
    // console.log('sending')
    const URL = `${api_url}/chats/sendChat`;
    const body = {
        UserId: uId,
        chatId: cId,
        userMessage: uMessage
    }
    const otherPram = {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),

    }
    const res = await fetch(URL, otherPram);
    const data = await res.json();
    return data;
}