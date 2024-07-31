import app from './app';

(async () => {
try {
    const port = parseInt(`${process.env.PORT}`);

    app.listen(port, () => {
        console.log("API: jalileiturabiblicaapi sendo executada na porta " + port);        
    });    
} catch (error) {
    console.error("Não foi executar a API: jalileiturabiblicaapi. Contate o admin: " + error);
}
})();