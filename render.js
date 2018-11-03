self.onmessage = e => {
  let decks = e.data.decks,
      cardsName = e.data.cardsName,
      cardsInformation = e.data.cardsInformation,
      cardsCode = e.data.cardsCode,
      cardsElixir = e.data.cardsElixir,
      contentToCopy,
      html = '<button title="Apagar todos os Decks" onclick="deleteAll()">Apagar todos os Decks</button><h1>Quantidade de Decks salvos: </h1>';

  for (let i = 0; i < decks.length; i++) {
    contentToCopy = `https://link.clashroyale.com/deck/pt?deck=${cardsCode[decks[i][0]]};${cardsCode[decks[i][1]]};${cardsCode[decks[i][2]]};${cardsCode[decks[i][3]]};${cardsCode[decks[i][4]]};${cardsCode[decks[i][5]]};${cardsCode[decks[i][6]]};${cardsCode[decks[i][7]]}`;
    html += `
    <section class="cardsContainerS">
      <div><img src="./images/${cardsName[decks[i][0]]}_opt-min.png" alt=${cardsName[decks[i][0]]} title="${cardsInformation[decks[i][0]].split('<br />')[0].replace(/<ins>|<\/ins>/g, '')}"/></div>
      <div><img src="./images/${cardsName[decks[i][1]]}_opt-min.png" alt=${cardsName[decks[i][1]]} title="${cardsInformation[decks[i][1]].split('<br />')[0].replace(/<ins>|<\/ins>/g, '')}"/></div>
      <div><img src="./images/${cardsName[decks[i][2]]}_opt-min.png" alt=${cardsName[decks[i][2]]} title="${cardsInformation[decks[i][2]].split('<br />')[0].replace(/<ins>|<\/ins>/g, '')}"/></div>
      <div><img src="./images/${cardsName[decks[i][3]]}_opt-min.png" alt=${cardsName[decks[i][3]]} title="${cardsInformation[decks[i][3]].split('<br />')[0].replace(/<ins>|<\/ins>/g, '')}"/></div>
      <div><img src="./images/${cardsName[decks[i][4]]}_opt-min.png" alt=${cardsName[decks[i][4]]} title="${cardsInformation[decks[i][4]].split('<br />')[0].replace(/<ins>|<\/ins>/g, '')}"/></div>
      <div><img src="./images/${cardsName[decks[i][5]]}_opt-min.png" alt=${cardsName[decks[i][5]]} title="${cardsInformation[decks[i][5]].split('<br />')[0].replace(/<ins>|<\/ins>/g, '')}"/></div>
      <div><img src="./images/${cardsName[decks[i][6]]}_opt-min.png" alt=${cardsName[decks[i][6]]} title="${cardsInformation[decks[i][6]].split('<br />')[0].replace(/<ins>|<\/ins>/g, '')}"/></div>
      <div><img src="./images/${cardsName[decks[i][7]]}_opt-min.png" alt=${cardsName[decks[i][7]]} title="${cardsInformation[decks[i][7]].split('<br />')[0].replace(/<ins>|<\/ins>/g, '')}"/></div>
    </section>

    <h1>Elixir médio: ${((cardsElixir[decks[i][0]] + cardsElixir[decks[i][1]] + cardsElixir[decks[i][2]] + cardsElixir[decks[i][3]] + cardsElixir[decks[i][4]] + cardsElixir[decks[i][5]] + cardsElixir[decks[i][6]] + cardsElixir[decks[i][7]]) / 8).toFixed(1)}</h1>

    <section class="configContainerS">
      <button class="btnCopiarS" title="Copiar Deck" data-clipboard-text="${contentToCopy}">Copiar Deck</button>
      <button class="btnApagar" title="Apagar Deck"onclick="deleteDeck([${decks[i].join(',')}])">Apagar Deck</button>
      <button class="btnColarS" title="Colar Deck" onclick="pasteDeck('${contentToCopy}')">Colar Deck</button>
    </section>
    `;
  }

  self.postMessage(html);
}