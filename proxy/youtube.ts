interface thirdPartyYoutubeLib {
    listVideos: (params: { channelId: string, maxResults?: number }) => Promise<any>;
    getVideoInfo: (videoId: string) => Promise<any>;
    downloadVideo: (videoId: string) => Promise<Buffer>;
}

class thirdPartyYoutubeClass implements thirdPartyYoutubeLib {
    async listVideos(params: { channelId: string, maxResults?: number }): Promise<any> {
        // Simulate fetching video list from YouTube
        return Promise.resolve([
            { id: 'video1', title: 'Video 1' },
            { id: 'video2', title: 'Video 2' }
        ]);
    }

    async getVideoInfo(videoId: string): Promise<any> {
        // Simulate fetching video info from YouTube
        return Promise.resolve({ id: videoId, title: `Video ${videoId}` });
    }

    async downloadVideo(videoId: string): Promise<Buffer> {
        // Simulate downloading a video
        return Promise.resolve(Buffer.from(`Video content for ${videoId}`));
    }
}
class cachedYoutubeClass implements thirdPartyYoutubeLib {
    private youtubeService: thirdPartyYoutubeLib;
    private videoCache: Map<string, any> = new Map();
    private videoListCache: Map<string, any[]> = new Map();

    constructor(youtubeService: thirdPartyYoutubeLib) {
        this.youtubeService = youtubeService;
    }

    async listVideos(params: { channelId: string, maxResults?: number }): Promise<any[]> {
        const cacheKey = `${params.channelId}-${params.maxResults || ''}`;
        if (this.videoListCache.has(cacheKey)) {
            return this.videoListCache.get(cacheKey)!;
        }
        const videos = await this.youtubeService.listVideos(params);
        this.videoListCache.set(cacheKey, videos);
        return videos;
    }

    async getVideoInfo(videoId: string): Promise<any> {
        if (this.videoCache.has(videoId)) {
            return this.videoCache.get(videoId)!;
        }
        const videoInfo = await this.youtubeService.getVideoInfo(videoId);
        this.videoCache.set(videoId, videoInfo);
        return videoInfo;
    }

    async downloadVideo(videoId: string): Promise<Buffer> {
        return this.youtubeService.downloadVideo(videoId);
    }
}
class youtubeManager {
    protected youtubeService: thirdPartyYoutubeLib;
    constructor(youtubeService: thirdPartyYoutubeLib) {
        this.youtubeService = youtubeService;
    }
    async renderVideoList(channelID : string) : Promise<string> {
        const videos = await this.youtubeService.listVideos({ channelId: channelID, maxResults: 10 });
        return videos.map((video: { id: string; title: string; }) => `${video.id}: ${video.title}`).join('\n');
    }
    async renderListPanel(){
       let  list = await this.youtubeService.listVideos({ channelId: 'defaultChannel', maxResults: 10 });
        return list.map((video: { id: string; title: string; }) => `${video.id}: ${video.title}`).join('\n');
    }

     
}
class app {
    init() {
        const youtubeService = new thirdPartyYoutubeClass();
        const cachedYoutube = new cachedYoutubeClass(youtubeService);
        const manager = new youtubeManager(cachedYoutube);

        // Example usage
        manager.renderVideoList('channel1').then(console.log);
        manager.renderListPanel().then(console.log);
    }
}
const myApp = new app();
myApp.init();