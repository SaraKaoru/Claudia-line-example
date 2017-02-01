var botBuilder = require('claudia-bot-builder'),
    excuse = require('huh'),
	lineTemplate = require('claudia-bot-builder').lineTemplate;
module.exports = botBuilder(function (request) {
	var reply=new lineTemplate.Text('test line template');
	var carousel=new lineTemplate.CarouselTemplate('this is a carousel template');
	carousel.addColumn('https://example.com/bot/images/item1.jpg','this is menu','description');
	carousel.addPostbackActionToColumn(0,'Buy','action=buy&itemid=123','');
	carousel.addURIActionToColumn(0,'View detail','http://example.com/page/222');
  return ['Thanks for sending ' + request.text  + 
      '. Your message is very important to us, but ' + 
      excuse.get(),'test array',reply.get(),carousel.get()];
});