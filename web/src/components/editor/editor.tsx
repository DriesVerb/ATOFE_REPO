import { Editor, EditorContent, JSONContent, useEditor } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { Btn } from '#/elements'
import { useState } from 'react'

import styles from './editor.module.css'

interface EditorProps {
  story: JSONContent[] | string
}

export const EditorComponent = (props: EditorProps) => {
  const { story } = props

  const [content, setContent] = useState<JSONContent[] | string | undefined>(
    story
  )
  const [html, setHtml] = useState<string | TrustedHTML>(
    ""
  )
  const editor = useEditor({
    extensions: [Document, Paragraph, Text],
    content,
  })

  const json = editor?.getJSON()

  const handleSave = () => {
    setContent(json?.content)
    setHtml(editor?.getHTML() as TrustedHTML)
    console.log(typeof json?.content, json)
  }



  return (
    <article>
      <Btn.Basic text="Save Story" onClick={() => handleSave()} />
      <EditorContent className={styles.tiptap} editor={editor} />
      <div dangerouslySetInnerHTML={{__html: html}} />
    </article>
  )
}
