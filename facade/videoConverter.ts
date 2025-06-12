class videoFile {
    private name : string;
    private format : string;
    private size : number;
    constructor(name: string, format: string, size: number) {
        this.name = name;
        this.format = format;
        this.size = size;
    }
    public getName(): string {
        return this.name;
    }
    public getFormat(): string {
        return this.format;
    }
    public getSize(): number {
        return this.size;
    }
    public setName(name: string): void {
        this.name = name;
    }
    public setFormat(format: string): void {
        this.format = format;
    }
    public setSize(size: number): void {
        this.size = size;
    }
}
class oggCompressionCodec {
    public compress(video: videoFile): videoFile {
        console.log(`Compressing ${video.getName()} to OGG format...`);
        video.setFormat('ogg');
        video.setSize(video.getSize() * 0.5); // Example compression
        return video;
    }
}
class mp4CompressionCodec {
    public compress(video: videoFile): videoFile {
        console.log(`Compressing ${video.getName()} to MP4 format...`);
        video.setFormat('mp4');
        video.setSize(video.getSize() * 0.7); // Example compression
        return video;
    }
}
class codecFactory {
    public static getCodec(format: string): oggCompressionCodec | mp4CompressionCodec {
        if (format === 'ogg') {
            return new oggCompressionCodec();
        } else if (format === 'mp4') {
            return new mp4CompressionCodec();
        } else {
            throw new Error('Unsupported codec format');
        }
    }
}
class videoConverter {
    public convert(video: videoFile, targetFormat: string): videoFile {
        const codec = codecFactory.getCodec(targetFormat);
        return codec.compress(video);
    }
}
// Example usage
const video = new videoFile('example_video', 'avi', 1000); // 1000 MB
const converter = new videoConverter();
const convertedVideo = converter.convert(video, 'ogg');
console.log(`Converted video: ${convertedVideo.getName()}, Format: ${convertedVideo.getFormat()}, Size: ${convertedVideo.getSize()} MB`);