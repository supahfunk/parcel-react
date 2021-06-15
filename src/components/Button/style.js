const style = () => {
  const output = {
    root: {
      position: 'relative',
      zIndex: 1,
      border: 'none',
      outline: 'none',
      borderRadius: 10,
      padding: [5, 15],
      cursor: 'pointer',
      backgroundColor: (props) => props.background,
      color: (props) => props.color,
      transition: 'all .3s ease-in-out',

      '&:hover': {
        backgroundColor: (props) => props.color,
        color: (props) => props.background,
      },
    },
  }

  return output
}

export default style
