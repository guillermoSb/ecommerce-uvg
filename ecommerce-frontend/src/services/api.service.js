

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