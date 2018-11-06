const styles = {
  header: {
    top: 0,
    width: '100%',
    color: '#fff',
    padding: '1rem',
    /* position: fixed; */
    backgroundColor: '#444',
    gridArea: 'header',
  },
  headerItems: {
    display: 'grid',
    gridTemplateColumns: '33% 66%',
    justifyContent: 'space-between'
  },
  logo: {
    display: 'flex',
    alignItems: 'center'
  },
  logoImg: {
    maxWidth: '200px',
  },
  title : {
    fontSize: '1.5em',
  }
};

export default styles;