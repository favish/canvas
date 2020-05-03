import React from 'react'
import { Flex, Tag } from '@rsbear/canvas'

const TagExample: React.FC<any> = () => {
  const [activeTags, setActiveTags] = React.useState(["steve zissou"])
  const [suggestedTags, setSuggestedTags] = React.useState([
  "the life aquatic",
  "red beanie",
  "submarine"
  ])

  const onAddActiveTag = (tag: string) => {
    console.log(tag)
    setActiveTags(prev => {
      return [...prev, tag]
    })
    setSuggestedTags(prev => {
      const filtered = prev.filter(x => x !== tag)
      return [...prev, ...filtered]
    })
  }

  const onRemoveActiveTag = (tag) => {
    setActiveTags(prev => {
      const filtered = prev.filter(x => x !== tag)
      return [...prev, ...filtered]
    })
    setSuggestedTags(prev => {
      return [...prev, tag]
    })
  }

  return (
    <Flex>
      {activeTags.map((x) => (
        <Tag active={true} text={x} mr={15} onClick={() => onRemoveActiveTag(x)} />
      ))}
      {suggestedTags.map((x) => (
        <Tag active={false} text={x} key={x} mr={2} onClick={() => onAddActiveTag(x)} />
      ))}
    </Flex>
  )
}

export default TagExample
