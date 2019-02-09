class Display {
  constructor() {
    this._table = document.querySelector(".playField")
    this.update()
  }

  update() {
    for (let i = 0; i < 3; i++) {
      const row = this._table.insertRow(this._table.rows.length)
      for (let j = 0; j < 3; j++) {
        row.insertCell(j)
      }
    }
  }
}