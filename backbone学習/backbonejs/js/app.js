(function(){

//model
    
    var Task = Backbone.Model.extend({//「Backbone.Model」を継承した新しいmodelを作成するコンストラクタをTask変数へ代入
        defaults:{
            title: 'do something!',
            completed: false
        }
    });
    
    var task = new Task();//「Backbone.Model」を継承した新しいモデルを作成

//view
    
    var TaskView = Backbone.View.extend({//「Backbone.View」を継承した新しいviewを作成するコンストラクタをTaskView変数へ代入
        tagName: 'li',
        template: _.template( $('#task-template').html() ),
        render: function(){
            var template = this.template( this.model.toJSON() );
            this.$el.html(template);
            return this;
        }
    });
    
    //collection
    var Tasks = Backbone.Collection.extend({//「Backbone.Collection」を継承した新しいcollectionを作成するコンストラクタを作成し、変数TasksViewへ代入
        model: Task//モデルを渡してあげると、このtaskに関するコレクションなんだなというのを認識してくれる
    });
        //collectionに対するviewを作っていく
    var TasksView = Backbone.View.extend({//「Backbone.View」を継承した新しいモデルを作成するコンストラクタをTasksView変数へ代入
        tagName: 'ul',//一つ一つのtaskはliなので、それをまとめるものなので、ulを指定する
        render: function(){//renderをかけて描画をしていく。実際これをインスタンス化する際はtasksをもらうが、それがcollectionで渡ってくるので、this.collectionでOK。eachで一つ一つに対していろいろやっていく。
            this.collection.each(function(task){//引数のtaskを使ってtaskViewを作ればいいので、
                var taskView = new TaskView({model: task});//渡すのはmodelのtaskになる
                this.$el.append(taskView.render().el);//これでできたものをulの子要素に持って行きたいので、this.$elを指定してあげて、appendという風に指定してあげて、taskViewをrenderして入れてあげればOK。
            }, this);//ここで注意しなければいけないのが、ここでのthisはulを指しますので、この時点でコンテキストをthisに設定してあげて下さい。
            return this;//renderした後はreturn thisとすると色々良いので、こういう風にすればOKです。
        }
    });
    var tasks = new Tasks([//tasksインスタンスを作る。今回は３つのtaskを作る
        {
            title: 'task1',
            completed: true//一つだけcompletedにtrueを代入する。
        },
        {
            title: 'task2'
        },
        {
            title: 'task3'
        }
    ]);
//    console.log(tasks.toJSON());
    
    //tasksView（collectionのview）をhtmlにくっつけていく
    var tasksView = new TasksView({collection: tasks});//collectionで渡すのがtasks
    $('#tasks').html(tasksView.render().el);//後でtasksというidの領域を作っておいて、その中のHTMLにtasksViewをレンダーしてあげましょう。
})();