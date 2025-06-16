// Interfaz simulada para el ejemplo
class UserInterface {
    lockButton = { onClick: (handler: () => void) => {} };
    playButton = { onClick: (handler: () => void) => {} };
    nextButton = { onClick: (handler: () => void) => {} };
    previousButton = { onClick: (handler: () => void) => {} };
}

// Estado base abstracto
abstract class State {
    protected audioPlayer: AudioPlayer;

    constructor(audioPlayer: AudioPlayer) {
        this.audioPlayer = audioPlayer;
    }

    abstract clickLock(): void;
    abstract clickPlay(): void;
    abstract clickNext(): void;
    abstract clickPrevious(): void;
    abstract fastForward(): void;
    abstract rewind(time: number): void;
}

// Estados concretos
class LockedState extends State {
    clickLock(): void {
        if (this.audioPlayer.isPlaying()) {
            this.audioPlayer.changeState(new AudioReadyState(this.audioPlayer));
        } else {
            console.log("Audio player is already locked.");
        }
    }
    clickPlay(): void {
        console.log("Audio player is locked. Cannot play.");
    }
    clickNext(): void {
        console.log("Audio player is locked. Cannot skip to next track.");
    }
    clickPrevious(): void {
        console.log("Audio player is locked. Cannot skip to previous track.");
    }
    fastForward(): void {
        console.log("Audio player is locked. Cannot fast forward.");
    }
    rewind(time: number): void {
        console.log("Audio player is locked. Cannot rewind.");
    }
}

class PlayingState extends State {
    clickLock(): void {
        this.audioPlayer.changeState(new LockedState(this.audioPlayer));
    }
    clickPlay(): void {
        console.log("Audio player is already playing.");
    }
    clickNext(): void {
        console.log("Skipping to next track.");
        // Lógica para avanzar al siguiente
    }
    clickPrevious(): void {
        console.log("Skipping to previous track.");
        // Lógica para retroceder
    }
    fastForward(): void {
        console.log("Fast forwarding the current track.");
        // Lógica para adelantar
    }
    rewind(time: number): void {
        console.log(`Rewinding the current track by ${time} seconds.`);
        // Lógica para retroceder
    }
}

class AudioReadyState extends State {
    clickLock(): void {
        this.audioPlayer.changeState(new LockedState(this.audioPlayer));
    }
    clickPlay(): void {
        console.log("Starting playback...");
        this.audioPlayer.setPlaying(true);
        this.audioPlayer.changeState(new PlayingState(this.audioPlayer));
    }
    clickNext(): void {
        console.log("Skipping to next track.");
        // Lógica para avanzar
    }
    clickPrevious(): void {
        console.log("Skipping to previous track.");
        // Lógica para retroceder
    }
    fastForward(): void {
        console.log("Fast forwarding the current track.");
        // Lógica para adelantar
    }
    rewind(time: number): void {
        console.log(`Rewinding the current track by ${time} seconds.`);
        // Lógica para retroceder
    }
}

// Clase principal
class AudioPlayer {
    private state: State;
    private ui: UserInterface;

    private currentTrack: string = "";
    private playList: string[] = [];
    private playing: boolean = false;

    constructor() {
        this.state = new AudioReadyState(this);
        this.ui = new UserInterface();

        this.ui.lockButton.onClick(this.clickLock);
        this.ui.playButton.onClick(this.clickPlay);
        this.ui.nextButton.onClick(this.clickNext);
        this.ui.previousButton.onClick(this.clickPrevious);
    }

    changeState(state: State) {
        this.state = state;
    }

    clickLock = () => {
        this.state.clickLock();
    }

    clickPlay = () => {
        this.state.clickPlay();
    }

    clickNext = () => {
        this.state.clickNext();
    }

    clickPrevious = () => {
        this.state.clickPrevious();
    }

    fastForward = () => {
        this.state.fastForward();
    }

    rewind = (time: number) => {
        this.state.rewind(time);
    }

    getCurrentTrack(): string {
        return this.currentTrack;
    }

    setCurrentTrack(track: string) {
        this.currentTrack = track;
    }

    getPlayList(): string[] {
        return this.playList;
    }

    setPlayList(playList: string[]) {
        this.playList = playList;
    }

    isPlaying(): boolean {
        return this.playing;
    }

    setPlaying(value: boolean) {
        this.playing = value;
    }
}
//example usage
const audioPlayer = new AudioPlayer();
audioPlayer.clickPlay(); // Starts playback
audioPlayer.clickLock(); // Locks the player
audioPlayer.clickPlay(); // Cannot play, player is locked
audioPlayer.clickLock(); // Unlocks the player
audioPlayer.clickPlay(); // Starts playback again
audioPlayer.fastForward(); // Fast forwards the current track
audioPlayer.rewind(10); // Rewinds the current track by 10 seconds
audioPlayer.clickNext(); // Skips to the next track
audioPlayer.clickPrevious(); // Skips to the previous track
audioPlayer.clickLock(); // Locks the player again