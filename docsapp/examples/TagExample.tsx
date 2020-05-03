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
