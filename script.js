const textSong = `
    Белый снег, серый лёд
    На растрескавшейся земле.
    Одеялом лоскутным на ней
    Город в дорожной петле.
    А над городом плывут облака,
    Закрывая небесный свет.
    А над городом - жёлтый дым.
    Городу две тысячи лет,
    Прожитых под светом звезды
    По имени Солнце.`;


class ChordSetter {
    constructor() {
        this.chords = [
            ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "Bb", "H"],
            ["C7", "C#7", "D7", "D#7", "E7", "F7", "F#7", "G7", "G#7", "A7", "Bb7", "H7"],
            ["Cm", "C#m", "Dm", "D#m", "Em", "Fm", "F#m", "Gm", "G#m", "Am", "Bbm", "Hm"],
            ["Cm7", "C#m7", "Dm7", "D#m7", "Em7", "Fm7", "F#m7", "Gm7", "G#m7", "Am7", "Bbm7", "Hm7"]
        ];

        this.onchoise = () => {};
    }

    render() {
        const html = this.chords.map(row => `
            <div class="row"> 
                ${row.map(ch => `<button class="chord">${ch || ''}</button>`).join('')}
            </div>
        `).join('');
        $('#chord-setter').html(html);
    }
}

class Row {
    constructor(text = '', chords) {
        this.text   = text;
        this.chords = [];
        if(chords) {
            this.chords = chords;
        } else {
            for(let i = 0; i < this.text.length; i++) {
                this.chords.push('&emsp;');
            }
        }
    }
}

class Song {
    constructor() {
        this.rows = [];
    }

    render() {
        const html = this.rows.map((row, indexRow) => `
            <div class="chord-row"> 
                ${row.chords.map((ch, indexCh) => (
                    `<div class="chord js-set-chord" 
                          data-index-row="${indexRow}"
                          data-index-ch="${indexCh}"
                     >${ch || ''}</div>`)
                ).join('')}
            </div>
            <div class="text-row" contenteditable>${row.text}</div>
        `).join('');
        $('main').html(html)
    }

    addRow() {
        this.rows.push(new Row());
    }

    toText() {}
}

class App {
    constructor() {
        const textRows = textSong.split('\n');
        this.song = new Song();
        this.song.rows = textRows.map(item => new Row(item));
        this.song.render();

        this.initHandlers();
    }

    initHandlers() {
        const $b = $(document.body);
        $b.on('click', '.js-open-song-file', e => this.openSongFile(e));
        $b.on('click', '.js-open-text-file', e => this.openTextFile(e));
        $b.on('click', '.js-save-song-file', e => this.saveAsSongFile(e));
        $b.on('click', '.js-save-text-file', e => this.saveAsTextFile(e));
        $b.on('click', '.js-set-chord',      e => this.setChord(e));
    }

    createNewSong() {}

    openSongFile() {}

    openTextFile() {}

    saveAsTextFile() {}

    saveAsSongFile() {}

    setChord(e) {
        const indexRow = +e.target.dataset.indexRow;
        const indexCh = +e.target.dataset.indexCh;

        const cs = new ChordSetter();
        cs.render();
        cs.onchoise = ch => {

        };
    }
}

const app = new App();

