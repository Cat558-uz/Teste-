fetch("https://sua-api.repl.co/api/youtube?q=lofi")
  .then(res => res.json())
  .then(data => {
    console.log(data.results); // exibe os vídeos
  });
