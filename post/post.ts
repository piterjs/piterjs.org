namespace $ {

	export let $piterjs_post_template = {
		init: `
			✨ Ура! Скоро **PiterJS {title}**
			
			{descr}
			
			⏰ Когда: **{date} {time}**
			📍 Где: {place} (**{address}**)
			
			📰 Программа
			
			{speeches}
			
			🎫 Регистрация: {meetup}
		`,
		init_speech: `
			🗣️ {start} {speaker}
			🎤 **{title}**
		`,
		speech: `
			✨ На грядущем PiterJS для вас выступит {speaker} с докладом:
			📜 **{title}**

			{descr}

			🎫 Регистрируйся, пока есть места: {meetup}
			✔️ А если передумал идти — отмени регистрацию там же.
		`,
		place: `
			🎉 PiterJS {title} уже завтра в {place}: **{address}**
			
			🤗 Ждем тебя к {time}.
			🙏 Если не придёшь — отмени регистрацию: {meetup}
			📽️ Но всё равно смотри трансляцию: {video}
		`,
		air: `
			🎬 PiterJS {title} начинается!
			📽️ Занимайте места и смотрите трансляцию: **{video}**
		`,
		afterparty: `
			✨ Вот и подошёл к концу очередной PiterJS..
			📢 Оставляйте свои отзывы — они нам очень интересны: {meetup}
			🎊 А кому не хватило, идём вместе на афтепати: **{afterparty}**
		`,
		retro: `
			👐 Спасибо всем, что были с нами!
			📸 Ищите себя на фоточках.
			🙌 Особенно докладчикам — без вас ничего бы не состоялось!
			🫶 Отдельное спасибо тем, кто оставил отзыв — вы помогаете нам становиться лучше: {meetup}
			🤝 И конечно же, огромное спасибо от всего сообщества площадке {place} за гостеприимство и партнёрам за подарки.
			👋 Не скучайте, мы скоро снова всех вас соберём вместе!
		`,
	}

	for( const name of Object.keys( $piterjs_post_template ) as ( keyof typeof $piterjs_post_template )[] ) {
		$piterjs_post_template[ name ] = $piterjs_post_template[ name ].replace( /\t/g, '' ).trim()
	}

}
