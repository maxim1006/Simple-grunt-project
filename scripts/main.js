var FilmCracker = window.FilmCracker || {};

FilmCracker.Main = (function() {

    var self,
        $body,
        $popup,
        $popupTrailer,
        $popupCross,
        $popupBack,
        $filmPromo,
        $filmPromoPlay,
        $filmCardPlay,
        $filmCardLock;

    var Main = {
        init: function() {
            self = this;
            self.initVars();

            $filmPromoPlay.on('click', self.showTrailer);
            $filmCardPlay.on('click', self.showTrailer.bind(self));
            $filmCardLock.find('.film-card__preview').on('click', self.requestRights.bind(self));

            $('#hidePopup').on('click', self.hidePopup.bind(self));
            $popupCross.on('click', self.hidePopup.bind(self));
            $('#submitRequest').on('click', self.submitRequest.bind(self));
        },

        initVars: function() {
            $body = $('body');
            $popupBack = $('.popup-back');
            $popup = $('.jsPopupWarning');
            $popupCross = $('.jsPopupCross');
            $popupTrailer = $('.jsPopupTrailer');

            $filmCardPlay = $('.film-card_play');
            $filmCardLock = $('.film-card_lock');

            $filmPromo = $('.film-promo');
            $filmPromoPlay = $filmPromo.find('.film-promo__play');
        },

        showTrailer: function(e) {
            var src = $(e.target).closest('.film-card_play').data('url');
            $('#movie').append('<video width="640" height="360" preload controls><source src="' + src + '" /></video>');
            this.showPopup($popupTrailer);
        },

        requestRights: function() {
            var $filmCard = $(this).closest('.film-card'),
                filmTitle = $filmCard.data('title'),
                filmYear = $filmCard.data('year');

            $('#filmTitle').html(filmTitle);
            $('#filmYear').html(filmYear);

            this.showPopup($popup);
        },

        submitRequest: function() {
            this.hidePopup($popup);

            $filmCardLock.toggleClass('film-card_lock film-card_play');
            $filmCardLock.find('.icon').toggleClass('icon_lock icon_play');
        },

        showPopup: function($obj) {
            //$body.css('overflow', 'hidden');
            $obj.addClass('popup_visible');
            $popupBack.fadeIn('fast');
        },

        hidePopup: function() {
            //$body.css('overflow', 'auto');
            $popup.removeClass('popup_visible');
            $popupTrailer.removeClass('popup_visible');
            $popupBack.fadeOut('fast');
            $('#movie').children().remove();
        }
    };

    return Main;

})();