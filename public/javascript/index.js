  /**
   * You might want to use this template to display each new characters
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template#examples
   */
  const characterTemplate = document.getElementById('template')
  const characterAPI = axios.create({
    baseURL: 'http://localhost:5005/api/characters/',
  })
  const myUrl = 'http://localhost:5005/api/'

  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    try {
      const { data } = await axios.get(`${myUrl}characters`) 
      for (const char of data) {
        console.log(char)
        return char
        // fetchChar(char)
      }
    } catch (error) {
      next(error)
    }
  })


  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });

