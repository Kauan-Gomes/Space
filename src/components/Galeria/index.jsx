import React, { useState } from 'react'
import Tags from '../Tags'
import styles from './Galeria.module.scss'
import fotos from './fotos.json'

import Cards from './Cards'

export default function Galeria() {

  //criando o useState das fotos
  const [itens, setItens] = useState(fotos);
  //colocando as tags dentro de um Array, usando a função SET para não se repetir, percorrer os arquivos de fotos com o map e retornar a tag
  const tags = [...new Set(fotos.map((valor) => valor.tag))]

  const filtrarFotos = (tag) => {
    const novasFotos = fotos.filter((foto) => {
      return foto.tag === tag;
    })

    setItens(novasFotos)
  }

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens}/>
      <Cards itens={itens} styles={styles}/>
    </section>
  )
}
