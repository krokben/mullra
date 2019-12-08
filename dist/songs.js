"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSongs(store) {
    return store.songs;
}
exports.getSongs = getSongs;
function getSong(store, id) {
    return new Promise((resolve, reject) => {
        const song = store.songs.find(song => song.id === id);
        if (song) {
            resolve(song);
            return;
        }
        reject(error => error);
    });
}
exports.getSong = getSong;
function addSong(store, song) {
    store.songs.push(song);
}
exports.addSong = addSong;
function removeSong(store, id) {
    return new Promise((resolve, reject) => {
        const songIndex = store.songs.findIndex(song => song.id === id);
        if (songIndex !== undefined) {
            resolve(store.songs.splice(songIndex, 1));
            return;
        }
        reject(error => error);
    });
}
exports.removeSong = removeSong;
//# sourceMappingURL=songs.js.map