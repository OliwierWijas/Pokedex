class Pokemon {
    constructor (data) {
        this.data = data
        this.id = data.id
        this.name = data.name
        this.types = {
            type0: data.types[0].type.name,
            type1: data.types[1] ? data.types[1].type.name : null
        }
        this.hp = data.stats[0].base_stat / 255 * 100
        this.attack = data.stats[1].base_stat / 255 * 100
        this.defence = data.stats[2].base_stat / 255 * 100
        this.specialAttack = data.stats[3].base_stat / 255 * 100
        this.specialDefence = data.stats[4].base_stat / 255 * 100
        this.speed = data.stats[5].base_stat / 255 * 100
        this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`
        this.smallImg = data.sprites.front_default
    }
}

export default Pokemon