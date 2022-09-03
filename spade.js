function renderDeck(deck)
{
	document.getElementById('deck').innerHTML = '';

	for(var i = 0; i < deck.length; i++)
	{
		var card = document.createElement("div");
		var icon = '';
		if (deck[i].Suit == 'hearts')
		icon='&hearts';
		else if (deck[i].Suit == 'spades')
		icon = '&spades';
		else if (deck[i].Suit == 'diamonds')
		icon = '&diams';
		else
		icon = '&clubs';

		card.innerHTML = deck[i].Value + '' + icon;
		card.className = 'card';
	document.getElementById("deck").appendChild(card);
	}
}