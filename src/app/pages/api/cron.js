import fetch from 'node-fetch'; 

export default async function handler(req, res) {
    try {
        const response = await fetch('https://game-rho-ten.vercel.app/api/game/games', {
            method: 'POST'
        });

        if (!response.ok) {
            throw new Error('Failed to increment GameNo');
        }

        const data = await response.json();
        console.log('GameNo incremented successfully:', data);
        res.status(200).end('GameNo incremented successfully');
    } catch (error) {
        console.error('Error incrementing GameNo:', error);
        res.status(500).end('Error incrementing GameNo');
    }
}
