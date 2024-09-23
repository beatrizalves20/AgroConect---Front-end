export const api = async (url, method, body) => {
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();

        return {
            message: data.message,
            type: data.type,
        }
    } 
    catch (error) {
        return { message: "Erro ao conectar com o servidor.", type: 'error' };
    }

}