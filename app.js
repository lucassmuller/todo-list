var app = angular.module("app", ['ngStorage']);

// app.run(function(){
// 	//alert("Hello!");
// });

app.controller('ToDoListCtrl', function($scope, $localStorage, $sessionStorage){
	var storage = $localStorage;
	var s = $scope;
	
	if(typeof storage.tarefas === "undefined" || storage.tarefas === null || storage.tarefas.length === 0)
		storage.tarefas = [
			{nome:"Tomar café", done:true}, 
			{nome:"Comer bis", done:false},
			{nome:"Fazer tema de casa", done:false}
		];
	
	s.storage = storage;
	s.done = function(){ return storage.tarefas.filter(obj=>obj.done).length; };
	s.adicionarTarefa = function(tarefa) {
		storage.tarefas.push({nome:tarefa.nome, done:false});
		s.novaTarefa = null;
	};
	s.removerTarefa = function(index) {
		if(confirm("Tem certeza que quer remover esta tarefa?") === true)
			storage.tarefas.splice(index, 1);
	};
	s.limparTarefas = function() {
		if(confirm("Tem certeza que quer remover todas as tarefas?") === true)
			storage.tarefas = [];
	}
});