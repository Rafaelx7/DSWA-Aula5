var cursos = [
    {_id: 1, nome: 'Fabio Teixeira', coordenador: 'fabio.teixeira@ifsp.edu.br'},
    {_id: 2, nome: 'Fabiano Teixeira', coordenador: 'fabiano.teixeira@ifsp.edu.br'},
    {_id: 3, nome: 'Melissa Teixeira', coordenador: 'melissa.teixeira@ifsp.edu.br'} 
   ]
   
   module.exports = function(){
       var controller = {};
       controller.listaCursos = function(req, res){
           res.json(cursos);
       };
       controller.obtemContato = function(req, res) {
           console.log('Selecionou o curso: ' + req.params.id);
           var idCurso = req.params.id;
           var curso = cursos.filter(function(curso){
               return curso._id == idCurso;
           })[0];
           curso ? res.json(curso) : res.status(404).send('Curso não encontrado!');
       };
       return controller;
   };