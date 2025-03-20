import React from 'react'
import { Flex, Tag } from '@favish/canvas'

const TagExample: React.FC<any> = () => {
  const [activeTags, setActiveTags] = React.useState(['steve zissou'])
  const [suggestedTags, setSuggestedTags] = React.useState([
    'the life aquatic',
    'red beanie',
    'submarine',
  ])

  const onAddActiveTag = (tag: string) => {
    setActiveTags(prev => {
      return [...prev, tag]
    })
    setSuggestedTags(prev => {
      return prev.filter(x => x !== tag)
    })
  }

  const onRemoveActiveTag = (tag: string) => {
    setActiveTags(prev => {
      return prev.filter(x => x !== tag)
    })
    setSuggestedTags(prev => {
      return [...prev, tag]
    })
  }

  return (
    <Flex flexWrap="wrap">
      {activeTags.map((x: string, i: number) => (
        <Tag
          active={true}
          text={x}
          mr={1}
          onClick={() => onRemoveActiveTag(x)}
          bg="rgba(60,180,230,.1)"
          color="#005FD7"
          hoverColor="rgba(60,180,230,.2)"
          key={i}
        />
      ))}
      {suggestedTags.map((x: string, i: number) => (
        <Tag
          active={false}
          text={x}
          key={i}
          mr={1}
          onClick={() => onAddActiveTag(x)}
        />
      ))}
    </Flex>
  )
}

export default TagExample
