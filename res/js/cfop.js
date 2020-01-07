var cfopAlgs = {
  'oll1-a' : {
    'name':'OLL1',
    'algs':[
      'RURURURURU1',
      'RURURURURU2',
      'RURURURURU3',
    ],
  },
  'oll1-c' : {
    'name':'OLL1',
    'algs':[
      'RURURURURU1',
      'RURURURURU2',
      'RURURURURU3',
    ],
  },
  'oll1-b' : {
    'name':'OLL1',
    'algs':[
      'RURURURURU1',
      'RURURURURU2',
      'RURURURURU3',
    ],
  },
  'oll1-d' : {
    'name':'OLL1',
    'algs':[
      'RURURURURU1',
      'RURURURURU2',
      'RURURURURU3',
    ],
  },
  'oll2-a' : {
    'name':'OLL2',
    'algs':[
      'RURURURURU1',
      'RURURURURU2',
      'RURURURURU3',
    ],
  },
};

/**
 * cfopAlg
 */
function cfopAlg() {

	var algs = cfopAlgs;

	this.initAlgs = function() {
    $('.cfop-algs').each(function(i) {
      var key = $(this).data('id');
      var alg = algs[key];
      $(this).children('.name').text(alg.name);
      $(this).children('.pic').html('<img src="/res/images/cfop/' + key + '.jpg">');
      $(this).children('.algs').html(alg.algs.join('<br>'));
    });
	};

};
var cfop = new cfopAlg();

$(document).ready(function() {
	cfop.initAlgs();
});
