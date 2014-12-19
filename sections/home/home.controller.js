(function() {
    'use strict';

    angular
        .module('app')
        .controller('SectionHomeCtrl', SectionHomeCtrl);

    function SectionHomeCtrl(){
        var vm = this;
        vm.arrayMovies = [
            {name: 'The Godfather', cover: 'http://image.tmdb.org/t/p/original/xUU1melxrkb7IXl1F7PXrtZAWWl.jpg'},
            {name: 'The Shawshank Redemption', cover: 'http://ia.media-imdb.com/images/M/MV5BMTg0MDgwNjc5N15BMl5BanBnXkFtZTcwNjMxNDY3Mw@@._V1__SX1101_SY603_.jpg'},
            {name: 'The Dark Knight', cover: 'http://ia.media-imdb.com/images/M/MV5BMTkyMjQ4ODk1NF5BMl5BanBnXkFtZTcwMjcxMTk2Mw@@._V1__SX1063_SY603_.jpg'},
            {name: 'The Godfather', cover: 'http://image.tmdb.org/t/p/original/xUU1melxrkb7IXl1F7PXrtZAWWl.jpg'},
            {name: 'The Shawshank Redemption', cover: 'http://ia.media-imdb.com/images/M/MV5BMTg0MDgwNjc5N15BMl5BanBnXkFtZTcwNjMxNDY3Mw@@._V1__SX1101_SY603_.jpg'},
            {name: 'The Dark Knight', cover: 'http://ia.media-imdb.com/images/M/MV5BMTkyMjQ4ODk1NF5BMl5BanBnXkFtZTcwMjcxMTk2Mw@@._V1__SX1063_SY603_.jpg'},
            {name: 'The Godfather', cover: 'http://image.tmdb.org/t/p/original/xUU1melxrkb7IXl1F7PXrtZAWWl.jpg'},
            {name: 'The Shawshank Redemption', cover: 'http://ia.media-imdb.com/images/M/MV5BMTg0MDgwNjc5N15BMl5BanBnXkFtZTcwNjMxNDY3Mw@@._V1__SX1101_SY603_.jpg'},
            {name: 'The Dark Knight', cover: 'http://ia.media-imdb.com/images/M/MV5BMTkyMjQ4ODk1NF5BMl5BanBnXkFtZTcwMjcxMTk2Mw@@._V1__SX1063_SY603_.jpg'},
            {name: 'The Godfather', cover: 'http://image.tmdb.org/t/p/original/xUU1melxrkb7IXl1F7PXrtZAWWl.jpg'},
            {name: 'The Shawshank Redemption', cover: 'http://ia.media-imdb.com/images/M/MV5BMTg0MDgwNjc5N15BMl5BanBnXkFtZTcwNjMxNDY3Mw@@._V1__SX1101_SY603_.jpg'},
            {name: 'The Dark Knight', cover: 'http://ia.media-imdb.com/images/M/MV5BMTkyMjQ4ODk1NF5BMl5BanBnXkFtZTcwMjcxMTk2Mw@@._V1__SX1063_SY603_.jpg'}
        ];
    }
})();