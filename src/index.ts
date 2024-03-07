import { google } from 'googleapis';
import 'dotenv/config'

const youtube = google.youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_API_KEY,
});

async function fetchNewVideos(channelId: string, publishedAfter: string) {
    try {
        const response = youtube.search.list({
            part: ['snippet'],
            channelId: channelId,
            publishedAfter: publishedAfter,
            maxResults: 10
        });

        return (await response).data.items;
    } catch (error) {
        console.error('YouTube API Error:', error);
        throw error;
    }
}

fetchNewVideos('UCVX4zdPnO82GjrpkzreKPYw', '2024-03-01T00:00:00Z').then((videos) => {
    console.log(videos);
}).catch((error) => {
    console.error('Error fetching videos:', error);
});
