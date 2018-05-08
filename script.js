
class ChordSetter {
    constructor() {
        this.chords = [
            ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "Bb", "H"],
            ["C7", "C#7", "D7", "D#7", "E7", "F7", "F#7", "G7", "G#7", "A7", "Bb7", "H7"],
            ["Cm", "C#m", "Dm", "D#m", "Em", "Fm", "F#m", "Gm", "G#m", "Am", "Bbm", "Hm"],
            ["Cm7", "C#m7", "Dm7", "D#m7", "Em7", "Fm7", "F#m7", "Gm7", "G#m7", "Am7", "Bbm7", "Hm7"]
        ];
    }

    render() {}
}

class Row {
    constructor(text = '', chords = '') {
        this.text   = text;
        this.chords = chords;
    }
}

class Song {
    constructor() {
        this.rows = [];
    }

    render() {}

    addRow() {
        this.rows.push(new Row());
    }

    toText() {}
}

class App {
    constructor() {
        this.initHandlers();
    }

    initHandlers() {
        const $b = $(document.body);
        $b.on('click', '.js-open-text-file', e => this.openText(e));
    }

    createSong() {}

    openSong() {}

    openText() {}

    saveAsText() {}

    saveAsSong() {}
}

const app = new App();

