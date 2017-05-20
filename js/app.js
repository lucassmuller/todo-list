var app = angular.module("app", ['ngStorage']);

app.controller('ToDoListCtrl', ['$scope', '$localStorage', function(s, storage){
	if(angular.isUndefined(storage.tarefas))
		storage.tarefas = [];
	
	s.storage = storage;
	s.doneTodos = function() { return storage.tarefas.filter(obj=>obj.done).length; };
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
}]);