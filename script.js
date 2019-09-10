
$.ajax({
  url: "https://spreadsheets.google.com/feeds/list/14xRv7YsNcMwu9vMG89Fu8F2KY2DoVKNWnWr0G-bMsJ8/od6/public/values?alt=json",
  data: {
    zipcode: 97201
  },
  success: function( result ) {
    var rows = result['feed']['entry'];
    var $div = $('.main-overview').addClass('');

    rows.forEach(function(row) {
    var trend = row['gsx$trendtitle']['$t']; // row.value
    var imgurl = row['gsx$imageurl']['$t'];
    var hexcode = row['gsx$bgcolor']['$t'];
      var $card = $('<div class="imagecard" style="background-color:' + hexcode + ';">' + '<img src ="' + imgurl + '"class="gallery__img">'
                  + '<div class="titlecard">' + trend + '</div></div></div>')
      $div.append($card) 
      console.log($card);
  });
  }
});