import { EditorContent, JSONContent, useEditor } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { Btn } from '#/elements'
import { useState } from 'react'

import styles from './editor.module.css'

interface EditorProps {
  story: JSONContent[] | string
}

export const Editor = (props: EditorProps) => {
  const { story } = props

  const [content, setContent] = useState<JSONContent[] | string | undefined>(
    story
  )
  const editor = useEditor({
    extensions: [Document, Paragraph, Text],
    content,
  })
  


  const json = editor?.getJSON()

  const handleSave = () => {
    setContent(json?.content)
    console.log(typeof json?.content, json)
  }

  console.log("content: ", content)

  return (
    <article>
      <Btn.Basic text="Save Story" onClick={() => handleSave()} />
      <EditorContent className={styles.tiptap} editor={editor} />
    </article>
  )
}
