import { useRef } from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

function Button({ background, color, children }) {
  const classes = useStyles({ background, color })
  const $root = useRef()

  return (
    <button
      className={classNames({
        [classes.root]: true,
        [classes.btn]: true,
      })}
      ref={$root}
    >
      {children}
    </button>
  )
}

export default Button
