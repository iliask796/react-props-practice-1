import { useState } from 'react'

import { reverse } from './helpers'
import './styles.css'

import Title from './Title'
import NameLength from './NameLength'
import NameReversed from './NameReversed'

export default function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <Title name={name} />
      <NameLength name={name} />
      <NameReversed name={name} reverse={reverse} />
    </div>
  )
}
