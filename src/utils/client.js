import axios from 'axios';

const client = axios.create({
    baseURL: process.env.HALBOT_URL ?? 'https://hgkrixezqj.execute-api.ap-southeast-2.amazonaws.com/testing/',
    timeout: 5000
})

export const sendMessage = async (message, sessionId) => {
    try {
        const res = await client.post('/',{
            sessionId,
            message
        });

        const {fullResponse} = res.data;

        return fullResponse;
    } catch (e) {
        console.log(e);
    }
}



export default client;