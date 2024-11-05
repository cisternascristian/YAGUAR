import '@mdxeditor/editor/style.css'
import { MDXEditor, UndoRedo, BoldItalicUnderlineToggles,  toolbarPlugin, CreateLink, CodeToggle, imagePlugin, InsertImage, thematicBreakPlugin, InsertThematicBreak, InsertTable, tablePlugin, ListsToggle, listsPlugin, BlockTypeSelect, Button, headingsPlugin, DiffSourceToggleWrapper, diffSourcePlugin, quotePlugin, markdownShortcutPlugin, linkPlugin  } from '@mdxeditor/editor'
import { Separator } from '@radix-ui/react-select'
import * as React from "react"
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Editor = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <MDXEditor
              markdown="Escribir acá"
              plugins={[headingsPlugin(), imagePlugin(), thematicBreakPlugin(), tablePlugin(), listsPlugin(), diffSourcePlugin({ diffMarkdown: '', viewMode: 'rich-text'}), quotePlugin(), markdownShortcutPlugin(), linkPlugin(),
                toolbarPlugin( {
                  toolbarContents: () => (
                    <>
                      {''}
                      <DiffSourceToggleWrapper>
                      <UndoRedo />
                      <Separator />
                      <BoldItalicUnderlineToggles />
                      <CodeToggle />
                      <Separator />
                      <ListsToggle />
                      <BlockTypeSelect />
                      <CreateLink />
                      <InsertImage />
                      <Separator />
                      <InsertTable />
                      <InsertThematicBreak />
                      <Separator />
                      </DiffSourceToggleWrapper>
                      
                    </>
                  )
                })
              ]}
            />
          )
    }
  )
  Editor.displayName = "Textarea"
  
  export { Editor }