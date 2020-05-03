import React from 'react'
import { Flex, Tag } from '@rsbear/canvas'

const TagExample: React.FC<any> = () => {
  const [activeTags, setActiveTags] = React.useState(["steve zissou"])
  const [suggestedTags, setSuggestedTags] = React.useState([
  "the life aquatic",
  "red beanie",
  "submarine"
  ])

  const onAddTag = (tag: string) => {
    setActiveTags(prev => {
      return [...prev, tag]
    })
  }

  const onRemoveTag = (tag: string) => {
    setSuggestedTags(prev => {
      const filterd = suggestedTags.filter(x => x !== tag)
      return [...prev, filterd]
    })
  }

  return (
    <Flex>
      {activeTags.map((x) => (
        <Tag active={true} text={x} mr={15} />
      ))}
      {suggestedTags.map((x) => (
        <Tag active={false} text={x} key={x} mr={2} />
      ))}
    </Flex>
  )
}

export default TagExample
