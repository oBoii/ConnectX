class Display {
  constructor() {
    this._table = document.querySelector(".playField")
    this.update()
  }

  update() {
    for (let i = 0; i < 10; i++) {
      const row = this._table.insertRow(this._table.rows.length)
      for (let j = 0; j < 10; j++) {
        const col = row.insertCell(j)
        col.setAttribute('class', `${i};${j}`)
        col.setAttribute('onclick', `game.placeToken(${i}, ${j});`)
      }
    }
  }

  displayToken(token) {
    console.log(token.owner)
    const field = document.getElementsByClassName(`${token.row};${token.col}`)[0]
    field.setAttribute('class', `token ${token.owner == 'p1'?'white':'purple'}`)
  }
}
