import Sketch from '@uiw/react-color-sketch'

interface ColorPickerProps {
  onPick: (color: string) => void
}

export const ColorPicker = (props: ColorPickerProps) => {
  const { onPick } = props

  return (
    <div>
      <Sketch
        style={{ marginLeft: 20 }}
        onChange={(color) => {
          onPick(color.hex)
        }}
      />
    </div>
  )
}
