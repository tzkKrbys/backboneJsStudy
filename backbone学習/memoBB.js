コレクションの説明

まずモデルを作る
Model（コンストラクタ）
↓
model（インスタンス）

viewを作る
View（コンストラクタ）

Collectionを作る
Collection（コンストラクタ）この時点でmodelを持たせておく
↓
collection（インスタンス）



コレクションの説明

まずモデルを作る
Task（Modelコンストラクタ）
↓
task（modelインスタンス）

viewを作る
TaskView（Viewコンストラクタ）

Collectionを作る
Tasks（Collectionコンストラクタ）この時点でmodelを持たせておく

コレクションに対するviewを作る
TasksView（コレクションに対するviewインスタンス）
    renderメソッド内で
    TaskViewコンストラクタを使ってtaskView（viewインスタンス）を生成している
    var taskView = new TaskView({ model: task });

tasksコレクションのインスタンスを作る



var Task 
（Modelコンストラクタ）

var task 
（Modelインスタンス）

var TaskView 
（Viewコンストラクタ）

var Tasks 
（Collectionコンストラクタ）{model: Task}

var TasksView 
（Viewコンストラクタ）

    var taskView
    （Viewインスタンス）

var tasks 
（Collectionインスタンス）

var tasksView 
（viewインスタンス）






























