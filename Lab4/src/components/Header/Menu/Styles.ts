const styles = {
    menu: {
      display: 'flex',
      justifyContent: 'flex-end',
      color: '#fff',
      paddingRight: '1rem'
    },
    menuItem : {
      padding: '1rem',
      '@media (max-width: 520px)': {
        padding: '.625rem',
        fontSize: '.85rem;',
      }
    },
    menuLink: {
      color: '#fff',
      textDecoration: 'none',
    }
  };
  
  export default styles;